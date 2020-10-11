import React from 'react';
import Profile from '../../images/profile.jpg';
import PlusLogo from '../../images/plus.png';
import Remove from '../../images/remove.png'
import './Main.css';
import App from '../../components/App';
import Content from '../../components/Content';

function Main() {
  return (
    <App>
      <Content title="Sugestões de Amizade 🤗">
      <div className="main-container">
        <ul>
          <li>
            <img src={Profile} alt="profile" id="profile" />
            <footer>
              <strong>Mica do braith</strong>
              <p>Passar no Enem</p>
            </footer>
            <div className="buttons" >
              <button type="button" id="remove">
                <img src={Remove} alt="remove" />
              </button>
              <button type="button" id="add">
                <img src={PlusLogo} alt="plus" />
              </button>
            </div>
          </li>
        </ul>
      </div>
      </Content>
    </App>
  );
}

export default Main;