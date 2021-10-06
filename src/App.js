import Greeting from './components/Greeting';
import People from './components/People';
import './App.css';

import people from './mock/people';

const APP_GREETING = 'Meow, meow, meow';

function App() {
    return (
        <div className="App">
            <Greeting greetingText={APP_GREETING} name={people[0].displayName} />
            <People peopleData={people} />
        </div>
    );
}

export default App;
