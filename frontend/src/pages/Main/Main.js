import React from 'react';
import Profile from '../../images/profile.jpg';
import Profile2 from '../../images/profile2.jpg';
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
              <strong>Micaele Marilia</strong>
              <p>Não busque ser alguém de sucesso, mas alguém de valor.</p>
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

          <li>
            <img src={Profile2} alt="profile" id="profile" />
            <footer>
              <strong>Gustavo</strong>
              <p>Pessoas silenciosas têm as mentes mais barulhentas.</p>
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