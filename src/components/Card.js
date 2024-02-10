import React from "react";
import {FcLike, FcLikePlaceholder} from 'react-icons/fc';
import './Card.css';
import { toast } from "react-toastify";

const Card = (props) => {
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setlikedCourses = props.setlikedCourses;

    function clickHandler(){
        if(likedCourses.includes(course.id)){
            // already clicked
            setlikedCourses((prev)=> prev.filter((cid)=> (cid !== course.id)));
            toast.warning("Liked Removed");
        }
        else{
            if(likedCourses.length === 0){
                setlikedCourses([course.id])
            }
            else{
                setlikedCourses((prev)=> [...prev,course.id]);
            }
            toast.success("Liked Soccessfully");
        }
    }

    return(
        <div className="card_wrapper">
            <div className="image_block">
                <img src={course.image.url} alt="loading"/>

                <div className="Like_card_buttons">
                    <button onClick={clickHandler}>
                        {
                            likedCourses.includes(course.id) ? (<FcLike/>) : (<FcLikePlaceholder/>)
                        }
                    </button>
                </div>

            </div>
            
            <div className="heading">
                <p>{course.title}</p>
            </div>
            <div className="description">
                <p>
                    {
                        course.description.length > 100 ? 
                        (course.description.substring(0,100)) + "..." : 
                        (course.description)
                    }
                </p>
            </div>
        </div>
    )
}

export default Card;