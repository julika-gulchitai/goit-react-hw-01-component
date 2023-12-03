// const MakeData = ({ id, label, percentage }) => {
//   return (
//     <li className="item" key={id}>
//       <span className="label">{label}</span>
//       <span className="percentage">{percentage}</span>
//     </li>
//   );
// };

// export const Statistics = ({ datas }) => {
//   return (
//     <section className="statistics">
//       {/* <h2 className="title">Upload stats</h2> */}
//       <ul className="stat-list">{datas.map(data => MakeData({ ...data }))}</ul>
//     </section>
//   );
// };

export const Statistics = ({ id, label, percentage }) => {
  return (
    <section className="statistics">
      {/* <h2 className="title">Upload stats</h2> */}

      <ul className="stat-list">
        <li className="item">
          <span className="label">.docx</span>
          <span className="percentage">4%</span>
        </li>
        <li className="item">
          <span className="label">.mp3</span>
          <span className="percentage">14%</span>
        </li>
        <li className="item">
          <span className="label">.pdf</span>
          <span className="percentage">41%</span>
        </li>
        <li className="item">
          <span className="label">.mp4</span>
          <span className="percentage">12%</span>
        </li>
      </ul>
    </section>
  );
};
