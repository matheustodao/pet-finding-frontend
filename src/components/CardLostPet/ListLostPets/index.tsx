import CardLostPet from '..'

type TProps = {
  data: TPet[] | null,
}

export default function ListLostPets({ data }: TProps): any {
  return (
    data?.map((pet) => (
      <CardLostPet key={pet.Id} pet={pet} />
    ))
  )
}
