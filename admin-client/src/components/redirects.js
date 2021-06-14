import {useState, useEffect, Fragment} from 'react'

const Redirects = ({url}) => {

    const [redirects, setRedirects] = useState([])

    useEffect(() => {
        fetch(url, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: `
                    query {
                        redirects {
                            app_name, 
                            ios, 
                            android, 
                            web
                        }
                    }
                `
            })
        }).then(resp => resp.json())
            .then(data => {
                const {redirects} = data.data
                if(redirects.length) {
                    setRedirects(redirects)
                }
            })
    }, [])

    return (
        <div className='redirects__container'>
            <h2>Redirects</h2>
            <table>
                <thead>
                    <tr>
                        <th>App</th>
                        <th>iPhone/iPad</th>
                        <th>Android</th>
                        <th>Other</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        redirects.map((el) => (
                          <tr>
                            <Fragment key={el.id}>
                                <td>{el.app_name}</td>
                                <td>{el.ios}</td>
                                <td>{el.android}</td>
                                <td>{el.web}</td>
                            </Fragment>
                          </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    )
}

export default Redirects