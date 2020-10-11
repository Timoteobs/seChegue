import React from 'react';
import './Feed.css'
import Content from '../../components/Content';
import App from '../../components/App';

function Feed() {
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
                <span className="description">Shared publicly - 7:30 PM today</span>
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

          {/* <article>
            <header>
              <div className="title">
                <strong>Autor</strong>
                <span>Titulo</span>
              </div>
            </header>
            <footer>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mattis,
                magna nec vulputate lobortis, lorem lacus tincidunt eros, quis iaculis
                quam leo non libero. Phasellus ultrices ex neque, nec cursus velit dignissim sit amet.
                Aliquam posuere leo ante, nec venenatis ipsum gravida faucibus.
            </p>
            </footer>
          </article> */}
        </section>
      </Content>
    </App>
  );
}

export default Feed;