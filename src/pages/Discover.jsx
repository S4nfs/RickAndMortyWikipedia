import { useEffect, useState } from 'react';
import { Error, Loader } from '../components';
import { useGetAllCharactersQuery } from '../redux/services/coreService';
import Chapter from './Chapter';
import Location from './Location';

const Discover = () => {
  const [page, setPage] = useState(1);
  const { data, isFetching, error } = useGetAllCharactersQuery(page);

  const dataFetched = data?.results ?? [];

  useEffect(() => {
    if (error) <Error title="Something went wrong" />;
    if (isFetching) <Loader title="Crunching all characters..." />;

    // console.log(window.innerHeight, document.body.offsetHeight, window.scrollY);

    const onScroll = () => {
      const scrolledToBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
      if (scrolledToBottom && !isFetching) { // if reach bottom == true
        setPage(page + 1);
      }
    };
    // when the component successful rendered, adding scroll event
    document.addEventListener('scroll', onScroll);
    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, [page, isFetching]);

  return (
    <div>
      <div className="text-center pb-12">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-white">
          Rick & Morty Wiki
        </h1>
        <h2 className="text-base font-bold text-indigo-600 mt-5 italic">
          About {data?.info?.count} results:
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dataFetched?.map((result) => (
          <div key={result.id} className="w-full bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
            <div className="mb-3">
              <img className="object-center object-cover rounded-full h-36 w-36" src={result?.image} alt="charater image" />
            </div>
            <div className="text-center h-[290px]">
              <p className="text-xl text-white font-bold mb-2">{result?.name} </p>
              <div className="relative flex flex-row items-center justify-center">
                <span className={`flex flex-start w-4 h-4 rounded-full border-white mt-1 mr-2 border-none ${result?.status === 'Alive' ? 'bg-green-500 ' : result?.status === 'Dead' ? 'bg-red-500 ' : 'bg-gray-500 '}`} />
                <p className="text-base text-gray-400 font-normal">{result?.status} - {result?.species} -  {result?.gender} </p>
              </div>
              <Location id={result.id} />
              <div className="relative flex flex-col items-center">
                <h3 className="text-[#fcd34d] font-bold mt-2">Chapters: </h3>
                <ul className="list-disc whitespace-nowrap overflow-y-auto overflow-x-hidden scrollbar-hide h-32 mt-2 text-white">
                  {result?.episode.map((ep) => (<Chapter chapterId={ep.split('/')[5]} />))}
                </ul>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discover;
