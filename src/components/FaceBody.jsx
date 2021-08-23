import React, {useState} from 'react';
import FaceBodyApi from '../api/FaceBodyApi';


const FaceBody = () => {
    const [produtData, setProductData] = useState(FaceBodyApi);
    return (
        <>
          <div className="productCard">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                         {
                             FaceBodyApi.map((currelement)=>{
                                 const {id, productName, productPrize, productDiscount, productRating, productsImg } = currelement;
                                 return(
                                     <>
                                       <div className="row mt-3 pb-3  border-bottom  ">
                                <div className="col-3 productImg">
                                    <img src={productsImg} alt="img" className="img-fluid" />
                                </div>

                                <div className="col-8 productInfo">
                                    <div className="productName">
                                        <p>{productName}</p>
                                    </div>

                                    <div className="productPrize">
                                        <h3><i className="fas fa-rupee-sign"></i> {productPrize}</h3> <span id="discount">{productDiscount}</span>
                                    </div>

                                    <div>
                                        <button className="btnDefault">ADD TO CART</button>
                                    </div>
                                </div>

                                <div className="col-1 productsRating">
                                    <p>{productRating} <span><i className="fas fa-star"></i></span></p>
                                </div>
                            </div>
                                     </>
                                 )
                             })
                         }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FaceBody
