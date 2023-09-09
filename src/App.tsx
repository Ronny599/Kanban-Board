import { FC } from 'react';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Footer from './components/Footer';
import AddTask from './components/AddTask';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export const App: FC<{ name: string }> = ({ name }) => {
  return (
      <>
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<Content />}/>
          <Route path="/addtask" element={<AddTask />}/>
        </Routes>
        <Footer />
      </Router>
      </>
  );
};
{/* <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/recovery-password" element={<RecoveryPassword/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Layout>
    </Router> */}