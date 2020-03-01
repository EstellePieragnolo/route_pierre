import React from "react";
import "./_Home.scss";
import Header from "./Header/Header";
import logo from "../img/logo.svg";
import Text from "./Text/Text";
import Title from "./Title/Title";

export default class Home extends React.Component {
  render() {
    const text =
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullam- corper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in";
    return (
      <div className="home">
        <div className="homeNavbar">
          <Header />
        </div>
        <div className="homeHeader">
          <div className="homeHeaderContainer">
            <div className="homeHeaderContainerItems">
              <img src={logo} alt="logo" />
              <h1>LA ROUTE DE LA PIERRE</h1>
            </div>
            <div className="homeHeaderContainerSubtitle">
              <h3>
                Créations en taille pierre <br /> par Orianne <span>&</span>{" "}
                Louis
              </h3>
            </div>
          </div>
        </div>
        <div className="homeShop">
          <div>
          <Title title="Le Project" />
          <Text text={text} />
          </div>
        </div>
      </div>
    );
  }
}
