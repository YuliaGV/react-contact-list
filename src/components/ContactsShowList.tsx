import { useSelector } from "react-redux"
import { RootState } from "../app/store";
import { ContactInterface } from "../Contact";
import Contact from "./Contact";

function ContactsShowList() {


  const contacts = useSelector((state:RootState) =>state.contactList);
 

  return (
    <div>
      <div className="mt-2 grid grid-cols-1 gap-2">
      {contacts.contactList.map((contact: ContactInterface) => (
        <div key={contact.id}>
          <Contact contact={contact} />
        </div>
      ))}
    </div>
    </div>
  )
}

export default ContactsShowList