import { FC } from 'react';
import Navbar from './components/Navbar';

export const App: FC<{ name: string }> = ({ name }) => {
  return <div>
    <>
      <Navbar/>
    </>
  </div>;
};
