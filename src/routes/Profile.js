import React, { useState } from "react";
import { authService } from "fBase";
import { useHistory } from "react-router-dom";

export default ({ refreshUser, userObj }) => {
  const history = useHistory();
  const [NewDisplayName, setNewDisplayName] = useState(userObj.displayName);
  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewDisplayName(value);
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    if (userObj.displayName !== NewDisplayName) {
      await userObj.updateProfile({
        displayName: NewDisplayName,
      });
      refreshUser();
    }
  };
  // const getMyNweets = async () => {
  //   const nweets = await dbService
  //     .collection("nweets")
  //     .where("creatorId", "==", userObj.uid)
  //     .orderBy("createAt")
  //     .get();
  //   console.log(nweets.docs.map((doc) => doc.data()));
  // };
  // useEffect(() => {
  //   getMyNweets();
  // }, []);
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          type="text"
          placeholder="Display name"
          value={NewDisplayName}
        />
        <input type="submit" value="Update Profile" />
      </form>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
};
