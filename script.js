// Sample video data
const videos = [
    {
        id: 1,
        title: "Building a YouTube Clone with HTML, CSS & JavaScript - Complete Tutorial",
        thumbnail: "/api/placeholder/400/225",
        duration: "15:30",
        channel: "TechTutorials",
        channelAvatar: "/api/placeholder/36/36",
        views: "1.2M views",
        timestamp: "2 days ago"
    },
];

// Generate video cards
function createVideoCards() {
    const videoGrid = document.getElementById('videoGrid');
    
    // Create 12 sample videos
    for (let i = 0; i < 12; i++) {
        const video = {
            ...videos[0],
            id: i + 1,
            title: `Sample Video ${i + 1} - With a longer title to test multiple lines`,
            views: `${Math.floor(Math.random() * 1000)}K views`
        };

        const videoCard = `
            <div class="video-card">
                <div class="thumbnail-container">
                    <img class="thumbnail" src="/api/placeholder/400/225" alt="Video thumbnail">
                    <div class="video-duration">${video.duration}</div>
                </div>
                <div class="video-info">
                    <img class="channel-avatar" src="/api/placeholder/36/36" alt="Channel avatar">
                    <div class="video-details">
                        <h3 class="video-title">${video.title}</h3>
                        <p class="channel-name">${video.channel}</p>
                        <p class="video-metadata">${video.views} • ${video.timestamp}</p>
                    </div>
                </div>
            </div>
        `;
        videoGrid.innerHTML += videoCard;
    }
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    createVideoCards();
});

// Toggle sidebar
document.querySelector('.menu-icon').addEventListener('click', () => {
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    
    if (sidebar.style.display === 'none') {
        sidebar.style.display = 'block';
        mainContent.style.marginLeft = '240px';
    } else {
        sidebar.style.display = 'none';
        mainContent.style.marginLeft = '0';
    }
});
