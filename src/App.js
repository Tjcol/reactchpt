import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Person: {
        fullName: 'Oghenetejiri Onoriose',
        bio: 'A passionate web developer with a focus on Shopify and full-stack development.',
        imgSrc: 'https://via.placeholder.com/150',
        profession: 'Web Developer',
      },
      shows: false,
      mountedTime: 0,
    };
    this.toggleShow = this.toggleShow.bind(this);
  }

  toggleShow() {
    this.setState({ shows: !this.state.shows });
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState((prevState) => ({
        mountedTime: prevState.mountedTime + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    const { Person, shows, mountedTime } = this.state;
    return (
      <div className="App">
        <button onClick={this.toggleShow}>
          {shows ? 'Hide Profile' : 'Show Profile'}
        </button>

        {shows && (
          <div className="profile">
            <img src={Person.imgSrc} alt={Person.fullName} style={{ width: '150px', borderRadius: '50%' }} />
            <h2>{Person.fullName}</h2>
            <p>{Person.bio}</p>
            <h3>{Person.profession}</h3>
          </div>
        )}

        <div className="time-interval">
          <p>Component mounted for: {mountedTime} seconds</p>
        </div>
      </div>
    );
  }
}

export default App;
