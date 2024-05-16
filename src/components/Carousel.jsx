function Carousel() {
    return (<>
        <div className="carouselgap">
            <div id="carouselExampleIndicators" className="carousel slide mt-5 change" data-ride="carousel" data-interval="2000">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="https://sftp.sgp1.cdn.digitaloceanspaces.com/offers/image/Mm9oSZNyAAwwgx9HlB5nWqW438FXj0n0sJjS9wsT.jpg" alt="First slide" style={{ height: "400px", overflow: "hidden" }} />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://cdn.grabon.in/gograbon/images/merchant/1610000375685.png" alt="Second slide" style={{ height: "400px", overflow: "hidden" }} />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://cdn.grabon.in/gograbon/images/web-images/uploads/1658919135375/swiggy-coupons.jpg" alt="Third slide" style={{ height: "400px", overflow: "hidden" }} />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://couponswala.com/blog/wp-content/uploads/2020/03/Swiggy_todaysoffer-min.png.webp" alt="fourth slide" style={{ height: "400px", overflow: "hidden" }} />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    </>)
}
export default Carousel;