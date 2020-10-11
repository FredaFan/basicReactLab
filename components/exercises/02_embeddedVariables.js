import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";

const Demo = () => {
  const course = "Software Systems Practice - Modules Table";
  const modules = [
    {
      name: "Agile Software",
      noLectures: 3,
      noPracticals: 2
    },
    {
      name: "Web App Development",
      noLectures: 1,
      noPracticals: 4
    },
    {
      name: "Enterprise Systems Architechure",
      noLectures: 5,
      noPracticals: 8
    }
  ];
  return (
    <div>
      <h2>{course}</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>No lectures</th>
            <th>No practicals</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{modules[0].name}</td>
            <td>{modules[0].noLectures}</td>
            <td>{modules[0].noPracticals}</td>
          </tr>
          <tr>
            <td>{modules[1].name}</td>
            <td>{modules[1].noLectures}</td>
            <td>{modules[1].noPracticals}</td>
          </tr>
          <tr>
            <td>{modules[2].name}</td>
            <td>{modules[2].noLectures}</td>
            <td>{modules[2].noPracticals}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Demo;