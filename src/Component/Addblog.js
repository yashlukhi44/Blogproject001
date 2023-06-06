import React from "react";
import { useNavigate } from "react-router-dom";
import {useState} from 'react';

const Add = ()=>{

    // let[name,onName]=useState('');
    // let[category,onCategory]=useState('');
    // let[desc,onDesc]=useState('');
    let navigate = useNavigate()

    let [state, setState] = useState({
        image : "",category:"",name:"",desc:"",sdesc: ""
    })

    const handleInputData = (e) =>{
        var name = e.target.name;
        var value = e.target.value;
        setState({
            ...state,[name] : value
        })
    }

    const submitData=(e)=>{
        e.preventDefault();
        fetch("http://localhost:3001/blogs/",{
                method :"POST",
                body: JSON.stringify(state),
                headers: {
                        "Content-Type": "application/json"
                    }
            }).then(res=>{console.log("Add")
            }).catch(err=>{console.log(err)})
    }

    return(
        <div>
            <h1>Addd Blog</h1><br/>
            <form method="post" onSubmit={(e)=>submitData(e)}>
            <table border={1} align="center" className="border border-3 ">
                <tr className="form-control ">
                    <label className="form-label">Enter Image Path</label>
                    <input className="form-control" type="text" name="images" onChange={(e)=>handleInputData (e)}/>
                </tr>
                <tr className="form-control ">
                    <label className="form-label">Enter Your Name</label>
                    <input className="form-control" type="text" name="name" onChange={(e)=>handleInputData (e)}/>
                </tr>
                <tr className="form-control">
                    <label className="form-label">Enter Your category</label>
                    <input className="form-control"  type="text" name="category"  onChange={(e)=>handleInputData (e)}/>
                </tr>
                <tr className="form-control">
                    <label className="form-label">Enter Description</label>
                    <textarea className="form-control" type="text" name="desc" onChange={(e)=>handleInputData (e)} />
                </tr>
                <tr className="form-control">
                    <label className="form-label">Enter second Description</label>
                    <textarea className="form-control" type="text" name="sdesc" onChange={(e)=>handleInputData (e)} />
                </tr>
                <tr className="form-control">
                    <td></td>
                    <td><input type="submit" value="submit" /></td>
                </tr>
            </table>
            <br/>
            <button className="btn btn-outline-info" onClick={()=>navigate("/")}>View Blog</button>
            </form>
        </div>
    )
}

export default Add;