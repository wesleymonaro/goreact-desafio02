import React, { Component } from 'react';

import { Container, Form, ListContainer, RepositoryItem, RepositoryInfo } from './styles';
import api from '../../../services/api';

export default class SideBar extends Component {

  state = {
    repositoryInput: '',
    repositoryError: false,
    loading: false,
    repositories: []
  }

  handleAddRepository = async (e) => {
    e.preventDefault();

    this.setState({ loading: true });

    try {
      const {data: repository} = await api.get(`/repos/${this.state.repositoryInput}`);
      const newRepo = {
        id: repository.id,
        name: repository.name,
        full_name: repository.full_name,
        owner: {
          login: repository.owner.login,
          avatar_url: repository.owner.avatar_url
        }
      }

      this.setState({
        loading: false,
        repositoryInput: '',
        repositoryError: false,
        repositories: [
          ...this.state.repositories,
          newRepo
        ]
      })

    } catch (error) {
      console.log(error);
      this.setState({ repositoryError: true })
    } finally {
      this.setState({ loading: false });
    }

  }

  render() {
    return (
      <Container>
        <Form withError={this.state.repositoryError} onSubmit={this.handleAddRepository}>
          <input
            type="text"
            placeholder="Novo repositório"
            value={this.state.repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />

          <button type="submit">
            {
              this.state.loading
              ? <i className="fa fa-spinner fa-pulse" />
              : <i className="fa fa-plus-circle" />
            }
          </button>
        </Form>

        <ListContainer>

          {
            this.state.repositories.map(repository => (
              <RepositoryItem key={String(Math.random())} onClick={() => this.props.changeAction(repository)}>
                <img src={repository.owner.avatar_url} alt={repository.owner.login} />
                <RepositoryInfo>
                  <strong>{repository.name}</strong>
                  <small>{repository.owner.login}</small>
                </RepositoryInfo>
                  <i className="fa fa-angle-right"></i>


              </RepositoryItem>
            ))
          }

        </ListContainer>

      </Container>
    )
  }
}
