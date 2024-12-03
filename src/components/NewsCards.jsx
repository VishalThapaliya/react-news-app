import newsImage from '../assets/news.avif';

const NewsCards = ({src, title, description, url}) => {
  const loremText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed iure nemo sint? Magni ea sit in voluptas? Consequatur deleniti deserunt libero optio, eveniet eius, incidunt earum harum mollitia voluptatum at distinctio! Cum voluptate expedita quos non accusantium, consectetur accusamus esse quaerat, laudantium nulla itaque est illum debitis corrupti dolor consequuntur!";
  return (
    <div className="card" style={{ maxWidth: "350px"}}>
        <img src={src || newsImage} className="card-img-top" style={{height: "225px", width: "100%", objectFit: "cover"}} alt="..." />
        <div className="card-body">
            <h5 className="card-title">{(!title || title === "[Removed]") ? "No title" : title.slice(0, 49) }</h5>
            <p className="card-text">{(!description || description === "[Removed]") ? loremText.slice(0, 75) :description.slice(0, 75)}</p>
            <a href={url} className="btn btn-primary">Read more</a>
        </div>
    </div>
  )
}

export default NewsCards