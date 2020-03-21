import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

UsersList.propTypes = {
  peers: PropTypes.array.isRequired,
  establishConnection: PropTypes.func.isRequired
};

const connectionOptions = ["Text", "Audio", "Video"];

const MyList = styled.div`
  justify-content: space-evenly;
  width: 300px;
  margin: auto;
  display: flex;
`;

function UsersList({ peers, establishConnection }) {
  return peers.map(({ id }) => (
    <MyList>
      <h2 key={id}>{id}</h2>
      <div>
        {connectionOptions.map(option => (
          <span onClick={() => establishConnection(id, option.toLowerCase())}>
            {option}
          </span>
        ))}
      </div>
    </MyList>
  ));
}

export default UsersList;
