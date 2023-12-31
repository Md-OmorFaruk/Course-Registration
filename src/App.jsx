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

  const handleAddToCourseName = (course, credit) => {

      const newTotalCredit = totalCredit + +credit;
      const newRemaining = remaining - credit;
      const remain = 20 - totalCredit;
      if (newTotalCredit <= 20) {
        setTotalCredit(newTotalCredit);
        const newCourseList = [...courseList, course];
        setCourseList(newCourseList);
      
   
    
        if (newRemaining < 0) {
          toast.error('Courses credit is exceed !')
          setRemaining(newRemaining);
        }
        else {
      
          setRemaining(newRemaining);
        }
      }
      else {
        toast.error(`Courses credit is exceed ! You have only ${remain} credit to select`)
      }

  
  
  }
  



  return (
    <>
      <h1 className='text-4xl text-center font-bold p-6 mt-6'>Course Registration</h1>

     <div className='flex'>
     <Courses handleAddToCourseName={handleAddToCourseName}></Courses>
      <CourseList courseList={courseList} remaining={remaining} totalCredit={totalCredit}></CourseList>
     </div>
     <ToastContainer/>
    </>
  )
}

export default App
