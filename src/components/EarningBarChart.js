import React, { useState, useCallback } from "react";
import { BarChart, Bar, Cell } from "recharts";

const data = [
  {
    name: "Jan",
    uv: 2000,
    pv: 2400,
    amt: 2400,
    
},
{
    name: "Feb",
    uv: 3000,
    pv: 1398,
    amt: 2210,
   
},
{
    name: "Mar",
    uv: 2000,
    pv: 9800,
    amt: 2290,
    
},
{
    name: "Apr",
    uv: 2780,
    pv: 3908,
    amt: 2000,
 
},
{
    name: "May",
    uv: 1890,
    pv: 4800,
    amt: 2181,
 
},
{
    name: "Jun",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
      name: "Jul",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
        name: "Aug",
        uv: 3490,
        pv: 4300,
    amt: 2100,

  },
  {
      name: "Sep",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
        name: "Oct",
        uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
      name: "Nov",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
    name: "Dec",
    uv: 3490,
    pv: 4300,
    amt: 2100,
}
];

export default function EarningBarChart() {
  const [activeIndex, setActiveIndex] = useState(7);
  const activeItem = data[activeIndex];

  const handleClick = useCallback(
    (entry: any, index: number) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  return (
    <div>
      <BarChart width={750} height={250} data={data}>
        <Bar dataKey="uv" onClick={handleClick}>
          {data.map((entry, index) => (
            <>
            
            <Cell
              cursor="pointer"
              fill={index === activeIndex ? "#5a32ea" : "#f2efff"}
              key={`cell-${index}`}
              
            />
            </>
          ))}
        </Bar>
          
      </BarChart>
      {
        data.map((entry,index)=>(
            
<span className="months" key={index}>
    {entry.name}
</span>
          

        ))
      }
    </div>
  );
}
