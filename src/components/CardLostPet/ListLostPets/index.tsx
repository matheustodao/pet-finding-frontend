import CardLostPet from '..'
import { Pet } from '../../../interfaces/Pet'

interface Props {
  data: Pet[] | null,
}

export default function ListLostPets({ data }: Props) {
  return (
    <>
      {data?.map((pet) => (
        <CardLostPet key={pet.Id} pet={pet} />
      ))}
    </>
  )
}
