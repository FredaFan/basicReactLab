import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";

const Demo = () => {
  return (
    <div>
      <h1>Software Systems Practice - Modules Table</h1>
      <table className="table table-bordered">
  <thead>
    <tr>
      <th>Name</th>
      <th>No lectures</th>
      <th>No practicals</th>
    </tr>
  </thead>
  <tbody >
    <tr>
      <td>Agile Software</td>
      <td>2</td>
      <td>2</td>
    </tr>
    <tr>
      <td>Web App Development</td>
      <td>3</td>
      <td>2</td>
    </tr>
    <tr>
      <td>Buiness Analytics</td>
      <td>1</td>
      <td>4</td>
    </tr>
    <tr>
      <td>Enterprise Systems Architechure</td>
      <td>5</td>
      <td>8</td>
    </tr>
  </tbody >
</table>
</div>
  );
};

export default Demo;
