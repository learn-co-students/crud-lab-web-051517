
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: [],
  reviews: []
}, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      let id = cuid()
      const restaurant = Object.assign({}, action.restaurant, { id: id })
      return {
        restaurants: state.restaurants.concat(restaurant),
        reviews: state.reviews
      }
    case 'DELETE_RESTAURANT':
      const restaurants = state.restaurants.filter(rest => rest.id !== action.id)
      return {
        restaurants,
        reviews: state.reviews
      }
    case 'ADD_REVIEW':
      let revID = cuid()
      const review = Object.assign({}, action.review, { id: revID })
      return Object.assign({}, state, {
        reviews: state.reviews.concat(review)
      })
    case 'DELETE_REVIEW':
      const reviews = state.reviews.filter(rev => rev.id !== action.id)
      return {
        restaurants: state.restaurants,
        reviews
      }
    default:
      return state
  }
}
