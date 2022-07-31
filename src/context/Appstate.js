import React, { useState } from "react";
import Context from "./Context";
import userData from "../Data/users.json"
// import MainApp from "../MainApp";

const Appstate = (props) => {
    const [items, setitems] = useState([])
    const [totalAmt, settotalAmt] = useState(0)
    const [details, setdetails] = useState({ Tservice: 'Amazon Transport', Phnumber: '1234567890', address: 'balaji nagar shingave' })
  //  const [userDetails, setuserDetails] = useState(userData)

    // const userLogin = (email, password)=>{
    //     userDetails.map(items=>{
    //         if(email === items.Email && password === items.Password){
    //             <MainApp />
    //           //  console.log(items)
    //         }
    // })
    // }

    const addBill = (transportCharge, serviceCharge, gst, quantity) => {
        const totalBill = parseInt(transportCharge) + parseInt(serviceCharge);
        const totalprice = totalBill * parseInt(quantity)
        const gstAmmount = (totalprice * parseInt(gst)) / 100;
        const netPrice = totalprice + gstAmmount
        // settotal(netPrice);
        const obj = {
            id: items.length + 1,
            itransportCharge: transportCharge,
            iserviceCharge: serviceCharge,
            iquantity: quantity,
            igst: gst,
            total: netPrice
        }
        items.push([...items, obj])
        settotalAmt(totalAmt + netPrice)
        //console.log(totalAmt)
    }

    return (
        <Context.Provider value={{ addBill, details, setdetails, Appstate, items, totalAmt, setitems, userData }}>
            {props.children}
        </Context.Provider>
    )

}

export default Appstate;
