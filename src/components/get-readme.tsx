import { convertMarkdownToHtml } from "./markdown-parser";

interface GetRepoREADME {
  repo: string;
  owner: string;
}

export async function getGithubREADME({ repo, owner }: GetRepoREADME) {
  try {
    const response = await fetch(
      `https://raw.githubusercontent.com/${owner}/${repo}/main/README.md`
    );
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const text = await response.text();
    if (!text) {
      throw new Error("no parsable readme");
    }
    const output_html = convertMarkdownToHtml(text, {
      githubRepo: {
        username: owner,
        repo: repo
      }
    });
    return output_html;
  } catch (error) {
    console.log(" === error === ", error);
    return;
  }
}