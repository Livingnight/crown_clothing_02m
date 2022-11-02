import { initializeApp } from 'firebase/app'
import {
	createUserWithEmailAndPassword,
	getAuth,
	GoogleAuthProvider,
	signInWithPopup,
} from 'firebase/auth'
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

const googleProvider = new GoogleAuthProvider()

googleProvider.setCustomParameters({
	prompt: 'select_account',
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () =>
	signInWithGoogleRedirect(auth, googleProvider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (
	userAuth,
	additionalInformation = {}
) => {
	if (!userAuth) return

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
				...additionalInformation,
			})
		} catch (error) {
			console.log('Error creating user', error.message)
		}
	}

	return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return

	return await createUserWithEmailAndPassword(auth, email, password)
}
