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
    
  </tbody >
</table>
</div>
  );
};

export default Demo;
