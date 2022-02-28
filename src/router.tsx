import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import NewLostPet from './pages/NewLostPet';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/new-lost-pet" element={<NewLostPet />}/>
    </Routes>
  );
}
