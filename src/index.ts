import User from './modules/User';

const form = document.querySelector('form');

form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const fullName = form?.fullName.value;
    const email = form?.email.value;
    const age = form?.age.value;

    const newUser = new User(fullName, email, age);
    console.log(newUser.user());
});