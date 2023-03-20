import Card from "../components/Card";
import Filter from "../components/Filter";
import Navbar from "../components/Navbar";
import { getPosts, pb } from '../lib/pocketbase'
import { useEffect, useState } from "react";

export default function HomePage() {
    const [ posts, setPosts ] = useState([]);

    useEffect(() => {
        getPosts().then((res) => setPosts(res));
    }, []);
    

    return (
    <div className="bg-base-300 text-base-content">
        <Navbar/>
        <div className="flex">
            <div className="mr-5">
            <Filter/>
            </div>
            <div>
            <article className="prose">
                        <h3 className="text-4xl px-5 pt-5 text-left mb-5">All Job Postings</h3>
                    </article>
            {posts.map((post) => (
                <div key={post.id}>
                    <Card title={post.title} role = {post.role} time={post.time} compensation = {post.compensation} description = {post.description}/>
                </div>
            ))}
            </div>
        </div>
    </div>
    );
}