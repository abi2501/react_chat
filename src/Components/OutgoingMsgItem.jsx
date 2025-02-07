import React from "react";

function OutgoingMsgItem({ msg, time, author }) {
  return (
    <div className="flex justify-end mb-4 cursor-pointer">
      <div className="flex max-w-96 bg-indigo-500 text-white rounded-lg p-3 gap-3">
        <div className="flex flex-col w-full ">
          <div className="flex flex-row justify-between space-x-3">
            <span className="text-sm font-semibold text-white">{author}</span>
            <span className="text-sm font-semibold text-slate-300">{time}</span>
          </div>
          <p className="text-sm font-normal py-2.5 text-white break-all">
            {msg}
          </p>
        </div>
      </div>
      <div className="w-9 h-9 rounded-full flex items-center justify-center ml-2">
        <img
          src="https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
          alt="My Avatar"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </div>
  );
}

export default OutgoingMsgItem;
