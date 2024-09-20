import Header from "@/components/Header";
import Link from "next/link";

export default async function tags() {
  const sampleTags = [
    { id: "dadsa", name: "getting-started", slug: "getting-started" },
    { id: "dadsa", name: "PS2", slug: "PS2" },
    { id: "dadsa", name: "PC", slug: "PC" },
  ];
  return (
    <div className="px-10 md:px-40 bg-slate-800 text-white min-h-screen">
      <Header />
      {sampleTags ? (
        <div className="flex flex-wrap space-x-5 mt-10">
          {sampleTags.map((tag, idx) => (
            <Link
              key={idx}
              href={`/tags/${tag.slug}`}
              className="px-10 py-4 font-semibold text-x1 border rounded-lg"
            >
              {tag.name}
            </Link>
          ))}
        </div>
      ) : (
        <div>no tags yet</div>
      )}
    </div>
  );
}
