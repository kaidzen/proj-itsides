import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebase-application";
import { getDatabase, ref, set, onValue } from 'firebase/database';
import Notiflix from 'notiflix';


const auth = getAuth(app);

const db = getDatabase(app);

const logInBtn = document.querySelector('.log-in-btn');
const backdrop = document.querySelector('.authorization__bacdrop');
const headerNav = document.querySelector('.header-nav');

headerNav.classList.add('is-hidden');
logInBtn.classList.remove('visually-hidden');

async function writeUserData(userId, name, email) {

    await set(ref(db, 'users/' + userId), {
        username: name,
        email: email,
    });

}
  

const createUser = async( ) => {

    const email = document.querySelector('#user_email_up').value
    const name = document.querySelector('#user_name').value
    const password = document.querySelector('#user_password_up').value


    try {
        const create = await createUserWithEmailAndPassword(auth, email, password);
        let userId = create.user.uid;

        writeUserData(userId, name, email);

        Notiflix.Notify.success(
            `Hello, ${name}, your registration was successful`
        );
        backdrop.style.display = 'none';
        backdrop.classList.add('is-hidden');
        logInBtn.classList.add('visually-hidden');
        headerNav.classList.remove('is-hidden');

    }
    catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            Notiflix.Notify.failure(
              'A user with this email address is already registered'
            )
        }
        else {
            console.log(error);
            Notiflix.Notify.failure(
                'Something went wrong'
              )
        }
    }
}

const userBarBtn = document.querySelector('.js-user-bar-btn');

userBarBtn.addEventListener('click', () => {
  userBarBtn.classList.toggle('is-active');
});

const signUpForm = document.querySelector('#sign-up');
signUpForm.addEventListener('submit', (event) => {
    event.preventDefault();
    createUser();
});

