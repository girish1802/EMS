import React from "react";

export default function CreateTask() {
  return (
    <>
      <div className="m-10 bg-[#1c1c1c]">
        <form className="h-screen w-full flex items-start justify-between p-20 border-2 rounded-xl  border-emerald-600 mt-1">
          <div className="flex flex-col gap-5 ">
            <div className=" w-">
              <h3 className="text-xl">Task Title</h3>
              <input
                type="text"
                placeholder="Enter Task"
                className="w-[400px] border-2 rounded-xl bg-transparent border-emerald-600 h-8 mt-1 "
              />
            </div>
            <div className="">
              <h3 className="text-xl">Date</h3>
              <input
                type="date"
                placeholder="Select date"
                className="w-[400px] border-2 rounded-xl bg-transparent border-emerald-600 h- mt-1"
              />
            </div>
            <div className="">
              <h3 className="text-xl">Asign To</h3>
              <input
                type="text"
                placeholder="Asign task"
                className="w-[400px] border-2 rounded-xl bg-transparent border-emerald-600 h-8 mt-1"
              />
            </div>
            <div className="">
              <h3 className="text-xl">Category</h3>
              <input
                type="text"
                placeholder="Write Category"
                className="w-[400px] border-2 rounded-xl bg-transparent border-emerald-600 h-8 mt-1"
              />
            </div>
          </div>
          <div className="">
            <div>
              <h3 className="text-xl">Description</h3>
              <input
                type="textarea"
                placeholder="Write description"
                className="w-[400px] border-2 rounded-xl bg-transparent border-emerald-600 h-[215px] mt-1"
              />
            </div>
            <div>
              <button>
                <h3 className="w-[400px] h-8 bg-emerald-400 mt-6 border-2 rounded-lg text-xl">Create Task</h3>
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
