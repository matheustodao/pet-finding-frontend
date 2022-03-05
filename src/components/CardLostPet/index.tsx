import { Pet } from '../../interfaces/Pet';
import './styles.scss';

interface Props {
  pet: Pet,
}

export default function CardLostPet({ pet }: Props) {
  function formatDate(date: string, local: string) {
    const dateTime = new Date(date);

    return dateTime.toLocaleDateString(local, {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  }
  return (
    <article>
        <div className="image">
          {Boolean(pet.Image)
            ? <img src={pet.Image} alt={pet.TypeOfPet} />
            : (
              <span>I couldn't take a picture</span>
            )
          }
        </div>

        <div className="tags">
          {!pet.HasBeenFound
            ? (
              <>
                <span className="tag">{pet.Municipality}, {pet.State}</span>
                <span className="tag">
                  {
                    formatDate(pet.Date, 'pt-BR').split(' ')[0]
                  }
                </span>
              </>
            )
            : (
              <span className="tag found">Found your family</span>
            )}
        </div>

        <div className="informations">
          <button type="button">
            <h2>
              {pet.TypeOfPet}
              {pet.Sex && <span>, {pet.Sex}</span>}
            </h2>
            <p>{pet.Description}</p>
          </button>
        </div>
    </article>
  )
}
