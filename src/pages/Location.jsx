import React from 'react';
import { BsFillGeoAltFill, BsFillPeopleFill } from 'react-icons/bs';
import { GiMagicPortal } from 'react-icons/gi';
import { Error, Loader } from '../components';
import { useGetLocQuery } from '../redux/services/coreService';

const Location = ({ id }) => {
  const { data: locData, isFetching: isFetchingLocationDetails, error: err } = useGetLocQuery(id);
  if (isFetchingLocationDetails) return <Loader title="Fetching locations..." />;
  if (err) return <Error />;

  return (

    <div className="relative flex flex-col items-center">
      <p className="flex flex-row t text-base text-gray-400 font-normal"><BsFillGeoAltFill className="mt-1 mr-2" /> Planet Name - {locData?.name} </p>
      <p className="flex flex-row t text-base text-gray-400 font-normal"><GiMagicPortal className="mt-1 mr-2" /> Dimension - {locData?.dimension} </p>
      <p className="flex flex-row text-base text-gray-400 font-normal"><BsFillPeopleFill className="mt-1 mr-2" /> Residents - {locData?.residents.length + 1} </p>
    </div>

  );
};

export default Location;
