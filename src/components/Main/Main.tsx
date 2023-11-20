import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import { Product } from "../../types/Product";
import { Col, Image, Row } from "antd";
// import { product } from "./Mock/mock";
import { useHistory } from "react-router-dom";
import { useCategory } from "../../contexts/category";
const mockA = (amount: number, product1: Product[]) => {
  const goods: Product[] = [];
  for (let index = 0; index < amount; index++) {
    goods.push(...product1);
  }
  return goods;
};
const Main = () => {
  const { products } = useCategory();
  const history = useHistory();
  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <Row gutter={[12, 12]} className={styles.container}>
      {products.map((mock) => {
        return (
          <>
            <Col
              className={styles.goods}
              key={mock.id}
              onClick={() => {
                history.push(`/infor/${mock.id}`);
              }}
            >
              {mock.pictures.length != 0 ? (
                <Image
                  src={mock.pictures[0].imagePath}
                  className={styles.picture}
                  preview={false}
                  // width="70%"
                  height="80%"
                />
              ) : null}
              <div className={styles.infor}>
                <div>{mock.name}</div>
                <div style={{ color: "red", fontSize: 24 }}>{mock.price}</div>
              </div>
            </Col>
          </>
        );
      })}
    </Row>
  );
};

export default Main;
