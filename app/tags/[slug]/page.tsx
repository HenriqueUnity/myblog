import Header from "@/components/Header";

export default async function Tag({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  return (
    <div className="px-10 md:px-40 bg-slate-800 text-white min-h-screen">
      <Header />
      <div className="mt-12 w-full flex flex-col sm:flex-wrap space-x-4 space-y-5 justify-center">
        postcards
      </div>
    </div>
  );
}
