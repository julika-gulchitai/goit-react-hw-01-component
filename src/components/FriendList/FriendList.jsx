import { FriendListItem } from './FriendListItem';
import s from './FriendList.module.css';
export const FriendList = ({ friends }) => {
  return (
    <ul className={s.friendList}>
      {friends.map(friend => (
        <FriendListItem {...friend} />
      ))}
    </ul>
  );
};
