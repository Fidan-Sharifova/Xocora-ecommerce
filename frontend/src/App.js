import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ROUTES from "./router/index.routes";
import { useEffect, useState } from "react";
import axios from "axios";
import dataContext from "./context/dataContext";
import  { Toaster }  from "react-hot-toast";
import toast from "react-hot-toast";
const router = createBrowserRouter(ROUTES);
function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [original, setOriginal] = useState([]);
  const [wishlist, setWishlist] = useState(
    localStorage.getItem("wishlist")
      ? JSON.parse(localStorage.getItem("wishlist"))
      : []
  );
  const [isLogin, setIsLogin] = useState(
    localStorage.getItem("")
      ? JSON.parse(localStorage.getItem("wishlist"))
      : []
  );
  const [basket, setBasket] = useState(
    localStorage.getItem("basketItems")
      ? JSON.parse(localStorage.getItem("basketItems"))
      : []
  );
  console.log("basket", basket);
  const addToBasket = (item) => {
    const target = basket.find((prod) => prod._id == item._id);
    if (!target) {
      const newBasketItem = {
        _id: item._id,
        count: 1,
        item: item,
        totalPrice: item.price,
      };
      toast.success("Added to basket");
      setBasket([...basket, newBasketItem]);
      localStorage.setItem(
        "basketItems",
        JSON.stringify([...basket, newBasketItem])
      );
    } else {
      toast("The item is already in the basket");
      // target.count += 1;
      // target.totalPrice = target.price * target.count;
      // setBasket([...basket]);
      // localStorage.setItem("basketItems", JSON.stringify([...basket]));
    }
  };

  const decreaseCountBasket = (item) => {
    const target = basket.find((prod) => prod._id == item._id);
    if (target.count > 1) {
      target.count -= 1;
      target.totalPrice = target.item.price * target.count;
      setBasket([...basket]);
      localStorage.setItem("basketItems", JSON.stringify([...basket]));
    }
  };

  const increaseCountBasket = (item) => {
    const target = basket.find((prod) => prod._id == item._id);
    target.count += 1;
    target.totalPrice = target.item.price * target.count;
    setBasket([...basket]);
    localStorage.setItem("basketItems", JSON.stringify([...basket]));
  };

  const removeFromBasket = (id) => {
    const target = basket.find((item) => item._id == id);
    basket.splice(basket.indexOf(target), 1);
    setBasket([...basket]);
    localStorage.setItem("basketItems", JSON.stringify([...basket]));
  };

  const handleSearch = (e) => {
    const searching = e.target.value.trim().toLowerCase();
    if (searching === "") {
      setData([...original]);
      setWishlist([...original]);
    } else {
      const searchedData = data.filter((item) =>
        item.name.trim().toLowerCase().includes(searching)
      );
      setData([...searchedData]);
      setWishlist([...searchedData]);
    }
    console.log("data", data);
  };

  const addToWishlist = (item) => {
    const target = wishlist.find((prod) => prod._id == item._id);
    if (target) {
      alert("Item is already in Wishlist");
      toast.succes("added to basket");
    } else {
      setWishlist([...wishlist, item]);
      localStorage.setItem("wishlist", JSON.stringify([...wishlist, item]));
      alert("Added to Wishlist");
    }
  };

  const deleteFromWishlist = (id) => {
    const target = wishlist.find((prod) => prod._id == id);
    const indexOf = wishlist.indexOf(target);
    wishlist.splice(indexOf, 1);
    setWishlist([...wishlist]);
    localStorage.setItem("wishlist", JSON.stringify([...wishlist]));
  };

  const handleSort = (e) => {
    const sorting = e.target.value;
    if (sorting == "df") {
      setData([...original]);
    } else if (sorting == "09") {
      const sort09 = data.sort((a, b) => a.price - b.price);
      setData([...sort09]);
    } else if (sorting == "90") {
      const sort90 = data.sort((a, b) => b.price - a.price);
      setData([...sort90]);
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:1212/xocora/products/")
      .then((res) => {
        setData(res.data);
        setOriginal(res.data);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  const values = {
    data,
    setData,
    original,
    setOriginal,
    handleSearch,
    handleSort,
    wishlist,
    setWishlist,
    addToWishlist,
    deleteFromWishlist,
    basket,
    addToBasket,
    decreaseCountBasket,
    increaseCountBasket,
    removeFromBasket,
  };
  return (
    <dataContext.Provider value={values}>
      <Toaster />
      <RouterProvider router={router} />
    </dataContext.Provider>
  );
}

export default App;
