import AllProducts from "./AllProducts";
import Banner from "./Banner";
import Nav from "./Nav";


const Home = () => {
    return (
        <div className="min-h-screen" >
            <Nav/>
            <Banner/>
            <AllProducts/>
        </div>
    );
};

export default Home;