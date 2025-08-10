import { useState } from 'react';

import Axios from 'axios'
// import styles of this component
import styles from '../Forms.module.css'

// import other component to use
import FormInput from '../FormInput/FormInput';


// import other pkg to use
import { useFormik } from 'formik';
import { object, string, date, ref } from 'yup'
import PropTypes from 'prop-types';
import { v4 as uniqid } from 'uuid';
import { Container, Button, Form } from 'react-bootstrap';

import logo from '../../../../../assets/images/logo.png'


// import utils 
import { getStorage, setUserId, setUserInStorage } from '../../../utils/storage';

const RegisterForm = ({ onRegister, onLogin }) => {
    const [submit, setSubmit] = useState(false)

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            birthday: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: object({
            username: string().required('please enter your username')
                .max(15, 'your username must be 15 characters or less')
                .min(4, 'your username must be 4 characters or more'),
            email: string().email('invalid email').required('Please enter your email'),
            birthday: date().required('please enter your birthday date')
                .min('1922-01-01', 'your birthday date must be 1922-01-01 or more')
                .max('2022-05-22', 'invalid birthday date'),
            password: string().required('please enter your password')
                .min(8, 'your password must be 8 characters or more')
                .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, 'invalid password'),
            confirmPassword: string().required('please enter your confirm password')
                .oneOf([ref('password')], 'your confirm password must match'),
        }),
        onSubmit: (values, { setFieldError }) => {
            const userId = uniqid();
            let user;
            if (getStorage('users')) {
                const [isIterateUsername, isIterateEmail] = checkUser(values.username, values.email)
                if (isIterateUsername) {
                    setFieldError('username', 'please change your username');
                    return;
                } else if (isIterateEmail) {
                    setFieldError('email', 'please change your email');
                    return;
                } else {
                    const users = getStorage('users');
                    user = { id: userId, ...values, isLogin: true };
                    users.push(user);
                    setUserId(userId);
                    setUserInStorage('users', users);
                    onRegister();
                }
            } else {
                user = { id: userId, ...values, isLogin: true };
                const users = [user];
                setUserId(userId);
                setUserInStorage('users', users);
                onRegister();
            }
            // Always send to backend
            addClientRecord(user);
        }
    })

    const checkUser = (username, email) => {
        const users = getStorage('users')
        const isIterateUsername = users.some(user => user.username === username)
        const isIterateEmail = users.some(user => user.email === email)

        return [isIterateUsername , isIterateEmail]
    }

const [id] = useState(0);
const [Username, setUsername] = useState("");
const [Email, setEmail] = useState("");
const [birthday, setBirthday] = useState('');
const [Password, setPassword] = useState("");
const [Confirm_Password, setConfirm_password] = useState("");



const addClientRecord = (user) => {
    console.log(user)
    Axios.post('http://localhost:3001/create', {
        id: user.id,
        username: user.username,
        email: user.email ,
        birthday : user.birthday ,
        password: user.password,
        confirmPassword: user.confirmPassword
    }).then(() => {
        console.log('Successfully created client record.')
        alert("registered successfully")
    }); 
}

    return (
        <Container fluid className={`${styles.container} d-flex justify-content-center align-items-center px-5`}>
            <Form noValidate className={styles.form} onSubmit={formik.handleSubmit} >
                    <img className="logo"
                       src={logo} alt='../assets/images/logo192'></img>
                <h2>Register</h2>
                <FormInput 
                    className="mt-5 mb-4"
                    controlId="usernameInp"
                    onChange={(event)=> {
                        console.log("hello")
                        setUsername(event.target.value)}}
                    name="username"
                    text="Username"
                    placeholder="Enter your username"
                    invalid={submit && formik.errors.username ? true : false}
                    errMsg={formik.errors.username || ''}
                    valid={submit && !formik.errors.username ? true : false}
                    successMsg="done"
                    {...formik.getFieldProps('username')}
                />
                
  
                <FormInput 
                    className="mb-4"
                    controlId="emailInp"
                    onkeyup={(event)=> {
                        console.log("hello")
                        setEmail(event.target.value)}}
                    name="email"
                    text="Email"
                    placeholder="Enter your Email"
                    invalid={submit && formik.errors.email ? true : false}
                    errMsg={formik.errors.email || ''}
                    valid={submit && !formik.errors.email ? true : false}
                    successMsg="done"
                    {...formik.getFieldProps('email')}
                />

                <FormInput 
                    className="mb-4"
                    type="date"
                    controlId="birthdayInp"
                    onChange={(event)=> {setBirthday(event.target.value)}}
                    name="birthday"
                    text="birthday"
                    placeholder="Enter your birthday date"
                    invalid={submit && formik.errors.birthday ? true : false}
                    errMsg={formik.errors.birthday || ''}
                    valid={submit && !formik.errors.birthday ? true : false}
                    successMsg="done"
                    {...formik.getFieldProps('birthday')}
                />

                <FormInput 
                    className="mb-4"
                    type="password"
                    controlId="passwordInp"
                    onChange={(event)=> {setPassword(event.target.value)}}
                    name="password"
                    text="Password"
                    placeholder="Enter your Password"
                    invalid={submit && formik.errors.password ? true : false}
                    errMsg={formik.errors.password || ''}
                    valid={submit && !formik.errors.password ? true : false}
                    successMsg="done"
                    {...formik.getFieldProps('password')}
                />

                <FormInput 
                    className="mb-4"
                    type="password"
                    controlId="confirmPasswordInp"
                    onChange={(event)=> {setConfirm_password(event.target.value)}}
                    name="confirmPassword"
                    text="Confirm Password"
                    placeholder="Enter your Confirm Password"
                    invalid={submit && formik.errors.confirmPassword ? true : false}
                    errMsg={formik.errors.confirmPassword || ''}
                    valid={submit && !formik.errors.confirmPassword ? true : false}
                    successMsg="done"
                    {...formik.getFieldProps('confirmPassword')}
                />

                <Button 
                    onClick={() => onLogin('login')}
                    className='shadow-none mt-4 p-0'
                    type="button"
                    variant="">
                    you have an account ?
                </Button>

                <Button 
                    className={`${styles["submit-btn"]} w-100`} 
                    // onClick={() => setSubmit(true)}
                     onClick={ () => setSubmit(true)}

                    disabled={submit && !formik.isValid ? true : false}
                    variant="primary" 
                    type="submit">
                    Register
                </Button>
                <h6 className="mt-5 p-5 text-center text-secondary ">Copyright © 2022 RIG BUILDER. All Rights Reserved.</h6>
            </Form>
        </Container>
    )
}

// validate component
RegisterForm.propTypes = {
    onRegister: PropTypes.func.isRequired,
    onLogin: PropTypes.func.isRequired,
}

export default RegisterForm