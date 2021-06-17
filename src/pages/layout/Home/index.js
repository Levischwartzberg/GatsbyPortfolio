import * as React from 'react';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Jumbotron from '../components/Jumbotron';
import Contact from '../components/Contact';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Home() {
    const isBrowser = typeof window !== "undefined";
    const bioRef = React.useRef();
    const [navOpacity, setNavOpacity] = React.useState(0);

    const [scrollPosition, setScrollPosition] = React.useState(0);
    const handleScroll = () => {
        if (isBrowser) {
            const position = window.pageYOffset;
            setScrollPosition(position);
        }
    };

    React.useEffect(() => {
        if (isBrowser) {
            window.addEventListener('scroll', handleScroll, { passive: true });
        }

        return () => {
            if (isBrowser) {
                window.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    React.useEffect(() => {
        // console.log(scrollPosition);
        const offsetTop = bioRef.current.offsetTop;
        // console.log(offsetTop);
        if (scrollPosition+50 > offsetTop) {
            setNavOpacity((scrollPosition+50)/offsetTop);
            // console.log("opaque");
        }
        else {
            setNavOpacity((scrollPosition+50)/offsetTop);
            // console.log("clear");
        }
    }, [scrollPosition]);

    return (
        <div>
            <Header opacity={navOpacity}/>
            <Jumbotron/>
            <div ref={bioRef}></div>
            <About/>
            <Portfolio/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;