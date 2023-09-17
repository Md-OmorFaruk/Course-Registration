import PropTypes from 'prop-types';

const Course = ({course, handleAddToCourseName}) => {
    const {cover_img, title, description, price, credit} = course;
    return (
        <div className=' bg-white p-3 rounded-xl '>
            <img style={{height:'250px'}} src={cover_img} alt="" />
            <h3 className='text-xl text-[#1C1B1B] font-bold my-3'>{title}</h3>
            <p className='text-l text-gray-600 font-normal'>{description}</p>
            <div style={{display:'flex',gap:'10px',justifyContent:'space-around', margin:'5pxn'}}>
                <p><span className='text-l font-normal'>Price:$ {price}</span></p>
            <p className='text-l font-normal mb-2'>Credit: {credit} hr</p>
            </div>
            <button onClick={() =>handleAddToCourseName(course,credit)} className='w-7/12 py-1 rounded text-white bg-[#2F80ED] w-full'>Select</button>
        </div>
    );
};

Course.PropTypes = {
    course: PropTypes.object.isRequired
}
export default Course;