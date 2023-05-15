import './App.css'
import { useSelector } from 'react-redux'
import type { ContactsState } from './features/contacts/contactsSlice';
import Logo from './assets/Logo.png'
import Sidebar from './components/Sidebar';
import Home from './pages/Home';

function App() {

  const contacts = useSelector((state: ContactsState) => state.contactList);
  console.log(contacts)
  
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
      <Home />
    
    </div>
    
  )
}

export default App
