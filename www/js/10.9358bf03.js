(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"31f8":function(t,e,s){t.exports=s.p+"img/parkit_icon_logo.fdd1e5c3.png"},"6db7":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-card",{staticClass:"q-pt-md fixed-center bg"},[n("q-card-actions",{attrs:{align:"center"}},[n("img",{attrs:{src:s("31f8"),align:"center",alt:"Parkit Home service",width:"300"}})]),n("q-card-section",{staticClass:"row",attrs:{align:"center"}},[t.paymentResponse?n("div",{staticClass:"col-sm-12"},[n("p",[t._v("Booking Id : "),n("b",[t._v(t._s(t.selectedOneWayFlight.message.BookingId))])]),n("p",[t._v("Booking Id : "),n("b",[t._v(t._s(t.paymentResponse.tx.txRef))])]),n("p",[t._v("Payment Status: "),n("b",[t._v(t._s(200==t.paymentResponse.tx.status?"Payment Success":"Payment failed"))])])]):t._e()]),n("q-separator")],1)},a=[],i=s("ded3"),l=s.n(i),o=s("2f62"),c={props:["bookingId"],data:function(){return{}},computed:l()({},Object(o["c"])({flights:"flight/flights",selectedOneWayFlight:"flight/selectedOneWayFlight",searchInputs:"flight/searchInputs",dataFlight:"flight/dataFlight",passengerFlightDetails:"flight/passengerDetails",paymentResponse:"flight/paymentResponse"})),methods:l()({},Object(o["b"])({getPaymentDetails:"flight/paymentsVerification"})),mounted:function(){this.getPaymentDetails({bookingId:this.selectedOneWayFlight.message.BookingId})}},g=c,r=s("2877"),p=Object(r["a"])(g,n,a,!1,null,null,null);e["default"]=p.exports}}]);