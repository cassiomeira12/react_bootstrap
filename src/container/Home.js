import React, { Component } from 'react';
import HomeCard from '../ui/HomeCard';

export default class Home extends Component {

  homeCardReleases = {
    title: 'Realeases',
    text: 'Manage Releases',
    action: () => alert('Release Clicked')
  }

  homeCardBacklog = {
    title: 'Backlog',
    text: 'Manage Releases',
    action: () => alert('Backlog Clicked')
  }

  homeCardSprints = {
    title: 'Sprints',
    text: 'Manage Sprints',
    action: () => alert('Sprints Clicked')
  }

  render() {
    return (
      <div className="container text-center">
        <div className="row">
          <HomeCard {...this.homeCardReleases}/>
          <HomeCard {...this.homeCardBacklog}/>
          <HomeCard {...this.homeCardSprints}/>
        </div> 
      </div>
    );
  }
}