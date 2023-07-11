import "../src/Login/Nav.css";
function Try() {
    return ( <>
    <header class="header_section">
      
        <div class="content_wrap">
          <div class="container maxw_1560">
            <div class="row align-items-center">

              <div class="col-lg-2 col-md-6 col-6">
                
              </div>

              <div class="col-lg-10 col-md-6 col-6">
                <nav class="main_menu navbar navbar-expand-lg">
                  
                  <div class="main_menu_inner collapse navbar-collapse" id="main_menu_dropdown">
                    <ul class="main_menu_list ul_li">
                      <li class="active dropdown">
                        <a class="nav-link" href="#" id="home_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Home
                        </a>
                      </li>
                      <li class="dropdown">
                        <a class="nav-link" href="#" id="about_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">ABOUT</a>
                      </li>
                      <li class="dropdown">
                        <a class="nav-link" href="#" id="portfolio_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                         F.A.Q</a>
                      </li>
                      <li class="dropdown">
                        <a class="nav-link" href="#" id="services_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                         CONTACT US
                        </a>
                          </li>
                          <li><a href="#">LOGIN</a></li>
                        </ul>
                  </div>
                </nav>
              </div>

            </div>
          </div>
      
        </div>
        <div class="main_search_collapse collapse" id="main_search_collapse">
          <div class="main_search_form card">
            <div class="container maxw_1560">
              <form action="#">
                <div class="form_item">
                </div>
              </form>
            </div>
          </div>
        </div>
      </header>
    </> );
}

export default Try;