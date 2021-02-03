import React from "react";

import { BoardOverviewProps } from "./types";

import { Card, Col, Row, Space, Typography } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const { Title } = Typography;

function BoardOverview(props: BoardOverviewProps) {
  return (
    <Card size="small" style={{ width: 200 }} hoverable>
      <Row align="middle" wrap={false} gutter={10}>
        <Col flex="auto">
          <Title level={5} ellipsis={{ rows: 2 }}>
            {props.board.name}
          </Title>
        </Col>
        <Col>
          <Space direction="vertical">
            <EditOutlined />
            <DeleteOutlined />
          </Space>
        </Col>
      </Row>
    </Card>
  );
}

export default BoardOverview;
