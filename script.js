function openInstagram() {
  // Change this URL to the Instagram profile URL you want to open
  const instagramProfileUrl = 'https://www.instagram.com/';

  // Try to open the Instagram app first (if available on mobile)
  window.location.href = 'instagram://user?username=' + encodeURIComponent(instagramProfileUrl);

  // If the Instagram app is not installed or not available, open it in the browser
  setTimeout(function () {
      window.location.href = instagramProfileUrl;
  }, 25);
}
