import { useState } from "react";
import { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import {Col, Container, Row } from 'react-bootstrap';
import { useSearchParams } from "react-router-dom";


const Product = () => {
    // API 호출 후 데이터는 항상 State값에 넣어둠
    const [productList,setProductList] = useState([]);
    const [query, setQuery] = useSearchParams();

    // Json-server에서 API 호출 함수
    const getProducts = async() => {
        let searchQuery = query.get('q')
        // 이렇게 실행하면 위에 함수를 읽어올 수 없음 
        // useEffect 두번째 인자값이 빈값이면 한번만 실행이됨
        let url = `http://localhost:5000/products?q=${searchQuery}`;
        let response = await fetch(url);
        let data = await response.json();
        setProductList(data);
    }

    useEffect(()=>{
        getProducts();
    },[query])
    
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