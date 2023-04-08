import { useState } from "react";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { productAction } from "../redux/actions/productAction";

const Detail = () => {
    const {id} = useParams();
    let productList = useSelector(state=>state.product.selectedItem);
    const dispatch = useDispatch();

    const getProductDetail = async () => {
        dispatch(productAction.getDetailProducts(id))
    }

    // 상세 api 호출
    useEffect(()=>{
        getProductDetail()    
    },[])

    return ( 
        <div>
            <Container>
                <Row>
                    <Col className="product-img">
                        <img src={productList?.img} alt="" />
                    </Col>

                    <Col>
                        <div>{productList?.title}</div>
                        <div>{productList?.price}</div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Detail;