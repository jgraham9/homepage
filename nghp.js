document.addEventListener("DOMContentLoaded", function() {
    if (document.querySelector("#home-bodycontent") !== null) {
      {
        const cover = document.querySelector("body.header-transparent .cover-title .container");
        const heroWrapper = document.createElement("div");
        heroWrapper.className = "hero-wrapper";
        heroWrapper.id = "cust-hero_wrpr"
        cover.insertBefore(heroWrapper, cover.childNodes[3]); 
        const coverHeadline = document.createElement("h1");
        coverHeadline.className = "hero-headline";
        coverHeadline.textContent = "Natalie Graham, eXp Realty";
        heroWrapper.appendChild(coverHeadline);
        const templateHeading = document.querySelector("#home-bodycontent .cover-title-inner h1").style.display = "none"; 
      }
    }
    $('.footer-wrapper').append('<div class="p-a-1 center white" style="opacity:0.8"><a href="https://kvcore.com/marketplace?search=Custom%20Templates" class="btn-primary btn-sm">Design by IRE Professional Services</a></div>');
  });