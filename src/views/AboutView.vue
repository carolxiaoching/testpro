<template>
  <div class="row align-items-center">
    <div class="col-12 py-8">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/">首頁</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">關於秘密</li>
        </ol>
      </nav>
    </div>

    <div class="d-none d-xl-block col-5 mb-16">
      <img v-lazy="aboutBornImg" class="w-100 h-100 rounded-2 object-fit-cover" />
    </div>
    <div class="col-12 col-xl-7 mb-16">
      <div class="aboutBorn backgroundCover h-100 p-8 p-md-14 p-xl-0 rounded-2">
        <div class="aboutMask p-14 p-md-16 rounded-2">
          <h2 class="mb-11 h3 text-center">「我的秘密食譜」的誕生</h2>
          <p class="textLs mb-11 text-muted">
            每道特別的料理背後，總有一段動人的故事，或許來自家族的傳承，或許是旅行中的靈感，抑或是自創的巧思搭配。這些獨一無二的味道承載著幸福與回憶，而我們希望將它們分享給更多人，於是「我的秘密食譜」誕生了。
          </p>
          <p class="textLs text-muted">
            這是一個料理愛好者的分享平台，鼓勵大家公開那些珍藏的私房食譜，讓它們從個人回憶化為眾人共享的幸福。透過這裡，您不僅能展現料理創意，也能汲取他人分享的靈感，讓更多美味成為溫暖的故事，傳遞給每一位熱愛料理的人。
          </p>
        </div>
      </div>
    </div>

    <div class="col-12 col-xl-7 mb-16 mb-md-18">
      <div class="aboutVision backgroundCover h-100 p-8 p-md-14 p-xl-0 rounded-2">
        <div class="aboutMask p-14 p-md-16 rounded-2">
          <h2 class="mb-11 h3 text-center">我們的願景</h2>
          <p class="textLs mb-11 text-muted">
            「我的秘密食譜」致力於打造一個共享美味靈感的數位廚房，讓世界各地的料理愛好者能夠交流和發掘私房美味。我們相信，每道料理背後都藏有故事，而每位分享者的熱情，成就了更豐富的飲食文化。
          </p>
          <p class="textLs text-muted">
            透過這個平台，我們希望大家不僅能享受美味佳餚，更能感受到料理的力量與溫度。讓每份分享成為一段傳遞幸福的旅程，將熱愛烹飪的心連結在一起。
          </p>
        </div>
      </div>
    </div>

    <div class="d-none d-xl-block col-5 mb-18">
      <img v-lazy="aboutVisionImg" class="w-100 h-100 rounded-2 object-fit-cover" />
    </div>

    <div class="col-12 mb-16">
      <h2 class="title justify-content-lg-start mb-11">
        <span class="titleIcon bg-secondary-subtle">
          <i class="bi bi-people-fill"></i>
        </span>
        <span> 大記事 </span>
      </h2>

      <div class="timeline mx-auto">
        <ul class="timelineList list-unstyled position-relative py-8">
          <li
            class="timelineItem d-flex align-items-center"
            v-for="(yearData, timelineIndex) in timeline"
            :key="`timeline${timelineIndex}`"
          >
            <div
              class="timelineYear mb-8 mb-lg-0 bg-secondary rounded-4 text-center text-white fw-bold"
            >
              {{ yearData.year }}
            </div>
            <div class="timelineContent">
              <div
                class="timelineEvent p-11 bg-white rounded shadow-sm"
                v-for="(event, eventIndex) in yearData.events"
                :key="`event${eventIndex}`"
              >
                <h4 class="mb-8 text-center h5">{{ yearData.year }}年{{ event.month }}月</h4>
                <p class="text-muted">{{ event.description }}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import aboutBornImg from '@/assets/images/about-born.webp';
import aboutVisionImg from '@/assets/images/about-vision.webp';

const timeline = ref([
  {
    year: 2024,
    events: [{ month: 10, description: '品牌誕生，確立「我的秘密食譜」網站的名稱及理念。' }],
  },
  {
    year: 2025,
    events: [
      { month: 1, description: '網站正式上線，開放會員註冊，並提供訪客模式瀏覽功能。' },
      {
        month: 5,
        description: '網站上線後迅速獲得料理愛好者的支持，首月累積超過1,000位會員。',
      },
      {
        month: 8,
        description: '獲得「最佳新創美食平台獎」，被評為年度最具創意的美食分享平台。',
      },
    ],
  },
  {
    year: 2026,
    events: [
      {
        month: 2,
        description: '被列入「年度最佳社群平台」推薦榜單，並榮獲「優質用戶體驗設計獎。」',
      },
      {
        month: 8,
        description: '與知名美食媒體合作，推出「家傳味道系列」，鼓勵更多人分享家族傳承的料理故事。',
      },
    ],
  },
]);
</script>
