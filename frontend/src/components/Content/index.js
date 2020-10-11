import React from 'react';

export default props => {

  const height = sizeOfThings();

  function sizeOfThings(){
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    if (windowWidth < 1400){
      return '590px'
    }

    if (windowWidth >= 1041 ){
      return '750px';
    }
  };

  sizeOfThings();

  return (
    <section className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1>{props.title}</h1>
          </div>
        </div>
      </div>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <div className="card-body table-responsive p-0" style={{ height: `${height}` }}>
                    <table className="table table-head-fixed">
                      <section id="post">
                        {props.children}
                      </section>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

