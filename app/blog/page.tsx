import PostCard, { IPost } from "@/components/PostCard";
import Header from "@/components/Header";
import { getPosts } from "@/actions/getPost";

export default async function Blog() {
  const SamplePost = {
    slug: "welcome-short",
    id: "5ddc9141c35e7700383b2937",
    title: "Welcome",
    html: "<p>👋 Welcome, it's great to have you here.</p>",
    feature_image:
      "https://static.ghost.org/v3.0.0/images/welcome-to-ghost.png",
    feature_image_alt: "",
    updated_at: "2019-11-26T02:44:17.000+00:00",
    published_at: "2019-11-26T02:44:17.000+00:00",
    reading_time: 1,
    excerpt:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit a non quam quasi, maxime adipisci ipsam veritatis numquam doloribus, eum facere dolorem quaerat voluptas eligendi sed incidunt sunt reprehenderit quas.",
    tags: [
      {
        id: "59799bbd6ebb2f00243a33db",
        name: "PS2",
        slug: "PS2",
      },
    ],
  };
  const posts: IPost[] = await getPosts();
  return (
    <div className="px-10 md:px-40 bg-slate-800 text-white min-h-screen">
      <Header />
      <div className="mt-12 pb-12 w-full flex flex-col sm:flex-row flex-wrap space-x-4 space-y-5 justify-center pb-10">
        <div className="hidden">
          <PostCard data={SamplePost} />
        </div>

        {posts.map((post, idx) => (
          <PostCard key={idx} data={post} />
        ))}
      </div>
    </div>
  );
}
