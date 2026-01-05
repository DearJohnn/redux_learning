import { useState } from 'react'
import './App.css'
import { useSelector,useDispatch } from 'react-redux'
import { increment} from './redux/counterSlice'
import axios from "axios"
import { setThunk2 } from './redux/commentSlice'
import { useGetListQuery } from './redux/api'

function App() {

  const obj = useGetListQuery();
  console.log(obj);
  // const dispatch = useDispatch()
  // const {commentsArr,isLoading} = useSelector(state=>state.commentSlice)

  // function fn(){

  //   dispatch(setThunk2("https://jsonplaceholder.typicode.com/comments"))

  // }

  return(
    <div className='App'>
      APP
      {/* <button onClick={fn}>Load data</button>
      {isLoading?<h1>Loading...</h1>:commentsArr.map(item=><p key={item.id}>{item.name}</p>)} */}
      {/* {obj.data.map(item=><p key={item.id}>{item.name}</p>)} */}
    </div>
  )

  // const value = useSelector((state)=>{
  //   return state.counterSlice.value
  // })

  // const dispatch = useDispatch();

  // return <>
  //   <h1>APP{value}</h1>
  //   <button onClick={()=>dispatch(increment(5))}>+5</button>
  //   <button onClick={()=>dispatch(increment(-1))}>-1</button>
  // </>
}

export default App
