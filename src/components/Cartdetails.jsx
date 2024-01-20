import React from "react";
import "./cartstyle.css";
const Cartdetails = () => {
  const arr = [1,2];
  return (
    <>
      <div className="row justify-content-center m-0">
        <div className="col-md-8 mt-5 mb-5 cardsdetails">
          <div className="card">
            <div className="card-header bg-dark p-3">
              <div className="card-header-flex">
                <h5 className="text-white m-0">Cart calculations(10)</h5>
                {arr.length > 0 ? (
                  <button className="btn btn-danger mt-0 btn-sm">
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
      arr.length === 0 ? <table className="table cart-table mb-0">
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
        arr.map((data,index)=>{
          return(
            <>
              <tr>
                <td><button className="prdct-delete"><i className="fa fa-trash-alt mr-2"></i></button></td>
                <td><div className="product-img"><img src="" alt="image" /></div></td>
                <td><div className="product-name"><p>Punjabi</p></div></td>
                <td>300</td>
                <td>
                  <div className="prdct-qty-container">
                        <button className="prdct-qty-btn" type="button">
                          <i className="fa fa-minus"></i>
                        </button>
                        <input type="text" name="" id="" className="qty-input-box" value={1} disabled />
                        <button className="prdct-qty-btn" type="button">
                          <i className="fa fa-plus"></i>
                        </button>
                  </div>
                </td>
                <td className="text-right">400</td>
              </tr>
             
            </>
          )
        })
      }
    </tbody>
    <tfoot>
      <th>&nbsp;</th>
      <th colSpan={3}>&nbsp;</th>
      <th>Item in cart <span className="ml-2 mr-2">:</span><span className="text-danger">4</span></th>
      <th className="text-right">Total Price <span className="ml-2 mr-2">:</span><span className="text-danger">4</span></th>
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
