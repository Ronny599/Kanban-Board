import { FC } from 'react';
import Navbar from './components/Navbar';
import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  return <div>
    <>
      <Navbar/>
    </>
  </div>;
};
