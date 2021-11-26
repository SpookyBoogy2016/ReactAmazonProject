import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "./Subheader.css";

function Subheader() {
  return (
    <div className="subheader">
      <div className="subheader__optionAll">
        <Button className="subheader__buttonAll">
          <MenuIcon className="subheader__optionIcon"></MenuIcon>
          {/* <span className="subheader__optionLineOne">All</span> */}
        </Button>
      </div>
      <div className="subheader__option">
        <Button className="subheader__button">
          <span className="subheader__optionLineOne">Today's Deals</span>
        </Button>
      </div>
      <div className="subheader__option">
        <Button className="subheader__button">
          <span className="subheader__optionLineOne">Customer Service</span>
        </Button>
      </div>
      <div className="subheader__option">
        <Button className="subheader__button">
          <span className="subheader__optionLineOne">Gift Cards</span>
        </Button>
      </div>
      <div className="subheader__option">
        <Button className="subheader__button">
          <span className="subheader__optionLineOne">Sell</span>
        </Button>
      </div>
    </div>
  );
}

export default Subheader;
