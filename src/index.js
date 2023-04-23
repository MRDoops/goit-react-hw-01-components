// import React from 'react';
// import { App } from 'components/App';
// import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import user from './user.json';

// function Profile(props) {
//   return (
//     <div class="profile">
//       <div class="description">
//         <img src={props.avatar} alt={props.username} class="avatar" />
//         <p class="name">{props.username}</p>
//         <p class="tag">{props.tag}</p>
//         <p class="location">{props.location}</p>
//       </div>
//       <ul class="stats">
//         <li>
//           <span class="label">Followers</span>
//           <span class="quantity">{props.followers}</span>
//         </li>
//         <li>
//           <span class="label">Views</span>
//           <span class="quantity">{props.views}</span>
//         </li>
//         <li>
//           <span class="label">Likes</span>
//           <span class="quantity">{props.likes}</span>
//         </li>
//       </ul>
//     </div>
//   );
// }

// ReactDOM.createRoot(document.querySelector('#root')).render(
//   <Profile
//     username={user.username}
//     tag={user.tag}
//     location={user.location}
//     avatar={user.avatar}
//     // stats={user.stats}
//     statsFollowers={user.stats.followers}
//     statsViews={user.stats.views}
//     statsLikes={user.stats.likes}
//   />
// );
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import './index.css';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// import user from './user';
// ReactDOM.createRoot(document.querySelector('#root')).render(<App />);
// function Profile(props) {
//   const { username, tag, location, avatar, stats } = props;
//   const { followers, views, likes } = stats;
//   return (
//     <div className="profile">
//       <div className="description">
//         <img src={avatar} alt={username} className="avatar" />
//         <p className="name">{username}</p>
//         <p className="tag">{tag}</p>
//         <p className="location">{location}</p>
//       </div>
//       <ul className="stats">
//         <li>
//           <span className="label">Followers</span>
//           <span className="quantity">{followers}</span>
//         </li>
//         <li>
//           <span className="label">Views</span>
//           <span className="quantity">{views}</span>
//         </li>
//         <li>
//           <span className="label">Likes</span>
//           <span className="quantity">{likes}</span>
//         </li>
//       </ul>
//     </div>
//   );
// }

// {
/* <Profile
username={user.username}
tag={user.tag}
location={user.location}
avatar={user.avatar}
stats={user.stats}
/> */
// }
