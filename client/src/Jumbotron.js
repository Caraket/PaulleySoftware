import React from 'react';
import Button from './Button';

export const Jumbotron = (props) => {
    return (
        <div>
            <section class="jumbotron text-center bg-transparent">
                                <div class="container">
                                  <h1 class="jumbotron-heading text-light display-1 text-left text-capitalize">software done right</h1>
                                  <p class="lead text-light h3 text-left">{props.text}</p>
                                  <p>
                                    <Button link="/contact" text="Looking for a website" buttonClass="btn-primary" />
                                    <Button link="/contact" text="Looking to Hire" buttonClass="btn-dark" /> 
                                  </p>
                                </div>
                              </section>
        </div>
    )
}

export default Jumbotron;
