<p align="center">
  <img src="https://raw.githubusercontent.com/carolxiaoching/msc-user-frontend/refs/heads/main/src/assets/images/logo.svg" alt="logo" width="300">
</p>

<h1 align="center">我的秘密食譜</h1>

<p align="center">
  <strong>
  ⭐ 此為「我的秘密食譜」的前端前台 ⭐
  </strong>
</p>

<p align="center">
  <a href="https://carolxiaoching.github.io/msc-user-frontend/#/">
  👉 查看 Demo
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/vue_3-brightgreen?style=for-the-badge&logo=vuedotjs&logoColor=white&color=4FC08D">
  <img src="https://img.shields.io/badge/bootstrap_5-brightgreen?style=for-the-badge&logo=bootstrap&logoColor=white&color=7952B3">
  <img src="https://img.shields.io/badge/vite-brightgreen?style=for-the-badge&logo=vite&logoColor=white&color=646CFF">
</p>

## 📒 專案簡介

「我的秘密食譜」是一個為想記錄料理過程與靈感的人打造的分享平台，透過分類、標籤與收藏功能，讓使用者可以更方便地管理與探索喜愛的食譜，且網站支援 RWD 響應式設計，無論是手機、平板還是電腦，都能擁有良好的瀏覽體驗。

本專案除了專注於打造實用的食譜平台，也作為我學習 Vue3 與前後端整合的成果展示。

## 🧑‍💻 關於開發者動機與心得

### 💭 為什麼會做這個網站？

雖然我不擅長做菜，但為了健康和省錢，開始學著自己下廚，在這個過程中，我一直找不到一個好用的平台，能讓我記錄私人食譜、標註營養資訊，還能簡單管理分類與收藏。
於是我決定動手打造一個以「好看、好找、好用」為核心理念的料理社群網站。
不管你是剛入門的新手，還是經驗豐富的料理人，都能在這裡記錄靈感、分享成果，享受料理的樂趣與成就感。

### 🙌 我的學習與成長

這是由個人獨立完成的 Vue3 作品，從 UI 設計、功能開發、API 串接到部署皆親自實作
在開發過程中，我熟悉了：

- Vue3 組件化開發與模組架構設計
- 使用 Pinia + Axios 管理資料流程
- 實作拖曳排序（Vue Draggable）
- 使用 WebP 圖片 + Lazy Load 提升效能
- 表單驗證（Vee-Validate）

希望這份作品除了展現技術實力，也傳遞出我對料理創作的溫度與熱情

## ✨ 主要功能

- 📝 建立 / 編輯食譜（可選擇分類、標籤，記錄營養成分，是否公開）
- 🔍 多種搜尋與排序（依分類、標籤、關鍵字、收藏數量）
- ❤️ 收藏喜愛的食譜
- 🙋‍♀️ 會員功能（可編輯個人資料、頭像、修改密碼）
- 🔐 忘記密碼時，可透過系統發送的驗證 Email 重設密碼

## 💡 特色

- 🧩 支援拖曳調整步驟 / 食材順序（Vue-Draggable）
- 🖼️ 使用 WebP 圖片 + Lazy Load（提升效能）
- 📄 表單驗證（Vee-Validate）
- 🎞️ 輪播推薦食譜（Swiper）
- 🔄 加載動畫效果（Vue-Loading-Overlay）
- 📱 RWD 響應式設計 + Bootstrap Icons

## 🛠️ 使用技術

