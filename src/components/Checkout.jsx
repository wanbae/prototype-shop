import { useMemo } from "react";
import useActions from "../hooks/useActions";
import useOrders from "../hooks/useOrders";
import usePrototypes from "../hooks/usePrototypes";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const navigate = useNavigate();
  function cancel() {
    navigate("/");
  }

  const orders = useOrders();
  const prototypes = usePrototypes();
  const { remove, removeAll } = useActions();

  const totalPrice = useMemo(() => {
    return orders
      .map((order) => {
        const { id, quantity } = order;
        const prototype = prototypes.find((p) => p.id === id);
        return prototype.price * quantity;
      })
      .reduce((l, r) => l + r, 0);
  }, [orders, prototypes]);

  return (
    <aside>
      <div className="payment">
        <p>Checkout</p>
        <div className="body">
          {orders.map((order) => {
            const { id } = order;
            const prototype = prototypes.find((p) => p.id === id);
            const click = () => {
              remove(id);
            };
            return (
              <div className="item" key={id}>
                <div className="img">
                  <video src={prototype.thumbnail} />
                </div>
                <div className="content">
                  <p className="title">
                    {prototype.title} x {order.quantity}
                  </p>
                </div>
                <div className="action">
                  <p className="price">$ {prototype.price * order.quantity}</p>
                  <button className="btn btn--link" onClick={click}>
                    <i className="icon icon--cross" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="total">
          <hr />
          <div className="item">
            <div className="content">Total</div>
            <div className="action">
              <div className="price">$ {totalPrice}</div>
            </div>
            <button className="btn btn--link" onClick={removeAll}>
              <i className="icon icon--delete" />
            </button>
          </div>
          <button
            // onClick={checkout}
            className="btn btn--primary"
            style={{ width: "50%", marginTop: 10 }}
          >
            Payment
          </button>
          <button
            onClick={cancel}
            className="btn btn--primary"
            style={{ width: "50%", marginTop: 10 }}
          >
            Cancel
          </button>
        </div>
      </div>
    </aside>
  );
}
