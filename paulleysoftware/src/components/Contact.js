import React from 'react';
import Header from '../Header';



export const Contact = (props) => {
  return (
    <div>
      <div class="center-cropped">
        <div class="overlay">
          <div class="container"></div>
            <Header />
            <section class="jumbotron text-center bg-transparent">
                <div class="container">
                    <h1 class="jumbotron-heading text-light text-left">Contact</h1>
                    <p class="lead text-light text-left">Name: Cory Paulley</p>
                    <p class="lead text-light text-left">Phone: +1-218-259-9533</p>
                    <p class="lead text-light text-left">Email: cory.paulley@gmail.com</p>
                </div>
            
              </section>
        </div>
      </div>
    </div>
  )
}


export default Contact;