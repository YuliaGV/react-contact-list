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
      }
  },
})


export const { add, changeFavorite } = contactsSlice.actions
export default contactsSlice.reducer