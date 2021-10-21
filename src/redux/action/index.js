//bch nzidou item lel cart

export const addCart = (product)=>{
    return{
        type:"ADDCART",
        payload : product
    }
}

//bch nafskhou item mel cart

export const deleteCart = product => {
  return {type: "DELETEITEM", payload: product};
};
