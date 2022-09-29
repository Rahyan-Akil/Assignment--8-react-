import React from 'react';
import Break from '../Break/Break';
import './GymCarts.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GymCarts = (props) => {
    const {gymCart} = props;
    

    let totalTime = 0;
    
    for(const a of gymCart){
        totalTime = totalTime + a.time;
        
    } 
    const notify = () => {
        toast('Your Activity Completed.')
    }

    return (
        <div className='gym-cart'>
            <div className='details'>
                <img src="images/akil.jpg" alt="" />
                <h4 className='name'>Rahyan Shamsi Akil</h4>
            </div>

            <div className='align'>
                <div className='box'>
                    <h3>66</h3>
                    <p>Weight</p>
                </div>
                <div className='box'>
                    <h3>5.6</h3>
                    <p>Height</p>
                </div>
                <div className='box'>
                    <h3>22</h3>
                    <p>Age</p>
                </div>
            </div>

            <div>
                <Break></Break>  
            </div>

            <div className='exercise'>
                <p><b>Exercise Time: {totalTime} sec</b></p>
            </div>

            <div>
                <button className='btn-cart1' onClick={notify}>Activity Completed</button>
                <ToastContainer></ToastContainer>
            </div>

        </div>
    );
};

export default GymCarts;