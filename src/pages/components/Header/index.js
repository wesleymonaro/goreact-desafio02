import React, { Component } from 'react';

import { Container, RepositoryInfo, RepositoryItem, Filter, HalfBox } from './styles';

export default class Header extends Component {

  state = {
    filter: 'Todas',
  }

  changeFilter = (event) => {
    this.props.changeFilter(event.target.value)
  }

  render() {
    const repository = this.props.currentRepository;
    return (
      <Container>

        <HalfBox>
          {
            (repository)
            ?
            (
              <RepositoryItem key={String(Math.random())}>
                <img src={repository.owner.avatar_url} alt={repository.owner.login} />
                <RepositoryInfo>
                  <strong>{repository.name}</strong>
                  <small>{repository.owner.login}</small>
                </RepositoryInfo>
              </RepositoryItem>
            ): null
          }

        </HalfBox>

        <HalfBox>

          <Filter onChange={this.changeFilter}>
            <option value="Todas">Todas</option>
            <option value="Abertas">Abertas</option>
            <option value="Fechadas">Fechadas</option>
          </Filter>

        </HalfBox>


      </Container>
    )
  }
}
