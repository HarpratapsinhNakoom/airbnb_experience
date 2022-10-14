import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import cardDetails from './data/card-details';


function App() {

  const cardElements = cardDetails.map(card => {
      return (<Card 
        key={card.id}
        {...card}
      />)
  });

  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <div className="card--section">
          {cardElements}
      </div>
    </div>
  );
}

export default App;
