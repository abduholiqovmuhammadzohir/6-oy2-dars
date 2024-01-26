import './App.css'
import Card from './components/Card'
import Header from './components/Header'
import Text from './components/Text'

function App() {
  return (
    <>
      <div className='container'>
        <Header></Header>
        <div className="cards">
          <Text></Text>
          <Card></Card>
        </div>
      </div>
    </>
  )
}

export default App
