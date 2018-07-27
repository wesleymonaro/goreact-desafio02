import React, { Component } from 'react';

import SideBar from '../components/Sidebar';
import Header from '../components/Header';
import IssueList from '../components/IssueList';

export default class Main extends Component {

  state = {
    currentRepository: '',
    currentFilter: 'Todas'
  }

  selectRepository = (repository) => {
    // console.log(repository);
    this.setState({ currentRepository: repository });
  }

  changeFilter = (filter) => {
    // console.log(filter);
    this.setState({ currentFilter: filter });
  }

  render() {

    const { currentRepository, currentFilter } = this.state;

    return (
      <div>
        <Header currentRepository={currentRepository} changeFilter={(filter) => this.changeFilter(filter)}/>
        <SideBar currentRepository={currentRepository} changeAction={(repository) => this.selectRepository(repository)}/>
        {
          (this.state.currentRepository)
          ? <IssueList currentRepository={currentRepository} currentFilter={currentFilter}/>
          : null
        }

      </div>
    )
  }
}
