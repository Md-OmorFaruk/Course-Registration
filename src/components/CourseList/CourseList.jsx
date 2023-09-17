import Bookmark from "../Bookmark/Bookmark";



const CourseList = ({courseList, remaining, totalCredit}) => {
    return (
        <div className="md:w-1/5 mr-4 mt-10">
            <div className="bg-[#FFFFFF] rounded-t-xl p-3">
            <h2 className="text-xl text-[#2F80ED] font-semibold">Credit hour remaining: {remaining}</h2>
            <hr />
            <h2 className="text-xl font-bold">CourseName: </h2>
            
            {
               courseList.map(bookmark => <Bookmark bookmark={bookmark}></Bookmark>)
            }
            <hr />
            <h2 className="text-base text-gray-600 font-semibold">Total Credit: {totalCredit}</h2>
            </div>
            
        </div>
    );
};

export default CourseList;