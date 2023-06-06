import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

const Read = ()=>{

    let [data ,setItem] = useState([])
    let [active , setActive] = useState(true)
    
    let {id} = useParams();
    
    useEffect(()=>{
        if(active) {
            fetch('http://localhost:3001/blogs/'+id,{
            }).then(res=>{
                res.json().then(record=>{
                    let datarecord = [record]

                    setActive(false);

                    setItem(datarecord);
                })
                .catch(err=>{
                    console.log(err)
                })
            }).catch(err=>{console.log(err)})
        }
    },[data])
    return(
        <div>
           

            <div align='center'>
                {data.map((v,i)=>{
                    return(
                        <div>
                            <div className='col-md-6 p-1 zoom'>
                                <div className='main form-control color'>
                                    <img className='img' src={require ("../asset/images/"+v.images)}/>
                                    <h3 className='m-2'>{v.name}</h3>
                                    <h4 className='m-2'>{v.category}</h4>
                                    <p className='m-2'>{v.sdesc}</p>                               \
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div>
                <NavLink to='/'><button className="btn btn-info m-4">Back</button></NavLink>
            </div>
        </div>
    )
}
export default Read;