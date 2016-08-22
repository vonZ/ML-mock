import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const PostListRow = ({post}) => {
  const bgImgStyle = {
    backgroundImage: 'url(' + post.imageSrc + ')'
  }
  const cardLayout = false;
  return (
      <div className="column">
           <div className="post-container__comment">
               <div className="medium-12">
                   <div className="post-container__right-pane">
                       <div className="overflow-description">
                           <div className="overflow-description__content row">
                               <div className="column align-self-bottom">
                                   <span className="overflow-description__heading">{post.location}</span>
                               </div>
                               <div className="column align-self-middle text-right">
                                   <span className="overflow-description__main">{post.date}</span>
                               </div>
                           </div>
                       </div>
                       <div className={cardLayout ? 'background-image' : 'background-image background-image--s'} style={bgImgStyle}></div>
                   </div>
               </div>
               <div className={cardLayout ? 'hidden' : null}>
                 <div className="medium-12">
                     <div className="padding-2 post-container__left-pane">
                       <p className="text-center">{post.location}</p>
                       <h2 className="text-center commentAuthor">
                           {post.heading}
                       </h2>
                     </div>

                     {/*PostRow listing example with visible text*/}

                     {/*<div className="padding-2">
                       <h2 className="text-center">{post.Author}</h2>
                       <p className="text-center">
                           {post.Text}
                       </p>
                     </div>*/}
                 </div>
                 <div className="medium-12">
                     <div className="post-container__footer row text-center">
                         <div className="column post-container__column">
                             <a href="">Ladda ner</a>
                         </div>
                         <div className="column post-container__column">
                             <Link to={'/post/' + post.id} data-open="js-form-reveal">Redigera</Link>
                         </div>
                         <div className="column post-container__column">
                           <Link to={'/postdetail/' + post.id}>Läs mer</Link>
                           {/*<a data-open="post-reveal" data-url="/Resources/Constants/PostItemMock.json" className="js-async-ajax">Läs mer</a>*/}
                         </div>
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
