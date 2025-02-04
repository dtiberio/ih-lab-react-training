import './App.css';
import IdCard from './components/IdCard';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import './components/CreditCard.css'; // required for credit card container styling
import Todo from './components/Todo';
import Greetings from './components/Greetings';
import todos from './assets/todos.json';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import Dice from './components/Dice';
import Carousel from './components/Carousel';
import NumbersTable from './components/NumbersTable';

function App() {
  return (
    <div className="App">
      <p style={{ fontWeight: 'bold' }}>
        ### Iteration 1 | Component: `IdCard`
      </p>
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date('1992-07-14')}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date('1988-05-11')}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <p className="bold-text">### Iteration 2 | Component: `Greeting`</p>

      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      <p className="bold-text">### Iteration 3 | Component: `Random`</p>
      <div>
        <Random min={1} max={6} />
        <Random min={49} max={100} />
      </div>

      <p className="bold-text">### Iteration 4 | Component: `BoxColor`</p>
      <div>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </div>

      <p className="bold-text">### Conditional Styling | Component: `Todo`</p>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}

      <p className="bold-text">### Iteration 5 | Component: `CreditCard`</p>
      <div className="credit-card-container">
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"
        />

        <CreditCard
          type="MasterCard"
          number="0123456789010995"
          expirationMonth={8}
          expirationYear={2071}
          bank="N26"
          owner="Alexander Hamilton"
          bgColor="#eeeeee"
          color="#222222"
        />

        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white"
        />
      </div>

      <p className="bold-text">### Iteration 6 | Component: `Rating`</p>
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>

      <p className="bold-text">### Iteration 7 | Component: `DriverCard`</p>

      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: 'Toyota Corolla Altis',
          licensePlate: 'CO42DE',
        }}
      />

      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: 'Audi A3',
          licensePlate: 'BE33ER',
        }}
      />

      <p className="bold-text">### Iteration 8 | State: `LikeButton`</p>

      <LikeButton />
      <LikeButton />

      <p className="bold-text">### Iteration 9 | State: `ClickablePicture`</p>

      <ClickablePicture img="maxence.png" imgClicked="maxence-glasses.png" />

      <p className="bold-text">### Iteration 10 | State: `Dice`</p>

      <Dice />

      <p className="bold-text">### Iteration 11 | State: `Carousel`</p>

      <Carousel
        images={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg',
        ]}
      />

      <p className="bold-text">
        ### Iteration 12 | List and Keys | `NumbersTable`
      </p>

      <NumbersTable limit={12} />
    </div>
  );
}

export default App;
