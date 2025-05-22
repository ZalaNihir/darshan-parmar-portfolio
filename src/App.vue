<template>
  <div class="banner-1">
    <!-- NavBar -->
    <nav class="container px-6 mx-auto md:flex md:justify-between md:items-center">
      <div class="flex items-center justify-between">
        <div class="relative w-16 h-16">
          <img class="rounded-full border border-gray-100 shadow-sm"
            src="https://media.licdn.com/dms/image/v2/D4D03AQFGjf4oumFaOg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1732537035684?e=2147483647&v=beta&t=PgmJdJNBsRtF9pFE_h8E4lGntSF5NPSsCGrWjoCjZ1U"
            alt="user image" />
        </div>
        <!-- Mobile menu button -->
        <div @click="showMenu = !showMenu" class="flex md:hidden">
          <button type="button" class="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400">
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
              </path>
            </svg>
          </button>
        </div>
      </div>
      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <ul :class="showMenu ? 'flex' : 'hidden'"
        class="flex-col items-end mt-8 space-y-20 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0">
        <li class="menu-button"><a href="#">Home</a></li>
        <li class="menu-button"><a href="#service" v-smooth-scroll>Service</a></li>
        <li class="menu-button">
          <a href="#testimonial" v-smooth-scroll>Testimonials</a>
        </li>
        <li class="menu-button"><a href="#about" v-smooth-scroll>About</a></li>
      </ul>
    </nav>
    <!-- End Navbar -->

    <div class="flex items-center">
      <div class="w-11/12 space-y-5 md:space-y-10">
        <h3
          class="hello-button text-gray-700 w-fit md:py-3 md:px-5 py-1 px-2 rounded-lg 3xl:text-3xl 2xl:text-xl lg:text-xl md:text-md text-sm font-semibold font-work_sans">
          🙏 Namaste,
        </h3>
        <h1
          class="3xl:text-8xl 2xl:text-7xl xl:text-6xl lg:text-4xl md:text-3xl sm:text-3xl text-xl font-Eczar font-bold leading-tight text-gray-700">
          I’m
          <a href="https://in.linkedin.com/in/paramar-darshan/" target="_blank" class="text-black hover:underline">
            Darshan Parmar, </a><span class="d-none">🙇‍♀️</span><br />Digital Marketing Expert
        </h1>

        <div class="md:flex gap-1 md:gap-10">
          <a href="#service" class="text-white bg-gray-800 submit-button hidden md:block">
            View My Works
          </a>
          <a href="#contact-me" class="text-gray-800 border-4 border-gray-800 submit-button mb-5 md:mb-0">
            Contact Me
          </a>
        </div>
      </div>

      <div class="w-8/12 flex justify-end w-100">
        <img class="3xl:h-[800px] 2xl:h-[650px] xl:h-[550px] lg:h-[550px] md:h-[450px] sm:h-[350px]"
          src="./assets/header.png" alt="user image" />
      </div>
    </div>
  </div>

  <div class="banner-2 space-y-10 pb-20" id="service">
    <h3 class="heading3 my-5">My Recent Work</h3>
    <div class="card">
      <div class="space-y-5 py-8 px-8 md:py-16 md:px-20 md:w-1/2">
        <h4 class="project-title item">Pay-Per-Click (PPC) Advertising:</h4>
        <div class="font-work_sans pr-12">
          <p>Reach your customers the moment they’re searching! We create targeted, high-impact ads on Google and Meta,
            so you only pay when someone clicks—making every rupee count.</p>
          <div class="ml-6 mt-2">
            <ul class="list-disc">
              <li>Google Search & Display Ads</li>
              <li>Facebook & Instagram Ads</li>
              <li>YouTube Ads</li>
              <li>Conversion Tracking & Optimization</li>
            </ul>
          </div>
        </div>
        <button class="d-none text-sky-800 font-bold text-2xl tracking-wider">
          View Case Study
        </button>
      </div>
      <div class="card-image bg-green-100">
        <img class="object-cover w-full h-48 md:h-96" src="./assets/ppc.png" />
      </div>
    </div>

    <div class="card">
      <div class="space-y-5 py-8 px-8 md:py-16 md:px-20 md:w-1/2">
        <h4 class="project-title item">Search Engine Optimization (SEO):</h4>
        <div class="font-work_sans pr-12">
          <p>Get discovered exactly when it counts. We boost your website’s presence on Google with proven SEO
            techniques that drive quality organic traffic. From deep keyword research to technical audits, we make sure
            your business ranks higher and reaches the right audience.</p>
          <div class="ml-6 mt-2">
            <ul class="list-disc">
              <li>On-page & Off-page SEO</li>
              <li>Keyword Research & Competitor Analysis</li>
              <li>Technical SEO & Site Audits</li>
              <li>Local SEO for Indian businesses</li>
            </ul>
          </div>
        </div>
        <button class="text-sky-800 font-bold text-2xl tracking-wider d-none">
          View Case Study
        </button>
      </div>
      <div class="card-image">
        <img class="object-cover w-full h-48 md:h-96" src="./assets/seo.png" />
      </div>
    </div>

    <div class="card">
      <div class="space-y-5 py-8 px-8 md:py-16 md:px-20 md:w-1/2">
        <h4 class="project-title">Performance Marketing:</h4>
        <div class="font-work_sans pr-12">
          <p>Only pay when you see results. We design campaigns laser-focused on delivering real value—whether it’s
            leads, downloads, or sales. Every rupee works hard to maximize your ROI.</p>
          <div class="ml-6 mt-2">
            <ul class="list-disc">
              <li>ROI-focused Campaigns</li>
              <li>Lead Generation Funnels</li>
              <li>Landing Page Optimization</li>
              <li>Performance Analytics & Reports</li>
            </ul>
          </div>
        </div>
        <button class="text-sky-800 font-bold text-2xl tracking-wider d-none">
          View Case Study
        </button>
      </div>
      <div class="card-image bg-green-100">
        <img class="object-cover w-full h-48 md:h-96" src="./assets/performance-marketing.png" />
      </div>
    </div>

    <div class="card">
      <div class="space-y-5 py-8 px-8 md:py-16 md:px-20 md:w-1/2">
        <h4 class="project-title">Social Media Marketing (SMM):</h4>
        <div class="font-work_sans pr-12">
          <p>Connect with your audience where they spend their time. We craft authentic social media strategies that
            build trust, spark engagement, and drive results, handling everything from creative content to targeted ads.
          </p>
          <div class="ml-6 mt-2">
            <ul class="list-disc">
              <li>Facebook, Instagram & LinkedIn Marketing</li>
              <li>Content Planning & Scheduling</li>
              <li>Paid Campaign Strategy</li>
              <li>Engagement & Follower Growth</li>
            </ul>
          </div>
        </div>
        <button class="text-sky-800 font-bold text-2xl tracking-wider d-none">
          View Case Study
        </button>
      </div>
      <div class="card-image bg-green-100">
        <img class="object-cover w-full h-48 md:h-96" src="./assets/social-media-marketing.png" />
      </div>
    </div>
  </div>

  <div class="banner-1" id="testimonial">
    <div class="space-y-4 grid place-items-center mt-5">
      <h3 class="heading3">Some Generous Words</h3>
      <p class="font-work_sans text-gray-600 font-semibold leading-relaxed">
        Some of my favorite testimonials from my clients
      </p>
    </div>
    <div class="carousel max-w-6xl mx-auto px-8 py-16">
      <div id="slide1" class="carousel-item relative w-full">
        <div class="relative">
          <div class="relative lg:flex rounded-lg shadow-2xl overflow-hidden">
            <div class="h-56 lg:h-auto lg:w-5/12 relative flex items-center justify-center">
              <img class="absolute h-full w-full object-cover"
                src="https://a.slack-edge.com/80588/marketing/img/meta/slack_hash_256.png" alt="" />
              <div class="absolute inset-0 bg-gray-700 opacity-75"></div>
              <svg class="relative" width="200" height="120">
                <path fill="#fff" fill-rule="evenodd"
                  d="M63.75 75.24l2.5-5.93c2.7 2.05 6.3 3.13 9.85 3.13 2.61 0 4.27-1.03 4.27-2.6-.04-4.37-15.7-.95-15.82-11.9-.04-5.58 4.8-9.86 11.66-9.86 4.08 0 8.16 1.03 11.06 3.38l-2.34 6.05c-2.66-1.73-5.97-2.97-9.12-2.97-2.13 0-3.55 1.03-3.55 2.36.04 4.28 15.82 1.94 15.98 12.4 0 5.7-4.72 9.69-11.5 9.69-4.96 0-9.52-1.2-12.99-3.75zm96.01-8.08a7.16 7.16 0 0 1-8.11 3.5 7.35 7.35 0 0 1-5.38-7.13c0-3.34 2.2-6.27 5.38-7.12 3.16-.85 6.5.58 8.11 3.5l6.9-3.93a15.02 15.02 0 0 0-17.03-7.42 15.42 15.42 0 0 0-11.33 14.97c0 7.04 4.66 13.2 11.33 14.97a15.02 15.02 0 0 0 17.04-7.43l-6.9-3.9zM91.71 35.25h8.64v43.16h-8.64V35.25zm78.34 0v43.16h8.65V65.48l10.25 12.93H200l-13.03-15.37 12.06-14.34h-10.58l-9.76 11.9V35.25h-8.64zm-43.82 31.1a8.14 8.14 0 0 1-6.83 3.56 7.24 7.24 0 0 1-7.33-7.16 7.24 7.24 0 0 1 7.33-7.15 8.1 8.1 0 0 1 6.83 3.67v7.08zm0-18v3.4c-1.43-2.36-5-4-8.72-4-7.7 0-13.76 6.64-13.76 14.96 0 8.33 6.07 15.04 13.76 15.04 3.73 0 7.3-1.63 8.72-4v3.4H135v-28.8h-8.77zM10.53 66.4A5.32 5.32 0 0 1 5.3 71.8 5.32 5.32 0 0 1 .04 66.4a5.32 5.32 0 0 1 5.25-5.38h5.25v5.38zm2.63 0a5.32 5.32 0 0 1 5.25-5.38c2.9 0 5.25 2.4 5.25 5.38v13.46a5.32 5.32 0 0 1-5.25 5.39 5.32 5.32 0 0 1-5.25-5.39V66.4zm5.26-21.63a5.32 5.32 0 0 1-5.25-5.38A5.32 5.32 0 0 1 18.42 34c2.9 0 5.25 2.41 5.25 5.39v5.38h-5.25zm0 2.74c2.9 0 5.25 2.41 5.25 5.39a5.32 5.32 0 0 1-5.25 5.38H5.25A5.32 5.32 0 0 1 0 52.9a5.32 5.32 0 0 1 5.25-5.39h13.17zm21.03 5.39a5.32 5.32 0 0 1 5.25-5.39c2.9 0 5.25 2.41 5.25 5.39a5.32 5.32 0 0 1-5.25 5.38h-5.25V52.9zm-2.62 0a5.32 5.32 0 0 1-5.25 5.38 5.32 5.32 0 0 1-5.25-5.38V39.39A5.32 5.32 0 0 1 31.58 34c2.9 0 5.25 2.41 5.25 5.39v13.5zm-5.25 21.58c2.9 0 5.25 2.41 5.25 5.38a5.32 5.32 0 0 1-5.25 5.39 5.32 5.32 0 0 1-5.25-5.39v-5.38h5.25zm0-2.7a5.32 5.32 0 0 1-5.25-5.38 5.32 5.32 0 0 1 5.25-5.38h13.17c2.9 0 5.25 2.4 5.25 5.38a5.32 5.32 0 0 1-5.25 5.39H31.58z" />
              </svg>
            </div>
            <div class="relative lg:w-7/12 bg-white">
              <svg class="absolute h-full text-white w-24 -ml-12" fill="currentColor" viewBox="0 0 100 100"
                preserveAspectRatio="none">
                <polygon points="50,0 100,0 50,100 0,100" />
              </svg>
              <div class="relative py-12 lg:py-24 px-8 lg:px-16 text-gray-700 leading-relaxed">
                <p>
                  As
                  <strong class="text-gray-900 font-medium">Slack</strong> grows
                  rapidly, using Stripe helps them scale payments easily &mdash;
                  supporting everything from getting paid by users around the
                  world to enabling ACH payments for corporate customers.
                </p>
                <p class="mt-6">
                  <a href="#" class="font-medium text-indigo-600 hover:text-indigo-900">
                    &rarr; Md Solaiman Hossain</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" class="btn btn-circle">❮</a>
          <a href="#slide2" class="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide2" class="carousel-item relative w-full">
        <div class="relative">
          <div class="relative lg:flex rounded-lg shadow-2xl overflow-hidden">
            <div class="h-56 lg:h-auto lg:w-5/12 relative flex items-center justify-center">
              <img class="absolute h-full w-full object-cover"
                src="https://a.slack-edge.com/80588/marketing/img/meta/slack_hash_256.png" alt="" />
              <div class="absolute inset-0 bg-gray-700 opacity-75"></div>
              <svg class="relative" width="200" height="120">
                <path fill="#fff" fill-rule="evenodd"
                  d="M63.75 75.24l2.5-5.93c2.7 2.05 6.3 3.13 9.85 3.13 2.61 0 4.27-1.03 4.27-2.6-.04-4.37-15.7-.95-15.82-11.9-.04-5.58 4.8-9.86 11.66-9.86 4.08 0 8.16 1.03 11.06 3.38l-2.34 6.05c-2.66-1.73-5.97-2.97-9.12-2.97-2.13 0-3.55 1.03-3.55 2.36.04 4.28 15.82 1.94 15.98 12.4 0 5.7-4.72 9.69-11.5 9.69-4.96 0-9.52-1.2-12.99-3.75zm96.01-8.08a7.16 7.16 0 0 1-8.11 3.5 7.35 7.35 0 0 1-5.38-7.13c0-3.34 2.2-6.27 5.38-7.12 3.16-.85 6.5.58 8.11 3.5l6.9-3.93a15.02 15.02 0 0 0-17.03-7.42 15.42 15.42 0 0 0-11.33 14.97c0 7.04 4.66 13.2 11.33 14.97a15.02 15.02 0 0 0 17.04-7.43l-6.9-3.9zM91.71 35.25h8.64v43.16h-8.64V35.25zm78.34 0v43.16h8.65V65.48l10.25 12.93H200l-13.03-15.37 12.06-14.34h-10.58l-9.76 11.9V35.25h-8.64zm-43.82 31.1a8.14 8.14 0 0 1-6.83 3.56 7.24 7.24 0 0 1-7.33-7.16 7.24 7.24 0 0 1 7.33-7.15 8.1 8.1 0 0 1 6.83 3.67v7.08zm0-18v3.4c-1.43-2.36-5-4-8.72-4-7.7 0-13.76 6.64-13.76 14.96 0 8.33 6.07 15.04 13.76 15.04 3.73 0 7.3-1.63 8.72-4v3.4H135v-28.8h-8.77zM10.53 66.4A5.32 5.32 0 0 1 5.3 71.8 5.32 5.32 0 0 1 .04 66.4a5.32 5.32 0 0 1 5.25-5.38h5.25v5.38zm2.63 0a5.32 5.32 0 0 1 5.25-5.38c2.9 0 5.25 2.4 5.25 5.38v13.46a5.32 5.32 0 0 1-5.25 5.39 5.32 5.32 0 0 1-5.25-5.39V66.4zm5.26-21.63a5.32 5.32 0 0 1-5.25-5.38A5.32 5.32 0 0 1 18.42 34c2.9 0 5.25 2.41 5.25 5.39v5.38h-5.25zm0 2.74c2.9 0 5.25 2.41 5.25 5.39a5.32 5.32 0 0 1-5.25 5.38H5.25A5.32 5.32 0 0 1 0 52.9a5.32 5.32 0 0 1 5.25-5.39h13.17zm21.03 5.39a5.32 5.32 0 0 1 5.25-5.39c2.9 0 5.25 2.41 5.25 5.39a5.32 5.32 0 0 1-5.25 5.38h-5.25V52.9zm-2.62 0a5.32 5.32 0 0 1-5.25 5.38 5.32 5.32 0 0 1-5.25-5.38V39.39A5.32 5.32 0 0 1 31.58 34c2.9 0 5.25 2.41 5.25 5.39v13.5zm-5.25 21.58c2.9 0 5.25 2.41 5.25 5.38a5.32 5.32 0 0 1-5.25 5.39 5.32 5.32 0 0 1-5.25-5.39v-5.38h5.25zm0-2.7a5.32 5.32 0 0 1-5.25-5.38 5.32 5.32 0 0 1 5.25-5.38h13.17c2.9 0 5.25 2.4 5.25 5.38a5.32 5.32 0 0 1-5.25 5.39H31.58z" />
              </svg>
            </div>
            <div class="relative lg:w-7/12 bg-white">
              <svg class="absolute h-full text-white w-24 -ml-12" fill="currentColor" viewBox="0 0 100 100"
                preserveAspectRatio="none">
                <polygon points="50,0 100,0 50,100 0,100" />
              </svg>
              <div class="relative py-12 lg:py-24 px-8 lg:px-16 text-gray-700 leading-relaxed">
                <p>
                  As
                  <strong class="text-gray-900 font-medium">Slack</strong> grows
                  rapidly, using Stripe helps them scale payments easily &mdash;
                  supporting everything from getting paid by users around the
                  world to enabling ACH payments for corporate customers.
                </p>
                <p class="mt-6">
                  <a href="#" class="font-medium text-indigo-600 hover:text-indigo-900">
                    &rarr; Md Solaiman Hossain</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" class="btn btn-circle">❮</a>
          <a href="#slide3" class="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide3" class="carousel-item relative w-full">
        <div class="relative">
          <div class="relative lg:flex rounded-lg shadow-2xl overflow-hidden">
            <div class="h-56 lg:h-auto lg:w-5/12 relative flex items-center justify-center">
              <img class="absolute h-full w-full object-cover"
                src="https://a.slack-edge.com/80588/marketing/img/meta/slack_hash_256.png" alt="" />
              <div class="absolute inset-0 bg-gray-700 opacity-75"></div>
              <svg class="relative" width="200" height="120">
                <path fill="#fff" fill-rule="evenodd"
                  d="M63.75 75.24l2.5-5.93c2.7 2.05 6.3 3.13 9.85 3.13 2.61 0 4.27-1.03 4.27-2.6-.04-4.37-15.7-.95-15.82-11.9-.04-5.58 4.8-9.86 11.66-9.86 4.08 0 8.16 1.03 11.06 3.38l-2.34 6.05c-2.66-1.73-5.97-2.97-9.12-2.97-2.13 0-3.55 1.03-3.55 2.36.04 4.28 15.82 1.94 15.98 12.4 0 5.7-4.72 9.69-11.5 9.69-4.96 0-9.52-1.2-12.99-3.75zm96.01-8.08a7.16 7.16 0 0 1-8.11 3.5 7.35 7.35 0 0 1-5.38-7.13c0-3.34 2.2-6.27 5.38-7.12 3.16-.85 6.5.58 8.11 3.5l6.9-3.93a15.02 15.02 0 0 0-17.03-7.42 15.42 15.42 0 0 0-11.33 14.97c0 7.04 4.66 13.2 11.33 14.97a15.02 15.02 0 0 0 17.04-7.43l-6.9-3.9zM91.71 35.25h8.64v43.16h-8.64V35.25zm78.34 0v43.16h8.65V65.48l10.25 12.93H200l-13.03-15.37 12.06-14.34h-10.58l-9.76 11.9V35.25h-8.64zm-43.82 31.1a8.14 8.14 0 0 1-6.83 3.56 7.24 7.24 0 0 1-7.33-7.16 7.24 7.24 0 0 1 7.33-7.15 8.1 8.1 0 0 1 6.83 3.67v7.08zm0-18v3.4c-1.43-2.36-5-4-8.72-4-7.7 0-13.76 6.64-13.76 14.96 0 8.33 6.07 15.04 13.76 15.04 3.73 0 7.3-1.63 8.72-4v3.4H135v-28.8h-8.77zM10.53 66.4A5.32 5.32 0 0 1 5.3 71.8 5.32 5.32 0 0 1 .04 66.4a5.32 5.32 0 0 1 5.25-5.38h5.25v5.38zm2.63 0a5.32 5.32 0 0 1 5.25-5.38c2.9 0 5.25 2.4 5.25 5.38v13.46a5.32 5.32 0 0 1-5.25 5.39 5.32 5.32 0 0 1-5.25-5.39V66.4zm5.26-21.63a5.32 5.32 0 0 1-5.25-5.38A5.32 5.32 0 0 1 18.42 34c2.9 0 5.25 2.41 5.25 5.39v5.38h-5.25zm0 2.74c2.9 0 5.25 2.41 5.25 5.39a5.32 5.32 0 0 1-5.25 5.38H5.25A5.32 5.32 0 0 1 0 52.9a5.32 5.32 0 0 1 5.25-5.39h13.17zm21.03 5.39a5.32 5.32 0 0 1 5.25-5.39c2.9 0 5.25 2.41 5.25 5.39a5.32 5.32 0 0 1-5.25 5.38h-5.25V52.9zm-2.62 0a5.32 5.32 0 0 1-5.25 5.38 5.32 5.32 0 0 1-5.25-5.38V39.39A5.32 5.32 0 0 1 31.58 34c2.9 0 5.25 2.41 5.25 5.39v13.5zm-5.25 21.58c2.9 0 5.25 2.41 5.25 5.38a5.32 5.32 0 0 1-5.25 5.39 5.32 5.32 0 0 1-5.25-5.39v-5.38h5.25zm0-2.7a5.32 5.32 0 0 1-5.25-5.38 5.32 5.32 0 0 1 5.25-5.38h13.17c2.9 0 5.25 2.4 5.25 5.38a5.32 5.32 0 0 1-5.25 5.39H31.58z" />
              </svg>
            </div>
            <div class="relative lg:w-7/12 bg-white">
              <svg class="absolute h-full text-white w-24 -ml-12" fill="currentColor" viewBox="0 0 100 100"
                preserveAspectRatio="none">
                <polygon points="50,0 100,0 50,100 0,100" />
              </svg>
              <div class="relative py-12 lg:py-24 px-8 lg:px-16 text-gray-700 leading-relaxed">
                <p>
                  As
                  <strong class="text-gray-900 font-medium">Slack</strong> grows
                  rapidly, using Stripe helps them scale payments easily &mdash;
                  supporting everything from getting paid by users around the
                  world to enabling ACH payments for corporate customers.
                </p>
                <p class="mt-6">
                  <a href="#" class="font-medium text-indigo-600 hover:text-indigo-900">
                    &rarr; Md Solaiman Hossain</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" class="btn btn-circle">❮</a>
          <a href="#slide4" class="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide4" class="carousel-item relative w-full">
        <div class="relative">
          <div class="relative lg:flex rounded-lg shadow-2xl overflow-hidden">
            <div class="h-56 lg:h-auto lg:w-5/12 relative flex items-center justify-center">
              <img class="absolute h-full w-full object-cover"
                src="https://a.slack-edge.com/80588/marketing/img/meta/slack_hash_256.png" alt="" />
              <div class="absolute inset-0 bg-gray-700 opacity-75"></div>
              <svg class="relative" width="200" height="120">
                <path fill="#fff" fill-rule="evenodd"
                  d="M63.75 75.24l2.5-5.93c2.7 2.05 6.3 3.13 9.85 3.13 2.61 0 4.27-1.03 4.27-2.6-.04-4.37-15.7-.95-15.82-11.9-.04-5.58 4.8-9.86 11.66-9.86 4.08 0 8.16 1.03 11.06 3.38l-2.34 6.05c-2.66-1.73-5.97-2.97-9.12-2.97-2.13 0-3.55 1.03-3.55 2.36.04 4.28 15.82 1.94 15.98 12.4 0 5.7-4.72 9.69-11.5 9.69-4.96 0-9.52-1.2-12.99-3.75zm96.01-8.08a7.16 7.16 0 0 1-8.11 3.5 7.35 7.35 0 0 1-5.38-7.13c0-3.34 2.2-6.27 5.38-7.12 3.16-.85 6.5.58 8.11 3.5l6.9-3.93a15.02 15.02 0 0 0-17.03-7.42 15.42 15.42 0 0 0-11.33 14.97c0 7.04 4.66 13.2 11.33 14.97a15.02 15.02 0 0 0 17.04-7.43l-6.9-3.9zM91.71 35.25h8.64v43.16h-8.64V35.25zm78.34 0v43.16h8.65V65.48l10.25 12.93H200l-13.03-15.37 12.06-14.34h-10.58l-9.76 11.9V35.25h-8.64zm-43.82 31.1a8.14 8.14 0 0 1-6.83 3.56 7.24 7.24 0 0 1-7.33-7.16 7.24 7.24 0 0 1 7.33-7.15 8.1 8.1 0 0 1 6.83 3.67v7.08zm0-18v3.4c-1.43-2.36-5-4-8.72-4-7.7 0-13.76 6.64-13.76 14.96 0 8.33 6.07 15.04 13.76 15.04 3.73 0 7.3-1.63 8.72-4v3.4H135v-28.8h-8.77zM10.53 66.4A5.32 5.32 0 0 1 5.3 71.8 5.32 5.32 0 0 1 .04 66.4a5.32 5.32 0 0 1 5.25-5.38h5.25v5.38zm2.63 0a5.32 5.32 0 0 1 5.25-5.38c2.9 0 5.25 2.4 5.25 5.38v13.46a5.32 5.32 0 0 1-5.25 5.39 5.32 5.32 0 0 1-5.25-5.39V66.4zm5.26-21.63a5.32 5.32 0 0 1-5.25-5.38A5.32 5.32 0 0 1 18.42 34c2.9 0 5.25 2.41 5.25 5.39v5.38h-5.25zm0 2.74c2.9 0 5.25 2.41 5.25 5.39a5.32 5.32 0 0 1-5.25 5.38H5.25A5.32 5.32 0 0 1 0 52.9a5.32 5.32 0 0 1 5.25-5.39h13.17zm21.03 5.39a5.32 5.32 0 0 1 5.25-5.39c2.9 0 5.25 2.41 5.25 5.39a5.32 5.32 0 0 1-5.25 5.38h-5.25V52.9zm-2.62 0a5.32 5.32 0 0 1-5.25 5.38 5.32 5.32 0 0 1-5.25-5.38V39.39A5.32 5.32 0 0 1 31.58 34c2.9 0 5.25 2.41 5.25 5.39v13.5zm-5.25 21.58c2.9 0 5.25 2.41 5.25 5.38a5.32 5.32 0 0 1-5.25 5.39 5.32 5.32 0 0 1-5.25-5.39v-5.38h5.25zm0-2.7a5.32 5.32 0 0 1-5.25-5.38 5.32 5.32 0 0 1 5.25-5.38h13.17c2.9 0 5.25 2.4 5.25 5.38a5.32 5.32 0 0 1-5.25 5.39H31.58z" />
              </svg>
            </div>
            <div class="relative lg:w-7/12 bg-white">
              <svg class="absolute h-full text-white w-24 -ml-12" fill="currentColor" viewBox="0 0 100 100"
                preserveAspectRatio="none">
                <polygon points="50,0 100,0 50,100 0,100" />
              </svg>
              <div class="relative py-12 lg:py-24 px-8 lg:px-16 text-gray-700 leading-relaxed">
                <p>
                  As
                  <strong class="text-gray-900 font-medium">Slack</strong> grows
                  rapidly, using Stripe helps them scale payments easily &mdash;
                  supporting everything from getting paid by users around the
                  world to enabling ACH payments for corporate customers.
                </p>
                <p class="mt-6">
                  <a href="#" class="font-medium text-indigo-600 hover:text-indigo-900">
                    &rarr; Md Solaiman Hossain</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" class="btn btn-circle">❮</a>
          <a href="#slide1" class="btn btn-circle">❯</a>
        </div>
      </div>
    </div>

  </div>

  <div class="banner-2 md:flex items-center md:justify-evenly md:mb-[-55px]" id="about">
    <img class="md:h-[500px] h-[400px]" src="./assets/about.png" alt="user image" />
    <div class="space-y-5 py-8 px-8 md:py-16 md:px-20 md:w-1/2">
      <h4 class="project-title item italic">Who Am I?</h4>
      <p class="italic text-md">
        Hi, I’m Darshan Parmar, <br> A PPC and Digital Marketing Expert based in Gujarat, India. With over 3 years of
        experience, I specialize in creating high-performance ad campaigns across Google, Meta (Facebook & Instagram)
        and more. <br> <br> I help businesses scale by combining performance marketing, precise conversion tracking, and
        ROI-driven strategies to deliver measurable growth. Beyond paid advertising, I bring a strong understanding of
        SEO, analytics, and the latest digital trends, providing your brand with a comprehensive 360° marketing
        advantage. <br> <br>Whether you're looking to boost leads, improve ROI, or grow brand awareness, I’m here to
        make your marketing budget work smarter.
      </p>
      <button class="text-sky-800 font-bold text-2xl tracking-wider d-none">
        View Case Study
      </button>
    </div>
  </div>

  <div class="banner-1 flex h-full items-center" id="contact-me">
    <div class="w-7/12 p-12">
      <h2 class="text-gray-700 md:text-6xl text-2xl font-Eczar mb-5 font-bold">
        Got a project or question? I’m here to grow your brand with smart marketing.
      </h2>
      <a href="mailto:darshanp.digitalmarketing@gmail.com" class="underline text-2xl text-blue-600 font-work_sans">📧
        Mail.</a>
    </div>
    <div class="w-5/12 pr-28">
      <div class="flex flex-wrap justify-end gap-2">
        <button class="bg-gray-700 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
          <svg class="w-4 h-4 md:w-10 md:h-10 lg:w-10 lg:h-10 xl:h-10 xl:w-10 fill-current" role="img"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </button>

        <button class="bg-gray-700 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
          <svg class="w-4 h-4 md:w-10 md:h-10 lg:w-10 lg:h-10 xl:h-10 xl:w-10 fill-current" role="img"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
          </svg>
        </button>

        <button class="bg-gray-700 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
          <svg class="w-4 h-4 md:w-10 md:h-10 lg:w-10 lg:h-10 xl:h-10 xl:w-10 fill-current" role="img"
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
          </svg>
        </button>

        <button class="bg-gray-700 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
          <svg class="w-4 h-4 md:w-10 md:h-10 lg:w-10 lg:h-10 xl:h-10 xl:w-10 fill-current" role="img"
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
          </svg>
        </button>

        <a target="_blank" href="https://in.linkedin.com/in/paramar-darshan/"
          class="bg-gray-700 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
          <svg class="w-4 h-4 md:w-10 md:h-10 lg:w-10 lg:h-10 xl:h-10 xl:w-10 fill-current" role="img"
            viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
            <g>
              <path
                d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055">
              </path>
            </g>
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        showMenu: false,
      }
    },
  }
</script>
<style scoped>
.carousel {
  scroll-snap-type: x mandatory;
  overflow-x: hidden;
  overflow: hidden;
  display: flex;
  scroll-behavior: smooth;
}

.carousel-item {
  flex: none;
  scroll-snap-align: start;
}
</style>
