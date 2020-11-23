export const sortByPrice = (items, method) => {
  let sortArr = [...items]
     if (method === 'lowest') {
       sortArr.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
      }else if(method === 'highest') {
        sortArr.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    }else{
      sortArr.sort((a, b) => a.id - b.id);
    }
    return dispatch => {
      dispatch({type: 'SORT_ITEMS', payload: sortArr})
    }
}