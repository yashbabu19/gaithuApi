import React from 'react'
import './style.css'
import './Footer'

const Post = ({single}) => {
    console.log(single);
    return (<>
      <div class="column">
            <div class="image" >
              <img style={{background:"{single.avatar_url}"}}></img>
              <div class="details">
              {/*<img src={single.avatar_url} alt=""></img>*/}
                <h2>
                   {single.name}
                   <p class="star">{single.owner.login}</p>
                   <p class="star">&#9734;    {single.stargazers_count}</p>
                <p class="star">&#x2442; {single.forks_count}</p>
                <p class="star">&#xE0001; {single.language}</p>
                </h2>
                
                
                <p class="desc">{single.description}</p>
                <div class="more">
                  <a href={single.html_url} class="read-more">
                    Github <span>Repository</span>
                  </a>
                </div>
              </div>
            </div>
            </div>
    </>)

}

export default Post;