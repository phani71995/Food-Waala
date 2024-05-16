import { Link } from "react-router-dom"



function NavBar() {

    return (<>



        <div className="Navbarr">
            <Link to="/">
                <div className="NavbarLogo">

                    <div>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-1go4GqcWOyD_BZ4GAgS93Sb0FsVktEtUprlf9DOAC6HDEl-KEUuTSHo63Bn8XC9uT_8&usqp=CAU' style={{ width: "100px", height: "70px", overflow: "hidden", marginRight: "10px" }} />
                    </div>
                    <div>
                        <h3>Food Waala</h3>
                    </div>

                </div></Link>
            <div className="wrap">
                <div className="search">
                    <input type="text" className="searchTerm" placeholder="What are you looking for?" />
                    <button type="submit" className="searchButton">
                        <i className="fa fa-search"></i>
                    </button>
                </div>
            </div>
            <div>
                SignUp/LogIn
            </div>
        </div>

    </>)
}
export default NavBar