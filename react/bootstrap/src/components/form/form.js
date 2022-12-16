import React from "react";
import genius from '../../images/dog-with-computer.jpg'

export default class form extends React.Component {
  render = () => <section>
    <div className="container">
      <div className="row">
        <div className="col-lg offset-lg-2 g-0 mx-auto">
          <div className="fill-form form-box">
            <div className="row g-0">
              <div className="col-xl-6 col-lg-12 d-md-none d-sm-none s-xs-none d-lg-block form-box__img">
                <img src={genius} alt="img" />
              </div>
              <div className="col-xl-6 col-lg-12 col-md-12 form-box__content">
                <div id="box-title">
                  <p className="main-form-text">Fill up the form</p>
                  <p>First Time Register Page</p>
                </div>
                <form>
                  <div className="mt-3">
                    <input className="form-control" id="name" name="name"
                      placeholder="your name goes here..." type="text" />
                  </div>
                  <div className="mt-3">
                    <input className="form-control" id="email" name="email"
                      placeholder="your email goes here..." type="email" />
                  </div>
                  <div className="d-grid mt-4">
                    <button className="btn btn-primary btn-lg"
                      type="submit" value="send">
                      <svg xmlns="http://www.w3.org/2000/svg"
                        width="27" height="27" fill="currentColor"
                        className="bi bi-mailbox2" viewBox="0 0 16 16">
                        <path d="M9 8.5h2.793l.853.854A.5.5 0 0 0 13 9.5h1a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5H9v1z" />
                        <path d="M12 3H4a4 4 0 0 0-4 4v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7a4 4 0 0 0-4-4zM8 7a3.99 3.99 0 0 0-1.354-3H12a3 3 0 0 1 3 3v6H8V7zm-3.415.157C4.42 7.087 4.218 7 4 7c-.218 0-.42.086-.585.157C3.164 7.264 3 7.334 3 7a1 1 0 0 1 2 0c0 .334-.164.264-.415.157z" />
                      </svg>
                      {" "}
                      Send Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
}