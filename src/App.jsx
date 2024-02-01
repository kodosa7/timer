import './output.css';
import './hardcoded.css';

import Header from "./components/Header";
import Timer from "./components/Timer";
import Footer from './components/Footer';

export default function App() {
  return (
      <>
          <Header />
          <Timer />
          <Footer />
      </>
  );
};