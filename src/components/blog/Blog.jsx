import React, {useState} from 'react'

const Blog = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [file, setFile] = useState(null);

    const [base64File, setBase64File] = useState("...");
    const [base64Image, setBase64Image] = useState("...");

    let [showToast, setShowToast] = useState(false);
    let [AlertMsg, setAlertMsg] = useState("");

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if(selectedFile){
            setFile(selectedFile);
            //convert to base64
            const reader = new FileReader();
            reader.onloadend = () => {
                setBase64File(reader.result);
                setBase64Image(reader.result);
            };
            reader.readAsDataURL(selectedFile);
        }
    }
    //handle form submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            blogTitle: title,
            blogDescription : description,
            blogImage: base64File
        }

        try{
            console.log('form data bolg ',formData)
            const response = await fetch("api/user/createblog", {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                "Content-Type": "application/json",
                },
            });
            if(response.ok){
                const data = await response.json();
                console.log(data.savedBlog);
                setShowToast(true);
                setAlertMsg ('Blog Save Successfully!');
                console.log("Blog save successfully");
            } else {
                console.log("Blog save Error");
            }
        } catch (error){
            console.log(error)
        }
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
       <div className="container px-4 py-4">
        <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
            Title
            </label>
            <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter Blog Title"
            />
        </div>
        <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">
            Description
            </label>
            <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            ></textarea>
        </div>
        <div className="mb-3">
            <label for="formFile" className="form-label">Upload File</label>
            <input className="form-control" type="file" onChange={handleFileChange} id="formFile" />
            <img src={base64Image} className="rounded float-end" alt="Uploaded Preview" style={{ width: "200px", height: "200px" }} />
        </div>
        <div className="mb-3">
            <button type="submit" className="btn btn-primary mb-3">Save Post</button>
        </div>
      </div>
      </form>
      {showToast && (
      <div
          className="toast align-items-center text-white bg-primary border-0 show" // Added "show" to ensure visibility
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          style={{ position: 'fixed', top: '80px', right: '0px', zIndex: 1 }}
        >
          <div className="d-flex">
            <div className="toast-body">
            {AlertMsg}
            </div>
            <button
              type="button"
              className="btn-close btn-close-white me-2 m-auto"
              aria-label="Close"
            
            ></button>
          </div>
        </div>
        )}
    </div>
  )
}

export default Blog
