import { useState } from "react";
import { useEffect } from "react";
import ProductCard from "../components/ProductCard";


const Product = () => {
    // API 호출 후 데이터는 항상 State값에 넣어둠
    const [productList,setProductList] = useState([]);

    // Json-server에서 API 호출 함수
    const getProducts = async() => {
        let url = `http://localhost:5000/products`;
        let response = await fetch(url);
        let data = await response.json();
        setProductList(data);
    }

    useEffect(()=>{
        getProducts();
    },[])
    
    return ( 
        <div>
            <ProductCard/>
        </div>
    );
}

export default Product;