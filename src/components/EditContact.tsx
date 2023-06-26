
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ContactInterface } from '../Contact';
import { useDispatch } from 'react-redux'
import { update } from '../features/contacts/contactsSlice';


interface ContactProps {
    contact: ContactInterface;
    isOpen: boolean;
    onClose: () => void

}

const EditContact: React.FC<ContactProps> = ({ contact, isOpen, onClose }) => {

    const dispatch = useDispatch()

    if (!isOpen) return null;

    const initialValues: ContactInterface = {
        ...contact
      };


    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Name is required"),
        category: Yup.string().required("Category is required"),
        phoneNumber: Yup.string(),
        email: Yup.string().email("Email is invalid"),
      });

    

    const onSubmit = (values: ContactInterface) => {
        dispatch(update(values));
        onClose();
    };


    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="bg-white p-6 rounded-lg shadow-lg z-10">
            <h2 className="text-xl font-bold mb-4">Update Contact</h2>
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
                        Update Info
                    </button>
                  </div>


                </div>


                </Form>
            )}
        </Formik>
            <button
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                onClick={onClose}
            >
                Close
            </button>
            </div>
      </div>

    )
}

export default EditContact