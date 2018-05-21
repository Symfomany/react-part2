import React, { Component } from "react";
import Formulaire from "./Formulaire";
import Liste from "./Liste";
import Loader from "./Loader";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
    this.addUser = this.addUser.bind(this);
  }

  /**
   * Ajax
   */
  componentDidMount() {
    // ajax avec Axios... (Vincent 😘 )
    const users = [
      {
        id: 1,
        title: "Mr",
        name: "Vincent Ballut",
        avatar:
          "https://www.super-insolite.com/wp-content/uploads/2014/10/c/h/chuck-norris.jpg"
      },
      {
        id: 2,
        title: "Mme",
        name: "Marlène Maizonniaux",
        avatar:
          "https://pbs.twimg.com/profile_images/985839125155762177/TR1y8bO1_400x400.jpg"
      },
      {
        id: 3,
        title: "Mr",
        name: "Barré Sylvain",
        avatar:
          "https://cdn.images.express.co.uk/img/dynamic/20/590x/secondary/negan-832392.jpg"
      },
      {
        id: 4,
        title: "Mme",
        name: "Meziere Marjorie",
        avatar:
          "https://media1.woopic.com/api/v1/images/174%2Fwebedia-cine-diaporama%2Fb58%2F49b%2Ff85798908f7477c53baad55ca3%2F1252546-quand-on-pense-actrice-rousse-le-premi-orig-4.jpg?format=400x400&facedetect=1&quality=85"
      }
    ];
    setTimeout(() => {
      this.setState({
        users: users
      });
    }, 2000);
  }

  addUser(user) {
    this.setState({
      users: [...user, ...this.state.users]
    });
  }
  render() {
    return (
      <div className="container">
        {!this.state.users && <Loader />}
        {this.state.users && <Liste users={this.state.users} />}
        <Formulaire add={this.addUser} />
      </div>
    );
  }
}

export default Layout;
