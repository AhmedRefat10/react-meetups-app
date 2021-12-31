import { useRef } from 'react'
import classes from './NewMeetupForm.module.css';
import Card from '../ui/Card';

function NewMeetupForm(props) {

	const titleInputRef = useRef(),
				imageInputRef = useRef(),
				addressInputRef = useRef(),
				descriptionInputRef = useRef();

	function submitHandler(e) {
		e.preventDefault();

		const enteredTitle = titleInputRef.current.value,
				enteredImage = imageInputRef.current.value,
				enteredAddress = addressInputRef.current.value,
				enteredDescription = descriptionInputRef.current.value;

		const meetupData = {
				title: enteredTitle,
				image: enteredImage,
				address: enteredAddress,
				descirption: enteredDescription
	};

	props.onAddMeetup(meetupData);

	}
	return (
		<Card>
			<form className={classes.form} onSubmit={submitHandler}>
				<div className={classes.control}>
					<label  htmlFor='title'>Meetup Title</label>
					<input type='text' id='title' required ref={titleInputRef}/>
				</div>
				<div className={classes.control}>
					<label  htmlFor='image'>Meetup Image</label>
					<input type='url' id='image' required ref={imageInputRef}/>
				</div>
				<div className={classes.control}>
     <label htmlFor='address'>Address</label>
     <input type='text' required id='address' ref={addressInputRef}/>
    </div>
				<div className={classes.control}>
					<label  htmlFor='description'>Meetup Description</label>
					<textarea id='description' rclassesequired rows='5' ref={descriptionInputRef}></textarea>
				</div>
				<div className={classes.actions}>
					<button>Add Meetup</button>
				</div>
			</form>
		</Card>
		);
}

export default NewMeetupForm;