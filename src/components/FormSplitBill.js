import { useState } from "react";
import Button from "./Button";
export default function FormSplitBill({ friend, onSplit }) {
  const [bill, setBill] = useState("");
  const [myExpense, setMyExpense] = useState("");
  const [option, setOption] = useState("you");
  const paidByFriend = bill ? bill - myExpense : "";
  function handleSubmit(e) {
    e.preventDefault();
    option === "you" ? onSplit(paidByFriend) : onSplit(myExpense * -1);
    setBill("");
    setMyExpense("");
  }
  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>SPLIT A BILL WITH {friend.name}</h2>
      <label>💰 Bill Value</label>
      <input
        type="text"
        onChange={(e) => setBill(Number(e.target.value))}
        value={bill}
      />

      <label>🕴️ Your expense</label>
      <input
        type="text"
        onChange={(e) =>
          setMyExpense(
            Number(e.target.value) > bill ? myExpense : Number(e.target.value)
          )
        }
        value={myExpense}
      />

      <label>🧑‍🤝‍🧑 {friend.name}'s expense</label>
      <input type="text" disabled value={paidByFriend} />
      <label>🤑 who is paying the bill</label>
      <select value={option} onChange={(e) => setOption(e.target.value)}>
        <option value="you">You</option>
        <option value="friend">{friend.name}</option>
      </select>
      <Button>Split</Button>
    </form>
  );
}