| 分類     | 技術                                                                                         |
| -------- | -------------------------------------------------------------------------------------------- |
| 前端框架 | [Vue 3](https://vuejs.org/)、[Vite](https://vitejs.dev/)                                     |
| UI       | [Bootstrap 5](https://getbootstrap.com/)、[Bootstrap Icons](https://icons.getbootstrap.com/) |
| 狀態管理 | [Pinia](https://pinia.vuejs.org/)                                                            |
| API 請求 | [Axios](https://axios-http.com/)、[Vue-Axios](https://github.com/axios/axios)                |
| 表單驗證 | [Vee-Validate](https://vee-validate.logaretm.com/)                                           |
| 排序拖曳 | [Vue-Draggable](https://github.com/SortableJS/Vue.Draggable)                                 |
| 圖片優化 | [vue-lazyload](https://www.npmjs.com/package/vue-lazyload)                                   |
| 輪播     | [Swiper](https://swiperjs.com/)                                                              |
| 加載動畫 | [Vue-Loading-Overlay](https://github.com/ankurk91/vue-loading-overlay)                       |
| 格式工具 | [Prettier](https://prettier.io/)、[ESLint](https://eslint.org/)                              |
| 部署     | [gh-pages](https://github.com/tschaub/gh-pages)                                              |

## 📦 安裝與執行

```bash
# 1. 複製專案
git clone https://github.com/carolxiaoching/msc-user-frontend.git

# 2. 安裝依賴
cd msc-user-frontend
npm install

# 3. 啟動開發伺服器
npm run dev

# 4. 編譯建構
npm run build

# 5. 部署到 GitHub Pages
npm run deploy
```

## 🔐 使用者權限概覽

以下表格說明訪客與會員的功能差異：

| 頁面                        | 訪客                  | 會員                              |
| --------------------------- | --------------------- | --------------------------------- |
| 首頁、食譜列表、食譜詳細頁  | ✅                    | ✅                                |
| 註冊、登入、忘記密碼        | ✅                    | ✅                                |
| QA 頁面、關於我們、聯絡我們 | ✅                    | ✅                                |
| 編輯食譜、會員設定          | ❌                    | ✅                                |
| 會員頁面                    | ✅ （僅查看公開食譜） | ✅ （可查看本人的私人食譜與收藏） |

## 📸 頁面展示

### 🏠 首頁

推薦食譜輪播、網站特色介紹、分類、標籤、熱門與最新食譜展示、訂閱電子報

![首頁](https://i.imgur.com/M5B0I7N.gif)

### 📖 食譜列表

支援多種搜尋方式，收藏、分頁等功能

![食譜列表](https://i.imgur.com/F2aiah1.png)

### 🍽️ 食譜詳細頁

食譜完整內容、相關推薦食譜

![食譜詳細頁](https://imgur.com/DAQCisW.png)

### ✏️ 編輯食譜頁面

可新增 / 編輯食譜，支援拖曳食材與步驟排序，可自行選擇分類與標籤

![編輯食譜頁面](https://imgur.com/fQNXGqQ.png)

### 👤 會員頁面

會員資料與公開食譜一覽 (若為會員本人頁面，則選單可查看本人的私人食譜、收藏食譜)

![會員頁面](https://imgur.com/HwbrtcB.png)

### 🔧 會員設定

修改個人資訊、變更密碼、上傳頭像

![會員設定](https://imgur.com/L037vRT.png)

### ❓ QA 與 📞 聯絡我們

常見問題、隱私權政策、服務條款

![QA 頁面](https://imgur.com/e32O2tZ.png)

秘密食譜聯絡資料展示，留言表單驗證

![聯絡我們](https://imgur.com/bnlmQiJ.png)

### ℹ️ 關於我們

網站願景、誕生背景與里程碑故事

![關於我們](https://imgur.com/X3VWh2Z.png)

### 🔐 註冊 / 登入 / 重設密碼

註冊與登入

![註冊與登入頁面](https://imgur.com/EFd7kjX.png)

若忘記密碼，輸入 Email 後系統會寄送驗證信件，會員可透過信中連結重設新密碼

![忘記密碼與重設密碼頁面](https://imgur.com/YnlHzSU.png)

## 📁 專案結構

| 專案     | 連結                                                                                                                                        |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| 前端前台 | [GitHub Repo](https://github.com/carolxiaoching/msc-user-frontend) 🌞 [Demo](https://carolxiaoching.github.io/msc-user-frontend/#/)         |
| 前端後台 | [GitHub Repo](https://github.com/carolxiaoching/msc-admin-frontend) 🌞 [Demo](https://carolxiaoching.github.io/msc-admin-frontend/#/signin) |
| 後端     | [GitHub Repo](https://github.com/carolxiaoching/msc-backend)                                                                                |

## 📷 圖片來源

- [svgrepo](https://www.svgrepo.com/)
- [pixabay](https://pixabay.com/zh/)
- [unsplash](https://unsplash.com/)

## 📌 備註

本專案僅作為學習與展示用途，無任何商業營利行為
