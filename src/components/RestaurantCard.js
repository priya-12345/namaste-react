import {CDN_URL} from "../utils/constants";
import React from "react";
import ReactDOM from "react-dom/client";

const styleCard={
    backgroundColor:"#f0f0f0"
        }
    
        //RestaurantCard Component
        const RestaurantCard=(props)=>{
            const { resData } = props;
           const{cloudinaryImageId,name,avgRating,cuisines,areaName}=resData?.info;
           return(
            <div className="res-card"  style={styleCard}>
             <img alt="res-logo" className="res-logo" src=
             {CDN_URL
              + cloudinaryImageId}/>
             <h3>{name}</h3>
             <h4>{avgRating} stars</h4>
             <h4>{resData.info.sla.slaString}</h4>
             <h4>{cuisines.join(", ")}</h4>
             <h4>{areaName}</h4>
            </div>
           );
        };  

        export default RestaurantCard;