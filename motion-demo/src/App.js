import { motion } from "framer-motion"
import './App.css';

function App() {
  return (
    <div className="motiondiv">
      <motion.p
      style={{ y: 600 }} animate={{ y: 250, opacity:1 }} initial={{ opacity: 0 }} transition={{duration:5}} className="motion"
      >Drishna Technologies(OPC) PVT. LTD.</motion.p>
      <motion.p
      style={{ x: -500 }} animate={{ x: 1, opacity:1 }} transition={{duration:5}} initial={{ opacity: 0 }} className="motion-1"
      >We provide best in class Digital solutions from Idea To complete Working & Scalable Platform for businesses</motion.p>
    </div>
  );
}

export default App;
