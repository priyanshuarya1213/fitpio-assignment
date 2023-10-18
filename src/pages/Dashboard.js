import React from "react";
import Card from "../components/Card";
import { BiSearch } from "react-icons/bi";
import EarningBarChart from "../components/EarningBarChart";
import DonutChart from "react-donut-chart";

const Carddata = [
  {
    image: "../assets/Dollar.PNG",
    name: "Earning",
    amount: "",
    percentage: "",
  },
  {
    image: "../assets/Orders.PNG",
    name: "Orders",
    amount: "",
    percentage: "",
  },
  {
    image: "../assets/Balance.PNG",
    name: "Balance",
    amount: "",
    percentage: "",
  },
  {
    image: "../assets/TotalSale.PNG",
    name: "Total Sales",
    amount: "",
    percentage: "",
  },
];

const Dashboard = () => {
  return (
    <div className="Dashboard-Container">
      <div className="header">
        <h3>{"Hello Shahrukh🖐"}</h3>
        <div className="inputContainer">
          <BiSearch className="searchIcon" color="grey" />
          <input type="text" placeholder="Search" className="input" />
        </div>
      </div>
      <div className="Cards">
        {Carddata.map((data, idx) => {
          return <Card data={data} key={idx} />;
        })}
      </div>
      <div className="charts">
        <div className="OverviewCharts">
          <div className="Charts-heading">
            <h4>Overview</h4>
            
            <select className="select">
    <option value="Quarterly">Quarterly</option>
  </select>
          </div>
          <span className="sub-heading">Monthly Earning</span>
          <EarningBarChart />
        </div>
        <div className="PieChart">
          <div>
          <h4>Customers</h4>
          <span>Customers that buy Products</span>

          </div>
        <div className="PieChart-content">  
        <img src="../assets/piechart.PNG" className="pieImage"/>
          </div>
        </div>
      </div>
      <div className="Product-Sell">
<div className="Product-Sell-Header">

            <h4>Product Sell</h4>
            <div>
            <div className="inputContainer">
          <BiSearch className="searchIcon" color="grey" />
          <input type="text" placeholder="Search" className="input" />
          <select className="select">
    <option value="Quarterly">Last 30 Days</option>
  </select>
        </div>
            </div>
           
          
</div>
<div className="Product-Sell-Content">
<div className="Table-Data-heading">
  <div>
Product Name
  </div>
  <div>
    <span>Stock</span>
    <span>Price</span>
    <span>Total Sales</span>
  </div>
</div>
<div className="Table-Data">
  <div className="Table-Data-content">
    <img src="../assets/table1.PNG"/>
<h3>Abstract 3D</h3>
  </div>
  <div>
    <span>32 in Stock</span>
    <span>$45.99</span>
    <span>20</span>
  </div>
</div>
<div className="Table-Data">
<div className="Table-Data-content">
    <img src="../assets/table2.PNG"/>
<h3>Sarphens illustration</h3>
  </div>
  <div>
    <span>32 in Stock</span>
    <span>$45.99</span>
    <span>20</span>
  </div>
</div>
</div>
      </div>
    </div>
  );
};

export default Dashboard;
