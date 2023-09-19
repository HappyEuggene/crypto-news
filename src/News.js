import React, { useState } from "react";

function News() {
	const [newsData, setNewsData] = useState(null);
	const url = `https://localhost:7022/api/News`;

	const fetchData = async () => {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`Network error: ${response.status}`);
		}
		const data = await response.json();
		setNewsData(data);
	};

	const handleShowNewsClick = () => {
		fetchData();
	};

	return (
		<div className="center-container">
			<button onClick={handleShowNewsClick}>Show News</button>
			{(
				newsData &&
				newsData.data &&
				newsData.data[0].screen_data.news.map((newsItem, itemIndex) => (
					<div key={itemIndex} className="news-item">
						<div className="container">
							<img src={newsItem.related_image} alt="Cryptocurrency Image" className="news-image" />
							<a href={newsItem.news_link} target="_blank" rel="noopener noreferrer" className="headline">
								{newsItem.HEADLINE}
							</a>
							<p>{newsItem.news_provider_name}</p>
						</div>
					</div>
				))
			)}
		</div>
	);
}

export default News;
