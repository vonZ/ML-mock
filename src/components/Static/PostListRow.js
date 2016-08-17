import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const PostListRow = ({post}) => {
  const bgImgStyle = {
    backgroundImage: 'url(https://bytebucket.org/memryline/memryline.web/raw/1f6e82b1ae07c9824a3dd0cea143d861c4571029/Memryline/Resources/Images/1.jpg?token=e663a6df120e5d0bb7f79b42fce42a8762dcc468)'
  }
  return (
      <div className="column">
           <div className="post-container__comment">
               <div className="medium-12">
                   <div className="post-container__right-pane">
                       <div className="overflow-description">
                           <div className="overflow-description__content row">
                               <div className="column align-self-bottom">
                                   <span className="overflow-description__heading">{post.Location}</span>
                               </div>
                               <div className="column align-self-middle text-right">
                                   <span className="overflow-description__main">{post.Date}</span>
                               </div>
                           </div>
                       </div>
                       <div className="background-image background-image--s" style={bgImgStyle}></div>
                   </div>
               </div>
               <div className="medium-12">
                   <div className="padding-2 post-container__left-pane">
                       <p className="text-center">{post.Location}</p>
                       <h2 className="text-center commentAuthor">
                           {post.Author}
                       </h2>
                   </div>
               </div>
               <div className="medium-12">
                   <div className="post-container__footer row text-center">
                       <div className="column post-container__column">
                           <a href="">Ladda ner</a>
                       </div>
                       <div className="column post-container__column">
                           <Link to={'/post/' + post.id}>Redigera</Link>
                       </div>
                       <div className="column post-container__column">
                           <a data-open="post-reveal" data-url="/Resources/Constants/PostItemMock.json" className="js-async-ajax">Läs mer</a>
                       </div>
                   </div>
               </div>
           </div>
       </div>
  );
};

PostListRow.propTypes = {
  post: PropTypes.object.isRequired
};

export default PostListRow;
