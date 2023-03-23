import PocketBase, { Record } from 'pocketbase'

export const pb = new PocketBase("https://gigeship.fly.dev/")
pb.autoCancellation(false)

export async function getPosts() {
    return await pb.collection("posts").getFullList()
}

export const isUserValid = pb.authStore.isValid;

export async function createPost(title,description,role, skills,time,compensation) {
    const data = {
        title: title,
        description: description,
        role: role,
        skills: skills,
        time: time,
        compensation: compensation,
        user: pb.authStore.model.id
    };
    await pb.collection('posts').create(data);
}

export async function login(username, password) {
    await pb.collection("users").authWithPassword(username,password);
    window.location.reload();
}

export function signout(){
    pb.authStore.clear();
    window.location.reload();
}

export async function signup(username, password) {
    const data = {username:username, password:password, passwordConfirm: password};
    await pb.collection("users").create(data);
}