import Header from "@/components/Header";

export default async function tag({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  return (
    <div className="px-10 md:px-40 bg-slate-800 text-white min-h-screen">
      <Header />
    </div>
  );
}
