import Banner from "./Components/Banner";
import Events from "./Components/Events";
import HostEvent from "./Components/HostEvent";
import QrScanner from "./Components/QrScanner";
import Ticketing from "./Components/Ticketing";
import Footer from "./Shared/Footer";
import Navbar from "./Shared/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Events></Events>
      <HostEvent></HostEvent>
      <QrScanner></QrScanner>
      <Ticketing></Ticketing>
      <Footer></Footer>
    </>
  );
}

export default App;
