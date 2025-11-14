import React from "react";
import "./Card.css";

export default function Card() {
  return (
    <>
      <div className="card-section mt-5">
        <div className="text-section text-center py-5 text-light">
          <h2>LAYANAN KAMI</h2>
        </div>
        <div className="container ">
          <div className="row justify-content-center text-center">
            <div className="col-md-3">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">SAFETY TRAINING</h4>
                  <p className="card-text">
                    Training dan Konsultan K3 Lainnya...
                  </p>
                  <a href="#" class="btn btn-primary">
                    Detail
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">TRAINING SDM</h4>
                  <p className="card-text">
                    Soft Skill, Leadership, Management, Tim Building, ITC.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Detail
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">DIVISI CONSULTANT</h4>
                  <p className="card-text">
                    Konsultan Perencanaan & Tata Ruang, Survey & Teknologi IT.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Datail
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">EVENT ORGANIZER</h4>
                  <p className="card-text">
                    Corporate Event, Family Gathering, Publikasi & Promosi.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Detail
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
