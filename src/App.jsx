import Navbar from "./components/navbar/Navbar.jsx";
import Hero from "./components/hero/Hero.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";

export default function App(){
    return <>
        <Navbar />
        <main>
            <Hero />
            <Portfolio />
        </main>
    </>;
}