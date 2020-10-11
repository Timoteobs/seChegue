import React from 'react';
import App from '../../components/App';
import Content from '../../components/Content';

function Rooms() {
  return (
    <App>
   
      <div className="content" style={{ marginTop: 10 }}>
        <h3>Salas</h3>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">

              <div className="card card-primary card-outline">
                <div className="card-header">
                  <h5 className="card-title m-0"> Educação </h5>
                </div>
                <div className="card-body">
                  <p className="card-text">Entre e interaja com outras pessoas da area!</p>
                  <a href="" className="btn btn-primary ">Entre agora</a>
                </div>
              </div>

              <div className="card card-primary card-outline">
                <div className="card-header">
                  <h5 className="card-title m-0"> Saúde </h5>
                </div>
                <div className="card-body">
                  <p className="card-text">Entre e interaja com outras pessoas da area!</p>
                  <a href="" className="btn btn-primary ">Entre agora</a>
                </div>
              </div>

            </div>

            <div className="col-lg-6">

              <div className="card card-primary card-outline">
                <div className="card-header">
                  <h5 className="card-title m-0"> Social </h5>
                </div>
                <div className="card-body">
                  <p className="card-text">Entre e interaja com outras pessoas!</p>
                  <a href="" className="btn btn-primary ">Entre agora</a>
                </div>
              </div>

              <div className="card card-primary card-outline">
                <div className="card-header">
                  <h5 className="card-title m-0"> Profissional </h5>
                </div>
                <div className="card-body">
                  <p className="card-text">Entre e interaja com outras pessoas da area!</p>
                  <a href="" className="btn btn-primary ">Entre agora</a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </App>
  );
}

export default Rooms;