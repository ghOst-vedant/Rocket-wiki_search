import Item from "@/components/Item";
import getResults from "@/gets/getResults";
import { title } from "process";

type Props = {
  params: {
    searchTerm: string;
  };
};
export async function generateMetadata({ params: { searchTerm } }: Props) {
  const result: Promise<SearchResult> = getResults(searchTerm);
  const data = await result;
  const display = searchTerm.replaceAll("%20", " ");
  if (!data?.query?.pages) {
    return {
      title: `${display} not found`,
    };
  }
  return {
    title: display,
    description: `Search Results for ${display}`,
  };
}
export default async function SearchResults({ params: { searchTerm } }: Props) {
  const result: Promise<SearchResult> = getResults(searchTerm);
  const data = await result;

  const results: Result[] | undefined = data?.query?.pages;
  const content = (
    <main className="bg-white dark:bg-black  mx-auto p-8  min-h-screen overflow-hidden flex flex-col">
      {results ? (
        Object.values(results).map((result) => {
          return <Item key={result.pageid} result={result} />;
        })
      ) : (
        <h2 className=" text-xl p-2">{`${searchTerm} not found`}</h2>
      )}
    </main>
  );
  return content;
}
