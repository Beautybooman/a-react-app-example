import React, { Component } from 'react';

// no need to modify anything in here. The final test is looking for the returned JSX from this component
class TestComponent extends Component {
  render() {
    return (
      <div className="video">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/w3333Fo6ufY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    );
  }
}

export default TestComponent;
