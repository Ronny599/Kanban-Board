import { FC } from 'react';
import Navbar from './components/Navbar';
import Content from './components/Content';
export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <>
        <Navbar />
        <Content />
      </>
    </div>
  );
};
