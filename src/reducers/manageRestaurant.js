import cuid from 'cuid'
export const cuidFn = cuid

export default function manageRestaurants(state = {restaurants: [], reviews: []}, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      return { 
        restaurants: [...state.restaurants, {text: action.restaurant.text, id: cuid()}],
        reviews: [...state.reviews]
      }
    case 'DELETE_RESTAURANT':
      const restaurants = state.restaurants.filter((x) => x.id !== action.id)
        return {restaurants, reviews: [...state.reviews]}
      case 'ADD_REVIEW':
        return {
          restaurants: [...state.restaurants],
          reviews: [...state.reviews, {text: action.review.text, restaurantId: action.review.restaurantId, id: cuid()}]
        }
      case 'DELETE_REVIEW':
        const reviews = state.reviews.filter((review) => review.id !== action.id)
        return {reviews, restaurants: [...state.restaurants]}
      default:
        return state
    }
}