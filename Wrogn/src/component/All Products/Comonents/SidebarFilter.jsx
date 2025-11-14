import React from 'react';

const SidebarFilter = () => {
  const categories = [
    { name: 'Athleisure', count: 5 },
    { name: 'Briefs', count: 23 },
    { name: 'Caps', count: 6 },
    { name: 'Cargos', count: 23 },
    { name: 'Jackets', count: 9 }
  ];

  const colors = [
    { name: 'Beige', count: 46, colorCode: '#F5F5DC' },
    { name: 'Black', count: 131, colorCode: '#000000' }
  ];

  return (
    <div className="h-[calc(100vh-100px)] sticky top-[100px] overflow-y-auto pr-4">
      <h1 className="text-2xl font-bold mb-4">VIEW ALL</h1>

      <h2 className="text-lg font-bold mb-2">Filters</h2>
      <hr className="mb-4" />

      <div className="mb-6">
        <h3 className="text-base font-semibold mb-2">Category</h3>
        {categories.map((cat, index) => (
          <label key={index} className="flex items-center gap-2 mb-2 cursor-pointer">
            <input type="checkbox" />
            <span className="text-sm text-gray-700">{cat.name} ({cat.count})</span>
          </label>
        ))}
        <p className="text-sm text-red-500 mt-1 cursor-pointer">Show more</p>
      </div>

      <div>
        <h3 className="text-base font-semibold mb-2">Color</h3>
        {colors.map((clr, index) => (
          <label key={index} className="flex items-center gap-2 mb-2 cursor-pointer">
            <span
              className="w-4 h-4 rounded-full border"
              style={{ backgroundColor: clr.colorCode }}
            ></span>
            <span className="text-sm text-gray-700">{clr.name} ({clr.count})</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default SidebarFilter;
