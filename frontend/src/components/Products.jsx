import React from 'react'
import { AuthContext } from '../context/AuthContext'
import { useContext } from 'react'

const Products = () => {
    const {token} = useContext(AuthContext)
    console.log(token);
    return  token ? (<div>now you can see the products</div>) : (<div> please login</div>)     
}

export default Products