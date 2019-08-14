import React, { Component } from 'react'
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';


class Formy extends Component {
    render() {
        return (
            <Form>
                <Field type="text" name="name" />
                <Field type="email" name="email" />
                <Field type="password" name="password" />
                <Field type="checkbox" name="tos" />
                <button>Submit</button>
            </Form>
        )
    }
}

const FormickForm = withFormik({
    mapPropsToValues(values) {
        return {
            name: values.name || '',
            email: values.email || '',
            password: values.password || '',
            tos: values.tos || ''
        };
    }
})(Formy);

export default FormickForm;

