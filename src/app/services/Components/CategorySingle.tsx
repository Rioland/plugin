import React from 'react'

export default function CategorySingle() {
  return (
        <section className="breadcumb-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 col-lg-10">
              <div className="breadcumb-style1 mb10-xs">
                <div className="breadcumb-list">
                  <a href="#">Home</a>
                  <a href="#">Services</a>
                  <a href="#">Design &amp; Creative</a>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-lg-2">
              <div className="d-flex align-items-center justify-content-sm-end">
                <div className="share-save-widget d-flex align-items-center">
                  <span className="icon flaticon-share dark-color fz12 mr10" />
                  <div className="h6 mb-0">Share</div>
                </div>
                <div className="share-save-widget d-flex align-items-center ml15">
                  <span className="icon flaticon-like dark-color fz12 mr10" />
                  <div className="h6 mb-0">Save</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
  )
}
