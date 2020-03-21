import React, { useState } from "react";
import PropTypes from "prop-types";

const Setup = ({ startConnection }) => {
  const [id, setID] = useState("123");

  return (
    <form onSubmit={(event) => startConnection(event, id)}>
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
