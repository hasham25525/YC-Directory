import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";
import { StartupCardType } from "@/lib/interfaces";


export default async function Home({ searchParams }: { searchParams: Promise<{ query: string }> }) {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: 'Hasham' },
      _id: 1,
      description: "This is description",
      image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      category: "Robots",
      title: "Startup 1",
    }
  ]
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
          {posts?.length > 0 ? posts.map((post: StartupCardType, index: number) => {
            return (
              <StartupCard key={post?._id} post={post} />

            )
          }) : <p className="no-results">No startups found</p>}
        </ul>
      </section>
    </>
  );
}
