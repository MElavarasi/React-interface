import {BiCalendarPlus} from "react-icons/bi"
import { useState } from "react";

const AddAppointment = () => {
    let [toggleForm, setToggleForm] = useState(false);

    return (
        <div>
            <button onClick={ () => { setToggleForm (!toggleForm)}} className={`bg-blue-400 text-white px-2 py-3 w-full text-left rounded-t-md align-middle ${toggleForm ? 'bg-blue-400 text-white px-2 py-3 w-full text-left rounded-t-md align-middle' : 'bg-blue-400 text-white px-2 py-3 w-full text-left rounded-md align-middle'}`}>
                <div><BiCalendarPlus className="inline-block align-middle mb-1" />  Add Appointment</div>
            </button>

            {
                toggleForm &&
                <div className="border-r-2 border-b-2 border-l-2 border-light-blue-500 rounded-b-md pl-4 pr-4 pb-4">
                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
                    <label htmlFor="ownerName" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                        Owner Name
                    </label>
                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <input type="text" name="ownerName" id="ownerName"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                </div>
                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
                    <label htmlFor="petName" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                        Pet Name
                    </label>
                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <input type="text" name="petName" id="petName"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                </div>
                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
                    <label htmlFor="aptDate" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                        Apt Date
                    </label>
                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <input type="date" name="aptDate" id="aptDate"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                </div>

                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
                    <label htmlFor="aptTime" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                        Apt Time
                    </label>
                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <input type="time" name="aptTime" id="aptTime"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                </div>

                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
                    <label htmlFor="aptNotes" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                        Appointment Notes
                    </label>
                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <textarea id="aptNotes" name="aptNotes" rows="3"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Detailed comments about the condition"></textarea>
                    </div>
                </div>
                <div className="pt-5">
                    <div className="flex justify-end">
                        <button type="submit" className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
                        Submit
                        </button>
                    </div>
                </div>

            </div>
            }
            
        </div>
    )
}

export default AddAppointment