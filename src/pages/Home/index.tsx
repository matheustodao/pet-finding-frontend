import { Link } from 'react-router-dom';
import ListLostPets from '../../components/CardLostPet/ListLostPets';

import { pets } from '../../mock/pets';

export default function Home() {
  return (
    <>
      <Link to="/new-lost-pet">Report lost pet</Link>
      <ListLostPets data={pets} />
    </>
  );
}
