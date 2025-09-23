import React, { useState } from 'react';
import playerIcon from "../../assets/player-icon.png";
import countryFlag from "../../assets/countryFlag.png";

const PlayerCard = ({player}) => {
    
    const [isSelected, setIsSelected] = useState(false);



    return (
            <div className="card bg-base-100 w-96 shadow-sm">
            <figure className=' max-h-[180px] p-5'>
                <img
                src={player.player_image}
                alt="Player image" 
                className='object-cover'
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title"> <span><img src={playerIcon} alt="Player Icon" /></span>{player.player_name}</h2>
                <div className='flex justify-between items-center mt-1 border-b-1 border-[#13131320] pb-4'> 
                    <div className='flex items-center gap-2'><img src={countryFlag} alt="countryFlag" /> <p className='text-[#13131380]'>{player.player_country}</p></div>
                    <div><p className='p-2 rounded-lg  inline bg-[#13131315]'>{player.playing_role}</p></div>
                </div>

                <div className='flex justify-between items-center'>
                    <span className='font-bold' >Rating</span>
                    <span>{player.rating}</span>
                </div>

                <div className='flex justify-between items-center'>
                    <span className='font-bold' >{player.batting_style}</span>
                    <span>{player.bowling_style}</span>
                </div>
                
                <div className="card-actions flex justify-between items-center">
                    <p className='font-bold'>Price: ${player.price}</p>
                    <button disabled={isSelected} onClick={()=> setIsSelected(true)} className="btn border-1 border-[#13131315] hover:bg-[#13131315]">{isSelected === true? "Selected":"Choose Player"}</button>
                </div>
            </div>
            </div>

    );
};

export default PlayerCard;