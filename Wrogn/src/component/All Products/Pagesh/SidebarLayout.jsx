import React from 'react';
import SidebarFilter from '../Comonents/SidebarFilter';


const SidebarLayout = () => {
  return (
    <div className="flex">
      {/* Sidebar (Fixed height, sticky) */}
      <div className="w-1/4 p-4">
        <SidebarFilter />
      </div>

      {/* Right Content (Scroll) */}
      <div className="w-3/4 h-screen overflow-y-scroll p-6 bg-gray-100">
        <div className="h-[2000px] bg-white rounded-xl shadow p-4">
          <p className="text-center text-gray-400 text-lg">👇 Scroll to test product area</p>
        </div>
      </div>
    </div>
  );
};

export default SidebarLayout;
