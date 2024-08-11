import { Link, NavLink, useNavigate} from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { LoginContext } from "../../Contexts/LoginContext"

function Header(){

    const {user} = useContext(LoginContext)

    const navigate = useNavigate()

    function handleLogout(){
        let confirmation = confirm('Do you want to logout?')
        if(confirmation){
          if(window.localStorage.getItem('user') !== 'false'){
            window.localStorage.setItem('user', false)
            window.localStorage.removeItem('links')
            window.localStorage.removeItem('userDetails')
            navigate('../')
            window.location.reload()
          }
        }
      }

    return (
            <>
                <header>
                    <img src="../assets/logo.svg" alt="Logo" />
                    {user?<>
                        <nav>
                            <ul className="side-panel">
                                <li><NavLink to="home" className={({isActive}) => `${isActive ? "a-active":"a"}`}>
                                    Your Monitors</NavLink></li>
                                <li><NavLink to="create" className={({isActive}) => `${isActive ? "a-active":"a"}`}>
                                    Create Monitor</NavLink></li>
                            </ul>
                        </nav>
                        
                        <div>
                        <Link to='user'>
                            <button>Your Account</button>
                        </Link>
                        <button id='logout' onClick={()=> handleLogout()}>Log Out</button>
                        </div>
                    </>:''}

                    
                </header>
            </>
        )
}

export default Header