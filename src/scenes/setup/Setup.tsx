import React, { useState } from "react";
import PropTypes from "prop-types";

interface CardProps {
  connectToServer(id: string): any;
}

const Setup: React.FunctionComponent<CardProps> = ({ connectToServer }) => {
  const [id, setID] = useState("123");

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        connectToServer(id);
      }}
    >
      <label>
        <h1>Select your iD!</h1>
        <input type="text" onChange={event => setID(event.target.value)} />
      </label>
      <input type="submit" value="Join chat" />
    </form>
  );
};

Setup.propTypes = {
  connectToServer: PropTypes.func.isRequired
};

export default Setup;
