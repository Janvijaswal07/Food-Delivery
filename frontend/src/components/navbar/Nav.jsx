import { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import './Nav.css'
import {Link} from 'react-router-dom'
import { StoreContext } from '../../context/Contextstore'
const Nav = ({ setShowLogin}) => {
  const [menu,setMenu] = useState("menu");
  const {getTotalCartAmout}=useContext(StoreContext)
  return (
    <div className='navbar'>
    <Link to='/'><img src={assets.logo} alt="" className='logo' /></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={()=>setMenu("Home")} className={menu==="Home" ? "active" : ""}>Home</Link>
        <a href='#explore-menu'  onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</a>
        <a href='#app-download' onClick={()=>setMenu("Mobile-app")} className={menu==="Mobile-app"?"active":""}>Mobile-app</a>
        <a href='#footer' onClick={()=>setMenu("Contcat us")}  className={menu==="Contcat us"?"active":""}>Contcat us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon"> 
     <Link to='/Cart' > <img src={assets.basket_icon} alt="" /></Link>
          <div className={getTotalCartAmout()===0?"":"dot"}>

          </div>
        </div>
        <button onClick={()=>setShowLogin(true)}>Sign in</button> 
      </div>
    </div>
  )
}

export default Nav
