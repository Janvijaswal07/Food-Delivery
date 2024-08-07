//import React from 'react'
import './ExploreM.css'
import {menu_list} from '../../assets/assets'
const ExploreM = ({category,setcategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>Our menu features a diverse selection of mouth-watering dishes, with clear descriptions and pricing, catering to all tastes and dietary needs.</p>
      <div className="explore-menu-list">
    {menu_list.map((item,index)=>{
        return(
            <div onClick={()=>setcategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                <p>{item.menu_name}</p>
            </div>
        )
    })}
      </div>
      <hr/>
    </div>
  )
}

export default ExploreM
