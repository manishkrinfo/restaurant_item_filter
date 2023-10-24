import React, { useState } from "react";
import "./style.css";
import Menu from "./menuApi";
import MenuCard from "./MenuCard";
import NavBar from "./NavBar";

const uniqueList = [
    ...new Set(
        Menu.map( (curElem) => {
            return curElem.category;
        })
    ),
    "All"
]
//console.log(uniqueList);

export const Resturant = () => {

    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setMenuList] = useState(uniqueList);

    const filterItem = (category) => {

        if(category === "All") {
            setMenuData(Menu);
            return;
        }
        const updateList = Menu.filter((curElem) => {
            return curElem.category === category
        })

        setMenuData(updateList);
    };
    return (
        <>
            <NavBar filterItem={filterItem} menuList={menuList} />
            <MenuCard menuData={menuData} />
        </>
    );
}