"use server";

import { IPost } from "@/components/PostCard";

export async function getPostsByTag(tagSlug: string) {
  let posts;
  const fields =
    "slug,title,feature_image,feature_image_alt,published_at,excerpt,reading_time";
  //https://demo.ghost.io/ghost/api/content/posts/?key=22444f78447824223cefc48062&include=tags,authors

  const postUrl = `${process.env.GHOST_API_URL}/ghost/api/content/posts/?key=${process.env.GHOST_CONTENT_API_KEY}*include=tags,authors&order=published_at%20desc&fields=${fields}&filter=tag:${tagSlug}`;

  const postResponse = await fetch(postUrl).then(async function (res) {
    const status = res.status;
    const data = await res.json();
    return { data, status };
  });
  if (postResponse.status != 200) {
    console.log(postResponse.data.errors);
    return [];
  }
  posts = postResponse.data.posts;

  if (posts == undefined) posts = [];

  posts.map(
    (post: IPost) => (
      (post.published_at = post.published_at.split("T")[0]),
      (post.published_at = post.published_at.split("T")[0])
    )
  );
  return posts;
}
