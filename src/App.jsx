import { useState } from 'react'
import './App.css'
import CourseList from './components/CourseList/CourseList'
import Courses from './components/Courses/Courses'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [courseList, setCourseList] = useState([]);
  const [remaining, setRemaining] = useState(20);
  const [totalCredit, setTotalCredit] = useState(0);

  const handleAddToCourseName = (course, credit) =>{
    // if (!newCourseList) {
    //   alert('This course you purches already');
    // }

    const newTotalCredit = totalCredit + +credit;
    if (newTotalCredit <= 20) {
      setTotalCredit(newTotalCredit);
       const newCourseList = [...courseList, course];
      setCourseList(newCourseList);
      
    const newRemaining = remaining - credit;
    
    if(newRemaining < 0){
      toast.error('Courses credit is exceed !')
      setRemaining(newRemaining);
    }
    else{
      
      setRemaining(newRemaining);
    }
    }

  
    
  }



  return (
    <>
      <h1 className='text-3xl text-center font-bold p-4 mt-6'>Course Registration</h1>

     <div className='flex'>
     <Courses handleAddToCourseName={handleAddToCourseName}></Courses>
      <CourseList courseList={courseList} remaining={remaining} totalCredit={totalCredit}></CourseList>
     </div>
     <ToastContainer/>
    </>
  )
}

export default App
