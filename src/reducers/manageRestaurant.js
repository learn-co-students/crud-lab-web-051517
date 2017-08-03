
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state={restaurants:[],reviews:[]}, action) {
  switch(action.type){

    case 'ADD_RESTAURANT':
      const restaurant = Object.assign({}, action, {id:cuidFn()})
      state = {
        restaurants:[...state.restaurants, restaurant]
      }
      return state;


    case 'DELETE_RESTAURANT':
      const filtered = state.restaurants.filter((restaurant)=>{
        return restaurant.id !== action.id
      })
      state = {
        restaurants:filtered
      }
      return state;


      case 'ADD_REVIEW':
      console.log(state)
        console.log(action.review)
        const review = Object.assign({}, action.review, { id: cuidFn() });
        return Object.assign({}, state, {
          reviews: state.reviews.concat(review),
        });

      case 'DELETE_REVIEW':
        const reviews = state.reviews.filter(review => review.id !== action.id);
        return Object.assign({}, state, { reviews });

    default:
      return state;
  }

}
