import React, { use } from 'react';
import PlayerCard from '../PlayerCard/PlayerCard';


const AvailablePlayers = ({playersPromise, setAvailableBalance}) => {
    const playerData = use(playersPromise)

    console.log(playerData);
    return (

        <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 mt-10 gap-5'>
            {
                playerData.map( player => <PlayerCard setAvailableBalance={setAvailableBalance} player={player}></PlayerCard> )
            }
            
        </div>
    );
};

export default AvailablePlayers;