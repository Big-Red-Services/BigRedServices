import {useState} from 'react';
import Card from './Card';

const Home = () => {

    return (  
        <div className = "home">
            <div className = "title">
                <h1>postings</h1>
            </div>
            <div className='cards'>
                <div className='card1'>
                    <Card paid="paid" time="1.5 hr" dayNum = "2" dayPlural="days" info ="pick up food from collegetown and deliver to west campus"/>
                </div>
                <div className='card2'>
                    <Card paid= "unpaid" time="2 hr" dayNum = "1" dayPlural="day" info ="need someone to do my laundry ASAP!"/>
                </div>
                <div className='card3'>
                    <Card paid= "paid" time="2.5 hr" dayNum = "3" dayPlural="days" info ="help with math 1920 homework"/>
                </div>
                <div className='card4'>
                    <Card paid= "paid" time="2.5 hr" dayNum = "3" dayPlural="days" info ="help with math 1920 homework"/>
                </div>
            </div>
        </div>
    );
}
 
export default Home;