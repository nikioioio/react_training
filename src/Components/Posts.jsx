import {Post} from './Post'

export const Posts = (props) => {
    return <div>
        {
            props.posts.map(post => (
                <Post key={post.id} id={post.id} name={post.name} removeEl={props.removeEl}/>
            ))
        }
    </div>
}