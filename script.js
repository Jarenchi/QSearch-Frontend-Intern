async function fetchData() {
  try {
    const response = await fetch("yt.json");
    const data = await response.json();
    updateVideoList(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function updateVideoList(data) {
  const videoList = document.getElementById("video-list");
  const videosHTML = data
    .map(
      (video, index) => `
      <li class="card">
        <a href="${video.permalink}" target="_blank">
          <img src="${video.thumbnail_image}" alt="${video.title}" class="card-thumbnail-image">
        </a>
        <div class="description">
          <p class="card-name">${video.from_name}</p>
          <p class="card-title">${video.title}</p>
        </div>
        <div class="details">
          <span>👍 ${video.like_count.toLocaleString()}</span>
          <span>👀 ${video.view_count.toLocaleString()}</span>
        </div>
        <p class="views">#${index + 1} 觀看數: ${video.view_count.toLocaleString()}</p>
      </li>
    `,
    )
    .join("");
  videoList.insertAdjacentHTML("beforeend", videosHTML);
}

fetchData();
