import "./home.css";
import Header from '../../Components/header/Header';
import Posts from '../../Components/posts/Posts';
import Sidebar from '../../Components/sidebar/Sidebar';
import axios from "axios";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";

export default function Home() {

    
    const [posts, setPosts] = useState([]);
    const { search } = useLocation();
  
    useEffect(() => {
        const fetchPosts = async () => {
          const res = await axios.get("/posts" + search);
          setPosts(res.data);
        };
        fetchPosts();
      }, [search]);

    return (
        <>
            <Header/>
            <div className="home">
                <Posts posts={posts} />
                <Sidebar/>
                
            </div>
        </>

    )
}
