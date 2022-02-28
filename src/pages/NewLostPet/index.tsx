import HeaderNavigation from '../../components/HeaderNavigation';
import Select from 'react-select'


export default function NewLostPet() {
  const options = [
    { value: 'dog', label: 'dog'},
    { value: 'cat', label: 'cat'},
    { value: 'rabbit', label: 'rabbit'},
    { value: 'outro', label: 'outro'},
  ]
  return (
    <>
      <HeaderNavigation />

      <Select
        className="react-select abc" classNamePrefix="react-select"
        options={options}
        autoFocus={false}
      />

    </>
  );
}
