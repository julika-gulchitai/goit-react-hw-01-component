import s from './FriendListStyles.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={s.friendItem}>
      <span className={isOnline ? s.statusGreen : s.statusRed}>{isOnline}</span>
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};
