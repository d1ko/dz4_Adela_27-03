import classes from './App.module.css'
import {useState} from 'react'


export default function App() {
    const [ fullname, setFullname ] = useState('')
    const [ phoneNumber, setPhoneNumber ] = useState('')
    const [ email, setEmail ] = useState('')

    const numRegExp = /^996[0-9]{9}$/
    const emailRegExp = /^[a-zA-Z0-9]{6,}@gmail.com$/

    const addUser = event => {
        event.preventDefault()
        if (fullname.trim() !== '' &&
            phoneNumber.trim() !== '' &&
            email.trim() !== '' &&
            numRegExp.test(phoneNumber) &&
            emailRegExp.test(email)
        ) {
            console.log(`
                Fulname: ${fullname}
                Phone Number: ${phoneNumber}
                email: ${email}
            `)
        }
        if (!numRegExp.test(phoneNumber)) alert('Вы не правильно ввели номер')
        if (!emailRegExp.test(email)) alert('Нужно ввести минимум 6 символов и @gmail.com')
        setFullname('')
        setPhoneNumber('')
        setEmail('')
    }

    const handleChange = event => {
        setPhoneNumber(event.target.value.replace(/\D/, ''))
    }

    return (
        <>
            <div className={'container'}>
                <form onSubmit={addUser} className={classes.FormUser}>
                    <h1>Create User</h1>
                    <input
                        value={fullname}
                        onChange={event => setFullname(event.target.value)}
                        type="text"
                        placeholder={'enter your fullname'}
                    />
                    <input
                        value={phoneNumber}
                        onChange={handleChange}
                        type="text"
                        placeholder={'enter your phone number'}
                    />
                    <input
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                        type="text"
                        placeholder={'enter your email'}
                    />
                    <button>Add user</button>
                </form>
            </div>
        </>
    )
}
