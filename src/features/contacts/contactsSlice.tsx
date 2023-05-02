import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ContactInterface } from '../../Contact'

export interface ContactsState {
  contactList: ContactInterface[];
}

const initialState: ContactsState = {
  contactList: []
}

export const contactsSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
      add: (state, action: PayloadAction<ContactInterface>) => {
        state.contactList.push(action.payload)
      },
  },
})


export const { add } = contactsSlice.actions
export default contactsSlice.reducer