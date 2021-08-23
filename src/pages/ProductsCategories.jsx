import React from 'react';
import ProductCardSale from '../components/ProductCardSale';
import EssentialsCard from '../components/EssentialsCard';
import CologneCard from '../components/CologneCard';
import TrimmerCard from '../components/TrimmerCard';
import FaceBody from '../components/FaceBody';
import BeardCard from '../components/BeardCard';
import HairCard from '../components/HairCard';
import SkinCard from '../components/SkinCard';
const ProductsCategories = () => {
    return (
        <>
            <div className="productsCategories">
                <div className="container-fluid">
                    <div className="row mt-3">
                        <div className="col-11 mx-auto">
                            <h2 className="mainHeading">Our Products</h2>
                            <div className="productsCategoriesList">
                                <ul class="nav nav-tabs" id="myTab" role="tablist">


                                    <li class="nav-item sale" role="presentation">
                                        <a class="nav-link active commonstyle" id="sale-tab" data-bs-toggle="tab" data-bs-target="#sale" role="tab" aria-controls="home" aria-selected="true">Sale</a>
                                    </li>


                                    <li class="nav-item essentials" role="presentation">
                                        <a class="nav-link commonstyle" id="essentials-tab" data-bs-toggle="tab" data-bs-target="#essentials" type="a" role="tab" aria-controls="essentials" aria-selected="false">Essentials</a>
                                    </li>



                                    <li class="nav-item cologne" role="presentation">
                                        <a class="nav-link commonstyle" id="cologne-tab" data-bs-toggle="tab" data-bs-target="#cologne" type="a" role="tab" aria-controls="cologne" aria-selected="false">Cologne</a>
                                    </li>



                                    <li class="nav-item trimmer" role="presentation">
                                        <a class="nav-link commonstyle" id="trimmer-tab" data-bs-toggle="tab" data-bs-target="#trimmer" type="a" role="tab" aria-controls="trimmer" aria-selected="false">Trimmer</a>
                                    </li>



                                    <li class="nav-item face_body" role="presentation">
                                        <a class="nav-link commonstyle" id="face_body-tab" data-bs-toggle="tab" data-bs-target="#face_body" type="a" role="tab" aria-controls="face_body" aria-selected="false">Face & Body</a>
                                    </li>




                                    <li class="nav-item beard" role="presentation">
                                        <a class="nav-link commonstyle" id="beard-tab" data-bs-toggle="tab" data-bs-target="#beard" type="a" role="tab" aria-controls="beard" aria-selected="false">Beard</a>
                                    </li>




                                    <li class="nav-item hair" role="presentation">
                                        <a class="nav-link commonstyle" id="hair-tab" data-bs-toggle="tab" data-bs-target="#hair" type="a" role="tab" aria-controls="hair" aria-selected="false">Hair</a>
                                    </li>



                                    <li class="nav-item skin" role="presentation">
                                        <a class="nav-link commonstyle" id="skin-tab" data-bs-toggle="tab" data-bs-target="#skin" type="a" role="tab" aria-controls="skin" aria-selected="false">Skin</a>
                                    </li>


                                </ul>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* list of product  */}
            <div className="productsWapper">
                <div className="container-fluid">
                    <div className="row mt-3">
                        <div className="col-11 mx-auto">
                            <div className="productCard">


                                <div class="tab-content" id="myTabContent">

                                    <div class="tab-pane fade show active" id="sale" role="tabpanel" aria-labelledby="sale-tab">
                                        <ProductCardSale />
                                    </div>
                                    <div class="tab-pane fade" id="essentials" role="tabpanel" aria-labelledby="essentials-tab">
                                        <EssentialsCard />
                                    </div>
                                    <div class="tab-pane fade" id="cologne" role="tabpanel" aria-labelledby="cologne-tab">
                                        <CologneCard />
                                    </div>
                                    <div class="tab-pane fade" id="trimmer" role="tabpanel" aria-labelledby="trimmer-tab">
                                        <TrimmerCard />
                                    </div>
                                    <div class="tab-pane fade" id="face_body" role="tabpanel" aria-labelledby="face_body-tab">
                                        <FaceBody />
                                    </div>
                                    <div class="tab-pane fade" id="beard" role="tabpanel" aria-labelledby="beard-tab">
                                        <BeardCard />
                                    </div>
                                    <div class="tab-pane fade" id="hair" role="tabpanel" aria-labelledby="hair-tab">
                                        <HairCard />
                                    </div>
                                    <div class="tab-pane fade" id="skin" role="tabpanel" aria-labelledby="skin-tab">
                                    <SkinCard/>
                                    </div>
                                </div>




                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductsCategories
