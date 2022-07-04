import './App.css';
import Review from './components/Review';

function App() {
  return (
    <main className='container'>
      <div className="title">
        <h1>Our Reviews</h1>
        <div className="under-line"></div>
      </div>
      <Review className='review'/>
    </main>
  );
}

export default App;
