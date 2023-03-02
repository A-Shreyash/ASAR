import React, { useRef } from "react";
import "./styles.scss";
import { Row, Col, Button } from "antd";
import { LineChartOutlined, DownloadOutlined } from "@ant-design/icons";
import PlantsCard from "./components/plants/plants";
import ConclusionCard from "./components/conclusion/conclusion";
import ProductCard from "./components/product/product";
import StatusCard from "./components/status/status";
import HistoryCard from "./components/history/history";
import { useReactToPrint } from "react-to-print";

const ComplaintReport = () => {
 

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'Complaint-Report',
    onAfterPrint: ()=> alert('Download success')
  });

  return (
    <div ref={componentRef}>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <div className="container">
            <Row>
              <LineChartOutlined className="complaintIcon" />
              <span className="menu"> Complaint Report </span>
            </Row>
          </div>
        </Col>
        <Col span={24}>
          <div className="container" style={{ minHeight: "78vh" }}>
            <Row className="titleContainer">
              <Col span={12} lg={12} md={24} sm={24} xs={24}>
                <span className="title"> Complaint Report </span>
              </Col>
              <Col span={12} lg={12} md={24} sm={24} xs={24}>
                <Button
                  className="buttonDownload"
                  type="primary"
                  icon={<DownloadOutlined />}
                  onClick={handlePrint}
                >
                  Download Report
                </Button>
              </Col>
            </Row>
            <Row gutter={[16,16]}>
              
              <Col span={12} lg={12} md={24} sm={24} xs={24}>
                <div className="card">
                  <PlantsCard />
                </div>
              </Col>

              <Col span={12} lg={12} md={24} sm={24} xs={24}>
                <div className="card">
                  <ConclusionCard />
                </div>
              </Col>

              <Col span={24}>
                <div className="card">
                  <ProductCard />
                </div>
              </Col>

              <Col span={24}>
                <div className="card">
                  <StatusCard />
                </div>
              </Col>

              <Col span={24}>
                <div className="card">
                  <HistoryCard />
                </div>
              </Col>

            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ComplaintReport;
