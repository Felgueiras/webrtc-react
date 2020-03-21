import React from "react";
import UsersList from "../components/UsersList/UsersList";
import Setup from "../scenes/setup/Setup";

export default {
  title: "Setup"
};

const peers = [
  {
    id: "abc"
  },
  {
    id: "def"
  }
];

const connectToPeer = (id, connectionType) => {
  console.log(`Connecting with ${connectionType} to ${id}`);
};

const startConnection = (event, id) => {
  event.preventDefault();
  console.log(id);
};

export const SetUp = () => <Setup connectToServer={startConnection} />;

export const Users = () => (
  <UsersList peers={peers} establishConnection={connectToPeer} />
);
