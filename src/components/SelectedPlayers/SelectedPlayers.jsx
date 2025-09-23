import React from 'react';
import SelectedCard from '../SelectedCard/SelectedCard';

const SelectedPlayers = ({purchasedPlayers}) => {
    // console.log(purchasedPlayers);
    return (
        <div className=' w-11/12 mx-auto h-50 py-10 space-y-3'>
           {
            purchasedPlayers.map(player =>  <SelectedCard player={player} ></SelectedCard>)
           }
        </div>
    );
};

export default SelectedPlayers;




