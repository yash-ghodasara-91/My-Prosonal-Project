import React from 'react'
import { BiSolidDish } from 'react-icons/bi'
import { MdCategory, MdTableBar } from 'react-icons/md'


const buttons = [
    {lable: "Add Table", icon: <MdTableBar />, action: "table"},
    {lable: "Add Category", icon: <MdCategory />, action: "category"},
    {lable: "Add Dishes", icon: <BiSolidDish />, action: "dishes"},
]

const tabs = ["Metrics", "Orders", " Payments"];

const Dashboard = () => {
  return (
    <div className='bg-[#1f1f1f] h-[calc(100vh-5rem)]'>
        <div className="container mx-auto flex items-center justify-between py-14 px-6 md:px-4">
            <div className="flex items-center gap-3">
                {
                    buttons.map(({lable, icon, action}) => {
                       return(
                         <buttons className="bg-[#1a1a1a] hover:bg-[#262626] px-6 py-3 
                        rounded-lg text-[#f5f5f5] font-semibold flex 
                        items-center gap-2 ">
                            {lable} {icon}
                        </buttons>
                       )
                    })
                }
            </div>

             <div className="flex items-center gap-3">
                {
                    tabs.map((tab) => {
                       return(
                         <buttons className="bg-[#1a1a1a] hover:bg-[#262626] px-6 py-3 
                        rounded-lg text-[#f5f5f5] font-semibold flex 
                        items-center gap-2 ">
                            {tab}
                        </buttons>
                       )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Dashboard