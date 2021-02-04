import React from "react";

import { BoardOverviewProps } from "./types";
import DeleteBoardButtonContainer from "../delete-board-button/DeleteBoardButtonContainer";
import EditBoardButtonContainer from "../edit-board-button/EditBoardButtonContainer";

import { Card } from "antd";

import { FileTextOutlined } from "@ant-design/icons";

const { Meta } = Card;

function BoardOverview(props: BoardOverviewProps) {
  return (
    <Card
      hoverable
      actions={[
        <EditBoardButtonContainer board={props.board} key="edit" />,
        <DeleteBoardButtonContainer board={props.board} key="delete" />,
      ]}
    >
      <Meta
        avatar={<FileTextOutlined />}
        title={props.board.name}
        description="The description of the board"
      />
    </Card>
  );
}

export default BoardOverview;
