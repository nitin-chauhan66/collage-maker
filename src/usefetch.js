import { useReducer,useEffect } from "react"
import axios from "axios";


const ACTIONS = {
    MAKE_REQUEST:"MAKE_REQUEST",
    GET_DATA:"GET_DATA",
    ERROR:"ERROR"
}

const BASE_URL = "http://jsonplaceholder.typicode.com/photos";
function reducer(state,action){
    switch (action.type) {
        case ACTIONS.MAKE_REQUEST:
            return {...state,loading:true,images:[]}
        case ACTIONS.GET_DATA:
            return {...state,loading:false,images:action.payload}
        case ACTIONS.ERROR:
            return{...state,loading:false,images:[],error:true}       
        default:
            return state;
    }
}
export default function useFetch(id){
    const [state,dispatch] = useReducer(reducer,{images:[],loading:true,error:false});
    useEffect(()=>{
        const cancelToken = axios.CancelToken.source();
        
        dispatch({type:ACTIONS.MAKE_REQUEST});
      axios.get(BASE_URL,{
          cancelToken:cancelToken.token,
          params:{albumId:id}
      }).then(res=>{
          dispatch({type:ACTIONS.GET_DATA,payload:res.data})
      }).catch(e=>{
          if (axios.isCancel(e)) return;
          dispatch({type:ACTIONS.ERROR});
      })

      return () => {
          cancelToken.cancel()
      }
    },[id])
    return state;
}