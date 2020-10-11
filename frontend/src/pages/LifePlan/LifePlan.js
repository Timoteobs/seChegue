import React from 'react';
import App from '../../components/App';
import Content from '../../components/Content';

function LifePlan() {
  return (
    <App>

      <div className="col-12 col-sm-12 col-lg-12">
        <div className="card card-primary card-tabs">
          <div className="card-header p-0 pt-1">
            <ul className="nav nav-tabs" id="custom-tabs-one-tab" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" id="custom-tabs-one-home-tab" data-toggle="pill" href="#custom-tabs-one-home" role="tab" aria-controls="custom-tabs-one-home" aria-selected="true">Planejamento</a>
              </li>
            </ul>
          </div>
          <div className="card-body">
            <div className="tab-content" id="custom-tabs-one-tabContent">
              <div className="tab-pane fade active show" id="custom-tabs-one-home" role="tabpanel" aria-labelledby="custom-tabs-one-home-tab">
                <div className="card card-primary">
                  <div className="card-header">
                    <h3 className="card-title">Plano</h3>
                  </div>
                  <div className="card-body">
                    <div className="form-group">
                      <label for="inputName">Lista de desejos</label>
                      <textarea id="inputDescription" className="form-control" rows="4"></textarea>
                    </div>

                    <div className="form-group">
                      <label for="inputName">Qualidades de possuo</label>
                      <textarea id="inputDescription" className="form-control" rows="4"></textarea>
                    </div>

                    <div className="form-group">
                      <label for="inputName">O que preciso melhorar "Defeitos"</label>
                      <textarea id="inputDescription" className="form-control" rows="4"></textarea>
                    </div>

                    <div className="form-group">
                      <label for="inputName">Qualidades de gostaria de ter</label>
                      <textarea id="inputDescription" className="form-control" rows="4"></textarea>
                    </div>

                    <div className="form-group">
                      <label for="inputName">Resumo do dia</label>
                      <textarea id="inputDescription" className="form-control" rows="4"></textarea>
                    </div>

                    <div className="form-group">
                      <label for="inputName">Meu poróposito</label>
                      <textarea id="inputDescription" className="form-control" rows="4"></textarea>
                    </div>

                    <div className="form-group">
                      <label for="inputName">Definindo metas</label>
                      <textarea id="inputDescription" className="form-control" rows="4"></textarea>
                    </div>

                    <label for="inputName">Plano de ação</label>
                    <div className="form-group">
                    <label for="inputName">Metas</label>
                      <textarea id="inputDescription" className="form-control" rows="4"></textarea>
                    </div>

                    <div className="form-group">
                    <label for="inputName">Passo a passo</label>
                      <textarea id="inputDescription" className="form-control" rows="4"></textarea>
                    </div>

                    <div className="form-group">
                    <label for="inputName">Possíveis deificultades</label>
                      <textarea id="inputDescription" className="form-control" rows="4"></textarea>
                    </div>

                    <div className="form-group">
                    <label for="inputName">Possíveis soluções</label>
                      <textarea id="inputDescription" className="form-control" rows="4"></textarea>
                    </div>

                    <label for="inputName">Detalahndo plano de ação</label>

                    <div className="form-group">
                    <label for="inputName">O que</label>
                      <textarea id="inputDescription" className="form-control" rows="4"></textarea>
                    </div>

                    <div className="form-group">
                    <label for="inputName">Como</label>
                      <textarea id="inputDescription" className="form-control" rows="4"></textarea>
                    </div>

                    <div className="form-group">
                    <label for="inputName">Quando</label>
                      <textarea id="inputDescription" className="form-control" rows="4"></textarea>
                    </div>

                    <div className="form-group">
                    <label for="inputName">Porque</label>
                      <textarea id="inputDescription" className="form-control" rows="4"></textarea>
                    </div>

                    <input type="submit" value="CRIAR PLANO" className="btn btn-success float-right" />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </App>
  );
}

export default LifePlan;