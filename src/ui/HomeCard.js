import React from 'react';

const HomeCard = (props) => (
  <div className="col-12 col-sm-4">
    <div className="card" style={{width: '20rem'}}>
      <img className="card-img-top rounded mx-auto d-block" style={{paddingTop:'3px', width:'100px', height:'100px'}} src="https://imagens.canaltech.com.br/empresas/690.400.jpg" alt="Card image cap"/>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
        <a href="#" onClick={props.action} className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
);

export default HomeCard;