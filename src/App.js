import { App } from './components/App';
import { user } from './assets/user.json';

function Card() {
  return (
    <div>
      {/* <Header title="Project-js" /> */}
      <App {...user} />
      {/* <Statistics data={dataStats} /> */}
    </div>
  );
}
export default Card;
