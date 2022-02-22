<template>
  <div class="wrap">
    <the-header :class="{ on: isHeaderFixed || onSubPage() }"/>
    <router-link :class="{ 'sub-page': onSubPage() }" />
    <the-footer />
  </div>
</template>

<style>
.sub-page {
  padding-top: 100px;
}
</style>