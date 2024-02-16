'use client'

import { Menu } from "@headlessui/react";
import { IoWarningOutline } from "react-icons/io5";

export default function Home() {
  return (
    <div className="container m-5">
      <div className="flex items-center gap-x-5">
        <Menu as='div'className='flex flex-col'>
          <Menu.Button className='p-2 bg-blue-400'>Click to open</Menu.Button>
          <Menu.Items className='flex flex-col justify-center items-center bg-gray-200 p-2'>
            <Menu.Item as='span'>Item 1</Menu.Item>
            <Menu.Item as='span'>Item 2</Menu.Item>
            <Menu.Item as='span'>Item 3</Menu.Item>
          </Menu.Items>
        </Menu>
        <button className="text-green-700 border-2 border-green-700 py-6 px-4 rounded">
          <span className="border-2 border-blue-500 bg-blue-200 py-4 px-2 rounded">It works</span>
        </button>
        <button className="text-red-700 border-2 border-red-700 py-6 px-4 rounded">
          <IoWarningOutline className="text-4xl border-2 border-blue-500 bg-blue-200 rounded"/>
        </button>
      </div>
      <div className="mt-5">
        Note: When the menu is open, and then you <span className="font-bold">touch</span> on the button with the warning icon, (in the blue area specifically), the menu does not close automatically as expected.
      </div>
      <div className="mt-5">
        <span className="font-bold">IMPORTANT:</span> to reproduce the issue, please use the <span className="font-bold">touch</span> event, not the click event.
      </div>
    </div>
  ) 
}
