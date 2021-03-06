import React from 'react';
import UserService from '../ApiServices/UserService.js';
import LikeButton from './LikeButton.jsx';
import './PostsLists.scss'

class PostsList extends React.Component {
  constructor(props) {
		super(props);
		this.state = 
		{ 
			address: props.address,
		};
		this.state.posts = UserService.getPosts(this.state.address);
  }
  render() {
	if( typeof(this.state.posts) == 'undefined' || this.state.posts.length <= 0) {
		this.state.posts = [{data: "No tweets on this address."}]
	}

	this.showLike = this.state.posts.length > 0 ? true : false;

    return (
      <div>
          <ul>
            {this.state.posts.map( function(post,index){
              return (
                <div className="card tweet-post">
                  <div class="card-body">
                    <h5 className="card-title">{post.authorUser}</h5>
                    <p className="card-text">{post.data}</p>
                  </div>
                  <div className="card-body">
                    <span className="text-muted">{post.timestamp}</span>
                  </div>
				  <div className="tweetBtnBar">
				    <LikeButton />
				    <button className="retweetBtn" >Retweet</button>
				  </div>
                </div>
              );
            })}
          </ul>
      </div>
    );
  }
}

export default PostsList;
