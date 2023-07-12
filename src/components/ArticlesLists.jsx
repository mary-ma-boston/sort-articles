import './ArticlesLists.css';

const ArticlesLists = (props) => {
    return (
       <table className='tableStyle'>
        <thead>
            <tr>
                <th>Title</th>
                <th>Upvotes</th>
                <th>Date</th>
            </tr>    
        </thead>
        <tbody>
            {props.articles.map(item=> {
                return (
                    <tr key={item.id}>
                        <td>{item.title}</td>
                        <td>{item.upvotes}</td>
                        <td>{item.date}</td>
                    </tr>   
                )
            })}  
        </tbody>
       </table>
    )
}

export default ArticlesLists;