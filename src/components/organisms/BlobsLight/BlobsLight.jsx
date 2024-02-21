import React from 'react';

export const BlobsLight = ({ className }) => {
  return (
    <div className={className}>
      <div className="absolute w-[104%] h-[104%] animate-transform bg-transparent border-4 border-purple-ultraDark blur-md" />
      <div className="absolute w-[92%] h-[92%] animate-transform bg-transparent border border-purple" />
      <div className="absolute w-[104%] h-[104%] animate-transform3s bg-transparent border border-purple" />
      <div className="absolute w-[112%] h-[112%] animate-transform5s bg-transparent border border-purple" />
      <div className="absolute w-[124%] h-[124%] animate-transform8s bg-transparent border-2 border-purple-light" />
      <div className="absolute w-[80%] h-[80%] animate-transform8s bg-transparent border-2 border-purple-light" />
    </div>
  );
};
