"use client";

import { useState } from 'react';

const filters = [
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'face', label: 'Face', checked: false },
      { value: 'eyes', label: 'Eyes', checked: false },
      { value: 'lips', label: 'Lips', checked: false },
    ],
  },
  {
    id: 'concern',
    name: 'Concern',
    options: [
      { value: 'anti-aging', label: 'Anti-aging', checked: false },
      { value: 'hydration', label: 'Hydration', checked: false },
      { value: 'brightening', label: 'Brightening', checked: false },
    ],
  },
  {
    id: 'price',
    name: 'Price',
    options: [
      { value: 'under-25', label: 'Under $25', checked: false },
      { value: '25-50', label: '$25 to $50', checked: false },
      { value: 'over-50', label: 'Over $50', checked: false },
    ],
  },
];

export default function ProductFilters() {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const toggleFilter = (value: string) => {
    setActiveFilters(current =>
      current.includes(value)
        ? current.filter(v => v !== value)
        : [...current, value]
    );
  };

  return (
    <div className="hidden lg:block">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Filters</h2>
      <div className="space-y-6">
        {filters.map((filter) => (
          <div key={filter.id}>
            <h3 className="text-sm font-medium text-gray-900 mb-2">{filter.name}</h3>
            <div className="space-y-2">
              {filter.options.map((option) => (
                <div key={option.value} className="flex items-center">
                  <input
                    id={option.value}
                    type="checkbox"
                    checked={activeFilters.includes(option.value)}
                    onChange={() => toggleFilter(option.value)}
                    className="h-4 w-4 rounded border-gray-300 text-pink-600 focus:ring-pink-500"
                  />
                  <label
                    htmlFor={option.value}
                    className="ml-3 text-sm text-gray-600"
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}