import css from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';

console.log(css);

export default function FriendList({ friends }) {
  return (
    <ul>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li key={id}>
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
}
