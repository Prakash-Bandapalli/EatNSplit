import { useState } from "react";
import initialFriends from "./Data";
import Button from "./Button";
import FormAddFriend from "./FormAddfrnd";
import FriendsList from "./FriendsList";
import FormSplitBill from "./FormSplitBill";
export default function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectFrnd, setSelectFrnd] = useState(null);

  function handleClick() {
    setShowAddFriend((prev) => !prev);
  }
  function handleAdd(friend) {
    setFriends((prev) => [...prev, friend]);
    setShowAddFriend(false);
  }
  function handleSelect(friend) {
    setSelectFrnd((prev) => (prev?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  }
  function handleSplit(balance) {
    setFriends((frnds) =>
      frnds.map((frnd) =>
        frnd.id === selectFrnd.id
          ? { ...frnd, balance: frnd.balance + balance }
          : frnd
      )
    );
    setSelectFrnd(null);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          onSelect={handleSelect}
          selectFrnd={selectFrnd}
        />
        {showAddFriend && <FormAddFriend onAddFriend={handleAdd} />}
        <Button onClick={handleClick}>
          {showAddFriend ? "Close" : "AddFriend"}
        </Button>
      </div>
      {selectFrnd && (
        <FormSplitBill
          friend={selectFrnd}
          onSplit={handleSplit}
          key={selectFrnd.id}
        />
      )}
    </div>
  );
}
