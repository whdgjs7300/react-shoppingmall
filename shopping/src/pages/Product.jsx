import { useState } from "react";
import { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import {Col, Container, Row } from 'react-bootstrap';


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
            <Container>
                <Row>
                    {
                        productList.map((menu)=>(
                            <Col lg={3}> <ProductCard item={menu}/> </Col>
                        ))
                    }
                </Row>
            </Container>
        </div>
    );
}

export default Product;