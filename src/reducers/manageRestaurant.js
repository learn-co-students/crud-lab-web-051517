
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state={restaurants:[],reviews:[]}, action) {
  switch(action.type){

    case 'ADD_RESTAURANT':
      const restaurant = Object.assign({}, action, {id:cuidFn()})
      state = {
        reviews:[...state.reviews],
        restaurants:[...state.restaurants, restaurant]
      }
      return state;


    case 'DELETE_RESTAURANT':
      const filtered = state.restaurants.filter((restaurant)=>{
        return restaurant.id !== action.id
      })
      const deleted = state.reviews.filter((review)=>{
        return review.restaurantId !== action.id
      })
      state = {
        reviews:deleted,
        restaurants:filtered
      }
      return state;


      case 'ADD_REVIEW':

        state={
          restaurants:[...state.restaurants],
          reviews:[...state.reviews, {text: action.review.text, restaurantId: action.review.restaurantId, id:cuidFn()}]
        }
        return state;

      case 'DELETE_REVIEW':
        const reviews = state.reviews.filter(review => review.id !== action.id);
        return Object.assign({}, state, { reviews });

    default:
      return state;
  }

}
