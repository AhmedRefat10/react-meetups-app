import MeetupItem from './MeetupItem';
import calsses from './MeetupList.module.css';

function MeetupList(props) {
	return (
		<ul className={calsses.list}>
			{props.meetups.map((meetup) => (
				<MeetupItem 
					key={meetup.id}
					id={meetup.id}
					title={meetup.title}
					address={meetup.address}
					image={meetup.image}
					description={meetup.description}
				/>
			))}
		</ul>
		);
}

export default MeetupList;