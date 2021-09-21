export const Post = (props) => {
    const {id, name, removeEl} = props;
    return <h2>{name}<button onClick={()=>removeEl(id)}>delete</button></h2>

}

