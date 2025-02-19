import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Student 👩‍🎓",
          "Web Developer 🌐",
          "MERN Stack Developer 💻",
          "Full Stack Developer 💻 "
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
