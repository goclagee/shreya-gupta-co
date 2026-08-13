'use client';

import React from 'react';
import ServiceCard from '@/components/services/ServiceCard';
import { Service } from '@/lib/constants';

interface ServiceCategoryProps {
  categoryName: string;
  services: Service[];
  startIndex: number;
}

const ServiceCategory: React.FC<ServiceCategoryProps> = ({
  categoryName,
  services,
  startIndex,
}) => {
  return (
    <div>
      {/* Category heading with subtle gold underline */}
      <div className="mb-8">
        <h3 className="font-heading text-2xl text-primary font-semibold mb-2">
          {categoryName}
        </h3>
        <div className="w-16 h-0.5 bg-secondary/60 rounded-full" />
      </div>

      {/* Responsive service cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, idx) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            illustrationKey={service.illustrationKey}
            category={service.category}
            index={startIndex + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceCategory;
