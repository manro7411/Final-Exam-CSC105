/* eslint-disable jsx-a11y/alt-text */
import React from "react";
function Contact(props) {
  return (
    <div className="container">
      <div className="row row-content">
        <br></br>
        <div className="col-12 col-sm-4 offset-sm-1">
          <img className="profile" src="/assets/images/Ratchanon.jpeg" />
        </div>
        <div className="col-12 col-sm-6 offset-sm-1">
          <h2>Ratchanon Traitiprat</h2>
          <hr></hr>
          <p>king mongkut's university of technology thonburi</p>

          <h5>Favorite Subjects</h5>
          <ol>
            <li>Data Structor</li>
            <p>During that data structor class, it gave me an even weirder logic. It makes thinking more complicated than ever.</p>
            <li>Web Development</li>
            <p>it has been designed and made to be creative in design.</p>
            <li>programming paradigms </li>
            <p>because in that study i also learned python which also increased my programming language skills.</p>
          </ol>

          <h5>Favorite Movie</h5>
          <ol>
            <li>Toy story</li>
            <p>It was the first movie that made my English better.</p>
            <li>Planes</li>
            <p>It was a film that inspired me to study hard and become a pilot in the future.</p>
            <li>Zootopia</li>
            <p>It's a movie that allows my imagination to grow and I can enjoy it..</p>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Contact;
