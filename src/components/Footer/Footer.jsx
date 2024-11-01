import React from "react";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div>
      <footer>
        <div className="container-fluid" id="footer">
          <div className="row">
            <div className="col">
              <p>
                &copy; {year} FinanceMan
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
