
import Movies from './components/movies/movies';
import Contador from './components/Contador/Contador';
import './App.css';

const myData = [
  { Framework: "Boostrap"} ,
  { Framework: "Material"} ,
  { Framework: "Tailwind"} ,
  { Framework: "Next"}
]

const movieData = [
  {thumbnail:"asdasdasd", urlVideo: "dasdasd", preview:"asdasd"},
]

function App() {

  const myDataList = movieData .map( (element) => {
        return ( <img src={element.thumbnail} alt=""/> )
    } );

  return (
    <div className="App">
      <Contador></Contador>
      <Movies data={[]}>
      {myDataList}
      </Movies>
    </div>
  );
}

export default App;