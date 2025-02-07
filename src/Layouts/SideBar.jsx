

import React from 'react'

function SideBar({ roomsList, changeRoom }) {

    const handleRoomChanage = (room) => {

        changeRoom(room);

    }

    return (
        <>
            <header className="p-4 border-b border-gray-300 flex justify-between items-center bg-indigo-600 text-white">
                <h1 className="text-white-50">Rooms</h1>
            </header>

            <div className="overflow-y-auto h-screen p-3 mb-9 pb-20">
                {

                    roomsList.map((room, idx) => {
                        return (
                            <div key={idx} className="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md"
                                onClick={() => handleRoomChanage(room)}>
                                <div className="w-12 h-12 bg-gray-300 rounded-full mr-3">
                                    <img src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                                        alt="User Avatar" className="w-12 h-12 rounded-full" />
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-lg font-semibold">{room}</h2>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>


    );
}

export default SideBar