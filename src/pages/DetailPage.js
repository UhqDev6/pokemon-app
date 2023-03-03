/* eslint-disable max-len */
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import SpinnerLoading from '../components/atoms/SpinnerLoading';

function DetailPage() {
  const { id } = useParams();
  const [isLoading, setIsloading] = useState(false);
  return (
    <div className="p-5 flex w-full mx-auto justify-center sm:justify-start">
      <div className="flex flex-wrap gap-5 justify-center">
        {
          isLoading ? (
            <SpinnerLoading />
          ) : (
            <p>{id}</p>
          )
        }
      </div>
    </div>
  );
}

export default DetailPage;
