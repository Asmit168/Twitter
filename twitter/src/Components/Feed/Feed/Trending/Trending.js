import './Trending.css'

function Trending(props){
    return(
        <>
        <div className="treandingmain">
            <p className="header_small">{props.data.header}</p>
            <p className="text">{props.data.text}</p>
            <p className="header_small">{props.data.tweetcount}</p>
        </div>
        </>
    )
}
export default Trending