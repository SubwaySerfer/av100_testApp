<template>
  <div class="settings_container">
    <div class="settings_h2">
      <h2>Звонок через SIP</h2>
      <div>icon</div>
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
  align-items: start;
}
.sip_text {
  width: 490px;
}
</style>
