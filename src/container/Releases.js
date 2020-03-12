import React, { Component } from 'react';

import ReleaseForm from '../ui/ReleaseForm';

export default class Releases extends Component {

  constructor() {
    super();
    this.submitHandler = this.submitHandler.bind(this);
    this.state = {
      releases: [
        { id: 1, name: 'Release 01', date: '12/03/2020' },
        { id: 2, name: 'Release 02', date: '14/03/2020' },
        { id: 3, name: 'Release 03', date: '15/03/2020' },
        { id: 4, name: 'Release 04', date: '16/03/2020' },
      ]
    }
  }

  submitHandler(event, {name, date}) {
    event.preventDefault();
    var state = this.state;
    var newRelease = {
      id: this.state.releases.length + 1,
      name: name,
      date: date
    }
    /* state = state.releases.concat(newRelease);
    this.setState({
      releases: state
    }); */
    this.setState({
      releases: state.releases.concat(newRelease)
    });
  }

  render() {
    return (
      <div className="container" style={{paddingTop: '25px'}}>
        <ReleaseForm  submitHandler={this.submitHandler}/>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Release Name</th>
              <th scope="col">Release Date</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.releases.map((item, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index}</th>
                    <td>{item.name}</td>
                    <td>{item.date}</td>
                    <td><button className="btn btn-danger btn-sm">Remover</button></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}