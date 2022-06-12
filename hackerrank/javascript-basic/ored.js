function processOrderList(orderList, orderId, state) {
    console.log(orderId, state)
    
    for(let order of orderList){
        if(order.id==orderId){
            order.state=state
            if(order.state=='Delivered'){
                orderList.splice(orderList.indexOf(order),1)
            }
        }
    }
    return orderList
}