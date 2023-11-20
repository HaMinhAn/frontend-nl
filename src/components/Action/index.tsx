import { Button, Col, Row, message } from "antd";
import React from "react";
import { Product } from "../../types/Product";
import { localhost } from "../../service/api";
import { useCategory } from "../../contexts/category";

const Action = (props: { data: Product }) => {
  const { setUpdate } = useCategory();
  const handleRemove = () => {
    localhost
      .delete({ url: `/phone/${props.data.id}` })
      .then(() => {
        message.info(`Xóa ${props.data.name} thành công`);
        setUpdate(new Date());
      })
      .catch((e) => {
        message.error(e);
      });
  };
  return (
    <div>
      <Row gutter={4}>
        <Col>
          <Button>Chỉnh sửa</Button>
        </Col>
        <Col>
          <Button onClick={handleRemove} danger>
            Xóa
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Action;
