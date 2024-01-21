import React, { useEffect, useState } from "react";
import "./cartstyle.css";
import { useSelector,useDispatch } from "react-redux";
import { addtoCart,removeSingleItem,removeToCart,emptycartItem  } from "../redux/features/cartSlice";
import toast from 'react-hot-toast';

const Cartdetails = () => {
  const { carts } = useSelector((state) => state.allCart);
  const [totalPrice,setTotalPrice]=useState(0)
  const [totalQnty,setTotalQnty]=useState(0)
const dispatch=useDispatch();

  //adcart
  const handleIncrement=(e)=>{
    dispatch(addtoCart(e))
  }
  //remove cart
  const handleDecrement=(e)=>{
     dispatch(removeToCart(e))
     toast.success("Item Remove form Your Cart")
  }

  //remove single decrement
  const handleSingleDecrement=(e)=>{
    dispatch(removeSingleItem(e))
  }
  //clear remove cart
  const emptyCart=()=>{
    dispatch(emptycartItem())
    toast.success("Your Cart is Empty")
  }

  const total=()=>{
  let totalPrice=0
  carts.map((ele,ind)=>{
    totalPrice=ele.price *ele.qnty+totalPrice
  })
  setTotalPrice(totalPrice)
  }
  useEffect(()=>{
    total()
  },[total])

  const countQuantity=()=>{
    let totalQnty=0
  carts.map((ele,ind)=>{
    totalQnty=ele.qnty+totalQnty
  })
  setTotalQnty(totalQnty)
}

useEffect(()=>{
  countQuantity()
},[countQuantity])

  return (
    <>
      <div className="row justify-content-center m-0">
        <div className="col-md-8 mt-5 mb-5 cardsdetails">
          <div className="card">
            <div className="card-header bg-dark p-3">
              <div className="card-header-flex">
                <h5 className="text-white m-0">Cart calculations{carts.length>0 ? `(${carts.length})`:""}</h5>
                {carts.length > 0 ? (
                  <button className="btn btn-danger mt-0 btn-sm" onClick={emptyCart}>
                    <i className="fa-fa-trash-alt mr-2"></i>
                    <span>Emptycart</span>
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="cart-body p-0">
    {
      carts.length === 0 ? <table className="table cart-table mb-0">
        <tbody>
          <tr>
            <td colSpan={6}>
      <div className="cart-empty">
      <i className='fa fa-shopping-cart'></i>
   <p>Your cart is empty</p>
      </div>
            </td>
          </tr>
        </tbody>
      </table> : 
      <table className="table cart-table mb-0 table-responsive-sm">
    <thead>
      <tr>
        <th>Action</th>
        <th>Product</th>
        <th>Name</th>
        <th>Price</th>
        <th>Qty</th>
        <th className="text-right"> <span id="amount" className="amount">Total Amount</span> </th>
      </tr>
    </thead>
    <tbody>
      {
        carts.map((data,index)=>{
          return(
            <>
              <tr>
                <td><button className="prdct-delete" onClick={()=>handleDecrement(data.id)}>
                <i className="fa fa-trash-alt mr-2"></i></button></td>
                <td><div className="product-img"><img src={data.imgdata} alt="image" /></div></td>
                <td><div className="product-name"><p>{data. dish}</p></div></td>
                <td>{data.price}</td>
                <td>
                  <div className="prdct-qty-container">
                        <button className="prdct-qty-btn" type="button" onClick={data.qnty <=1 ?()=>handleDecrement(data.id) : ()=>handleSingleDecrement(data)}>
                          <i className="fa fa-minus"></i>
                        </button>
                        <input type="text" name="" id="" className="qty-input-box" value={data.qnty} disabled />
                        <button className="prdct-qty-btn" type="button" onClick={()=>handleIncrement(data)}>
                          <i className="fa fa-plus"></i>
                        </button>
                  </div>
                </td>
                <td className="text-right">{data.qnty*data.price}</td>
              </tr>
             
            </>
          )
        })
      }
    </tbody>
    <tfoot>
      <th>&nbsp;</th>
      <th colSpan={3}>&nbsp;</th>
      <th>Item in cart <span className="ml-2 mr-2">:</span><span className="text-danger">{totalQnty}</span></th>
      <th className="text-right">Total Price <span className="ml-2 mr-2">:</span><span className="text-danger">{totalPrice}</span></th>
    </tfoot>
      </table>
    }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cartdetails;
