import showdown from 'showdown';
import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark.css';

export function convertMarkdownToHtml(markdown: string): string {
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

    showdown.extension("fixImages", function() {
        return [{
            type: "output",
            filter: function(text: string) {
                // Add loading="lazy" and class to all images
                return text.replace(
                    /<img([^>]*)>/g,
                    '<img$1 loading="lazy" class="rounded-lg shadow-lg" style="max-width: 100%; height: auto;" onerror="this.style.display=\'none\'"/>'
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

    return converter.makeHtml(markdown);
}