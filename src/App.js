import React, { Component } from "react";
import "./App.css";
export class App extends Component {
  state = {
    personne: {
      fullname: "Houssem Eddine",
      bio: "Designer",
      profission: "Ui/Ux designer",
      imgs: "https://scontent.ftun1-2.fna.fbcdn.net/v/t39.30808-6/278673523_5111526928932575_1564448763320246671_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=KR5IkW2r_tcAX-NIn81&_nc_ht=scontent.ftun1-2.fna&oh=00_AT8zjDt4g9mDYPKsPzSsta6OA-IsBRWthaPbtslknlo0WQ&oe=62935596",
    },
    shows: true,
  };
  details = () => {
    this.setState({
      ...this.state,
      shows: !this.state.shows,
    });
  };
  render() {
    return (
      <div className="card">
        {this.state.shows && (
          <>
            <div className="card">
              <img src={this.state.personne.imgs} alt="logo" />
              <h1>{this.state.personne.fullname}</h1>
              <h5>{this.state.personne.bio}</h5>
              <h3>{this.state.personne.profission}</h3>
            </div>
          </>
        )}
        <button onClick={this.details}> show details </button>
      </div>
    );
  }
}

export default App;
