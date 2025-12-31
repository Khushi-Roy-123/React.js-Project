import Lottery from './Lottery'
import { sum } from './helper'
import './index.css'

function App() {
  const winCondition = (ticket) => {
    return sum(ticket) === 15;
  }

  return (
    <>
      <Lottery n={3} winCondition={winCondition} />
    </>
  )
}

export default App
