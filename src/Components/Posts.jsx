import {Post} from './Post'

export const Posts = (props) => {
    return <div>
        {
            props.posts.map(post => (
                <Post key={post.id} name={post.name} cb={props.cb}/>
            ))
        }
    </div>
}