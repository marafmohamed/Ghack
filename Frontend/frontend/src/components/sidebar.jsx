import React, { useState } from "react";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (title) => {
    setSelectedItem(title);
  };

  return (
    <div className="flex relative">
      {/* Sidebar */}
      <div
        className={`bg-black text-white overflow-hidden flex flex-col justify-between h-screen`}
      >
        {/* Sidebar content */}
        <div className="p-4">
          <div className={`flex flex-col ${isOpen ? "" : "hidden"}`}>
            {/* Sidebar header */}
            <h2 className="text-3xl font-bold p-6 Inter text-[#E65F2B] ">
              INBOXERA
            </h2>

            {/* Sidebar items */}
            <div className="space-y-8 mt-12">
              <SidebarItem
                icon="iconslol.png"
                title="Tableau de bord"
                showTitle={isOpen}
                handleClick={handleItemClick}
                selected={selectedItem === "Tableau de bord"}
              />
              <SidebarItem
                icon="icons.png"
                title="Mails"
                showTitle={isOpen}
                handleClick={handleItemClick}
                selected={selectedItem === "Mails"}
              />
              <SidebarItem
                icon="icons(1).png"
                title="Personalisation tableau de bord"
                showTitle={isOpen}
                handleClick={handleItemClick}
                selected={selectedItem === "Personalisation tableau de bord"}
              />
              <SidebarItem
                icon="icons(2).png"
                title="Employes departements"
                showTitle={isOpen}
                handleClick={handleItemClick}
                selected={selectedItem === "Employes departements"}
              />
              <SidebarItem
                icon="icons(3).png"
                title="ECM"
                showTitle={isOpen}
                handleClick={handleItemClick}
                selected={selectedItem === "ECM"}
              />
              <SidebarItem
                icon="icons(4).png"
                title="Parametres"
                showTitle={isOpen}
                handleClick={handleItemClick}
                selected={selectedItem === "Parametres"}
              />
            </div>
          </div>

          <div className={`flex flex-col ${isOpen ? "hidden" : ""}`}>
            {/* Sidebar items */}
            <div className="space-y-12 mt-24">
              <SidebarItem
                icon="iconslol.png"
                title="Tableau de bord"
                showTitle={isOpen}
                handleClick={handleItemClick}
                selected={selectedItem === "Tableau de bord"}
              />
              <SidebarItem
                icon="icons.png"
                title="Mails"
                showTitle={isOpen}
                handleClick={handleItemClick}
                selected={selectedItem === "Mails"}
              />
              <SidebarItem
                icon="icons(1).png"
                title="Personalisation tableau de bord"
                showTitle={isOpen}
                handleClick={handleItemClick}
                selected={selectedItem === "Personalisation tableau de bord"}
              />
              <SidebarItem
                icon="icons(2).png"
                title="Employes departements"
                showTitle={isOpen}
                handleClick={handleItemClick}
                selected={selectedItem === "Employes departements"}
              />
              <SidebarItem
                icon="icons(3).png"
                title="ECM"
                showTitle={isOpen}
                handleClick={handleItemClick}
                selected={selectedItem === "ECM"}
              />
              <SidebarItem
                icon="icons(4).png"
                title="Parametres"
                showTitle={isOpen}
                handleClick={handleItemClick}
                selected={selectedItem === "Parametres"}
              />
            </div>
          </div>
        </div>
        {/* Toggle button */}
        <button
          onClick={toggleSidebar}
          className={`bg-gray-800 hover:bg-gray-200 hover:text-black inter font-bold text-white px-4 py-2 rounded-full absolute top-12 transform -translate-y-1/2 left-20 ${
            isOpen ? "left-72" : ""
          }`}
        >
          {isOpen ? "<" : ">"}
        </button>
      </div>

      {/* Main content */}
      <div className="">
        <div className="p-4">
          <span className="text-black px-12 text-3xl font-medium Inter">
            {selectedItem}
          </span>
        </div>
        {/* Another div on top right */}
        <div className="p-4 absolute top-0 right-0"></div>
      </div>
    </div>
  );
}

// Sidebar item component
function SidebarItem({ icon, title, showTitle, handleClick, selected }) {
  return (
    <div
      className={`flex items-center cursor-pointer hover:bg-gray-700 px-4 py-2 rounded-lg ${
        selected ? "bg-white text-orange-500" : ""
      }`}
      onClick={() => handleClick(title)}
    >
      <img
        src={process.env.PUBLIC_URL + "/" + icon}
        alt={title}
        className={`mr-2 ${selected ? "filter-orange" : ""}`}
      />
      <span className={showTitle ? "" : "hidden"}>{title}</span>
    </div>
  );
}

export default Sidebar;
