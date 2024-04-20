import Friend from "./Friend";
export default function FriendsList({ friends, onSelect, selectFrnd }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          onSelect={onSelect}
          selectFrnd={selectFrnd}
        />
      ))}
    </ul>
  );
}
