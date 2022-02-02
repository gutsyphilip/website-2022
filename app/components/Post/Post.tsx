import React from "react";
import { format } from 'date-fns'
// import SEO from "../SEO";


interface PostHeaderProps{
 title: string;
 date: string;
 excerpt: string;
 thumbnail?: string;
}




const PostHeader:React.FC<PostHeaderProps> = (props)=>{
return (
    <>
        {/* <SEO {...props} description={props.excerpt} img={props.thumbnail} /> */}

        <div className="post">
            <header className="post_header">
                <h1 className="post_header_ttl">{props.title}</h1>
                <p className="post_header_author">By Philip Obosi <br/> {format(new Date(props.date),'dd MMMM yyyy')}</p>
            </header>
                <blockquote>
                    <p>
                        {props.excerpt}
                    </p>
                </blockquote>
        </div>
    </>
    
)
}




export default {
    Header: PostHeader
}