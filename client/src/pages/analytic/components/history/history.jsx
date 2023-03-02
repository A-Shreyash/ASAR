import React, { useRef } from "react";
import { Row, Col, Button, Table } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import "./styles.scss";
import { useReactToPrint } from "react-to-print";

const { Column } = Table;
const data = [
  {
    key: "1",
    issue: "Nadia Ishma",
    category: "Product",
    subcategory: "TBC",
    brand: "Bintang",
    pt: "Can Jumbo",
    source: "Distributor",
    ad: "30:26:30",
    conclution: "Conclution no judge",
  },
  {
    key: "2",
    issue: "Agung Hadi Kusuma",
    category: "Product",
    subcategory: "TBC",
    brand: "Bintang",
    pt: "Can Jumbo",
    source: "Distributor",
    ad: "00:42:43",
    conclution: "Not Justified"
  },
  {
    key: "3",
    issue: "Shapira Bella",
    category: "Product",
    subcategory: "TBC",
    brand: "Bintang Zero",
    pt: "Can Jumbo",
    source: "Distributor",
    ad: "19:05:19",
    conclution: "Justified"
  },
  {
    key: "4",
    issue: "Agung Hadi Kusuma",
    category: "Product",
    subcategory: "TBC",
    brand: "Guinnes",
    pt: "Bottle Jumbo",
    source: "Outlet",
    ad: "09:50:35",
    conclution: "Justified"
  },
  {
    key: "5",
    issue: "Agung Hadi Kusuma",
    category: "Service",
    subcategory: "TBC",
    brand: "Guinnes",
    pt: "Bottle Small",
    source: "Transporter",
    ad: "01:29:54",
    conclution: "Not to be judge"
  },
  {
    key: "6",
    issue: "Agung Hadi Kusuma",
    category: "Service",
    subcategory: "TBC",
    brand: "Radller",
    pt: "Can Small",
    source: "Outlet",
    ad: "11:11:36",
    conclution: "Conclution no judge"
  },
  {
    key: "7",
    issue: "Nadia Ishma",
    category: "Packaging",
    subcategory: "TBC",
    brand: "Bintang",
    pt: "Can Jumbo",
    source: "Distributor",
    ad: "19:05:19",
    conclution: "Conclution no judge"
  },
];

const HistoryCard = () => {

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'Complaint-History',
    onAfterPrint: ()=> alert('Download success')
  });

  return (
    <div className="containerCard" ref={componentRef}>
      <Row className="titleCard">
        <Col span={12}>
          <span className="title">Complaint History</span>
        </Col>
        <Col span={12}>
          <Button
            icon={<DownloadOutlined />}
            onClick={handlePrint}
            className="buttonSqaure"
          />
        </Col>
      </Row>
      <div className="barChart">
        <Table dataSource={data} scroll={{ x: 1500, y: 300 }}>
          <Column title="Issue Investigator" dataIndex="issue" key="issue" fixed='left'/>
          <Column title="Category" dataIndex="category" key="category" />
          <Column title="Sub Category" dataIndex="subcategory" key="subcategory" />
          <Column title="Brand" dataIndex="brand" key="brand" />
          <Column title="Packaging Type" dataIndex="pt" key="pt" />
          <Column title="Source" dataIndex="source" key="source" />
          <Column title="Average Days (TBC)" dataIndex="ad" key="ad" />
          <Column title="Conclution" dataIndex="conclution" key="conclution"
          />
        </Table>
      </div>
    </div>
  );
};

export default HistoryCard;
