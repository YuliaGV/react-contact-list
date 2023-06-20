import { useState } from "react";
import { MdOutlineMenu, MdClose } from "react-icons/md";


function Sidebar() {

    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <>
        {showSidebar ? (
          <button
            className="flex text-4xl text-white items-center cursor-pointer fixed right-10 top-6 z-50"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <MdClose />
          </button>
        ) : (
            <button
            className="fixed z-30 flex items-center cursor-pointer right-10 top-6 text-4xl"
            onClick={() => setShowSidebar(!showSidebar)}>
                <MdOutlineMenu />
            </button>
        
        )}
  
        <div
          className={`flex items-center top-0 right-0 w-1/2 md:w-1/6 lg:w-1/6 bg-mountains-50  p-10 pl-20 text-white fixed h-full z-40  ease-in-out duration-300 ${
            showSidebar ? "translate-x-0 " : "translate-x-full"
          }`}
        >
          <div>
            <h3 className="mt-5 text-md hover:font-bold text-white">
              <a href={`/home`}>Home</a>
            </h3>
            <h3 className="mt-5 text-md hover:font-bold text-white">
              <a href={`/all`}>All contacts</a>
            </h3>
            <h3 className="mt-5 text-md hover:font-bold text-white">
              <a href={`/favorites`}>Favorites</a>
            </h3>
            <h3 className="mt-5 text-md hover:font-bold text-white">
              <a href={`/categories`}>Categories</a>
            </h3>
          </div>
        </div>
      </>
    );
}


export default Sidebar