import React, { useRef } from "react";
import { Row, Col, Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import "./styles.scss";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
import { useReactToPrint } from "react-to-print";

const data = [
  {
    name: "A",
    product: 90,
  },
  {
    name: "B",
    product: 40,
  },
  {
    name: "C",
    product: 110,
  },
  {
    name: "D",
    product: 45,
  },
  {
    name: "E",
    product: 90,
  },
  {
    name: "F",
    product: 90,
  },
];

const ProductCard = () => {

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'Complaint-by-Product',
    onAfterPrint: ()=> alert('Download success')
  });

  return (
    <div className="containerCard" ref={componentRef}>
      <Row className="titleCard">
        <Col span={12}>
          <span className="title">Area wise Complaints</span>
        </Col>
        <Col span={12}>
          <Button
            icon={<DownloadOutlined />}
            onClick={handlePrint}
            className="buttonSqaure"
          />
        </Col>
      </Row>
      <div className="barChart" style={{ width: "100%", height: 400 }}>
        <ResponsiveContainer>
          <BarChart
            data={data}
            margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
            barSize={72}
          >
            <CartesianGrid strokeDasharray="1" />
            <XAxis dataKey="name">
              <label
                value="Pages of my website"
                offset={10}
                position="insideBottom"
              />
            </XAxis>
            <YAxis
              label={{ value: "Total Complaints", angle: -90, position: "insideLeft" }}
            />
            <Bar dataKey="product" fill='#6794DC'>
              <labelList dataKey="name" position="top" />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProductCard;
