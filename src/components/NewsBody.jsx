import { useEffect, useState } from "react"
import NewsCards from "./NewsCards";

const NewsBody = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=3976346497f440eda89fe4f33c7bf394`;
        fetch(url).then(response => response.json()).then(data => setArticles(data.articles));
        console.log(articles);
    }, []);
    return (
        <>
            <h2 className="text-center my-3 py-2">Latest <span className="badge bg-secondary">News</span></h2>
            <div className="d-flex justify-content-around flex-wrap gap-4 mt-5">
                {
                    articles.map((article, index) => {
                        return <NewsCards 
                                    key={index} 
                                    src={article.urlToImage}
                                    title={article.title} 
                                    description={article.description}
                                    url={article.url}
                                />
                    })
                }
            </div>
        </>
    )
}

export default NewsBody