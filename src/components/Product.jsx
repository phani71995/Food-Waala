import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { API_URL } from "./ApiUrl";

import Footer from "./Footer";
import { useParams } from "react-router";


function Product() {
    const firm = useParams()
    const [product, setProducts] = useState({})

    const p = product.products;
    async function productdata() {
        const response = await fetch(`${API_URL}/product/${firm.frim}/products`)
        const result = await response.json();

        setProducts(result);
        console.log(result)
    }

    useEffect(() => {
        productdata();

    }, [firm])

    return (<>
        <NavBar></NavBar>

        <div className="container productpage" >
            <h4 className="productFirmName" >{product.restaurantName}</h4>

            <div className="card w-75  productFirmcard" >
                <div className="card-body">
                    This is some text within a card body.
                </div>
            </div>


            {product.products && product.products.map((item) => (
                <div key={item._id} className="productContainer">
                    <div className="itemsdes">
                        <h3>{item.productName}</h3>
                        <p>Price:  &#8377;{item.price}</p>
                        <p>Category: {item.category}</p>
                        <p>description: {item.description}</p>
                    </div>
                    <div>
                        <img src={`${API_URL}/uploads/${item.image}`} />
                    </div>
                </div>
            ))}

        </div >
        <Footer /> </>)
}
export default Product;