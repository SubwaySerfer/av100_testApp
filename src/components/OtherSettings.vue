<template>
  <div class="settings_container">
    <h2 class="settings_h2">Прочие настройки</h2>
    <div class="content_width">
      <div>
        <div class="time_content">
          <label for="city" class="city_label">Часовой <br />пояс</label>
          <input
            placeholder="Москва"
            name="city"
            type="text"
            class="time_input"
            autocomplete="off"
            spellcheck="false"
            tabindex="0"
            aria-controls="listbox-null"
            readonly
          />
        </div>

        <fieldset class="other_fieldset">
          <div class="other_inp_box">
            <input
              type="checkbox"
              id="autoBlink"
              name="autoBlink"
              class="other_cards_inp"
              checked
            />
            <label for="autoBlink"
              >Автоматически переходить к новым объявлениям</label
            >
          </div>

          <div class="other_inp_box">
            <!-- <input
              type="checkbox"
              id="onColor"
              name="onColor"
              class="other_cards_inp"
            /> -->
            <label for="onColor" class="label_other"
              >Включить цвета в ленте</label
            >
          </div>
        </fieldset>
        <button><span>Сохранить</span></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AvOtherSettings"
};
</script>

<style></style>
<style scoped>
.city_label {
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 16px;
  width: 83px;
}
.time_content {
  display: flex;
  flex-direction: row;
  gap: 20px;
  height: 32px;
}
.time_input {
  box-sizing: border-box;
  width: 194px;
  padding: 0 40px 0 10px;
  height: 26.5px;
  letter-spacing: 0.06em;
  border: 1px solid #e1e1e3;
}
.time_input:hover {
  cursor: pointer;
  border: 1px solid #2dc574;
}

.other_cards_inp {
  border: 1px solid #2dc574;
}
.other_cards_inp:checked {
  accent-color: #2dc574;
}

.other_fieldset {
  border: none;
  margin-top: 20px;
}
.label_other::before {
  border: 1px solid #2dc574;
  border-radius: 0.2rem;
  height: 13px;
  width: 13px;
  position: absolute;
  left: 0;
  content: "";
}
.label_other {
  padding-left: 20px;
}
.other_inp_box {
  margin-bottom: 20px;
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.2;
  position: relative;
}
</style>
