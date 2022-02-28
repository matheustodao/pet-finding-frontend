import { ReactChild, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';

type TProps = {
  children: ReactChild,
  selectorId: string,
}

export default function Portal({ children, selectorId }: TProps) {
  const refBody = useRef(document.querySelector('body') as HTMLBodyElement);

  useEffect(() => {
    window.scroll({ top: 0, behavior: 'smooth' })
    refBody.current.style.overflow = 'hidden';

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      refBody.current.style.overflow = 'scroll';
    }
  }, [selectorId])
  return ReactDOM.createPortal(
    <>{children}</>,
    document.getElementById(selectorId) as HTMLElement);
}
