import {useState, useEffect} from 'react'
import './App.css';
import {addHoursToDate} from './helper'
import Navbar from './components/navbar'
import Redirects from './components/redirects'
import Login from './components/login'

const DOMAIN = 'http://localhost:4000/graphql'

const App = () => {

    const [loggedIn, setLoggedIn] = useState(document.cookie.includes('true'))
    const [field, setField] = useState({
        username: '',
        password: ''
    })
    const [error, setError] = useState('')

    useEffect(() => {
        setLoggedIn(document.cookie.includes('true'))
    }, [loggedIn])

    const logout = () => {
        // Modifies cookie
        setLoggedIn(document.cookie = `loggedIn=false; expires=${addHoursToDate(74)};`)
    }

    const onChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target

        switch (name) {
            case 'username':
                setField({...field, username: value})
                break;
            case 'password':
                setField({...field, password: value})
                break;
            default:
                break;
        }
    }

    const onSubmit = async () => {
        await fetch(DOMAIN, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: `
                    query ($name: String!, $password: String!) {
                        login(
                            name: $name, 
                            password: $password
                        ) {
                            success
                        }
                    }
                `,
                variables: {name: field.username, password: field.password}
            })
        })
            .then(resp => resp.json())
            .then(data => {
                const {login} = data.data
                if(login.success) {
                    setLoggedIn(true)

                    // Normally I would use JWT, this is only for demo
                    document.cookie = `loggedIn=true; expires=${addHoursToDate(74)}; path=/`

                } else {
                    setError('Username or password is not correct')
                }
            })
    }

    return (
        <div >
            <Navbar loggedIn={loggedIn} logout={logout}/>
            {
                (loggedIn)
                    ? <Redirects url={DOMAIN}/>
                    : <Login onChange={onChange} onSubmit={onSubmit} error={error}/>
            }
        </div>
    )
}

export default App;
