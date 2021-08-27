import React, { Fragment } from 'react'
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton"


const Header =  (props) => {
 return (
     <Fragment>
     <header className={classes.header}>
     <h1> Rishabh Meals </h1>
    <HeaderCartButton />
     
     </header>
     <div className={classes['main-image']}>
     <img src={mealsImage} alt="Meal Image" / > 
     </div>
     
     </Fragment>
 )
}

export default Header
