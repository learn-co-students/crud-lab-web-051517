
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: [], reviews: []}, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      return {
        reviews: [...state.reviews],
        restaurants: [
          ...state.restaurants, {text: action.text, id: cuid()}
        ]
      }
    case 'DELETE_RESTAURANT':
      const restaurants = state.restaurants.filter((restaurant) => {
        return restaurant.id !== action.id
      })
      return {
        restaurants,
        reviews: [...state.reviews]
      }
    case 'ADD_REVIEW':
      return {
        restaurants: [...state.restaurants],
        reviews: [
          ...state.reviews, {text: action.text, restaurantId: action.restaurantId, id: cuid() }
        ]
      }
    case 'DELETE_REVIEW':
     const reviews = state.reviews.filter((review) => {
       return review.id !== action.reviewId
     })
     return {
       reviews,
       restaurants: [...state.restaurants]
     }
    default:
      return state
  }
}
