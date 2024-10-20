import React, {useState, useEffect} from 'react'

const AllBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    const loadAllBlog = async () => {
        console.log('component loading time');
        try{
            const response = await fetch("api/user/blogs", {
                method: "GET",
                headers : {
                    "content-type": "application/json"
                },
            });
            if(response.ok){
                console.log('ok')
                const data = await response.json();
                console.log('data', data)
                setBlogs(data);
            }else{
                console.log("Something error");
            }
        }catch(error){
            console.log("Server error");
        }
    }

    useEffect(() => {
        loadAllBlog();
    }, [])
  return (
    <div>
      <div className='container' style={{margin:"20px", display:"flex", flexWrap:"wrap", justifyContent: 'space-between'}}>
        {blogs.map((blog) => (
        
        <div className="card"  style={{ width: "18rem", margin:"20px"}}>
                <img src={blog.blogImage} className="card-img-top" style={{height:"100px", width:"100px"}} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{blog.blogTitle}</h5>
                    <p className="card-text">
                        {blog.blogDescription}
                    </p>
                    <a href="test" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        ))}
         
        </div>
    </div>
  )
}

export default AllBlogs
