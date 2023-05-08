import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function ContactsForm() {


    interface Values {
        name: string;
        category: string;
        phoneNumber: string;
        email: string;
        note: string;
        isFavorite: boolean;
    }


    const initialValues: Values = {
        name: '',
        category: '',
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

    const onSubmit = (values: Values) => {
        console.log(values);
    };

  return (

    <div>
        <h1>Add a contact</h1>

        <section className='mt-2 bg-mist-50 rounded-md'>

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
                      className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-cyan-400 focus:ring-cyan-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      id="name" 
                      name="name" 
                    />
                    <ErrorMessage name="name" className='text-red'/>
                  </div>


                  <div className="mt-2">
                    <label 
                      htmlFor="email" 
                      className='block text-sm font-semibold text-gray-800'
                    >Email
                    </label>
                    <Field 
                      type="email" 
                      className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-cyan-400 focus:ring-cyan-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      id="email" 
                      name="email" 
                    />
                    <ErrorMessage name="email"  className='text-red'/>
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
                      className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-cyan-400 focus:ring-cyan-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    >
                      <option value="work">Work</option>
                      <option value="family">Family</option>
                      <option value="friends">Friends</option>
                      <option value="others">Others</option>
                    </Field>
                  </div>

                
                  <div className="mt-2">
                    <button 
                      type="submit" 
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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