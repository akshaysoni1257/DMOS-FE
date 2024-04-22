import { useEffect } from "react";
import "./failed.css"

const Failed = () => {
    useEffect(() => {
        document.title = "Payment Failed | Pizza Time";
    }, []);

    return (

    <div className="row justify-content-center">
        <div className="col-md-5">
            <div className="message-box _success _failed">
                 <i className="fa fa-times-circle" aria-hidden="true"></i>
                <h2> Your payment failed </h2>
            <p>  Try again later </p> 
        
            </div> 
        </div> 
        <a className="cart-btn active-button-style txt-white" href="/cart" style={{margin: "40px auto"}}> Back to Cart </a>
    </div> 


    
    
    )
}

export default Failed;