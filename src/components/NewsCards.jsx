const NewsCards = ({src, title, description, url}) => {
  return (
    <div className="card" style={{ maxWidth: "350px"}}>
        <img src={src} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={url} className="btn btn-primary">Read more</a>
        </div>
    </div>
  )
}

export default NewsCards