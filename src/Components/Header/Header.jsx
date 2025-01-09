import { RiUser3Line } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";


const Header = () => {
    return (
        <div className="w-[1320px] mx-auto">
            <div className=" flex justify-between items-center py-12">
                <h1 className="text-[32px] font-bold cursor-pointer">Recipe Calories</h1>
                <div className="flex text-[#150B2BB3] gap-12 items-center cursor-pointer">
                    <p>Home</p>
                    <p>Recipes</p>
                    <p>About</p>
                    <p>Search</p>
                </div>
                <div className="flex items-center gap-6">
                    <label className="input input-bordered flex items-center gap-2 text-[18px] bg-[#150B2B0D] rounded-full border-none">
                        <IoIosSearch />
                        <input type="text" className="grow" placeholder="Email" />
                    </label>
                    <button className="bg-[#0BE58A] p-[18px] text-xl rounded-full"><RiUser3Line /></button>
                </div>
            </div>
            <div className="bg-cover bg-no-repeat h-[600px] w-[1320px]" style={{backgroundImage: 'url(https://i.ibb.co.com/DrWKG0t/chefs.png)'}}>\
            <div className="flex flex-col justify-center items-center text-center h-full">
                <h1 className="text-[52px] text-white font-semibold">Discover an exceptional cooking <br /> class tailored for you!</h1>
                <p className="text-[18px] text-white mt-6">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding <br /> problems to become an exceptionally well world-class Programmer.</p>
                <div className="flex items-center gap-[30px] mt-10">
                    <button className="bg-[#0BE58A] text-xl rounded-full px-[30px] py-5 text-[#150B2B]">Explore Now</button>
                    <button className="border-white border text-white px-[30px] py-5 rounded-full">Our Feedback</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Header;