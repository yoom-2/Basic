<template>
  <aricle class="the-app-bar">
    <!-- Start: 플로팅 버튼 -->
    <div class="the-app-bar__utility">
      <div class="circle top" @click="scrollToTop"></div>
      <div class="circle chatting" @click="connectChat"></div>
    </div>
    <!-- End: 플로팅 버튼 -->

    <!-- Start: 하단바 Nav-->
    <nav class="the-app-bar__nav">
      <ul class="list-style-none">
        <li>
          <span class="nav-icon" role="button" @click="isMenuOpen = true">
            <img
              src="@assets.mobile/img/icon/icon-menu-black-28px.svg"
              alt="메뉴"
            />
          </span>
          <span class="nav-text">Menu</span>
        </li>
        <li>
          <router-link to="/" class="nav-icon">
            <img
              src="@assets.mobile/img/icon/icon-home-black-28px.svg"
              alt="홈"
            />
            <span class="nav-text">Home</span>
          </router-link>
        </li>
        <li>
          <rotuer-link to="/shop">
            <img
              src="@assets.mobile/img/icon/icon-bag-black-28px.svg"
              alt="상품"
            />
          </rotuer-link>
          <span class="nav-text">Shop</span>
        </li>
        <li>
          <span class="nav-icon">
            <img
              src="@assets.mobile/img/icon/icon-heart-black-28px.svg"
              alt="찜하기"
            />
            <span class="nav-text">Like</span>
          </span>
        </li>
        <li>
          <span class="nav-icon">
            <img
              src="@assets.mobile/img/icon/icon-user-black-28px.svg"
              alt="내 정보"
            />
            <span class="nav-text">My</span>
          </span>
        </li>
      </ul>
    </nav>
    <!-- End: 하단바 Nav -->

    <!-- Start: 모바일 메뉴 -->
    <section class="the-side-bar" v-show="isMenuOpen">
      <header class="the-side-bar__header">
        <div class="header-button-group">
          <i class="button-icon" role="button">
            <img
              src="@assets.mobile/img/icon/icon-bell-black-20px.svg"
              alt="알림"
            />
          </i>
          <i class="button-icon" role="button">
            <img
              src="@assets.mobile/img/icon/icon-setting-black-20px.svg"
              alt="설정"
            />
          </i>
          <i class="button-icon" role="button">
            <img
              src="@assets.mobile/img/icon/icon-close-black-20px.svg"
              alt="닫기"
            />
          </i>
        </div>
      </header>

      <div class="container">
        <nav class="gnb">
          <ul class="gnb__ul list-style-none">
            <li v-for="(list, index) in gnb" :key="index">
              <div class="gnb__item">
                <h1 class="item__title">
                  <router-link :to="list.to">{{ list.title }}</router-link>
                  <i class="item__icon" v-b-toggle="`accordion-${index}`"></i>
                </h1>
                <b-collapse
                  :id="`accordion-${index}`"
                  accordion="gnb-accordion"
                >
                  <ul class="gnb__sub-menu list-style-none">
                    <li v-for="(subList, index) in list.subMenu" :key="index">
                      <router-link
                        :to="subList.to"
                        :class="{ active: subList.point }"
                      >

                      </router-link>
                    </li>
                  </ul>


                </b-collapse>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  </aricle>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      gnb: [

      ]
    }
  }
}
</script>