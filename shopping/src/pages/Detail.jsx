import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
    const {id} = useParams();
    const [product, setProduct] =useState(null);

    const getProductDetail = async () => {
        let url = `http://localhost:5000/products/${id}`;
        let response = await fetch(url);
        let data = await response.json();
        setProduct(data);
    }

    // 상세 api 호출
    useEffect(()=>{
        getProductDetail()    
    },[])

    return ( 
        <div>
            
        </div>
    );
}

export default Detail;