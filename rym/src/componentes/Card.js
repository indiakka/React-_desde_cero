import React, { Component } from "react";
import { AiFillHeart, AiOutlineQuestion } from "react-icons/ai";
import { GiCoffin } from "react-icons/gi";
import { FaMale, FaFemale } from "react-icons/fa";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

import "./Card.css";

export default class ChCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state: this.props.state,
      chapters: this.props.chapters,
      app: "querty",
    };
  }

  setApp = (param) => {
    this.setState({
      app: param,
    });
  };

  kill = (param, e) => {
    console.log(e.target.value, param);
    this.setState({ state: e.target.value });
  };

  rmCharacter = (e) => {
    this.props.rmCharacter(this.props.titulo);
  };

  editCharacter = (e) => {
    this.props.editCharacter(this.props.titulo);
  };

  render() {
    return (
      <div>
        <br/>
        <Card>
          <CardImg height="auto" width="50px" top src={this.props.img} />
          <CardBody>
            <CardTitle> {this.props.titulo} </CardTitle>

            <CardSubtitle>
              {this.state.state === "Alive" ? (
                <AiFillHeart icon="heart" />
              ) : this.state.state === "Dead" ? (
                <GiCoffin icon="coffin" />
              ) : (
                <AiOutlineQuestion icon="question" />
              )}
            </CardSubtitle>
            <CardSubtitle>
              {this.props.gender === "Male" ? (
                <FaMale icon="male" />
              ) : this.props.gender === "Female" ? (
                <FaFemale icon="female" />
              ) : (
                <AiOutlineQuestion icon="question" />
              )}
            </CardSubtitle>
            <CardText> {this.state.chapters} </CardText>
          </CardBody>
          <Button onClick={this.rmCharacter}>Eliminar</Button>
        </Card>
      </div>
    );
  }
}
