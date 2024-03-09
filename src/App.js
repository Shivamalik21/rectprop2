
import './App.css';
import Body from './componet/body';

const data = require('./componet/color.json');


function App() {
  return (
    <div className="App">
      <h1 style={{textDecoration:"underLine"}}>ColorBox:-</h1>
     <Body prop={data}/>
    </div>
  );
}

export default App;
