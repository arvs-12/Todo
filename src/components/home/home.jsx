
import { useNavigate } from "react-router-dom"
import './home.css'
export default function Home(){
    const nav=useNavigate()
    return (
        <div className="main">
            <div className="box">
            <h1>Welcome</h1> 
            <button onClick={()=>nav('/create')} id="btn">Go</button>
            </div>
        </div>
    )
}