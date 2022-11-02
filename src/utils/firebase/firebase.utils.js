import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

const firbaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,

	authDomain: 'crwn-clothing-o2m-db.firebaseapp.com',

	projectId: 'crwn-clothing-o2m-db',

	storageBucket: 'crwn-clothing-o2m-db.appspot.com',

	messagingSenderId: '279982209582',

	appId: '1:279982209582:web:d2f75b6396a318ec5b3dbf',
}
console.log(firbaseConfig)
export const firebaseApp = initializeApp(firbaseConfig)

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
	prompt: 'select_account',
})

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return

	console.log(userAuth, additionalData)
}

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
