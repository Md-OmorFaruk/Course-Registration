

const Bookmark = ({bookmark}) => {
    const { title } = bookmark
    return (
        <div className="bg-[#ffffff] text-base font-normal px-4 py-2">
           <li>{title}</li>
            
        </div>
    );
};

export default Bookmark;