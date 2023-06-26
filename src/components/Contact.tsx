import { useState } from "react";

import { ContactInterface } from "../Contact"

import { useDispatch } from 'react-redux'
import { changeFavorite, remove } from '../features/contacts/contactsSlice';

import { HiHeart, HiOutlineHeart,HiOutlinePencilAlt, HiOutlineTrash } from "react-icons/hi";
import EditContact from "./EditContact";



interface ContactProps {
    contact: ContactInterface;

}

const Contact: React.FC<ContactProps> = ({ contact }) => {


    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };


  
    const dispatch = useDispatch()

    const deleteContact= (values: ContactInterface) => {
        dispatch(remove(values));
    };


    const changeFavoriteStatus = (values: ContactInterface) => {
        dispatch(changeFavorite(values.id));
    };


  return (
    <>
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
                        <button className="text-xl hover:text-blue-600"  onClick={() => openModal()}><HiOutlinePencilAlt/></button>
                    </div>
                    <div>
                        <button className="text-xl hover:text-red-600"  onClick={() => deleteContact(contact)}><HiOutlineTrash/></button>
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
    <EditContact isOpen={modalOpen} onClose={closeModal} contact={contact} />
    </>
  )
}

export default Contact