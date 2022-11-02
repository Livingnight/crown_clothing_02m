import {
	createUserDocumentFromAuth,
	signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils'

const SignInPage = () => {
	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup()
		const userDocRef = await createUserDocumentFromAuth(user)
		console.log(userDocRef)
	}
	return (
		<div>
			<h1>SignInPage</h1>
			<button onClick={logGoogleUser}>Sign in with Google Popup</button>
		</div>
	)
}

export default SignInPage
