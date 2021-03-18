import Countries from "../components/Countries";
import Navigation from "../components/Navigation";

//composant Accueil :
const Home = () => {
    return (
        <div className = "home">
            <Navigation />
            <Countries />
            <img src = " /img/night-earth.jpeg" alt = "night earth" />
        </div>
    );
}

export default Home ;