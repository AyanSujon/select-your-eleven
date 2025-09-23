
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
<Suspense fallback={<div className='flex justify-center items-center h-100'><span class="loading loading-spinner loading-xl"></span></div>}>
  <Navbar></Navbar>
</Suspense>

<Suspense fallback={<div className='flex justify-center items-center h-100'><span class="loading loading-spinner loading-xl"></span></div>}>
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
