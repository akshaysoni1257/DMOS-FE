import { useEffect } from "react";
import "./sucess.css"

const Sucess = () => {
    useEffect(() => {
        document.title = "Payment Sucess | Pizza Time";
    }, []);

    return (

    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-5">
                <div className="message-box _success">
                     <i className="fa fa-check-circle" aria-hidden="true"></i>
                    <h2> Your payment was successful </h2>
                   <p> Thank you for your payment. we will <br></br>
be in contact with more details shortly </p>      
                </div> 
            </div> 
        </div>
        <a className="cart-btn active-button-style txt-white" href="/" style={{margin: "40px auto"}}> Back to Home </a>
    </div> 


    
    
    )
}

export default Sucess;