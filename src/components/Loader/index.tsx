import Portal from "../Portal";

import './styles.scss';

interface Props {
  isLoading: boolean,
}

export default function Loader({ isLoading }: Props) {
  if (!isLoading) {
    return null;
  }

  return (
    <Portal selectorId="portal">
      <div className="overlay">
        <div className="loader" />
      </div>
    </Portal>
  )
}
