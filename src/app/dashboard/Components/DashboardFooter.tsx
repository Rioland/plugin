import React from 'react'

export default function DashboardFooter() {
  return (
        <footer className="dashboard_footer pt30 pb30">
        <div className="container">
          <div className="row align-items-center justify-content-center justify-content-md-between">
            <div className="col-auto">
              <div className="copyright-widget">
                <p className="mb-md-0">
                  © Freeio. 2023 CreativeLayers. All rights reserved.
                </p>
              </div>
            </div>
            <div className="col-auto">
              <div className="footer_bottom_right_btns at-home8 text-center text-lg-end">
                <ul className="p-0 m-0">
                  <li className="list-inline-item bg-white">
                    <select className="selectpicker show-tick">
                      <option>US$ USD</option>
                      <option>Euro</option>
                      <option>Pound</option>
                    </select>
                  </li>
                  <li className="list-inline-item bg-white">
                    <select className="selectpicker show-tick">
                      <option>English</option>
                      <option>Frenc</option>
                      <option>Italian</option>
                      <option>Spanish</option>
                      <option>Turkey</option>
                    </select>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
  )
}
