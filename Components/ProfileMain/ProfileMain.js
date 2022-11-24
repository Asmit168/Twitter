
import './ProfileMain.css'

import ProfileFeed from '../Feed/Feed/ProfileFeed/ProfileFeed'
import { useEffect,useState } from 'react'
function ProfileMain() {
    const [profilefeed, setProfilefeed]=useState([])
    useEffect(()=>{

        fetch("ElonmuskData.json",{
            headers:{
                'Content-type':'application/json',
                'Accept':'application/json'
            }
        }).then(
            (res)=>{
                return res.json()
            }
        ).then(
            (res)=>{
            setProfilefeed(res)
            console.log(profilefeed)
            }
        )
    },[])



    return (
        <div>

           <div className='stickyprofile'>
            <div className="profile-header">

                <div >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path height="10px" width="10px" fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                    </svg>
                </div>
                <div className="header-center">
                    <div className="name-account">
                        <p>Elon Musk</p>
                        <svg height="18px" width="18px" viewBox="0 0 24 24" aria-label="Verified account" role="img" className="r-1cvl2hr r-4qtqp9 r-yyyyoo r-1xvli5t r-9cviqr r-f9ja8p r-og9te1 r-bnwqim r-1plcrui r-lrvibr"><g><path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z"></path></g></svg>
                    </div>
                    <div>

                        <p className="likes">
                            22.5k Tweets
                        </p>
                    </div>
                </div>
            </div>
            </div>

            <div className="cover">
                <a href="#">
                    <img className="profileimage" src="https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_400x400.jpg"></img>
                </a>

            </div>
            <div className="follow-btn-conatiner  fw-bold float-end">
                <button className="follow-btn">
                    Follow
                </button>

            </div>
            <div className="profilecenter">
                <div >
                    <span>Elon Musk</span>
                    <svg height="18px" width="18px" viewBox="0 0 24 24" aria-label="Verified account" role="img" className="r-1cvl2hr r-4qtqp9 r-yyyyoo r-1xvli5t r-9cviqr r-f9ja8p r-og9te1 r-bnwqim r-1plcrui r-lrvibr"><g><path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z"></path></g></svg>
                    <div>
                        <p className="title">@elonmusk</p>
                    </div>
                    <div>
                        <div className='date'>
                            <p>joined june 2009</p>

                            <div className='follower'>
                                <p>130 Following</p>
                                <p>118.1M Followers</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <nav>
                    <ul>
                        <li>
                            <a href="#">Tweets</a>
                        </li>
                        <li>
                            <a href="#">Tweets & replies </a>
                        </li>
                        <li>
                            <a href="#">Media</a>
                        </li>
                        <li>
                            <a href="#">Likes</a>
                        </li>

                    </ul>
                </nav>
                


            </div>
            <hr></hr>
            {
                profilefeed.map(profiletweet=>
                    <div>
                    <ProfileFeed data={profiletweet}/>
                    <hr/>
                    </div>
                )
            }

        </div>
    )
}
export default ProfileMain