import s from './FriendList.module.css';

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li className={s.friendItem} key={id}>
      <span className={s.status}>{isOnline}</span>
      {/* if ({!isOnline}) {(span.className = { statusRed })}; */}
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};
