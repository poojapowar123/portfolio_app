import React, { useEffect } from 'react';
import Typed from 'typed.js';
import { useRef } from 'react';

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["welcome to my profile",
        "My Name is Pooja Powar, I'm front end developer"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    }

    const typed = new Typed(typedRef.current, options)

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <div>
      {/* .container.home (for create class container home) */}
      <div className="container home">
        <div className="left">
          <h1 ref={typedRef}>Hello i'm pooja powar</h1>
          <button type="button" class="btn btn-outline-primary my-3">Hire Me</button>
        </div>
        <div className="right">
          <div className='img'>
            <img src="assets/hero.jpg" alt="hero" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home
