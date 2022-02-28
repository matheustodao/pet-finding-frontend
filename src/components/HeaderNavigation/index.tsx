import { ReactChildren } from 'react';

import { useNavigate } from 'react-router-dom'

import { ArrowLeft } from 'phosphor-react';

import './styles.scss';

type TProps = {
  children?: ReactChildren,
}

export default function HeaderNavigation({ children }: TProps) {
  const navigate = useNavigate();
  return (
    <header>
      <nav>
        <button onClick={() => navigate(-1)} className="button__To_Back">
          <ArrowLeft size={24} />
          {' '}
          back
        </button>

        {children}
      </nav>
    </header>
  )
}
