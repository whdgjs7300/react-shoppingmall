

const ProductCard = ({item}) => {



    return ( 
        <div className="product-card">
            <img src={item?.img} />
            <div>{item?.choice == true ? "Conscious Choice" : "" }</div>
            <div>{item?.title}</div>
            <div>{item?.price}</div>
            <div>{item?.new == true ? "신제품" : ""}</div>
        </div>
    );
}

export default ProductCard;