import React from "react";

const Navlink = () => {
  return (
    <div>
      {/* Navbar */}
      <nav class="navbar navbar-default">
        <ul class="nav navbar-nav">
          <li>
            <div class="container">
                <span>
                    <img
                src="https://pngimg.com/uploads/bmw_logo/bmw_logo_PNG19705.png"
                class="img-rounded"
                alt="Cinque Terre"
                style={{ width: "40px" }}
              />
                </span>
              <span>
              
              <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="right" title="Tooltip on bottom">
  Tooltip on bottom
</button>
             
              </span>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navlink;
