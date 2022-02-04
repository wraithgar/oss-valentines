exports.data = { 
  title: "My Rad Blog" 
}; 

exports.render = function(data) {
   return `
<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="">
  <title></title>
  <link rel="icon" type="image/png" href="/img/favicon-32x32.png" sizes="32x32">
  <link rel="icon" type="image/png" href="/img/favicon-16x16.png" sizes="16x16">
  <meta property="og:type" content="website">
  <meta name="twitter:card" content="summary_large_image">
  <meta content="@Netlify" name="twitter:site">
  <meta content="@Netlify" name="twitter:creator">
  <meta content="" name="twitter:title" property="og:title">
  <meta content="" name="twitter:description" property="og:description">
  <meta content="" property="og:url">
  <meta content="" property="twitter:url">
  <meta content="" property="og:image">
  <meta content="" name="twitter:image">
  <link rel="stylesheet" href="/styles.css">
</head>

<!-- TODO: Componentize the views properly -->

<body class="${data.pageClass}">
  <header>
    <a href="#" class="masthead">We ❤️ OSS</a>
    <button id="gh-login">Log in with GitHub</button>
    <h2 class="instructions">Choose a card <span>💌</span></h2>
  </header>

  
  <!--
  <header>
    <a href="#" class="masthead">We ❤️ OSS</a>
    <span>@lynnandtonic</span>
    <button class="gh-login">Log out</button>
    <h2 class="instructions">Review your card <span>🔍</span></h2>
  </header> 
  -->

  ${data.content}

  <!-- Footer -->
  <footer class="footer-main">
    <div class="grid">
      <div class="footer-grid grid-narrow">
        <p>Hey, you. Thank you!</p>
        <p>The web is better with you building it.</p>
        <a href="//netlify.com" class="netlify-logo">
          <img src="/img/netlify-logo-mark.svg" alt="Netlify logo" />
        </a>
      </div>
    </div>
  </footer>

  <script src="/js/focus-visible.min.js"></script>
</body>

</html>`; 
};