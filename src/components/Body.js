import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData"
import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const Body=()=>{
const [listofRestaurants,setlistofRestaurants]=useState(resList);
    
return(
    <div className="body">
        <div className="search" >Search</div>
        <div className="filter" >
            <button 
            className="filter-btn"
             onClick={()=>{
               const filteredList= listofRestaurants.filter(
                (res)=>res.info.avgRating>4
                );
               setlistofRestaurants(filteredList);
            }
            }>Top Rated Restaurant
            </button>
        </div>
        <div className="res-container" >
            {/* <RestaurantCard
            resData={resList[0]}
            /> */}
          {
            listofRestaurants.map(restaurant=><RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
          }
        </div>
    </div>
    );
        };

export default Body;