const visibilityFilter = (state = 'SHOW_ALL', action) => {
  console.log('VISIBILITY FILTER CALLED WITH ACTION: ')
  console.log(action)

  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter
