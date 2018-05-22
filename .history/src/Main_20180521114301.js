import React, { Component } from "react";
import Formulaire from "./Formulaire";
import Liste from "./Liste";
import Loader from "./Loader";
import Heading from "./Heading";
import { BrowserRouter, Route, Link } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
    this.addUser = this.addUser.bind(this);
    this.remove = this.remove.bind(this);
  }

  /**
   * Ajax
   */
  componentDidMount() {
    // ajax avec Axios... (Vincent 😘 )
    const users = [
      {
        name: "Vincent Ballut",
        avatar:
          "https://www.super-insolite.com/wp-content/uploads/2014/10/c/h/chuck-norris.jpg"
      },
      {
        name: "Marlène Maizonniaux",
        avatar:
          "https://pbs.twimg.com/profile_images/985839125155762177/TR1y8bO1_400x400.jpg"
      },
      {
        name: "Barré Sylvain",
        avatar:
          "https://cdn.images.express.co.uk/img/dynamic/20/590x/secondary/negan-832392.jpg"
      },
      {
        name: "Meziere Marjorie",
        avatar:
          "https://media1.woopic.com/api/v1/images/174%2Fwebedia-cine-diaporama%2Fb58%2F49b%2Ff85798908f7477c53baad55ca3%2F1252546-quand-on-pense-actrice-rousse-le-premi-orig-4.jpg?format=400x400&facedetect=1&quality=85"
      },
      {
        name: "Laetitia Varella",
        avatar:
          "http://static8.viadeo-static.com/x4YuZbfSKX3POWsqGN7ncoCWGZc=/300x300/member/002211simb9od6iq?ts=1381582560000"
      },
      {
        name: "Julie Diabinho",
        avatar:
          "https://img.20mn.fr/T7B8k1cKSUGW1b3vIBzcUA/310x190_actrice-taylor-hickson-avant-premiere-film-everything-everything-los-angeles-mai-2017"
      },
      {
        name: "Julien Boyer",
        avatar:
          "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAYeAAAAJDEzNzhkMTM0LWM3MTctNDdiMi04YzI3LWY4ZjhiNDVmM2Q2MA.jpg"
      },
      {
        name: "Katy Weslet",
        avatar: "https://www.quizz.biz/uploads/quizz/914482/1_H7gCd.jpg"
      }
    ];
    setTimeout(() => {
      this.setState({
        users: users
      });
    }, 200);
  }

  remove(user) {
    const index = this.state.users.findIndex(elt => user.id === elt.id);

    this.setState(prevState => ({
      users: [
        ...prevState.users.slice(0, index),
        ...prevState.users.slice(index + 1)
      ]
    }));
  }

  addUser(user) {
    this.setState({
      users: [user, ...this.state.users]
    });
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Heading nb={this.state.users.length} />
          <div className="container">
            {!this.state.users.length && <Loader />}
            {this.state.users && (
              <Liste remove={this.remove} users={this.state.users} />
            )}

            <Formulaire add={this.addUser} />
            <Link to="/">Home</Link>
            <Link to="/signup">Signup</Link>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Main;
