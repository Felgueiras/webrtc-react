import React, {FormEvent, useState} from "react";
import Setup from "./Setup";
import styled from "styled-components";
import {CircularProgress} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import {connect} from "react-redux";
import {setID} from "../../redux/actions";

const Centered = styled.div`
  text-align: center;
`;

interface Props {
  id: string;
  setID(id: string): any;
}

const SetupScene: React.FunctionComponent<Props> = ({ id, setID }) => {
  const [loading, setLoading] = useState(false);
  let history = useHistory();

  const connectToServer = (id: string) => {
    // store value
    setID(id);

    setLoading(true);
    setTimeout(() => {
      history.replace("/chat");
    }, 1000);
  };
  return (
    <Centered>
      {id && (
        <>
          <h2>Continue with the last ID? ({id})</h2>
          <button onClick={() => connectToServer(id)}>Yes</button>
          <button onClick={() => (id = "")}>No</button>
        </>
      )}
      <Setup
        connectToServer={(id: string) => {
          connectToServer(id);
        }}
      />
      {loading && <CircularProgress />}
    </Centered>
  );
};

const mapStateToProps = (state: any) => {
  const { chat } = state;
  const { myID: id } = chat;
  return { id };
};

export default connect(mapStateToProps, { setID })(SetupScene);
