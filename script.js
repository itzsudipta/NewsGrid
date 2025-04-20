const countrySelect = document.getElementById("countrySelect");
const categorySelect = document.getElementById("categorySelect");
const newsContainer = document.getElementById("newsContainer");
const loader = document.getElementById("loader");
const noNews = document.getElementById("noNews");

// Replace with your actual GNews API key
const API_KEY = "YOUR_GNEWS_API_KEY";

async function fetchNews() {
    const country = countrySelect.value;
    const category = categorySelect.value;

    loader.style.display = "block";
    noNews.style.display = "none";
    newsContainer.innerHTML = "";

    // GNews API URL
    const url = `https://gnews.io/api/v4/top-headlines?country=${country}&topic=${category}&token=${API_KEY}`;

    try {
        const res = await fetch(url);
        const data = await res.json();

        loader.style.display = "none";

        if (data.articles && data.articles.length > 0) {
            data.articles.forEach((article) => {
                const card = document.createElement("div");
                card.className = "news-card";
                card.innerHTML = `
          <img src="${article.image || 'https://via.placeholder.com/300x180'}" alt="News" />
          <div class="news-content">
            <h3>${article.title}</h3>
            <p>${article.description || 'No description available.'}</p>
            <a href="${article.url}" target="_blank" class="read-more">Read more</a>
          </div>
        `;
                newsContainer.appendChild(card);
            });
        } else {
            noNews.style.display = "block";
        }
    } catch (err) {
        loader.style.display = "none";
        noNews.style.display = "block";
        noNews.innerText = "Failed to fetch news. Please try again later.";
    }
}

countrySelect.addEventListener("change", fetchNews);
categorySelect.addEventListener("change", fetchNews);

// Initial fetch
fetchNews();
