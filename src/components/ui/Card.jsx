import calsses from './Card.module.css'

function Card(props) {
	return <div className={calsses.card}>{props.children}</div>
}

export default Card;