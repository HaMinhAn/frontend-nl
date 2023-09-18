import React, { useEffect, useState } from "react";
import { get } from "../../service/api";
const Cart = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    get({ url: "/cart", data: null, param: { unit: 5 } }).then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <div>
      {data &&
        data.map((cart: string) => {
          return <p>{cart}</p>;
        })}
    </div>
  );
};

export default Cart;
