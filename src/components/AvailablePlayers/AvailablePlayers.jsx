import React, { use } from 'react';
import playerIcon from "../../assets/player-icon.png";
import countryFlag from "../../assets/countryFlag.png";


const AvailablePlayers = ({playersPromise}) => {
    const playerData = use(playersPromise)

    console.log(playerData);
    return (

        <div className='w-11/12 mx-auto grid grid-cols-3 mt-10 gap-5'>
            {
                playerData.map( player => 

            <div className="card bg-base-100 w-96 shadow-sm">
            <figure className=' p-5'>
                <img
                src={player["player-image"]}
                alt="Player image" />
            </figure>
            <div className="card-body">
                <h2 className="card-title"> <span><img src={playerIcon} alt="Player Icon" /></span>Card Title</h2>
                <div className='flex justify-between items-center mt-1 border-b-1 border-[#13131320] pb-4'> 
                    <div className='flex items-center gap-2'><img src={countryFlag} alt="countryFlag" /> <p className='text-[#13131380]'>India</p></div>
                    <div><p className='p-2 rounded-lg  inline bg-[#13131315]'>All-Rounder</p></div>
                </div>

                <div className='flex justify-between items-center'>
                    <span className='font-bold' >Rating</span>
                    <span>7.6</span>
                </div>

                <div className='flex justify-between items-center'>
                    <span className='font-bold' >Left-Hand-Bat</span>
                    <span>Left-Hand-Bat</span>
                </div>
                
                <div className="card-actions flex justify-between items-center">
                    <p className='font-bold'>Price: $1500000</p>
                    <button className="btn border-1 border-[#13131315] hover:bg-[#13131315]">Choose Player</button>
                </div>
            </div>
            </div>













                )
            }
            
        </div>
    );
};

export default AvailablePlayers;