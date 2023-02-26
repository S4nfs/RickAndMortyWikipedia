import React from 'react';
import { BsFillGeoAltFill, BsFillPeopleFill, BsFillPinMapFill } from 'react-icons/bs';
import { GiMagicPortal } from 'react-icons/gi';
import { Error, Loader } from '../components';
import { useGetLocQuery } from '../redux/services/coreService';

const Location = ({ id, origin }) => {
  const { data: locData, isFetching: isFetchingLocationDetails, error: err } = useGetLocQuery(id);
  if (isFetchingLocationDetails) return <Loader title="Fetching locations..." />;
  if (err) return <Error title="Location Not Found" />;

  return (

    <div className="relative flex flex-col items-center">
      <p className="flex flex-row text-base text-gray-400 font-normal"><BsFillGeoAltFill className="mt-1 mr-2" />Location - {locData?.name}</p>
      <p className="flex flex-row text-base text-gray-400 font-normal"><BsFillPinMapFill className="mt-1 mr-2" />Origin - {origin}</p>
      <p className="flex flex-row text-base text-gray-400 font-normal"><GiMagicPortal className="mt-1 mr-2" />Dimension - {locData?.dimension} </p>
      <p className="flex flex-row text-base text-gray-400 font-normal"><BsFillPeopleFill className="mt-1 mr-2" />Residents - {locData?.residents.length + 1} </p>
    </div>

  );
};

export default Location;
