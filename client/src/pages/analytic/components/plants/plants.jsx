import React, { useRef } from "react";
import { Row, Col, Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import "./styles.scss";
import { ResponsiveContainer, PieChart, Pie, Legend, Cell } from "recharts";
import { useReactToPrint } from "react-to-print";

const data = [
  {
    name: "Potholes",
    value: 350,
    style: { strokeWidth: 4 },
  },
  {
    name: "Contaminated Water",
    value: 300,
  },
  {
    name: "Garbage",
    value: 350,
    style: { strokeWidth: 4 },
  },
];
const colors = ["#6771DC", "#6794DC", "#C767DC"];

const PlantsCard = () => {

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'Complaint-Plants',
    onAfterPrint: ()=> alert('Download success')
  });

  return (
    <div className="containerCard" ref={componentRef}>
      <Row className="titleCard">
        <Col span={12}>
          <span className="title">Complaints</span>
        </Col>
        <Col span={12}>
          <Button
            icon={<DownloadOutlined />}
            onClick={handlePrint}
            className="buttonSqaure"
          />
        </Col>
      </Row>
      <div className="pieChart" style={{ width: "50%", height: 300 }}>
        <ResponsiveContainer>
          <PieChart>
              <Pie
              data={data}
              innerRadius={60}
              outerRadius={100}
              fill="#8884d8"
              paddingAngle={0}
              dataKey="value"
              >
              {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
              </Pie>
              <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PlantsCard;
