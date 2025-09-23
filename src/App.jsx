
import './App.css'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import Navbar from './components/Navbar/Navbar'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'
import { Suspense, useState } from 'react'



const fetchPlayers = async () => {
  const res = await fetch("/players.json")
  return res.json()
}
const playersPromise = fetchPlayers();



function App() {
  
  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(500000);
  const [purchasedPlayers, setPurchasedPlayers] = useState([]);
  // console.log(purchasedPlayers);

  return (
    <>
<Suspense fallback={<div className='flex justify-center items-center h-100'><span class="loading loading-spinner loading-xl"></span></div>}>
  <Navbar availableBalance ={availableBalance}></Navbar>
</Suspense>

<div className=' w-11/12 mx-auto flex justify-between items-center flex-wrap font-bold '>
    <h1 className=' text-xl'>{toggle === true? "Available Players": `Selected Player (${purchasedPlayers.length}/6)`}</h1>
    <div className='flex gap-0 items-center'>
      <button onClick={()=> setToggle(true)} className={`py-3 px-4 border-1 border-[#13131320] rounded-l-xl border-r-0 ${toggle === true? "bg-[#E7FE29]": ""}`}>Available</button>
      <button onClick={()=> setToggle(false)} className={`py-3 px-4 border-1 border-[#13131320] rounded-r-xl border-l-0 ${toggle === false? "bg-[#E7FE29]": ""}`}>Selected <span>({purchasedPlayers.length})</span></button>
    </div>
</div>

{
  toggle === true? 
  <Suspense fallback={<div className='flex justify-center items-center h-100'><span className="loading loading-spinner loading-xl"></span></div>}>
    <AvailablePlayers purchasedPlayers={purchasedPlayers} setPurchasedPlayers={setPurchasedPlayers} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} playersPromise={playersPromise}></AvailablePlayers>
  </Suspense>
  :
  <Suspense fallback={<span class="loading loading-spinner loading-xl"></span>}>
  <SelectedPlayers purchasedPlayers={purchasedPlayers}></SelectedPlayers>
  </Suspense>

}












    </>
  )
}

export default App
