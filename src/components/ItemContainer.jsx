import { useState } from "react";
import { data } from "../../data";

import { FaCircleArrowLeft } from "react-icons/fa6";
import { FaArrowCircleRight } from "react-icons/fa";
function ItemContainer() {
    const [slider, setslider] = useState(0);


    return (
        <>
            <div className="container">
                <div className="itemcontainerheading">
                    <div>


                        <h3>

                            <b> What's on your mind?</b></h3>
                    </div>
                    <div className="chainsbuttons">
                        <button className="m-1" onClick={() => handlerScroll("left")
                        }><FaCircleArrowLeft /> </button>
                        <button className="m-1" onClick={() => handlerScroll("right")
                        }><FaArrowCircleRight /> </button>
                    </div >
                </div>
                <div className="itemContainer" id="gallary2" onScroll={(e) => setslider(e.target.scrollLeft)}>

                    {
                        data.map((item, index) => <img src={item.image} key={index} />

                        )
                    }
                </div>
            </div >
        </>
    )

    function handlerScroll(direction) {
        const gallery = document.getElementById("gallary2");
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
export default ItemContainer;