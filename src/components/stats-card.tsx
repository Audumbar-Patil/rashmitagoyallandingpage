import React from 'react';

interface StatsCardProps {
  count: string;
  title: string;
}

export function StatsCard({ count, title }: StatsCardProps) {
  return (
    <div className="bg-transparent shadow-none">
      <h1 className="font-bold text-4xl text-blue-gray-800">
        {count}
      </h1>
      <h6 className="mt-1 font-medium text-blue-gray-800 text-lg">
        {title}
      </h6>
    </div>
  );
}

export default StatsCard;