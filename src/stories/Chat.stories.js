import React from "react";
import UsersList from "../components/UsersList/UsersList";

export default {
  title: "Chat"
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
export const Users = () => (
  <UsersList peers={peers} establishConnection={connectToPeer} />
);
