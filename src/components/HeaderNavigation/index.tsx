import { ReactChildren } from 'react';

import { useNavigate } from 'react-router-dom'

import { ArrowLeft } from 'phosphor-react';

import './styles.scss';

interface Props {
  children?: ReactChildren,
}

export default function HeaderNavigation({ children }: Props) {
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
