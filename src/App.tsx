import './App.css'
import { useSelector } from 'react-redux'
import type { ContactsState } from './features/contacts/contactsSlice';
import Logo from './assets/Logo.png'
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Error from './pages/Error';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Categories from './pages/Categories';
import AllContacts from './pages/AllContacts';


function App() {

  const contacts = useSelector((state: ContactsState) => state.contactList);
 
  const router = createBrowserRouter([
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/all",
      element: <AllContacts />,
    },
    {
      path: "/favorites",
      element: <Favorites />,
    },
    {
      path: "/categories",
      element: <Categories/>,
    },
    {
      path: "/",
      element: <Home />,
      errorElement: <Error />,
    },
  ]);
  
  return (
    <div >
      <div className='flex gap-1'>
        <div>
          <img src={Logo} alt="logo"/>
        </div>
        <div>
          <Sidebar/>
        </div>
        
      </div>
      <RouterProvider router={router} />
     
    
    </div>
    
  )
}

export default App
