import showdown from 'showdown';
import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark.css';

interface ParseOptions {
  githubRepo?: {
    username: string;
    repo: string;
  };
}

export function convertMarkdownToHtml(markdown: string, options?: ParseOptions): string {
    showdown.extension("highlight", function () {
        function htmlunencode(text: string): string {
            return text
                .replace(/&amp;/g, "&")
                .replace(/&lt;/g, "<")
                .replace(/&gt;/g, ">");
        }
        return [
            {
                type: "output",
                filter: function (text: string, converter: any, options: any): string {
                    var left = "<pre><code\\b[^>]*>",
                        right = "</code></pre>",
                        flags = "g";
                    var replacement = function (
                        wholeMatch: string,
                        match: string,
                        left: string,
                        right: string,
                    ): string {
                        match = htmlunencode(match);
                        var lang = (left.match(/class=\"([^ \"]+)/) || [])[1];
                        left = left.slice(0, 18) + "hljs " + left.slice(18);
                        if (lang && hljs.getLanguage(lang)) {
                            return (
                                left + hljs.highlight(match, { language: lang }).value + right
                            );
                        } else {
                            return left + hljs.highlightAuto(match).value + right;
                        }
                    };
                    return showdown.helper.replaceRecursiveRegExp(
                        text,
                        replacement,
                        left,
                        right,
                        flags,
                    );
                },
            },
        ];
    });

    // Helper function to convert relative paths to absolute GitHub URLs
    function convertToGithubUrl(relativePath: string): string {
        if (!options?.githubRepo) return relativePath;
        const { username, repo } = options.githubRepo;
        
        // Remove leading slash if present
        const cleanPath = relativePath.replace(/^\//, '');
        
        return `https://raw.githubusercontent.com/${username}/${repo}/main/${cleanPath}`;
    }

    showdown.extension("fixImages", function() {
        return [{
            type: "lang",
            filter: function(text: string) {
                // Handle markdown image syntax
                return text.replace(
                    /!\[(.*?)\]\(([^)]+)\)/g,
                    (match, alt, src) => {
                        // Only convert if it's not already an absolute URL
                        if (!src.startsWith('http')) {
                            const absoluteUrl = convertToGithubUrl(src);
                            return `![${alt}](${absoluteUrl})`;
                        }
                        return match;
                    }
                );
            }
        }, {
            type: "output",
            filter: function(text: string) {
                // Handle any remaining relative paths in HTML img tags
                text = text.replace(
                    /<img([^>]*)src=["'](?!http)([^"']+)["']/g,
                    (match, attrs, src) => {
                        const absoluteUrl = convertToGithubUrl(src);
                        return `<img${attrs}src="${absoluteUrl}"`;
                    }
                );

                // Add loading="lazy" and other attributes
                return text.replace(
                    /<img([^>]*)>/g,
                    '<img$1 loading="lazy" class="rounded-lg shadow-lg" style="max-width: 100%; height: auto;" onerror="this.onerror=null; this.style.display=\'none\'"/>'
                );
            }
        }];
    });

    let converter = new showdown.Converter({
        ghCompatibleHeaderId: true,
        simpleLineBreaks: true,
        ghMentions: true,
        extensions: ['highlight', 'fixImages'],
        tables: true,
        strikethrough: true,
        tasklists: true,
        smoothLivePreview: true,
        parseImgDimensions: true,
        omitExtraWLInCodeBlocks: true,
        encodeEmails: true,
    });

    // Pre-process markdown to handle image paths
    if (options?.githubRepo) {
        markdown = markdown.replace(
            /!\[([^\]]*)\]\((?!http)([^)]+)\)/g,
            (match, alt, src) => {
                const absoluteUrl = convertToGithubUrl(src);
                return `![${alt}](${absoluteUrl})`;
            }
        );
    }

    return converter.makeHtml(markdown);
}