import { useState } from "react";
import { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import {Col, Container, Row } from 'react-bootstrap';
import { useSearchParams } from "react-router-dom";
import {productAction} from '../redux/actions/productAction';
import { useDispatch, useSelector } from "react-redux";

const Product = () => {
    // API 호출 후 데이터는 항상 State값에 넣어둠
    const productList = useSelector(state=>state.productList);
    const [query, setQuery] = useSearchParams();
    const dispatch = useDispatch();

    // Json-server에서 API 호출 함수
    // 미들웨어를 사용하면 이함수에서 미들웨어함수를 호출해야함
    const getProducts = () => {
        let searchQuery = query.get('q') || "";
        // 이렇게 실행하면 위에 함수를 읽어올 수 없음 
        // useEffect 두번째 인자값이 빈값이면 한번만 실행이됨
        dispatch(productAction.getProducts(searchQuery));
        
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