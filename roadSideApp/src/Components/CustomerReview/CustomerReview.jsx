// import React from 'react'
import "./customer.css";
import {  Happyface} from "../../assets/index"

const CustomerReview = () => {
  return (
    <>
      <section className="customer__review__section">
        <div className="section__heading ">
          <h3>Customer Review</h3>
        </div>
        <div className="review__cards">
          <div className="review__card">
            <div className="rating__stars">
              <span>5 stars</span>
            </div>
            <div className="review__feedback">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Maiores expedita perspiciatis similique, temporibus iste libero
                ipsa unde culpa nostrum ullam?
              </p>
            </div>

            <div className="customer__user">
              <div className="user__profile">
                <img src={Happyface} alt="user pics" />
              </div>
              <div className="user__details">
                <p>John Doe</p>
                <p>Lorem</p>
              </div>
            </div>
          </div>
          <div className="review__card">
            <div className="rating__stars">
              <span>5 stars</span>
            </div>
            <div className="review__feedback">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Maiores expedita perspiciatis similique, temporibus iste libero
                ipsa unde culpa nostrum ullam?
              </p>
            </div>

            <div className="customer__user">
              <div className="user__profile">
                <img src={Happyface} alt="user pics" />
              </div>
              <div className="user__details">
                <p>John Doe</p>
                <p>Lorem</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomerReview;
