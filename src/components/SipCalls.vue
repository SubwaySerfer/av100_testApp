<template>
  <div class="sip_container wrapper">
    <div class="settings_h2 sip_content">
      <h2 class="sip_h2">Звонок через SIP</h2>
      <div class="sip_radio">
        <div class="sip_off"></div>
        <div class="sip_on"></div>
      </div>
    </div>

    <p class="settings_font sip_text">
      Включите эту функцию чтобы Авито и другие площадки не блокировали ваш
      аккаунт. Будет выглядеть так, будто звонки совершаются с разных номеров.
    </p>
  </div>
</template>

<script>
export default {
  name: "AvSipCalls"
};
</script>

<style scoped>
.sip_container {
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: start;
  align-items: center;
}
.sip_content {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
}
.sip_text {
  width: 490px;
}
.sip_h2 {
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 27px;
}
.sip_radio {
  width: 3rem;
  height: 1.6rem;
  border: solid 0.2rem #bababa;
  border-radius: 25px;
  box-sizing: border-box;
  position: relative;
}
.sip_on {
  width: 1.6rem;
  height: 1.6rem;
  background: #bababa;
  border-radius: 100px;
  position: absolute;
  top: -1px;
  left: -1px;
}
</style>
