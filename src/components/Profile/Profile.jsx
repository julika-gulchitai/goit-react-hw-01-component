import s from './Profile.module.css';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, likes, views },
}) => {
  return (
    <>
      <div className={s.wrapper}>
        <div className={s.card}>
          <img src={avatar} alt={username} className={s.avatar} />
          <p className={s.name}>{username}</p>
          <p className={s.tag}>{tag}</p>
          <p className={s.tag}>{location}</p>
        </div>

        <ul className={s.stats}>
          <li className={s.statsLink}>
            <span className={s.statsLabel}>Followers</span>
            <span className={s.statsQuantity}>{followers}</span>
          </li>
          <li className={s.statsLink}>
            <span className={s.statsLabel}>Views</span>
            <span className={s.statsQuantity}>{views}</span>
          </li>
          <li className={s.statsLink}>
            <span className={s.statsLabel}>Likes</span>
            <span className={s.statsQuantity}>{likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
};
