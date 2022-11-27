
import Feed from '../../Components/Feed/Feed/Feed'
import Login from '../../Components/LoginOption/Login'
import './Home.css'
import HomeOption from '../../Components/Feed/HomeOption/HomeOption'



 
function Home() {
    return (
        <>
            <div className='homecomponent'>
                <div className="leftcoantiner">
                 <HomeOption/>
                </div>
                <div className="centerconatiner">
                 <Feed/>

                 
                </div>
                <div className="rightconatiner">
                    <Login></Login>
                </div>
            </div>
        </>
    )
}

export default Home