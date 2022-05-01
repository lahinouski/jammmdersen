// import React, { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import './FavoriteCard.css';

// export default function FavoriteCard(props) {
//   const artistInfo = props.artistInfo;
//   const currentUserUsername = useSelector((state) => state.currentUserUsername.value);
//   const users = JSON.parse(sessionStorage.getItem('users'));
//   const currentUser = currentUserUsername && users.find(user => user.username === currentUserUsername);
//   const artistIsInFavorites = currentUser.favorites.some(idol => idol.id === artistInfo.id);
//   const [toggleStar, setToggleStar] = useState(true);

//   // useEffect(() => setToggleStar(artistIsInFavorites));

//   function udateUsers() {
//     const usersExceptCurrent = users.filter(user => user.username !== currentUserUsername);
//     const updatedUsers = [...usersExceptCurrent, currentUser];
//     sessionStorage.setItem('users', JSON.stringify(updatedUsers));
//   }

//   function addArtist() {
//     // props.setCurrentFavorites(props.currentFavorites);

//     if (!artistIsInFavorites) {
//       // artistIsInFavorites = !artistIsInFavorites;
//       currentUser.favorites = [...currentUser.favorites, artistInfo];
//       udateUsers();
//     }
//   }

//   function removeArtist() {
//     props.setCurrentFavorites(props.currentFavorites.filter(artist => artist.id !== artistInfo.id));

//     // const updatedFavorites = currentUser.favorites.filter(artist => artist.id !== artistInfo.id);
//     // currentUser.favorites = updatedFavorites;
//     // udateUsers();
//     setToggleStar(!toggleStar);
//   }

//   const action = artistIsInFavorites ?
//     <div className='details-action-small' onClick={removeArtist}>&#9733;</div> :
//     <div className='details-action-small' onClick={addArtist}>&#9734;</div>;

//   return (
//     <div className='details-container-small'>
//       <img className='image-small' src={artistInfo.picture} alt="Artist image" />
//       <div className="details-and-toggle">
//         <div className='details-info-small'>
//           <h2>
//             {artistInfo.name}
//           </h2>
//           <ul>
//             <li>Followers: {artistInfo.followers}</li>
//             <li>Popularity: {artistInfo.popularity}</li>
//           </ul>
//         </div>
//         {action}
//       </div>
//     </div >
//   )
// }














import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './FavoriteCard.css';

export default function FavoriteCard({ artistInfo }) {
  const currentUserUsername = useSelector((state) => state.currentUserUsername.value);
  const users = JSON.parse(sessionStorage.getItem('users'));
  const currentUser = currentUserUsername && users.find(user => user.username === currentUserUsername);
  const artistIsInFavorites = currentUser.favorites.some(idol => idol.id === artistInfo.id);
  // let artistIsInFavorites = currentUser.favorites.some(idol => idol.id === artistInfo.id);
  // setInterval(() => artistIsInFavorites = currentUser.favorites
  //   .some(idol => idol.id === artistInfo.id), 200);
  const [toggleStar, setToggleStar] = useState(artistIsInFavorites);

  useEffect(() => setToggleStar(artistIsInFavorites), [artistIsInFavorites]);

  function udateUsers() {
    const usersExceptCurrent = users.filter(user => user.username !== currentUserUsername);
    const updatedUsers = [...usersExceptCurrent, currentUser];
    sessionStorage.setItem('users', JSON.stringify(updatedUsers));
  }

  function addArtist() {
    if (!artistIsInFavorites) {
      // artistIsInFavorites = !artistIsInFavorites;
      currentUser.favorites = [...currentUser.favorites, artistInfo];
      udateUsers();
    }
  }

  function removeArtist() {
    const updatedFavorites = currentUser.favorites.filter(artist => artist.id !== artistInfo.id);
    currentUser.favorites = updatedFavorites;
    udateUsers();
    setToggleStar(!toggleStar);
  }

  const action = artistIsInFavorites ?
    <div className='details-action-small' onClick={removeArtist}>&#9733;</div> :
    <div className='details-action-small' onClick={addArtist}>&#9734;</div>;

  return (
    <div className='details-container-small'>
      <img className='image-small' src={artistInfo.picture} alt={artistInfo.name} />
      <div className="details-and-toggle">
        <div className='details-info-small'>
          <h2>
            {artistInfo.name}
          </h2>
          <ul>
            <li>Followers: {artistInfo.followers}</li>
            <li>Popularity: {artistInfo.popularity}</li>
          </ul>
        </div>
        {action}
      </div>
    </div >
  )
}