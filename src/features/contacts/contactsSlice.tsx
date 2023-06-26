import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ContactInterface } from '../../Contact'

export interface ContactsState {
  contactList: ContactInterface[];
}

const storedContacts = localStorage.getItem('contacts');

const initialState: ContactsState = {
  contactList: storedContacts ? JSON.parse(storedContacts) : [
    {
      'id': '1',
      'name': 'Cosme Fulanito',
      'category': 'family',
      'phoneNumber': '555-55-55',
      'email': 'fulanitocosme@gmail.com',
      'note': '',
      'isFavorite': false
    }
  ]
};

export const contactsSlice = createSlice({
  name: 'contact',
  initialState,

  reducers: {
      add: (state, action: PayloadAction<ContactInterface>) => {
        state.contactList.push(action.payload)
        state.contactList.sort((a, b) => a.name.localeCompare(b.name)); 
        localStorage.setItem('contacts', JSON.stringify(state.contactList));
      },
  
      changeFavorite: (state, action: PayloadAction<string>) => {
        const contactId = action.payload;
        const foundContact = state.contactList.find((contact) => contact.id === contactId);
        if (foundContact) {
          foundContact.isFavorite = !foundContact.isFavorite;
          localStorage.setItem('contacts', JSON.stringify(state.contactList));
        }
      },

      update: (state, action: PayloadAction<ContactInterface>) => {

      /*const updatedContact = action.payload;
      const contactIndex = state.contactList.findIndex((contact) => contact.id === updatedContact.id);
      if (contactIndex !== -1) {
        state.contactList[contactIndex] = updatedContact;
        localStorage.setItem('contacts', JSON.stringify(state.contactList));
      }*/
      
      const updatedContact = action.payload;
      const updatedList = state.contactList.map(contact =>
        contact.id === updatedContact.id ? updatedContact : contact
      );
      state.contactList = updatedList;
      state.contactList.sort((a, b) => a.name.localeCompare(b.name)); 
      localStorage.setItem('contacts', JSON.stringify(updatedList));
      
    },
    remove: (state, action: PayloadAction<ContactInterface>) => {
      state.contactList = state.contactList.filter(contact => contact.id !== action.payload.id);
      localStorage.setItem('contacts', JSON.stringify(state.contactList));

    },
      
  },
})


export const { add, changeFavorite, update, remove} = contactsSlice.actions
export default contactsSlice.reducer