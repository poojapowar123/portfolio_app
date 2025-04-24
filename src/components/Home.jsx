import React, { useEffect } from 'react';
import Typed from 'typed.js';
import { useRef } from 'react';

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Welcome to my profile",
        "My name is pooja powar, I'm front end developer"],
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
          <h2 ref={typedRef}>Hello i'm pooja powar</h2>
          <button type="button" class="btn btn-outline-primary my-3 fw-semibold">Hire Me</button>
        </div>
        <div className="right">
          <div className='img'>
            <img src="assets/developer1.jpg" alt="hero" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home
