import Image from "next/image";

import SearchForm from "@/components/SearchForm";
import Link from "next/link";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";

import { sanityFetch } from "@/sanity/lib/live";
import { Project } from "@/sanity/types";
export default async function PortfolioPage({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  // const data = await client.fetch(STARTUPS_QUERY);
  const params = { search: query || null };

  const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY, params });

  console.log(posts);
  console.log(JSON.stringify(posts, null, 2));

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">My Portfolio</h2>

      <div className="flex flex-col mb-6 gap-4">
        {/* <Input
          type="text"
          placeholder="Search projects..."
          className="max-w-md"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        /> */}
        <SearchForm query={query} />
        {/* <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div> */}
      </div>
      <h1 className="text-xl pb-6">
        {query ? `Search results for "${query}"` : "All Projects"}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((project: Project) => (
          <Link
            href={"/fggf"}
            key={project._id}
            className="bg-[#2a2a2a] rounded-lg overflow-hidden"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project._id}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 ease-in-out transform hover:scale-110"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400">{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
