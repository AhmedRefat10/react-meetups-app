import { useContext } from 'react';

import Card from '../ui/Card.jsx'
import calsses from './MeetupItem.module.css';
import FavoritesContext from '../../store/favorites-context';


function MeetupItem(props) {

	const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }
  
	return (
		<li className={calsses.item}>
			<Card>
				<div className={calsses.image}>
					<img src={props.image} alt={props.title} />
				</div>
				<div className={calsses.content}>
					<h3>{props.title}</h3>
					<address>{props.address}</address>
					<p>{props.description}</p>
				</div>
				<div className={calsses.actions}>
					<button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? 'Remove from Favorites' : 'To Favorites'}
          </button>
				</div>
			</Card>
		</li>
		);
}

export default MeetupItem;