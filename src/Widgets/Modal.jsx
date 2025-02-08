
import React, { useState } from 'react'

function Modal({ initChat }) {

    const [txt, setText] = useState('');
    const handleOnchange = (e) => {
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        initChat(txt);
        setText("");
    }

    return (
        <div className="fixed inset-0 z-50 bg-transparent bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-2xl shadow-xl max-w-sm w-full">
                <h2 className="text-xl font-bold mb-4">Join Room</h2>

                <form onSubmit={handleSubmit}>
                    <div className="flex items-center">
                        <input type="text" value={txt}
                            onChange={(e) => handleOnchange(e)}
                            placeholder="Enter Your Name" className="w-full p-2 rounded-md border border-gray-400 focus:outline-none focus:border-blue-500" />
                        <button className="bg-indigo-500 text-white px-4 py-2 rounded-md ml-2" type='submit'>Join</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Modal