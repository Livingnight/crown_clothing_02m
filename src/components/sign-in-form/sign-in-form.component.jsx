import { useContext, useState } from 'react'
import { UserContext } from '../../contexts/user.context'
import {
	signInAuthUserWithEmailAndPassword,
	signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils'
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'
import FormInput from '../form-input/form-input.component'
import './sign-in-form.styles.scss'

const defaultFormFields = {
	email: '',
	password: '',
}
const SignInForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields)
	const { email, password } = formFields

	const { setCurrentUser } = useContext(UserContext)

	const resetFormFields = () => {
		setFormFields(defaultFormFields)
	}

	const signInWithGoogle = async () => {
		const { user } = await signInWithGooglePopup()
		setCurrentUser(user)
	}

	const handleSubmit = async event => {
		event.preventDefault()

		try {
			const { user } = await signInAuthUserWithEmailAndPassword(email, password)
			resetFormFields()
			setCurrentUser(user)
		} catch (error) {
			console.log('user sign in failed', error)
		}
	}

	const handleInputChange = e => {
		const { name, value } = e.target

		setFormFields({ ...formFields, [name]: value })
	}

	return (
		<div className='sign-in-container'>
			<h2>Already have an account?</h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label='Email'
					type='email'
					required
					onChange={handleInputChange}
					name='email'
					value={email}
				/>
				<FormInput
					label='Password'
					type='password'
					required
					onChange={handleInputChange}
					name='password'
					value={password}
				/>
				<div className='buttons-container'>
					<Button type='submit'>Sign In</Button>
					<Button
						type='button'
						buttonType={BUTTON_TYPE_CLASSES.google}
						onClick={signInWithGoogle}
					>
						Google Sign In
					</Button>
				</div>
			</form>
		</div>
	)
}

export default SignInForm
