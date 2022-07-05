import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
import { Loading } from "./Loading";
import {doc, getDoc, getFirestore } from 'firebase/firestore';

export function ItemDetailContainer() {
    const { itemId } = useParams();
    const [products, setProducts] = useState([]);
    const [error, setError] = useState([])
    const [loading, setLoading] = useState(true);


    useEffect(() => {
      const db = getFirestore();
      const productRef = doc(db, "productos", itemId)

      getDoc(productRef)
      .then((snapshot) => {
        setProducts({ ...snapshot.data(), id: snapshot.id})
      } )
      .catch((err) => {
        setError(err)
      })
      .finally(() => {
        setLoading(false)
      })
    }, [itemId]);


  return (
    <div style={{marginBlock: '10rem'}}>
     {loading ? <Loading /> : <ItemDetail detail = { products } /> }
    </div>
  )
}
