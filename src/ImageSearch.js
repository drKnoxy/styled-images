import React, { Component } from 'react';
import styled from 'styled-components';
import UnsplashAPI from './unsplashAPI';

export default class ImageSearch extends Component {
  state = {
    images: []
  };

  componentDidMount() {
    this.api = new UnsplashAPI({
      appID: 'd803098d61eb7d472ae55ce1b14b711ec485ccf1f33c1d85505f95172e04a12e'
    });
  }

  handleSubmit = e => {
    e.preventDefault();

    const query = e.target.query.value.trim();
    if (query) {
      this.api.search({ query }).then(resp => {
        this.setState({ images: resp.results });
      });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="query" />
        <button type="submit">Search</button>

        <div>
          {this.state.images.map(img => (
            <div key={img.id}>
              <img src={img.urls.regular} style={{ maxWidth: '100%' }} />
              <Credit {...img.user} />
              <CodeBlock>{JSON.stringify(img, '', '  ')}</CodeBlock>
            </div>
          ))}
        </div>
      </form>
    );
  }
}

function Credit({ username, first_name, last_name }) {
  return (
    <div>
      Photo by
      {' '}
      <a href={`https://unsplash.com/@${username}`}>
        {first_name} {last_name}
      </a>
      {' '}
      /
      {' '}
      <a href="https://unsplash.com/">Unsplash</a>
    </div>
  );
}

const CodeBlock = styled.pre`
  background: #eee;
  margin-bottom: 10px;
  padding: 4px;
  overflow: scroll;
  max-height: 400px;
`;
