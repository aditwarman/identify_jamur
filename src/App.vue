<template>
  <v-app>
    <v-app-bar app color="darknes">
      <v-toolbar-title class="headline text-uppercase">
        <span class="white--text">Aplikasi</span>
        <span class="font-weight-light white--text">IDENTIFIKASI JAMUR</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn :to="{name: 'home'}" text class="white--text">Home</v-btn>
        <v-btn :to="{name: 'identifikasi'}" text class="white--text">Identifikasi</v-btn>
        <v-btn text class="white--text">Tentang</v-btn>
        <v-btn text class="white--text">Tentang Pakar</v-btn>
        <v-btn text class="white--text">Kontak</v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-content>
      <!-- <HelloWorld/> -->
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  data: () => ({
    //
  }),
};
</script>
