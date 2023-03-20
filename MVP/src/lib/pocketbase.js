import PocketBase, { Record } from 'pocketbase'

export const pb = new PocketBase("https://gigeship.fly.dev/")
pb.autoCancellation(false)

export async function getPosts() {
    return await pb.collection("posts").getFullList()
}

export async function createPost(title,description,role, skills,time,compensation) {
    const data = {
        title: title,
        description: description,
        role: role,
        skills: skills,
        time: time,
        compensation: compensation
    };
    await pb.collection('posts').create(data);
}
