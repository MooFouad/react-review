import React, {useState} from 'react';
import person from './data';
import './review.css';
import { FaQuoteRight, FaChevronRight, FaChevronLeft } from 'react-icons/fa';

const Review = () => {
    
    const [index,setIndex] = useState(0);
    const {id,name,job,image,text} = person[index];

    const checkNum = (num) =>{
        if(num > person.length -1){
            return 0;
        }
        if(num < 0){
            return person.length -1;
        }
        return num;
    }

    const handleNext = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkNum(newIndex);
        });
    }

    const handlePrev = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkNum(newIndex);
        });
    }
    
    const handleRandom = () =>{
        let randomNum = Math.floor(Math.random() * person.length) ;
        if(randomNum == index){
            randomNum = index + 1 ; 
        }
        setIndex(checkNum(randomNum));
    }

    return (
        <article className="review">
            <div className="img-container">
                <img src={image} alt={name} className='person-img'/>
                <span className='quote-icon'>
                    <FaQuoteRight/>
                </span>
            </div>
            <h4 className="author">{name}</h4>
            <div className="job"> {job} </div>
            <div className="info"> {text} </div>
            <div className='button-container'>
            <button onClick={handlePrev} className='prev-btn'>
                <FaChevronLeft />
            </button>
            <button onClick={handleNext} className='next-btn'>
                <FaChevronRight />
            </button>
            </div>
            <button className="random-btn" onClick={handleRandom}>
                Surprise Me
            </button>
        </article>
      );
}
 
export default Review;