import React, { useState } from "react"
import SearchBar from "../SearchBar/SearchBar"
import RestaurantCard from "../RestaurantCard/RestaurantCard"
import { Button, Modal, ModalFooter, ModalHeader, ModalBody } from "reactstrap"
import "./RestaurantGrid.css"

export default function RestaurantGrid(props) {

    const [restaurants, setRestaurants] = useState([])

    async function addRestaurants(restaurantsArray) {
        Promise.resolve(restaurantsArray).then(value => {
            setRestaurants(value)
        })
    }

    function removeRestaurant(event, id) {

        for (const restaurant of restaurants) {
            if (restaurant.id === id) {
                removeItem(restaurants.indexOf(restaurant))
            }
        }
    }

    function removeItem(index) {
        setRestaurants(restaurants.filter((o, i) => index !== i));
    };

    function selectRestaurant(restaurant) {
        props.selectRestaurant(restaurant)
    }

    let displayedRestaurants = restaurants.map((restaurant, i) => {
        return (<RestaurantCard 
            key={i} 
            restaurant={restaurant} 
            removeRestaurant={removeRestaurant} 
            selectRestaurant={selectRestaurant} 
            hideAddBtn={props.hideAddBtn} 
            />)
    })


    // const [modal, setModal] = React.useState(false);

    // const toggle = () => setModal(!modal);

    return (

        <div>
            {/* <Button
                onClick={toggle}>Search Restaurants
            </Button> */}

            <Modal isOpen={props.modal} toggle={props.toggle} className="modal-dialog" scrollable={true} >
                <ModalHeader toggle={props.toggle} className="header">
                    <div className="restaurant--grid-title">
                        Restaurants
                    </div>
                    <div className="restaurant--grid-subtitle">
                        in
                    </div>
                    <SearchBar
                        searchType={'RESTAURANTS_LOCATION'}
                        addRestaurants={addRestaurants}
                        placeholder="Enter a Location or Zip Code"
                    />
                </ModalHeader>
                <ModalBody className="modal-body">
                    <div className="restaurant--grid-display">
                        {displayedRestaurants}
                    </div>
                </ModalBody>
                <ModalFooter>
                    <button className="modal-okayBtn" onClick={props.toggle}>Okay</button>
                </ModalFooter>
            </Modal>
        </div >
    )
}