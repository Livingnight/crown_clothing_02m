import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore'

const firbaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,

	authDomain: 'crwn-clothing-o2m-db.firebaseapp.com',

	projectId: 'crwn-clothing-o2m-db',

	storageBucket: 'crwn-clothing-o2m-db.appspot.com',

	messagingSenderId: '279982209582',

	appId: '1:279982209582:web:d2f75b6396a318ec5b3dbf',
}
export const firebaseApp = initializeApp(firbaseConfig)

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
	prompt: 'select_account',
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async userAuth => {
	const userDocRef = doc(db, 'users', userAuth.uid)

	const userSnapshot = await getDoc(userDocRef)

	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth
		const createdAt = new Date()

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
			})
		} catch (error) {
			console.log('Error creating user', error.message)
		}
	}

	return userDocRef
}
