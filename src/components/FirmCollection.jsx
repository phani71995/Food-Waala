import { useContext, useEffect, useState } from "react";
import { context } from "../App";
import { API_URL } from "./ApiUrl";
import Getdata from "./ApiData"
import { Link } from "react-router-dom";
import Product from "./Product";

function FirmCollection() {
    const vendorsData = useContext(context)

    const [sliderButton, setsliderButton] = useState(0);
    const [region, setregion] = useState("all");
    const [showCount, setShowCount] = useState(4);

    function filterHandler(region) {
        setregion(region);
        setShowCount(4);
    }

    function handleShowMore() {
        setShowCount((prevCount) => prevCount + 4); // Increase count by 4 on "show more" click
    }
    return (<>
        <div className="FirmCollectionButtonContainer">
            <div className="FirmCollectionHadding">
                <h3 className="mt-5"> <b>Restaurants with online food delivery in Hyderabad</b></h3>
            </div >

        </div >
        <div className="m-2 FirmButtons">
            <button class="btn btn-primary" id="firstbtn" onClick={() => filterHandler("all")}>ALL</button>
            <button class="btn btn-secondary" onClick={() => filterHandler("south-indian")}>  south-indian</button>

            <button class="btn btn-success" onClick={() => filterHandler("north-indian")}> north-indian</button>
            <button class="btn btn-danger" onClick={() => filterHandler("chinese")}> chinese</button>
            <button class="btn btn-warning" onClick={() => filterHandler("bakery")}> bakery</button>

        </div>

        <div>
            <div className="conatiner">
                <div className="row">



                    {
                        vendorsData && vendorsData.map((vendor) =>
                            vendor.firm.map((firm, index) => {

                                if ((region === "all" || firm.region.includes(region)) && index < showCount) {

                                    return (


                                        <>

                                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3 imges">
                                                <Link to={`/product/${firm._id}/products`}>
                                                    <img src={`${API_URL}/uploads/${firm.image}`} />
                                                    <div className="offersDiv">
                                                        <strong><h6>{firm.offer}</h6></strong>
                                                    </div>
                                                    <div className="FirmCollectionFirmName">
                                                        <strong> <div key="{vendor._id}">
                                                            {firm.firmName}</div ></strong>
                                                        <div>{firm.region.join(",")}</div>
                                                        <div >{firm.area}</div>
                                                    </div></Link >
                                            </div >



                                        </>
                                    )

                                }
                            })




                        )
                    }


                </div>

            </div>
        </div >
        {vendorsData && showCount < vendorsData.reduce((total, vendor) => total + vendor.firm.length, 0) && (
            <div className="text-center">
                <button className="btn btn-primary" onClick={handleShowMore}>Show More</button>
            </div>
        )}

    </>)
}
export default FirmCollection;


