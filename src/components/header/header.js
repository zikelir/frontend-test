import React from 'react';
import { Link } from "@reach/router";
import './header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        text: '',
        
    }
  }

  handleText(target) {
    const element = target.value;
    console.log(target);
    // this.setState({text: element})
  }
  render() {
    return (
      <div className="header-bar">
          <div className="search-area">
            <input type="text" placeholder="search" className="search-bar" onChange={(event) => this.setState({ text: event.target.value})}></input>
            <button className="search-button" onClick={() => {this.props.handleSearch()}}>Search</button>
          </div>
          <Link to="/" className="back-button"> {`<`} Back</Link>
      </div>
    );
  }
}

export default Header;
