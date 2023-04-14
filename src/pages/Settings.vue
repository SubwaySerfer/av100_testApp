<template>
  <!-- <main-layout>
    </main-layout
  > -->
  <div>
    <div>
      <h1>Настройки</h1>
      <sip-calls></sip-calls>
      <button><span>Сохранить</span></button>
    </div>
  </div>
</template>

<script>
// import MainLayout from "../layouts/Main.vue";
import SipCalls from "../components/SipCalls.vue";

export default {
  name: "AvSettings",
  components: {
    // MainLayout
    SipCalls
  }
};
</script>
<style>
html {
  font-size: 62.5%;
}
body {
  margin: 0;
}
.settings_container {
  display: flex;
  padding-left: 15px;
  flex-direction: row;
  justify-content: start;
  align-items: start;
  gap: 20px;
}

.settings_font {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 21px;
  color: #686869;
}
.settings_h2 {
  color: #000;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  font-size: 1.5rem;
  line-height: 27px;
  font-weight: 600px;
  width: 250px;
}
</style>
