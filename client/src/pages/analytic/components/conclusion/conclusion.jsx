import React, { useRef } from "react";
import { Row, Col, Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import "./styles.scss";
import { ResponsiveContainer, PieChart, Pie, Legend, Cell } from "recharts";
import { useReactToPrint } from "react-to-print";

const data = [
  {
    name: "Complaint pending",
    value: 350,
    style: { strokeWidth: 4 },
  },
  {
    name: "Complaint Solved",
    value: 350,
    style: { strokeWidth: 1 },
  },
  {
    name: "Solution in process",
    value: 200,
    style: { strokeWidth: 4 },
  },
  {
    name: "Fake Complaints",
    value: 100,
    style: { strokeWidth: 4 },
  },
];
const colors = ["#6771DC", "#DC67AC", "#DCD267","#67DC97"];

const ConclusionCard = () => {

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'Complaint-by-Conclution',
    onAfterPrint: ()=> alert('Download success')
  });

  return (
    <div className="containerCard" ref={componentRef}>
      <Row className="titleCard">
        <Col span={12}>
          <span className="title">Complaint by Conclusion</span>
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
              // cx={250}
              // cy={200}
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

export default ConclusionCard;
