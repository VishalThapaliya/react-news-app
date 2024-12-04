import { useEffect, useState } from "react"
import NewsCards from "./NewsCards";
import Loading from "./Loading";

const NewsBody = ({ category }) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    const getNews = async () => {
        try {
            const news = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=3976346497f440eda89fe4f33c7bf394`);
            const data = await news.json();
            setArticles(data.articles);
            setLoading(false);
        } catch(error) {
            setLoading(false);
            console.log("Error occurred while fetching data from API: ", error);
        }
    }

    useEffect(() => {
        getNews();
    }, [category]);

    if(loading) {
        return <Loading />
    }

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