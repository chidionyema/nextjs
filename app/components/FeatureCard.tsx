// components/FeatureCard.tsx
import React from 'react';
import Link from 'next/link';

interface FeatureCardProps {
  link: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ link, title, description }) => {
  return (
    <Link href={link}>
      <a className="group rounded-lg border border-gray-500 px-5 py-4 transition-colors hover:border-blue-500 hover:bg-gray-800">
        <h2 className="mb-3 text-2xl font-semibold">
          {title}
          <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
        </h2>
        <p className="m-0 text-sm">
          {description}
        </p>
      </a>
    </Link>
  );
};

export default FeatureCard;
