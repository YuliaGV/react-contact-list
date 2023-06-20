import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux'

import { add } from '../features/contacts/contactsSlice';


import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ContactInterface } from '../Contact';


function ContactsForm() {


    const initialValues: ContactInterface = {
        id: '',
        name: '',
        category: 'others',
        phoneNumber: '',
        email: '',
        note: '',
        isFavorite: false
      };


    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Name is required"),
        category: Yup.string().required("Category is required"),
        phoneNumber: Yup.string(),
        email: Yup.string().email("Email is invalid"),
      });

    const dispatch = useDispatch()

    const onSubmit = (values: ContactInterface, { resetForm }: { resetForm: () => void }) => {
      const newContact = { ...values, id: uuidv4() };
      dispatch(add(newContact));
      resetForm();
    };

    

  return (

    <div>
        <h1 className='text-black text-lg font-bold'>Add a contact</h1>

        <section className='mt-2 rounded-md bg-mist-50'>

        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {({ isSubmitting }) => (
                <Form>


                <div className='px-4 py-2 '>

                  <div className="mt-2">
                    <label 
                      htmlFor="name" 
                      className='block text-sm font-semibold text-gray-800'
                    >
                      Name
                    </label>
                    <Field 
                      type="text" 
                      className="block w-full px-4 py-2 mt-2 text-black bg-white border  rounded-md focus:border-mountains-50 focus:ring-mountains-50 focus:outline-none focus:ring focus:ring-opacity-40"
                      id="name" 
                      name="name" 
                    />
                    <div className='text-red-600 font-bold text-left text-sm'>
                      <ErrorMessage name="name"/>
                    </div>
                  </div>


                  <div className="mt-2">
                    <label 
                      htmlFor="phoneNumber" 
                      className='block text-sm font-semibold text-gray-800'
                    >
                      Phone number
                    </label>
                    <Field 
                      type="text" 
                      className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-mountains-50 focus:ring-mountains-50 focus:outline-none focus:ring focus:ring-opacity-40"
                      id="phoneNumber" 
                      name="phoneNumber" 
                    />
                  
                  </div>


                  <div className="mt-2">
                    <label 
                      htmlFor="email" 
                      className='block text-sm font-semibold text-gray-800'
                    >Email
                    </label>
                    <Field 
                      type="email" 
                      className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-mountains-50 focus:ring-mountains-50 focus:outline-none focus:ring focus:ring-opacity-40"
                      id="email" 
                      name="email" 
                    />
                    <div className='text-red-600 font-bold text-left text-sm'>
                      <ErrorMessage name="email"/>
                    </div>
                  </div>

                  <div className="mt-2">
                    <label 
                      htmlFor="category" 
                      className='block text-sm font-semibold text-gray-800'
                      >
                      Category
                    </label>
                    <Field 
                      as="select" 
                      name="category"
                      className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-mountains-50 focus:ring-mountains-50 focus:outline-none focus:ring focus:ring-opacity-40"
                    >
                      <option value="others">Others</option>
                      <option value="work">Work</option>
                      <option value="services">Services</option>
                      <option value="friends">Friends</option>
                      <option value="family">Family</option>    
                      
                      
                    </Field>
                  </div>

                
                  <div className="mt-4">
                    <button 
                      type="submit" 
                      className="bg-sunglow-50 hover:bg-sunglow-50 text-white hover:font-bold py-2 px-4 rounded border-2 border-sunglow-50"
                      disabled={isSubmitting}

                      >
                        Submit
                    </button>
                  </div>


                </div>


                </Form>
            )}
        </Formik>

      </section>
        
    </div>
  )
}

export default ContactsForm