import React from "react";

import { BoardOverviewProps } from "./types";
import DeleteBoardButtonContainer from "../delete-board-button/DeleteBoardButtonContainer";
import EditBoardButtonContainer from "../edit-board-button/EditBoardButtonContainer";

import { Card, Col, Row, Space, Typography } from "antd";

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
          <Space size="small" direction="vertical">
            <EditBoardButtonContainer board={props.board} />
            <DeleteBoardButtonContainer board={props.board} />
          </Space>
        </Col>
      </Row>
    </Card>
  );
}

export default BoardOverview;
