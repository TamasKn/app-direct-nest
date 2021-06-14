
const Login = ({onChange, onSubmit, error}) => {

    return (
        <>
            <div className='login__container'>
                <div className='login__item'>
                    <label htmlFor='username'>username</label>
                    <input
                        type='text'
                        name='username'
                        onChange={onChange}
                    />
                </div>

                <div className='login__item'>
                    <label htmlFor='password'>password</label>
                    <input
                        type='password'
                        name='password'
                        onChange={onChange}
                    />
                </div>

                <p className='error'>{error}</p>

                <div className='button' onClick={onSubmit}>Login</div>
            </div>

        </>
    )
}

export default Login