import React, { useEffect, useContext } from 'react';
import './Feed.css'
import Content from '../../components/Content';
import App from '../../components/App';

function Feed({ match }) {

  useEffect( () => { 

  }, [])

  return (
    <App>
      <Content title="Feed 😍">
        <section id="post">
          <div className="area">
            <div className="post">
              <div className="user-block">
                <img className="img-circle img-bordered-sm" src="../../dist/img/user1-128x128.jpg" alt="user image" />
                <span className="username">
                  <a href="#">Jonathan Burke Jr.</a>
                </span>
                
              </div>
              <p>
                Lorem ipsum represents a long-held tradition for designers,
                typographers and the like. Some people hate it and argue for
                its demise, but others ignore the hate as they create awesome
                tools to help create filler text for everyone from bacon lovers
                to Charlie Sheen fans.
              </p>
            </div>
          </div>

          <div className="area">
            <div className="post">
              <div className="user-block">
                <img className="img-circle img-bordered-sm" src=".../../dist/img/avatar2.png" alt="user image" />
                <span className="username">
                  <a href="#">Emerson</a>
                </span>
                
              </div>
              <p>
                Lorem ipsum represents a long-held tradition for designers,
                typographers and the like. Some people hate it and argue for
                its demise, but others ignore the hate as they create awesome
                tools to help create filler text for everyone from bacon lovers
                to Charlie Sheen fans.
              </p>
            </div>
          </div>

          <div className="area">
            <div className="post">
              <div className="user-block">
                <img className="img-circle img-bordered-sm" src="../../dist/img/avatar.png" alt="user image" />
                <span className="username">
                  <a href="#">Luiz almeidda</a>
                </span>
                
              </div>
              <p>
                Lorem ipsum represents a long-held tradition for designers,
                typographers and the like. Some people hate it and argue for
                its demise, but others ignore the hate as they create awesome
                tools to help create filler text for everyone from bacon lovers
                to Charlie Sheen fans.
              </p>
            </div>
          </div>

          <div className="area">
            <div className="post">
              <div className="user-block">
                <img className="img-circle img-bordered-sm" src="../../dist/img/avatar3.png" alt="user image" />
                <span className="username">
                  <a href="#">Maria Sales</a>
                </span>
                
              </div>
              <p>
                Lorem ipsum represents a long-held tradition for designers,
                typographers and the like. Some people hate it and argue for
                its demise, but others ignore the hate as they create awesome
                tools to help create filler text for everyone from bacon lovers
                to Charlie Sheen fans.
              </p>
            </div>
          </div>

          <div className="area">
            <div className="post">
              <div className="user-block">
                <img className="img-circle img-bordered-sm" src=".../../dist/img/avatar2.png" alt="user image" />
                <span className="username">
                  <a href="#">Vitoria Santos</a>
                </span>
                
              </div>
              <p>
                Lorem ipsum represents a long-held tradition for designers,
                typographers and the like. Some people hate it and argue for
                its demise, but others ignore the hate as they create awesome
                tools to help create filler text for everyone from bacon lovers
                to Charlie Sheen fans.
              </p>
            </div>
          </div>
        </section>
      </Content>
    </App>
  );
}

export default Feed;