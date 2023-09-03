import { FC } from 'react';
import Navbar from './components/Navbar';
import Container from './components/Container';
export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <>
        <Navbar />
        <Container />
      </>
    </div>
  );
};
