import { Link } from "react-router-dom";
import eduMenester5 from "../../../../public/img/sonjoy_bonik.jpg"


export default function InformationOfficer() {
  return (
    <div className=" border-[1px] shadow-md rounded-sm border-slate-200 p-1 w-full md:flex gap-10 mb-5 items-center ">
    <aside className=" md:w-44 w-full mb-5 md:mb-0">
        <img className=" w-full" src={eduMenester5} alt="" />
    </aside>
    <div className=" flex flex-col gap-2">
        <p className=" text-xs "> </p>
        <h2 className="font-semibold">সঞ্জয় বণিক <small className=" font-semibold">(তথ্য কর্মকর্তা ও অভিযোগ সমাধান কর্মকর্তা)</small></h2> 
        <small className=" font-semibold capitalize">phone : 01711378635</small>
        <small className=" font-semibold capitalize"> email :  bsanjaytpi@gmail.com </small>
        <ul className="flex gap-2 items-center text-xl font-bold text-white py-3">
            <li><Link className="px-2 py-1 rounded-full bg-[#49A91D] hover:opacity-70" to={"/"}><i className='bx bxs-phone'></i></Link></li>
            <li><a target=" _blank" className="px-2 py-1 rounded-full bg-[#326780] hover:opacity-70" href="https://www.facebook.com/TPIBD"> <i className='bx bxl-facebook' ></i></a></li>
            <li><a target=" _blank" className="px-2 py-1 rounded-full bg-blue-400 hover:opacity-70" href="https://twitter.com"> <i className='bx bxl-twitter' ></i></a></li>
            <li><a target=" _blank" className="px-2 py-1 rounded-full bg-red-800 hover:opacity-70" href="https://www.youtube.com/watch?v=r-dnObsTLGo"> <i className='bx bxl-youtube' ></i></a></li>
        </ul>
    </div>
    
</div>
  )
}
