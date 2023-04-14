<template>
  <!-- <main-layout>
    </main-layout
  > -->
  <div>
    <div class="content_container">
      <h1>Настройки</h1>
      <sip-calls></sip-calls>
      <account-info></account-info>
      <push-info></push-info>
      <transform-to-card></transform-to-card>
      <other-settings></other-settings>
    </div>
  </div>
</template>

<script>
import SipCalls from "../components/SipCalls";
import AccountInfo from "../components/AccountInfo";
import PushInfo from "../components/PushInfo";
import TransformToCard from "../components/TransformToCard";
import OtherSettings from "../components/OtherSettings";

export default {
  name: "AvSettings",
  components: {
    SipCalls,
    AccountInfo,
    PushInfo,
    TransformToCard,
    OtherSettings
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
.content_container {
  display: flex;
  flex-direction: column;
}

.settings_container {
  display: flex;
  padding-left: 15px;
  flex-direction: row;
  justify-content: start;
  align-items: start;
  gap: 20px;
}

.settings_h2 {
  color: #000;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  font-size: 1.5rem;
  line-height: 27px;
  font-weight: 600px;
  width: 250px;
}

.settings_font {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 21px;
  color: #686869;
}
</style>
<style scoped>
h1,
h2 {
  margin: 0;
}
</style>
