// import React from "react";
// import "./Homepage.css";

// function Homepage() {
//   return (
//     <div className="homepage">
//       <div className="top-section">
//         <nav className="navbar">
//           <div className="logo-text">
//             <div className="logo">
//               <img
//                 src="https://api.builder.io/api/v1/image/assets/TEMP/de0ce608c38bd1e4855f6affd09d2d4013b2868b?width=46"
//                 alt=""
//                 className="logo-image"
//               />
//             </div>
//             <div className="logo-button">
//               <div className="logo-text-content">Jobhive</div>
//             </div>
//           </div>
//           <div className="navbar-links">
//             <div className="nav-button">
//               <div className="nav-button-text">Home</div>
//             </div>
//             <div className="nav-button">
//               <div className="nav-button-text">Contact Us</div>
//             </div>
//             <div className="nav-button">
//               <div className="nav-button-text">About</div>
//             </div>
//             <div className="nav-button">
//               <div className="nav-button-text">Jobs</div>
//             </div>
//           </div>
//           <div className="apply-button">
//             <div className="apply-button-text">Apply Now</div>
//           </div>
//         </nav>
//         <div className="hero">
//           <div className="hero-title">
//             Your
//             <div className="hero-title-career">career</div>
//             path starts here
//           </div>
//           <div className="focal-point">
//             <div className="search-button">
//               <div className="search-button-filter">
//                 <div className="search-box">
//                   <div className="search-placeholder">
//                     Search for a job, location......
//                   </div>
//                 </div>
//                 <div className="filter">
//                   <div className="top-filter-buttons">
//                     <div className="filter-button white">
//                       <div className="filter-button-text">All Categories</div>
//                       <div
//                         dangerouslySetInnerHTML={{
//                           __html:
//                             '<svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.8551 8.48709L11.0301 15.3121L4.20508 8.48709" stroke="black" stroke-opacity="0.7" stroke-width="1.365" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
//                         }}
//                       />
//                     </div>
//                     <div className="filter-button white">
//                       <div className="filter-button-text">A - Z</div>
//                       <div
//                         dangerouslySetInnerHTML={{
//                           __html:
//                             '<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.1949 8.48709L11.3699 15.3121L4.54492 8.48709" stroke="black" stroke-opacity="0.7" stroke-width="1.365" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
//                         }}
//                       />
//                     </div>
//                     <div className="filter-button dark">
//                       <div className="filter-button-text white">Clear</div>
//                     </div>
//                     <div className="filter-button dark">
//                       <div className="filter-button-text white">Go</div>
//                     </div>
//                   </div>
//                   <div className="bottom-filter-buttons">
//                     <div className="filter-button white">
//                       <div className="filter-button-text">All Experience Levels</div>
//                       <div
//                         dangerouslySetInnerHTML={{
//                           __html:
//                             '<svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.8551 7.8071L11.0301 14.6321L4.20508 7.8071" stroke="black" stroke-opacity="0.7" stroke-width="1.365" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
//                         }}
//                       />
//                     </div>
//                     <div className="filter-button white">
//                       <div className="filter-button-text">All Locations</div>
//                       <div
//                         dangerouslySetInnerHTML={{
//                           __html:
//                             '<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.1949 7.8071L11.3699 14.6321L4.54492 7.8071" stroke="black" stroke-opacity="0.7" stroke-width="1.365" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
//                         }}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="image-container-wrapper">
//               <div className="image-container">
//                 <img
//                   src="https://api.builder.io/api/v1/image/assets/TEMP/3dc7c1177df3f3b9bcd1b03823883423f6704760?width=2184"
//                   alt=""
//                   className="hero-image"
//                 />
//               </div>
//             </div>
//           </div>
//           <img
//             src="https://api.builder.io/api/v1/image/assets/TEMP/fb21309f6c8798cd80cbf035df2ca957eb440091?width=2712"
//             alt="Vector"
//             className="background-vector"
//           />
//         </div>
//         <div className="statistics">
//           <div className="statistics-section">
//             <div className="stats-div">
//               <div className="stats-title">
//                 Your #1 Job Listing
//                 <div className="stats-title-page">page</div>
//               </div>
//               <div className="stats-info">
//                 <div className="stat-item">
//                   <div
//                     dangerouslySetInnerHTML={{
//                       __html:
//                         '<svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 21.75L19.25 25.5L25.5 16.75M35.5 20.5C35.5 22.6133 34.45 24.4833 32.845 25.6133C33.0179 26.6013 32.9502 27.6164 32.6476 28.5726C32.345 29.5288 31.8165 30.3981 31.1067 31.1067C30.3981 31.8165 29.5288 32.345 28.5726 32.6476C27.6164 32.9502 26.6013 33.0179 25.6133 32.845C25.037 33.6658 24.2714 34.3356 23.3813 34.7978C22.4913 35.2599 21.5029 35.5008 20.5 35.5C18.3867 35.5 16.5167 34.45 15.3867 32.845C14.3987 33.0178 13.3837 32.95 12.4275 32.6474C11.4713 32.3448 10.602 31.8163 9.89334 31.1067C9.18354 30.3981 8.65497 29.5288 8.35237 28.5726C8.04978 27.6164 7.98208 26.6013 8.155 25.6133C7.33421 25.037 6.66437 24.2714 6.20221 23.3813C5.74005 22.4913 5.49919 21.5029 5.5 20.5C5.5 18.3867 6.55 16.5167 8.155 15.3867C7.98208 14.3987 8.04978 13.3836 8.35237 12.4274C8.65497 11.4712 9.18354 10.602 9.89334 9.89334C10.602 9.18366 11.4713 8.65516 12.4275 8.35257C13.3837 8.04999 14.3987 7.98222 15.3867 8.155C15.9631 7.33431 16.7287 6.66455 17.6188 6.2024C18.5088 5.74025 19.4971 5.49932 20.5 5.5C22.6133 5.5 24.4833 6.55 25.6133 8.155C26.6013 7.98222 27.6163 8.04999 28.5725 8.35257C29.5287 8.65516 30.398 9.18366 31.1067 9.89334C31.8163 10.602 32.3448 11.4713 32.6474 12.4275C32.95 13.3837 33.0178 14.3987 32.845 15.3867C33.6658 15.963 34.3356 16.7286 34.7978 17.6187C35.26 18.5087 35.5008 19.4971 35.5 20.5Z" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
//                     }}
//                   />
//                   <div className="stat-label">Successful Hires</div>
//                   <div className="stat-number">94%</div>
//                 </div>
//                 <div className="stat-item">
//                   <div
//                     dangerouslySetInnerHTML={{
//                       __html:
//                         '<svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.75 35.5H34.25M8 5.5H33M9.25 5.5V35.5M31.75 5.5V35.5M15.5 11.75H18M15.5 16.75H18M15.5 21.75H18M23 11.75H25.5M23 16.75H25.5M23 21.75H25.5M15.5 35.5V29.875C15.5 28.84 16.34 28 17.375 28H23.625C24.66 28 25.5 28.84 25.5 29.875V35.5" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
//                     }}
//                   />
//                   <div className="stat-label">Companies</div>
//                   <div className="stat-number">20</div>
//                 </div>
//                 <div className="stat-item">
//                   <div
//                     dangerouslySetInnerHTML={{
//                       __html:
//                         '<svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.75 23L24.25 4.25L20.5 18H34.25L16.75 36.75L20.5 23H6.75Z" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
//                     }}
//                   />
//                   <div className="stat-label">Active Jobs</div>
//                   <div className="stat-number">104</div>
//                 </div>
//                 <div className="stat-item">
//                   <div
//                     dangerouslySetInnerHTML={{
//                       __html:
//                         '<svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 22.375C5.5 21.34 6.34 20.5 7.375 20.5H11.125C12.16 20.5 13 21.34 13 22.375V33.625C13 34.66 12.16 35.5 11.125 35.5H7.375C6.87772 35.5 6.40081 35.3025 6.04917 34.9508C5.69754 34.5992 5.5 34.1223 5.5 33.625V22.375ZM16.75 14.875C16.75 13.84 17.59 13 18.625 13H22.375C23.41 13 24.25 13.84 24.25 14.875V33.625C24.25 34.66 23.41 35.5 22.375 35.5H18.625C18.1277 35.5 17.6508 35.3025 17.2992 34.9508C16.9475 34.5992 16.75 34.1223 16.75 33.625V14.875ZM28 7.375C28 6.34 28.84 5.5 29.875 5.5H33.625C34.66 5.5 35.5 6.34 35.5 7.375V33.625C35.5 34.66 34.66 35.5 33.625 35.5H29.875C29.3777 35.5 28.9008 35.3025 28.5492 34.9508C28.1975 34.5992 28 34.1223 28 33.625V7.375Z" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
//                     }}
//                   />
//                   <div className="stat-label">Job Listings</div>
//                   <div className="stat-number">202</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="footer">
//           <div className="footer-section">
//             <div className="footer-content">
//               <div className="footer-brand-text">→Jobhive©</div>
//               <div className="footer-grid">
//                 <div className="footer-logo">
//                   <div className="logo">
//                     <img
//                       src="https://api.builder.io/api/v1/image/assets/TEMP/de0ce608c38bd1e4855f6affd09d2d4013b2868b?width=46"
//                       alt=""
//                       className="logo-image"
//                     />
//                   </div>
//                   <div className="logo-button">
//                     <div className="logo-text-content">Jobhive</div>
//                   </div>
//                 </div>
//                 <div className="footer-links">
//                   <div className="footer-grid-item">
//                     <div className="footer-link-title">HOMEPAGE</div>
//                     <div className="footer-link-list">
//                       <div className="footer-link">
//                         <div className="footer-link-item">
//                           <div className="footer-link-text">Home</div>
//                         </div>
//                         <div className="footer-link-item">
//                           <div className="footer-link-text">Contact Us</div>
//                         </div>
//                         <div className="footer-link-item">
//                           <div className="footer-link-text">About Us</div>
//                         </div>
//                         <div className="footer-link-item">
//                           <div className="footer-link-text">Jobs</div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="footer-grid-item">
//                     <div className="footer-link-title">JOB FILTERS</div>
//                     <div className="footer-link-list">
//                       <div className="footer-link">
//                         <div className="footer-link-item">
//                           <div className="footer-link-text">Location</div>
//                         </div>
//                         <div className="footer-link-item">
//                           <div className="footer-link-text">Salary</div>
//                         </div>
//                         <div className="footer-link-item">
//                           <div className="footer-link-text">Alphabetical</div>
//                         </div>
//                         <div className="footer-link-item">
//                           <div className="footer-link-text">Jobs</div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="footer-grid-item">
//                     <div className="footer-link-title">JOB CATEGORY</div>
//                     <div className="footer-link-list">
//                       <div className="footer-link">
//                         <div className="footer-link-item">
//                           <div className="footer-link-text">Marketing</div>
//                         </div>
//                         <div className="footer-link-item">
//                           <div className="footer-link-text">Public Sector</div>
//                         </div>
//                         <div className="footer-link-item">
//                           <div className="footer-link-text">Finance</div>
//                         </div>
//                         <div className="footer-link-item">
//                           <div className="footer-link-text">Marketing</div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="footer-divider" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Homepage;
