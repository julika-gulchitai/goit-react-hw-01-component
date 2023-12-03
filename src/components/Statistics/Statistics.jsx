import s from './Statistics.module.css';
export const Statistics = ({ stats }) => {
  // stats.style.backgroundColor = getRandomHexColor();
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>Upload stats</h2>
      <ul className={s.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li className={s.item} key={id}>
            <span className={s.label}>{label}</span>
            <span className={s.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// export const Statistics = ({ id, label, percentage }) => {
//   return (
//     <section className="statistics">
//       {/* <h2 className="title">Upload stats</h2> */}

//       <ul className="stat-list">
//

//         <li className="item">
//           <span className="label">.mp3</span>
//           <span className="percentage">14%</span>
//         </li>
//         <li className="item">
//           <span className="label">.pdf</span>
//           <span className="percentage">41%</span>
//         </li>
//         <li className="item">
//           <span className="label">.mp4</span>
//           <span className="percentage">12%</span>
//         </li>
//       </ul>
//     </section>
//   );
// };
