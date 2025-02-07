import React from "react";

function IncomingMsgItem({ msg, time }) {
  return (
    <>
      <div className="flex mb-1 cursor-pointer">
        <div className="w-9 h-9 rounded-full flex items-center justify-center mr-2">
          <img
            src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
            alt="User Avatar"
            className="w-8 h-8 rounded-full"
          />
        </div>
        <div className="flex flex-col max-w-96 bg-white rounded-lg p-3 gap-3 break-all">
          <div className="flex flex-col w-full ">
            <div className="flex flex-row justify-between space-x-3">
              <span className="text-sm font-semibold ">You</span>
              <span className="text-sm font-semibold text-slate-600">
                {time}
              </span>
            </div>
            <p className="text-sm font-normal py-2.5  break-all">{msg}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default IncomingMsgItem;
