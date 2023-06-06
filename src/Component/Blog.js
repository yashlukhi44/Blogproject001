import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import "../asset/style.css"


const Blog =()=> {

    let [data, setItem] = useState('');
    let [Active, setActive] = useState(true)
    

    useEffect(() => {
        if (Active) {
            fetch('http://localhost:3001/blogs', {
            }).then(res => {
                res.json().then(record => {
                    setItem(record);
                    setActive(false)
                })
                .catch(err =>{
                    console.log(err);
                })
                
            }).catch(err => { console.log(err) })
        }
    },[data])

    const filterD = async (cateItem) => {
        await fetch('http://localhost:3001/blogs', {
        }).then(res => {
            res.json().then(record => {
                setActive(false);
                if (cateItem) {
                    let updateData = record.filter((v) => {
                        if (v.category == cateItem) {
                            return v;
                        }
                    });
                    setItem(updateData)
                }
                else {
                    setItem(record);
                }
            });
        }).catch(err => { console.log(err) })
    }

    return (
        <div className='container'>
            <div>
            <br />
                <h1 className='white'>Blog Page</h1>
                ________________
                <br/>
                <br />
                <div >
                    <button className='btn btn-primary m-2' onClick={() => filterD('')}>All</button>
                    <button className='btn btn-dark m-2' onClick={() => filterD('ipl')}>Ipl</button>
                    <button className='btn btn-dark m-2' onClick={() => filterD('science')}>Science</button>
                    <button className='btn btn-dark m-2' onClick={() => filterD('hospital')}>Hospital</button>
                    <button className='btn btn-dark m-2' onClick={() => filterD('motor')}>Motor-Cycle</button>
                    <NavLink to='/addblog'><button className='btn btn-outline-dark'>+</button></NavLink>
                </div>
                <br/>
                <section className='row'>
                    {data?data.filter((v,id)=>{
                        return v;
                    }).map((v,i)=>{
                        return(
                            <div className='col-md-4 p-1'>
                                <div className='main form-control color'>
                                    <img className='img' src={require ("../asset/images/virat.jpg")}/>
                                    <h3 className='m-2'>{v.name}</h3>
                                    <h4 className='m-2'>{v.category}</h4>
                                    <p className='m-2'>{v.desc}</p>
                                    <NavLink to={'/blog/'+v.id}><button className='btn btn-success' >Read More</button></NavLink>
                                </div>
                            </div>
                        )
                    }) :"please conect your server"}
                </section>
            </div>
        </div>
    )
}
export default Blog;
