export default function News(){
    return(
        <div className="container my-5">
            <div className="text-section text-center py-5">
  <h2>Berita Lainnya</h2>
</div>
      <div id="cardCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">

          {/* Slide 1 */}
          <div className="carousel-item active">
            <div className="d-flex justify-content-center gap-3">
              <div className="card text-center" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">Safety Training</h5>
                  <p className="card-text">Training dan konsultan K3 lainnya...</p>
                  <a href="#" className="btn btn-warning text-white">Detail</a>
                </div>
              </div>

              <div className="card text-center" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">Training SDM</h5>
                  <p className="card-text">Soft skill, leadership, management, tim building, ITC.</p>
                  <a href="#" className="btn btn-warning text-white">Detail</a>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <div className="d-flex justify-content-center gap-3">
              <div className="card text-center" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">Divisi Consultant</h5>
                  <p className="card-text">Konsultan perencanaan & tata ruang, survey & teknologi IT.</p>
                  <a href="#" className="btn btn-warning text-white">Detail</a>
                </div>
              </div>

              <div className="card text-center" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">Event Organizer</h5>
                  <p className="card-text">Corporate event, family gathering, publikasi & promosi.</p>
                  <a href="#" className="btn btn-warning text-white">Detail</a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Tombol Geser */}
        <button className="carousel-control-prev" type="button" data-bs-target="#cardCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#cardCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
        
    );
}