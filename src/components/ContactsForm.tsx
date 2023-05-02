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

        <section className='border'>

        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {({ isSubmitting }) => (
                <Form>
                <label htmlFor="name">Name</label>
                <Field type="text" id="name" name="name" />
                <ErrorMessage name="name" />

                <label htmlFor="email">Email</label>
                <Field type="email" id="email" name="email" />
                <ErrorMessage name="email" />

               
                <button type="submit" disabled={isSubmitting}>
                    Submit
                </button>
                </Form>
            )}
        </Formik>

      </section>
        
    </div>
  )
}

export default ContactsForm