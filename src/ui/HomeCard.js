import React from 'react';

const HomeCard = (props) => (
  <div className="col-12 col-sm-4" style={{paddingTop:'7px'}}>
    <div className="card" style={{width: '20rem'}}>
      <img className="rounded mx-auto d-block" style={{paddingTop:'3px', width:'100px', height:'100px'}} src="https://imagens.canaltech.com.br/empresas/690.400.jpg" alt="Card image cap"/>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
        <button onClick={props.action} className="btn btn-primary">{props.title}</button>
      </div>
    </div>
  </div>
);

export default HomeCard;