
import './App.css'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import Navbar from './components/Navbar/Navbar'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'
import { Suspense } from 'react'



const fetchPlayers = async () => {
  const res = await fetch("/players.json")
  return res.json()
}




function App() {

  const playersPromise = fetchPlayers()
  return (
    <>
<Suspense fallback={<span class="loading loading-spinner loading-xl"></span>}>
  <Navbar></Navbar>
</Suspense>

<Suspense fallback={<span class="loading loading-spinner loading-xl"></span>}>
<AvailablePlayers playersPromise={playersPromise}>

</AvailablePlayers>
</Suspense>



{/* <Suspense fallback={<span class="loading loading-spinner loading-xl"></span>}>
<SelectedPlayers>
  
</SelectedPlayers>
</Suspense> */}




    </>
  )
}

export default App
