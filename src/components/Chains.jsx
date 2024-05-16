import { useContext, useEffect, useState } from "react";
import { API_URL } from "./ApiUrl";
import Getdata from "./ApiData"
import { context } from "../App";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { FaArrowCircleRight } from "react-icons/fa";


function Chains() {

    const vendorsData = useContext(context)
    //const [vendorsData, setvendorsData] = useState()
    const [sliderButton, setsliderButton] = useState(0);



    /* By using useContext hook in app component
        useEffect(() => {
    
            async function fetchData() {
                try {
                    const data = await Getdata(`${API_URL}/vendor/all-vendors`);
    
                    setvendorsData(data.vendors);
                    console.log(data.vendors);
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            }
    
    
    
    
            fetchData(); // Call the async function here
    
        }, []);*/
    return (<>
        <div className="chainsButtonContainer">
            <div className="chainsHadding">
                <h3 className=""> <b> Top restaurant chains in Hyderabad</b></h3>
            </div >
            <div className="chainsbuttons">
                <button className="m-1" onClick={() => handlerScroll("left")
                }><FaCircleArrowLeft /> </button>
                <button className="m-1" onClick={() => handlerScroll("right")
                }><FaArrowCircleRight /> </button>
            </div >
        </div >
        <section id="chainsgallery" onScroll={(e) => setsliderButton(e.target.scrollLeft)}>
            <div className="chainsContainer">
                {
                    vendorsData && vendorsData.map((vendor) => {
                        return (

                            vendor.firm.map((firm) => {

                                return (


                                    <>

                                        <div className="chainsImage">
                                            <img src={`${API_URL}/uploads/${firm.image}`} />
                                            <div className="chainsFirmName">
                                                <h5 key="{vendor._id}">{firm.firmName}</h5>
                                                <h5>{firm.region}</h5>
                                                <h5 >{firm.area}</h5>
                                            </div>
                                        </div>



                                    </>
                                )


                            })


                        )

                    })
                }


            </div > </section> </>)


    function handlerScroll(direction) {
        const gallery = document.getElementById("chainsgallery");
        const scorllAmount = 500;
        if (direction === "left") {
            gallery.scrollTo({
                left: gallery.scrollLeft - scorllAmount,
                behavior: "smooth"
            })
        }
        else if (direction === "right") {
            gallery.scrollTo({
                left: gallery.scrollLeft + scorllAmount,
                behavior: "smooth"
            })
        }



    }

}
export default Chains;