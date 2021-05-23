const Tienda = (state, action) => {
  switch (action.type) {
    case 'UNO':
      return {value: 1 * action.multiply}
    case 'DOS':
      return {value: 2}
    default:
      return state
  }
}
export default Tienda