const QueryContainer = ({ queryString }) => {
    return(
        <div className='query-string-container'>
            <p>{'>'}&nbsp;&nbsp;?{queryString}</p>
        </div>
    )
}

export default QueryContainer;