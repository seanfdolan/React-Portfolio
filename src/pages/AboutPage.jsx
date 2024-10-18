// import myPhoto from '../assets/my-photo.jpg';    keep this line

export default function About() {
    return (
      <div className="container pt-4">
        <p>
        Enthusiastic and driven Full Stack Developer with a recent graduation 
        from a rigorous bootcamp, where I honed my skills in both front-end and 
        back-end technologies. Passionate about building responsive and user-friendly 
        applications, I have a strong foundation in HTML, CSS, JavaScript, and frameworks 
        like React and Node.js. Eager to leverage my problem-solving abilities and collaborative 
        spirit to contribute to innovative projects and drive success in a dynamic tech environment.
        </p>
        <section className="features-icons bg-light text-center m-4">
          <div className="container">
            <div className="row p-2">
              <div className="col-lg-4">
                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    <i className="bi-window m-auto text-primary" />
                  </div>
                  <h3>Fully Responsive</h3>
                  <p className="lead mb-0">
                    This theme will look great on any device, no matter the size!
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    <i className="bi-layers m-auto text-primary" />
                  </div>
        <img src="/images/headshot.JPG" alt="Sean Dolan" class="headshot" style={{width: '300px', height: 'auto'}}/>
                  {/* <h3>Bootstrap 5 Ready</h3>
                  <p className="lead mb-0">
                    Featuring the latest build of the new Bootstrap 5 framework!
                  </p> */}
                </div>
              </div>
              <div className="col-lg-4">
                <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    <i className="bi-terminal m-auto text-primary" />
                  </div>
                  <h3>Easy to Use</h3>
                  <p className="lead mb-0">
                    Ready to use with your own content, or customize the source
                    files!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <p>
        I am a full stack web developer with a background in education and a passion for learning new things
        </p>
        <p>
          Critical thinker with strong analytic modeling (and technical) skills and a proven ability to work in a fast-paced environment.
        </p>
        <p>
          Ability to thrive in a team environment and work independently with minimal supervision.
        </p>
      </div>
    );
  }
  