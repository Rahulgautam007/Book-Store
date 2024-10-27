import cartcontext from "./cartcontext.jsx";
import { useState } from "react";
import toast from 'react-hot-toast'; 
import { useAuth } from '../AuthProvider.jsx'
const CartState = (props) => {
    // const host = "http://localhost:3002";
    const host = "https://bookstorebeckend.onrender.com";
    const[authUser,setAuthUser]=useAuth()
    //Getallitems
    const getitems = async () => {
        try {
            const userId = authUser._id;
            const response = await fetch(`${host}/cart/fetchitem`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ userId })
            });
            const json = await response.json();
            setitems(json);
            // setCartCount(json.length);
        } catch (error) {
            console.log(error);
        }
    }
    //Additem
    const additem = async (id) => {
        try {
            const userId = authUser._id;
            console.log(userId);
            const response = await fetch(`${host}/cart/additem`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ userId,id }),
            });
            const json = await response.json();
            setitems(json);   
            toast.success("Added to cart");
            // setCartCount(json.length);
        } catch (error) {
            console.log(error);
        }
    }
    //Deleteitem
    const deleteitem = async (id) => {
        // eslint-disable-next-line
        try {
            const userId = authUser._id;
            const response = await fetch(`${host}/cart/deleteitem/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ userId })
            });
            const json = await response.json();
            setitems(json);
            toast.success("Deleted Successfully");
            // setCartCount(json.length);
        } catch (error) {
            console.log(error)
        }
    }
    //updateitem
    const updateitem = async (id, quantity) => {
        try {
            const userId = authUser._id;
            const response = await fetch(`${host}/cart/updateitem`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ userId,id, quantity }),
            });
            // eslint-disable-next-line
            const json = await response.json();
            setitems(json.cart);
        } catch (error) {
            console.log(error)
        }
    }
    const [items, setitems] = useState([]);
    // const [cartCount, setCartCount] = useState(0);
    return (
        <cartcontext.Provider value={{ items, getitems, additem, deleteitem,updateitem }}>
            {props.children}
        </cartcontext.Provider>
    )
}

export default CartState;

