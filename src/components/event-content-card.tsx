import React from 'react';

interface EventContentCardProps {
  title: string;
  des: string;
  name: string;
  position: string;
  panel: string;
  img: string;
}

export function EventContentCard({
  title,
  des,
  name,
  position,
  panel,
  img,
}: EventContentCardProps) {
  return (
    <div className="bg-transparent shadow-none lg:flex lg:items-end mb-10">
      <div className="h-[32rem] max-w-[28rem] shrink-0 rounded-lg overflow-hidden">
        <img
          width={768}
          height={768}
          src={img}
          alt="testimonial image"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="col-span-full lg:col-span-3 p-6">
        <h6 className="mb-4 text-blue-gray-600 text-lg font-semibold">
          {panel}
        </h6>
        <h2 className="mb-4 font-medium text-blue-gray-800 text-3xl">
          {title}
        </h2>
        <p className="mb-12 md:w-8/12 font-medium text-gray-500 text-lg">
          {des}
        </p>
        <div className="flex items-center gap-4">
          <img
            src="/logos/spotify-logo.png"
            alt="spotify"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h6 className="mb-0.5 text-blue-gray-800 text-lg font-semibold">
              {name}
            </h6>
            <p className="font-normal text-gray-500 text-sm">
              {position}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventContentCard;