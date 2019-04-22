import 'babel-polyfill';
import {person, sayHello} from './lib';

console.log(person.name);

console.log(sayHello(person.name));


async function getPosts() {
    const response = await fetch(
        "https://jsonplaceholder.ir/posts"
    );
    const data = await response.json();
    return data;
}

getPosts().then(posts => console.log(posts));
