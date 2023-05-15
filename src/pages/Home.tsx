import ContactsForm from "../components/ContactsForm"
import ContactsShowList from "../components/ContactsShowList"

function Home() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 mt-4'>
        <div>
            <ContactsForm />
        </div> 
        <div>
            <ContactsShowList/>
        </div>
    </div>
  )
}

export default Home