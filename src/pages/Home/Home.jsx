import React from 'react'
import {useTypewriter, Cursor} from 'react-simple-typewriter'

const Home = () => {
  const [text] = useTypewriter({
    words: ['Fullstack Developer', 'Educator', 'Team Player'],
    loop: {},
  });
  return (
    <>
      <div className='home'>
        <h1 style={{margin: '300px', color: 'white', justifyContent: 'center'}}>
          I'm a {''}
          <span style={{fontWeight: '500', color: 'red'}}>
            {text}
          </span>
          <Cursor />
        </h1>

    </div>
      <div className='about'>

      </div>
      <div className='skills'>

      </div>
    </>
  )
}


export default Home