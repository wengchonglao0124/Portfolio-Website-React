import NavigationBar from "../subComponents/NavigationBar";
import { Outlet } from "react-router-dom";
import FooterSection from "../subComponents/FooterSection";
import GlobalError from "../subComponents/GlobalError";


function Root() {
    return(
        <div id="Root">
            <header className="App-header">
                <GlobalError />
                <NavigationBar />
            </header>

            <main className="App-main">
                <Outlet />
            </main>

            <footer className="App-footer">
                <FooterSection />
            </footer>
        </div>
    );
}

export default Root;