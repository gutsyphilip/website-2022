import path from "path";
import fs from "fs/promises";
import parseFrontMatter from "front-matter";
import invariant from "tiny-invariant";
import { marked } from "marked";



export type Post = {
  slug: string;
  title: string;
};

export type PostMarkdownAttributes = {
  title: string;
};

function isValidPostAttributes(
  attributes: any
): attributes is PostMarkdownAttributes {
  return attributes?.title;
}


export async function getPostsFromRoute(route:string, sortBy?:string) {
    const postsPath= path.join(__dirname, `../app/routes/${route}`);
  const dir = await fs.readdir(postsPath);

  const posts = Promise.all(
      dir.filter(filename=>filename.endsWith('.mdx')).map(async filename => {
          const file = await fs.readFile(path.join(postsPath, filename));
          const { attributes } = parseFrontMatter(file .toString());
          invariant(isValidPostAttributes(attributes));
          return {
              slug: `/${route}/${filename.replace(/\.mdx$/, "")}`,
              ...attributes
          };
      })
  );

  return posts
}