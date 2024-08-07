import  { useState } from 'react'
import './Home.css'
import Header from '../../components/header/Header'
import ExploreM from '../../components/exploremenu/ExploreM'
import FoodDisplay from '../../components/foodDisplay/FoodDisplay'
import AppDownload from '../../components/appDownload/AppDownload'
const Home = () => {
  const [category, setcategory]=useState("All")
  return (
    <div>
      <Header/>
      <ExploreM category={category} setcategory={setcategory}/>
      <FoodDisplay category={category}/>
      <AppDownload/>
    </div>
  )
}

export default Home
