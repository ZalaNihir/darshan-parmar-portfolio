<!-- src/components/Carousel.vue -->
<template>
  <div class="carousel w-full">
    <div id="slide1" class="carousel-item relative w-full">
      <img src="https://picsum.photos/800/300?1" class="w-full" />
      <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide4" class="btn btn-circle">❮</a>
        <a href="#slide2" class="btn btn-circle">❯</a>
      </div>
    </div> 
    <div id="slide2" class="carousel-item relative w-full">
      <img src="https://picsum.photos/800/300?2" class="w-full" />
      <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide1" class="btn btn-circle">❮</a>
        <a href="#slide3" class="btn btn-circle">❯</a>
      </div>
    </div> 
    <div id="slide3" class="carousel-item relative w-full">
      <img src="https://picsum.photos/800/300?3" class="w-full" />
      <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide2" class="btn btn-circle">❮</a>
        <a href="#slide4" class="btn btn-circle">❯</a>
      </div>
    </div> 
    <div id="slide4" class="carousel-item relative w-full">
      <img src="https://picsum.photos/800/300?4" class="w-full" />
      <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide3" class="btn btn-circle">❮</a>
        <a href="#slide1" class="btn btn-circle">❯</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.carousel {
  scroll-snap-type: x mandatory;
  overflow-x: scroll;
  display: flex;
  scroll-behavior: smooth;
}
.carousel-item {
  flex: none;
  scroll-snap-align: start;
}
</style>
