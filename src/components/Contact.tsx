import { ContactInterface } from "../Contact"

import { useDispatch } from 'react-redux'
import { changeFavorite } from '../features/contacts/contactsSlice';

import { HiHeart, HiOutlineHeart,HiOutlinePencilAlt, HiOutlineTrash } from "react-icons/hi";




interface ContactProps {
    contact: ContactInterface;

}

const Contact: React.FC<ContactProps> = ({ contact }) => {
  
    const dispatch = useDispatch()

    const onSubmit = (values: ContactInterface) => {
    console.log(values);
    };


    const changeFavoriteStatus = (values: ContactInterface) => {
        dispatch(changeFavorite(values.id));
    };


  return (
    <div className="w-full p-4 shadow-md lg:max-w-lg">
        <div className="space-y-2">
            <div className="flex justify-between">
                <div>
                    <button className="text-xl hover:text-red-600" onClick={() => changeFavoriteStatus(contact)}>
                        {contact.isFavorite ?
                        <HiHeart/>:
                        <HiOutlineHeart/>}
                    </button>
                </div>
                <div> 
                    <h3 className="text-2xl font-semibold">
                    {contact.name}
                    </h3>
                </div>
                <div className="flex justify-center">
                    <div>
                        <button className="text-xl hover:text-blue-600"  onClick={() => onSubmit(contact)}><HiOutlinePencilAlt/></button>
                    </div>
                    <div>
                        <button className="text-xl hover:text-red-600"  onClick={() => onSubmit(contact)}><HiOutlineTrash/></button>
                    </div>
                </div>
            </div>
          
           

            <ul className="text-gray-600">
                <li><b>Category:</b> {contact.category} </li>
                {contact.email && <li><b>Email:</b> {contact.email} </li>}
                {contact.phoneNumber && <li><b>Phone Number:</b> {contact.phoneNumber} </li>}
            </ul>
        </div>
    </div>
  )
}

export default Contact