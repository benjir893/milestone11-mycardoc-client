import { Helmet } from "react-helmet";
import Footer from "../Footer/Footer";
import Homebanner from "./Homebanner";
import Moreinfo2 from "./Moreinfo2";
import Ourservices from "./Ourservices";
import Contacts from "./Contacts";
import Ourproducts from "./Ourproducts";
import Ourteam from "./Ourteam";




const Home = () => {
    return (
        <div>
            <Helmet>
                <title>cardoc/Home</title>
            </Helmet>
            <Homebanner></Homebanner>
            <Moreinfo2></Moreinfo2>
            <Ourservices></Ourservices>
            <Contacts></Contacts>
            <Ourproducts></Ourproducts>
            <Ourteam></Ourteam>
            <Footer></Footer>
        </div>
    );
};

export default Home;