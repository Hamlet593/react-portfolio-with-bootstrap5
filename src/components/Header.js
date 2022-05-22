import React from 'react';
import Typed from 'react-typed';

const Header = () => {
  return (
    <>
      <div className='header-wraper'>
        <div className='main-info text-center'>
          <h1>Գրքամոլ Հրատարակչության կողմից լույս տեսած գրքերը</h1>
          <Typed
            className='typed-text '
            strings={['Ինչու ես տխուր', 'Մայրիկ', 'Լոկուս Մորբի']}
            typeSpeed={40}
            backSpeed={60}
            startDelay={1500}
            loop
          />
          <a className="btn mt-5" href="https://www.facebook.com/" role="button">Կապվել մեզ հետ</a>
        </div>
      </div>
    </>
  )
}

export default Header;