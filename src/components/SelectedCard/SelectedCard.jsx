import React from 'react';
import removeIcon from "../../assets/remove.png"

const SelectedCard = ({player}) => {
    console.log(player)
    return (
            <div className="playerCard flex justify-between items-center p-4 rounded-2xl border-1 border-[#13131320]">
                            <div className='flex items-center gap-4 '>
                <figure className='max-w-[60px] overflow-hidden rounded-xl p-1 bg-gray-200'>
                    <img className='w-[50px] rounded-lg' src={player.player_image} alt="Player image" />
                </figure>
                <div>
                    <h2 className='font-bold text-xl'>{player.player_name}</h2>
                    <p className='text-gray-400'>{player.playing_role}</p>
                </div>
            </div>
            <div>
                <button><img src={removeIcon} alt="remove icon" /></button>
            </div>
            </div>
    );
};

export default SelectedCard;