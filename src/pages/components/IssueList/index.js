import React, { Component } from 'react';

import { Container, IssueInfo, IssueItem, LoadingContainer } from './styles';

import api from '../../../services/api';

export default class IssueList extends Component {

  state = {
    issues: [],
    allIssues: [],
    loading: true
  }

  componentDidMount(){
    this.loadIssues();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      (prevProps.currentFilter !== this.props.currentFilter) ||
      (prevProps.currentRepository !== this.props.currentRepository)
      ) this.loadIssues();
  }

  loadIssues = async () => {

    this.setState({ loading: true })

    const { currentRepository, currentFilter } = this.props;

    try {

      let issues = [];

      switch (currentFilter) {
        case 'Abertas':
          issues = await api.get(`/repos/${currentRepository.full_name}/issues?state=open`);
          break;

          case 'Fechadas':
          issues = await api.get(`/repos/${currentRepository.full_name}/issues?state=closed`);
          break;

        default:
          issues = await api.get(`/repos/${currentRepository.full_name}/issues?state=all`);
          break;
      }
      issues = issues.data;

      this.setState({ issues, allIssues: issues, loading: false })
    } catch (error) {
      this.setState({ loading: false })
      console.log(error)
    }
  }

  renderLoading = () => {
    return(
      <LoadingContainer>
        <i className="fa fa-spinner fa-pulse" />
      </LoadingContainer>
    )
  };

  render() {
    return (
      <Container>

        {
          this.state.loading
          ? this.renderLoading()
          : this.state.issues.map((issue) => (
            <IssueItem key={String(Math.random())} >
              <img src={issue.user.avatar_url} alt={issue.user.login} />
              <IssueInfo>
                <strong>
                  {
                    (issue.title.length > 22)
                    ? issue.title.substring(0, 22) + '...'
                    : issue.title
                  }
                </strong>
                <small>{issue.user.login}</small>
                <button onClick={() => window.open(issue.html_url,'_blank')}>
                  <strong>
                    <i className="fa fa-external-link" />
                    ABRIR ISSUE
                  </strong>
                </button>
              </IssueInfo>

            </IssueItem>
          ))
        }


      </Container>
    )
  }
}
