import { MdOutlineErrorOutline } from "react-icons/md";


function Error() {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-4"><MdOutlineErrorOutline className="text-4xl" /></div>
      <div><p className="font-bold text-xl">Error 404</p></div>
      <div className="text-xl">Page Not Found :C</div>
      
    </div>
   
  )
}

export default Error