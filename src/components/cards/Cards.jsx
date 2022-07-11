import React from 'react'
import "../cards/cards.css"
import grass from '../images/tennis-court-grass.jpg';
import clay from '../images/claycourt.jpg';
import hard from '../images/hardcourt.jpg';


const Cards = () => {
  return (
    <div class="courts">
    <div class="container">
      <div class="row">
        <h1>Court Types</h1>
        <div class="line"></div>
        <p>
          Excepteur sint occaecat cupidatat non proident sunt in culpa qui
          officia deserunt mollit anim id est laborum
        </p>
        <div class="col-md-4">
          <div class="card">
            <div class="card-head">
            <img src={clay} className="img-fluid" alt="" />
            </div>
            <div class="card-body">
              <h6>
                Clay
              </h6>
              <p>
                Teritatis et quasi architecto. Sed ut perspiciatis unde omnis
                iste natus error sit voluptatem accusantium dolore mque
                laudantium, totam rem aperiam, eaque ipsa quae ab illo invent.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-head">
            <img src={hard} className="img-fluid" alt="" />
            </div>
            <div class="card-body">
              <h6>
                Hard
              </h6>
              <p>
                Teritatis et quasi architecto. Sed ut perspiciatis unde omnis
                iste natus error sit voluptatem accusantium dolore mque
                laudantium, totam rem aperiam, eaque ipsa quae ab illo invent.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-head">
            <img src={grass} className="img-fluid" alt="" />
            </div>
            <div class="card-body">
              <h6>
                Grass
              </h6>
              <p>
                Teritatis et quasi architecto. Sed ut perspiciatis unde omnis
                iste natus error sit voluptatem accusantium dolore mque
                laudantium, totam rem aperiam, eaque ipsa quae ab illo invent.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Cards