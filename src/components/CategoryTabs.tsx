import React from 'react'

export default function CategoryTabs() {
  return (
        <section className="categories_list_section overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="listings_category_nav_list_menu">
                <ul className="mb0 d-flex ps-0">
                  <li>
                    <a href="#">All Categories</a>
                  </li>
                  <li>
                    <a href="#">Graphics &amp; Design</a>
                  </li>
                  <li>
                    <a className="active" href="#">
                      Digital Marketing
                    </a>
                  </li>
                  <li>
                    <a href="#">Writing &amp; Translation</a>
                  </li>
                  <li>
                    <a href="#">Video &amp; Animation</a>
                  </li>
                  <li>
                    <a href="#">Music &amp; Audio</a>
                  </li>
                  <li>
                    <a href="#">Programming &amp; Tech</a>
                  </li>
                  <li>
                    <a href="#">Business</a>
                  </li>
                  <li>
                    <a href="#">Lifestyle</a>
                  </li>
                  <li>
                    <a href="#">Trending</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
  )
}
