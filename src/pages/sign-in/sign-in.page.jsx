import {
	createUserProfileDocument,
	signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils'

const SignInPage = () => {
	const logGoogleUser = async () => {
		const response = await signInWithGooglePopup()
		createUserProfileDocument(response)
	}
	return (
		<div>
			<h1>SignInPage</h1>
			<button onClick={logGoogleUser}>Sign in with Google Popup</button>
		</div>
	)
}

export default SignInPage
