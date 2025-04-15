import React from 'react';

const Experience = () => {
  return (
    <div className='container ex'>
      <h2>Experience</h2>
      <h4>front end developer</h4>
      <h5>Czar Vision Techonolgy & Solutions, Pune (March 2023 – Present)</h5>
      <ul>
        <li>I have worked on application layout design ,login and registration forms for users.  </li>
        <li>Provided authentication and authorization with JWT token to login and registration page .</li>
        <li>Worked on navigation Bar  using React-Router-Dom and Topbar Component, Sidebar Component
          using Material-UI. user redirect to dashboard when user enters correct email and password. </li>
        <li>Worked on dashboard and side navigation bar.</li>
        <li>Worked on account and access functionality when user clicks on account and access from side
          navigation bar then user will be navigated to account and access screen, here he can see user’s
          information in tabular form.</li>
        <li>Worked on reset password incase user forgot password, OTP will be sent to registered email or
          mobile number. </li>
        <li>Data fetched from restAPI using axios and react hooks (useState, useEffect) . </li>
        <li>Responsible for style and look of web application and developing a responsive interface using
          Material UI . </li>
        <li>Extensively used bitbucket for version controlling and regularly pushed the code to GitHub . </li>
        <li>Implemented a system where automatic notification was sent to the administrator if minimum 
        stock quantity reaches.</li>
        <li>I have worked on mailing daily stock updates and daily reports to the administrator. </li>
        <li>Created daily order reports, payment reports, and delivery reports from the database. </li>
      </ul>
    </div>
  )
}

export default Experience
