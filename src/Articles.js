import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';


import './Articles.css';

const articles = [{
  id: '1',
  title: 'hello, world',
  content: 'first blog'
}, {
  id: '2',
  title: 'hello, another world',
  content: 'second blog'
}];

const ArticleGrid = (article) => (
  <div className="ArticleGrid" key={`${article.id}`}>
    <Link className="title" to={`p/${article.id}`}>
      {article.title}
    </Link>
    <p>{article.content}</p>
  </div>
);

export class ArticlesIndex extends Component {
  constructor (props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props);
  }

  render () {
    const items = articles.map(ArticleGrid);

    return (
      <div className="Articles">
        {items}
      </div>
    );
  }
}

export class ArticlesShow extends Component {
  componentDidMount () {
    
  }

  render () {
    return <div>show</div>;
  }
}
