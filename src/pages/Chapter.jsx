import React from 'react';
import { Error, Loader } from '../components';
import { useGetChapterQuery } from '../redux/services/coreService';

const Chapter = ({ chapterId }) => {
  const { data: episodes, isFetching: isFetchingChaptersDetails, error: errChap } = useGetChapterQuery(chapterId);
  if (isFetchingChaptersDetails) return <Loader title="Fetching Episodes..." />;
  if (errChap) return <Error />;

  return (

    <li className="text-base text-gray-400 font-normal">-- {episodes?.name}</li>

  );
};

export default Chapter;
