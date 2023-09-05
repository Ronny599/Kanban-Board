import { FC } from 'react';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Footer from './components/Footer';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <>
        <Navbar />
        <Content />
        <Footer />
      </>
    </div>
  );
};
