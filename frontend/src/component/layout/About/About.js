import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/kartikkrishnasharma";
  };
  return (
    <div className="aboutSection">
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Me</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://kartiksharma.live/KartikSharma.jpg"
              alt="Founder"
            />
            <Typography>Kartik Sharma (Krishna)</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
            I'm a MERN Full Stack Web Developer with Professional Experience building efficient and scalable web apps. I love building Web Apps and I am continuously improving my skillsets.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
