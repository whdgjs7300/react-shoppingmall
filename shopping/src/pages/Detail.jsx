import { useState } from "react";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
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
            <Container>
                <Row>
                    <Col className="product-img">
                        <img src={product?.img} alt="" />
                    </Col>

                    <Col>
                        <div>{product?.title}</div>
                        <div>{product?.price}</div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Detail;