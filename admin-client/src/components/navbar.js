const Navbar = ({loggedIn, logout}) => {

    return(
        <nav>
            <p className='title'>
                AppDirect Admin
            </p>
            {
                (loggedIn)
                    ?   <div className='logout' onClick={logout}>Logout</div>
                    : null
            }
        </nav>
    )
}

export default Navbar