const productlist = (state = {}, action: any) => {
    switch (action.type) {
      case 'GET_PRODUCTS':
           return { ...state, loading: true };
      case 'PRODUCT_RECEIVED':
          alert(JSON.stringify(action))
           return { ...state,  loading: false }
      default: 
           return state;
    }
   };
   export default productlist;