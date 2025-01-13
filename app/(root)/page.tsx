import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";
import { StartupCardType } from "@/lib/interfaces";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";

export default async function Home({ searchParams }: { searchParams: Promise<{ query: string }> }) {
  const query = (await searchParams).query;
  const params = { search: query || null };

  const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY, params })

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Pitch Your Startup, Connect With Entrepreneurs</h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches and Get Noticed in Virual Competitions.
        </p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? (
            <span>
              Showing results for <span className="text-primary">{query}</span>
            </span>
          ) : (
            <span>
              All Startups
            </span>
          )}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? posts.map((post: StartupCardType) => {
            return (
              <StartupCard key={post?._id} post={post} />

            )
          }) : <p className="no-results">No startups found</p>}
        </ul>
      </section>

      <SanityLive />
    </>
  );
}
