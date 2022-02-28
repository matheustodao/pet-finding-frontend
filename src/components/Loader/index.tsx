import Portal from "../Portal";

import './styles.scss';

type TProps = {
  isLoading: boolean,
}

export default function Loader({ isLoading }: TProps) {
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
