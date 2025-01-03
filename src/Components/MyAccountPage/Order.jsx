import React, { useState, useEffect } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import M1 from "./img/l1.jpeg";

const Orders = () => {
  const orders = [
    {
      id: "#2839798",
      productImage: M1,
      productName: "Phalada Pure & Sure | Organic Coconut Milk-160ml",
      price: 110.99,
      dateAdded: "3/12/2024",
      status: "On the way",
    },
    {
      id: "#467374",
      productImage: M1,
      productName: "Woodi Peck's Araku Organic Black Coffee Powder – 250 Grams",
      price: 259.99,
      dateAdded: "3/12/2024",
      status: "Delivered",
    },
    {
      id: "#381721",
      productImage: M1,
      productName: "Woodi Peck's Araku Organic Black Coffee Powder – 250 Grams",
      price: 109.99,
      dateAdded: "3/12/2024",
      status: "Cancelled",
    },
    {
      id: "#489372",
      productImage: M1,
      productName: "Woodi Peck's Araku Organic Black Coffee Powder – 250 Grams",
      price: 109.99,
      dateAdded: "3/12/2024",
      status: "Returned",
    },
  ];

  const [filter, setFilter] = useState("All");
  const [filteredOrders, setFilteredOrders] = useState(orders);
  const [last30Days, setLast30Days] = useState(false);

  const getStatusClass = (status) => {
    switch (status) {
      case "On the way":
        return "text-blue-500";
      case "Delivered":
        return "text-green-500";
      case "Cancelled":
        return "text-red-500";
      case "Returned":
        return "text-yellow-500";
      default:
        return "";
    }
  };

  const handleFilterChange = (status) => {
    setFilter(status);
  };

  useEffect(() => {
    let filtered = orders;

    if (filter !== "All") {
      filtered = filtered.filter((order) => order.status === filter);
    }

    if (last30Days) {
      const today = new Date();
      const last30DaysDate = new Date(today);
      last30DaysDate.setDate(today.getDate() - 30);

      filtered = filtered.filter((order) => {
        const orderDate = new Date(order.dateAdded);
        return orderDate >= last30DaysDate && orderDate <= today;
      });
    }

    setFilteredOrders(filtered);
  }, [filter, last30Days]);

  return (
    <div className="p-4 sm:p-5 md:p-6 lg:p-8 flex-1">
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 mb-4 lg:mb-6">
        Orders
      </h2>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 lg:mb-6 space-y-4 sm:space-y-0">
        <div className="text-sm sm:text-base text-gray-500">
          Are you looking for these orders?
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={() => setLast30Days(!last30Days)}
            className={`flex items-center p-1.5 border rounded ${
              last30Days ? "bg-gray-200" : "bg-white"
            } hover:bg-gray-100 transition`}
          >
            <FaCalendarAlt className="mr-2 text-sm" />
            Last 30 Days
          </button>

          <div className="flex items-center border border-gray-300 p-1 rounded">
            <label className="font-semibold text-sm mr-2">Filter by:</label>
            <select
              onChange={(e) => handleFilterChange(e.target.value)}
              className="p-1 text-sm rounded border-none outline-none bg-transparent"
            >
              <option value="All">All</option>
              <option value="On the way">On the way</option>
              <option value="Delivered">Delivered</option>
              <option value="Cancelled">Cancelled</option>
              <option value="Returned">Returned</option>
            </select>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="text-left py-1 px-2 text-xs sm:text-sm md:text-base lg:text-lg">
                Product
              </th>
              <th className="text-left py-1 px-2 text-xs sm:text-sm md:text-base lg:text-lg">
                Price
              </th>
              <th className="text-left py-1 px-2 text-xs sm:text-sm md:text-base lg:text-lg">
                Date Added
              </th>
              <th className="text-left py-1 px-2 text-xs sm:text-sm md:text-base lg:text-lg">
                Order Status
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order, index) => (
              <tr key={index} className="border-t">
                <td className="py-2 px-2 flex items-center text-xs sm:text-sm md:text-base lg:text-lg">
                  <img
                    src={order.productImage}
                    alt={order.productName}
                    className="w-12 h-12 sm:w-14 sm:h-14 object-cover mr-3 rounded"
                  />
                  <span className="break-all">{order.productName}</span>
                </td>
                <td className="py-2 px-2 text-xs sm:text-sm md:text-base lg:text-lg">
                  ${order.price.toFixed(2)}
                </td>
                <td className="py-2 px-2 text-xs sm:text-sm md:text-base lg:text-lg">
                  {order.dateAdded}
                </td>
                <td
                  className={`py-2 px-2 text-xs sm:text-sm md:text-base lg:text-lg font-semibold ${getStatusClass(
                    order.status
                  )}`}
                >
                  {order.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
