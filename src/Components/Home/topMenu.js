import React from 'react'

export default function topMenu() {
  return (
    <div className ="Appp">
    <header id="header" className="fixed-top header-transparent">
    <div className="container">
      <div className="logo float-left">
        <h1 className="text-light"><a href="index.html"><span>E-Learning</span></a></h1>
       
      </div>
      <nav className="nav-menu float-right d-none d-lg-block">
        <ul>
          <li className="active"><a href="index.html">Home</a></li>
          <li><a href="about.html">About Us</a></li>
          <li><a href="services.html">Course</a></li>
          <li><a href="portfolio.html">Practice questions</a></li>
          <li><a href="team.html">Team</a></li>
          {/* <li><a href="blog.html">Blog</a></li> */}
          {/* <li className="drop-down"><a href>Drop Down</a>
            <ul>
              <li><a href="/#">Drop Down 1</a></li>
              <li className="drop-down"><a href="/#">Drop Down 2</a>
                <ul>
                  <li><a href="/#">Deep Drop Down 1</a></li>
                  <li><a href="/#">Deep Drop Down 2</a></li>
                  <li><a href="/#">Deep Drop Down 3</a></li>
                  <li><a href="/#">Deep Drop Down 4</a></li>
                  <li><a href="/#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="/#">Drop Down 3</a></li>
              <li><a href="/#">Drop Down 4</a></li>
              <li><a href="/#">Drop Down 5</a></li>
            </ul>
          </li> */}
          <li><a href="contact.html">Contact Us</a></li>
        </ul>
      </nav>
    </div>
  </header>
  <section id="hero" className="d-flex justify-cntent-center align-items-center">
  <div id="heroCarousel" className="container carousel carousel-fade" data-ride="carousel">
    {/* Slide 1 */}
    <div className="carousel-item active">
      <div className="carousel-container">
        <h2 className="animate__animated animate__fadeInDown">Welcome to <span>E-Learning</span></h2>
        <p className="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
        <a href className="btn-get-started animate__animated animate__fadeInUp">Start Now</a>
      </div>
    </div>
    {/* Slide 2 */}
    <div className="carousel-item">
      <div className="carousel-container">
        <h2 className="animate__animated animate__fadeInDown">Lorem Ipsum Dolor</h2>
        <p className="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
        <a href className="btn-get-started animate__animated animate__fadeInUp">Start Now </a>
      </div>
    </div>
    {/* Slide 3 */}
    <div className="carousel-item">
      <div className="carousel-container">
        <h2 className="animate__animated animate__fadeInDown">Sequi ea ut et est quaerat</h2>
        <p className="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
        <a href className="btn-get-started animate__animated animate__fadeInUp">Read More</a>
      </div>
    </div>
    <a className="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon bx bx-chevron-left" aria-hidden="true" />
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
      <span className="carousel-control-next-icon bx bx-chevron-right" aria-hidden="true" />
      <span className="sr-only">Next</span>
    </a>
  </div>
</section>
</div>
  
  )
}
