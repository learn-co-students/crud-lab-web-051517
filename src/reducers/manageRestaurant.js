import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: [], reviews: []
  }, action) {

  switch (action.type) {
    case 'ADD_RESTAURANT':
      return {
        restaurants: [ ...state.restaurants,
          { text: action.payload.text, id: cuidFn() }
        ]
      }
      break;

    case 'DELETE_RESTAURANT':
      let removalId = state.restaurants.findIndex(i => i.id === action.id)
      return {
        restaurants: [
          ...state.restaurants.slice(0, removalId),
          ...state.restaurants.slice(removalId + 1)
        ]
      }
      break;

    case 'ADD_REVIEW':
      const review = Object.assign({}, action.review, {id: cuidFn()})
      return Object.assign({}, state, {
        reviews: [...state.reviews, review]
      })
      break;

    case 'DELETE_REVIEW':
      let reviewRemovalId = state.reviews.findIndex(i => i.id === action.id)
      return {
        reviews: [
          ...state.reviews.slice(0, reviewRemovalId),
          ...state.reviews.slice(reviewRemovalId + 1)
        ]
      }

    default:
      return state
  }
}
