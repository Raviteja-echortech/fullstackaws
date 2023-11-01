
//import { useState } from 'react';
import './Styles/styles.css';

function App() {
  //const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <a class="navbar-brand" href="#">Navbar</a>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      <div>
        
      </div>
    </div>

    // <div>
    //  <div className={`d-flex flex-column flex-shrink-0 bg-body-tertiary  sideBar`} onMouseEnter={() => setIsHovered(true)}
    //     onMouseLeave={() => setIsHovered(false)} >
    //     {/* <a href="/" class="d-block p-3 link-body-emphasis text-decoration-none" title="Icon-only" data-bs-toggle="tooltip"
    //       data-bs-placement="right"> */}
    //     {/* <svg class="bi pe-none" width="40" height="32">
    //         <use xlink: href="#bootstrap" />
    //       </svg> */}
    //     {/* <span class="visually-hidden">Icon-only</span> */}
    //     {/* </a> */}
    //     <ul class="nav nav-pills nav-flush flex-column mb-auto text-center">
    //       <li class="nav-item">
    //         <a href="#" class="nav-link active py-3 border-bottom rounded-0" aria-current="page" title="Home"
    //           data-bs-toggle="tooltip" data-bs-placement="right">
    //           <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none">
    //             <path d="M2.00004 13.8333H4.50004V8.83333H9.50004V13.8333H12V6.33333L7.00004 2.58333L2.00004 6.33333V13.8333ZM0.333374 15.5V5.5L7.00004 0.5L13.6667 5.5V15.5H7.83337V10.5H6.16671V15.5H0.333374Z" fill="white" />
    //           </svg>
    //           {isHovered && <span className="nav-text">Home</span>}
    //         </a>
    //       </li>
    //       <li> 
    //         <a href="#" class="nav-link  py-3 border-bottom rounded-0" title="Dashboard" data-bs-toggle="tooltip"
    //           data-bs-placement="right">
    //           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    //             <path d="M10 15.625C13.1066 15.625 15.625 13.1066 15.625 10C15.625 6.8934 13.1066 4.375 10 4.375C6.8934 4.375 4.375 6.8934 4.375 10C4.375 13.1066 6.8934 15.625 10 15.625Z" stroke="#475569" stroke-width="0.46875" stroke-miterlimit="10" />
    //             <path d="M10 7.8125V5.9375M14.2188 10H12.3438M7.8125 10H5.9375M12.9688 7.34375L12.0312 8.28125M7.96875 8.28125L7.03125 7.34375M12.0312 11.7188L12.9688 12.6562M7.03125 12.6562L7.96875 11.7188" stroke="#475569" stroke-width="0.234375" stroke-linecap="round" stroke-linejoin="round" />
    //             <path d="M10 10.9375C10.5178 10.9375 10.9375 10.5178 10.9375 10C10.9375 9.48223 10.5178 9.0625 10 9.0625C9.48223 9.0625 9.0625 9.48223 9.0625 10C9.0625 10.5178 9.48223 10.9375 10 10.9375Z" fill="#EF4444" />
    //             <path d="M10 11.0938V6.40625" stroke="#EF4444" stroke-width="0.46875" stroke-miterlimit="10" stroke-linecap="round" />
    //           </svg>
    //           {isHovered && <span className="nav-text">Dashboard</span>}

    //         </a>
    //       </li>
    //       <li>
    //         <a href="#" class="nav-link  py-3 border-bottom rounded-0" title="Orders" data-bs-toggle="tooltip"
    //           data-bs-placement="right">

    //           <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
    //             <path d="M28.125 2.80591L20.6184 2.80594V0.9375C20.6184 0.419531 20.1989 0 19.6809 0C19.163 0 18.7434 0.419531 18.7434 0.9375V2.80547H11.2434V0.9375C11.2434 0.419531 10.8239 0 10.3059 0C9.78797 0 9.36844 0.419531 9.36844 0.9375V2.80547H1.875C0.839531 2.80547 0 3.645 0 4.68047V28.118C0 29.1534 0.839531 29.993 1.875 29.993H28.125C29.1605 29.993 30 29.1534 30 28.118V4.68047C30 3.64544 29.1605 2.80591 28.125 2.80591ZM28.125 28.118H1.875V4.68047H9.36844V5.625C9.36844 6.14294 9.78797 6.5625 10.3059 6.5625C10.8239 6.5625 11.2434 6.14294 11.2434 5.625V4.68094H18.7434V5.62547C18.7434 6.14344 19.163 6.56297 19.6809 6.56297C20.1989 6.56297 20.6184 6.14344 20.6184 5.62547V4.68094H28.125V28.118ZM21.5625 14.9934H23.4375C23.955 14.9934 24.375 14.5734 24.375 14.0559V12.1809C24.375 11.6634 23.955 11.2434 23.4375 11.2434H21.5625C21.045 11.2434 20.625 11.6634 20.625 12.1809V14.0559C20.625 14.5734 21.045 14.9934 21.5625 14.9934ZM21.5625 22.4929H23.4375C23.955 22.4929 24.375 22.0734 24.375 21.5554V19.6804C24.375 19.1629 23.955 18.7429 23.4375 18.7429H21.5625C21.045 18.7429 20.625 19.1629 20.625 19.6804V21.5554C20.625 22.0739 21.045 22.4929 21.5625 22.4929ZM15.9375 18.7429H14.0625C13.545 18.7429 13.125 19.1629 13.125 19.6804V21.5554C13.125 22.0734 13.545 22.4929 14.0625 22.4929H15.9375C16.455 22.4929 16.875 22.0734 16.875 21.5554V19.6804C16.875 19.1634 16.455 18.7429 15.9375 18.7429ZM15.9375 11.2434H14.0625C13.545 11.2434 13.125 11.6634 13.125 12.1809V14.0559C13.125 14.5734 13.545 14.9934 14.0625 14.9934H15.9375C16.455 14.9934 16.875 14.5734 16.875 14.0559V12.1809C16.875 11.6629 16.455 11.2434 15.9375 11.2434ZM8.4375 11.2434H6.5625C6.045 11.2434 5.625 11.6634 5.625 12.1809V14.0559C5.625 14.5734 6.045 14.9934 6.5625 14.9934H8.4375C8.955 14.9934 9.375 14.5734 9.375 14.0559V12.1809C9.375 11.6629 8.955 11.2434 8.4375 11.2434ZM8.4375 18.7429H6.5625C6.045 18.7429 5.625 19.1629 5.625 19.6804V21.5554C5.625 22.0734 6.045 22.4929 6.5625 22.4929H8.4375C8.955 22.4929 9.375 22.0734 9.375 21.5554V19.6804C9.375 19.1634 8.955 18.7429 8.4375 18.7429Z" fill="black" />
    //           </svg>
    //           {isHovered && <span className="nav-text">tooltip</span>}
    //         </a>
    //       </li>
    //       <li>
    //         <a href="#" class="nav-link  py-3 border-bottom rounded-0" title="Products" data-bs-toggle="tooltip"
    //           data-bs-placement="right">

    //           {isHovered && <span className="nav-text">Products</span>}
    //         </a>
    //       </li>
    //       <li>
    //         <a href="#" class="nav-link  py-3 border-bottom rounded-0" title="Customers" data-bs-toggle="tooltip"
    //           data-bs-placement="right">
    //           {isHovered && <span className="nav-text">Dolo</span>}
    //         </a>
    //       </li>
    //     </ul>
    //     <div class="dropdown border-top">
    //       <a href="#"
    //         class="d-flex align-items-center justify-content-center p-3 link-body-emphasis text-decoration-none dropdown-toggle"
    //         data-bs-toggle="dropdown" aria-expanded="false">
    //         <img src="https://github.com/mdo.png" alt="mdo" width="24" height="24" class="rounded-circle" />
    //       </a>
    //       <ul class="dropdown-menu text-small shadow">
    //         <li><a class="dropdown-item" href="#">New project...</a></li>
    //         <li><a class="dropdown-item" href="#">Settings</a></li>
    //         <li><a class="dropdown-item" href="#">Profile</a></li>
    //         <li>
    //           <hr class="dropdown-divider" />
    //         </li>
    //         <li><a class="dropdown-item" href="#">Sign out</a></li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>
  );
}

export default App;
