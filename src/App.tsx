import './App.css'
import { useSelector } from 'react-redux'
import type { ContactsState } from './features/contacts/contactsSlice';
import ContactsShowList from './components/ContactsShowList';
import ContactsForm from './components/ContactsForm';
import Logo from './assets/Logo.png'

function App() {

  const contacts = useSelector((state: ContactsState) => state.contactList);
  console.log(contacts)
  
  return (
    <div>

      <div>
        <img src={Logo} alt="logo"/>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 '>
         <div>
            <ContactsForm />
         </div> 
         <div>
            <ContactsShowList/>
        </div>
      </div>
    
    </div>
    
  )
}

export default App
