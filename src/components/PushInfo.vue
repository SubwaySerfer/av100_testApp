<template>
  <div class="settings_container push_section">
    <h2 class="settings_h2">
      Оповещения о новых<br />
      подборках
    </h2>
    <div class="content_width">
      <p class="settings_font">
        Выберите, куда будут приходить уведомления при появлении автомобилей,
        которые подходят под критерии вашей подборки.
      </p>
      <form method="post">
        <fieldset class="push_form">
          <legend class="push_legend">Уведомления</legend>
          <label class="push_label"
            ><input
              type="radio"
              name="radio"
              value="no"
              class="push_inp"
              checked
            />Выкл</label
          >
          <label class="push_label"
            ><input type="radio" name="radio" value="push" />Push</label
          ><label class="push_label"
            ><input type="radio" name="radio" value="email" />Email</label
          ><label class="push_label"
            ><input type="radio" name="radio" value="telegram" />Telegram
            ID</label
          >
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "AvPushInfo"
};
</script>

<style>
.content_width {
  width: 490px;
}

.push_form {
  display: flex;
  flex-direction: column;
  border: none;
  justify-content: space-between;
}
</style>
<style scoped>
.push_section {
  height: 230px;
}

.push_legend {
  margin-bottom: 2rem;
  font-size: 1.5rem;
  font-weight: 600;
}
.push_label {
  width: 370px;
  box-sizing: border-box;
  font-size: 1.4rem;
  cursor: pointer;
}
.push_label:not(:last-child) {
  border-bottom: 1px solid #e1e1e3;
  margin-bottom: 1.2rem;
  padding-bottom: 1.2rem;
}
input {
  margin-right: 5px;
}

fieldset {
  margin-top: 20px;
}
</style>
