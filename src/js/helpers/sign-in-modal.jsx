import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { getDatabase, onValue, ref } from 'firebase/database';

import Notiflix from 'notiflix';
import { app } from "./firebase-application.js";

// tedddf
const backdrop = document.querySelector('.authorization__bacdrop');
const db = getDatabase(app);
const auth = getAuth(app);
const logInBtn = document.querySelector('.log-in-btn');
const userBarBtnText = document.querySelector('.user-bar-btn__text');
const userBar = document.querySelector('.js-user-bar');
const logOutBtn = document.querySelector('.js-log-out-btn');
const headerNav = document.querySelector('.header-nav');
headerNav.classList.add('is-hidden');

async function handelSignInUserAccount(e) {
  e.preventDefault();
  console.log('Start SignIn');

  const {
    elements: { email, password },
  } = e.currentTarget;

  const userEmail = email.value;
  const userPassword = password.value;
  console.log(`Email + pass: ${userEmail} + ${userPassword}`);

  const res = await signInWithEmailAndPassword(auth, userEmail, userPassword)

  if (res){
    console.log("Signed in: " + res)
  backdrop.style.display = 'none';
  backdrop.classList.add('is-hidden');
  logInBtn.classList.add('visually-hidden');
  e.target.reset();
  } else{(error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  }

  }
  // .then((userCred) => {
  //   console.log("Signed in: " + userCred.user)
  // backdrop.style.display = 'none';
  // backdrop.classList.add('is-hidden');
  // logInBtn.classList.add('visually-hidden');
  // e.target.reset();
  // })
  // .catch((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  // })


  // if (await signInUserAccount(auth, userEmail, userPassword)) {
  //   e.target.reset();
  // }
}

async function signInUserAccount(auth, userEmail, userPassword) {
  try {
    const response = await signInWithEmailAndPassword(auth, userEmail, userPassword)

    response
      .then(doOnSuccess(res), () => console.log('Nothing' )
      .catch((e) => console.error(`Critical error: ${e.message}`)));


  }
  catch (error) {
    if (error.code === 'auth/wrong-password') {
      Notiflix.Notify.failure('Your password is wrong, please try again');
    } else if (error.code === 'auth/user-not-found') {
      Notiflix.Notify.failure('Your email is wrong, please try again');
    }
  };
}

function doOnSuccess(obj) {
  console.log("Obtained: " + obj)
  backdrop.style.display = 'none';
  backdrop.classList.add('is-hidden');
  logInBtn.classList.add('visually-hidden');
}
console.log(auth);

function checkUserAuth() {
  onAuthStateChanged(auth, user => {
    if (user) {
      const userNameRef = ref(db, 'users/' + user.uid);
      onValue(userNameRef, name => {
        const currentUserName = name.exportVal();
        userBarBtnText.innerHTML = currentUserName.username;
      });
      userBar.classList.remove('visually-hidden');
      logInBtn.classList.add('visually-hidden');
      headerNav.classList.remove('is-hidden');
      headerNav.classList.remove('is-hidden');

    }
  });
}
checkUserAuth();

const signInForm = document.querySelector('#sign-in');
signInForm.addEventListener('submit', (event) => {
  event.preventDefault();
  handelSignInUserAccount(event);
});

logOutBtn.addEventListener('click', handelLogOutUserAccount);

function handelLogOutUserAccount() {
  signOut(auth)
    .then(() => {
      userBar.classList.add('visually-hidden');
      logInBtn.classList.remove('visually-hidden');
      backdrop.style.display = 'block';
      userBarBtnText.innerHTML = '';
      headerNav.classList.add('is-hidden');

      localStorage.removeItem('user');
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}
