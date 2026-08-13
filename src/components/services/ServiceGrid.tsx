'use client';

import React from 'react';
import { services, serviceCategories } from '@/lib/constants';
import ServiceCategory from '@/components/services/ServiceCategory';
import ScrollReveal from '@/components/ui/ScrollReveal';

const ServiceGrid: React.FC = () => {
  // Group services by category
  const groupedServices = serviceCategories.map((category) => ({
    category,
    items: services.filter((service) => service.category === category),
  }));

  // Calculate running start index for stagger delays across categories
  let runningIndex = 0;

  return (
    <div>
      {groupedServices.map((group) => {
        const startIndex = runningIndex;
        runningIndex += group.items.length;

        return (
          <ScrollReveal key={group.category} direction="up" delay={0.1}>
            <div className="mb-16 last:mb-0">
              <ServiceCategory
                categoryName={group.category}
                services={group.items}
                startIndex={startIndex}
              />
            </div>
          </ScrollReveal>
        );
      })}
    </div>
  );
};

export default ServiceGrid;
