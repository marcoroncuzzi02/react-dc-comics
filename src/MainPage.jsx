import Card from "./Card.jsx"

const MainPage = () =>{
    return(
        <main>
            <div className="jumbotron">
                <button className="btn">current series</button>
            </div>

            <div className="content">
                <Card/>
            </div>

            <div className="nav-cards">
                <div className="nav-card">
                    <img src="img\buy-comics-digital-comics.png" alt="" />
                    <span>DIGITAL COMICS</span>
                </div>
                <div className="nav-card">
                    <img src="img\buy-comics-merchandise.png" alt="" />
                    <span>DC MERCHANDISE</span>
                </div>
                <div className="nav-card">
                    <img src="img\buy-comics-subscriptions.png" alt="" />
                    <span>SUBSCRIPTION</span>
                </div>
                <div className="nav-card">
                    <img src="img\buy-comics-shop-locator.png" alt="" />
                    <span>COMING SHOP LOCATOR</span>
                </div>
                <div className="nav-card">
                    <img src="img\buy-dc-power-visa.svg" alt="" />
                    <span>DC POWER VISA</span>
                </div>
            </div>
        </main>
    )
}
export default MainPage
