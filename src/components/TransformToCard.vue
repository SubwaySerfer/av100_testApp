<template>
  <div class="settings_container">
    <h2 class="settings_h2">Переход в карточку</h2>
    <div class="content_width">
      <p class="settings_font">
        Выберите, каким образом будет открываться детальное представление
        выбранного вами транспорта.
      </p>
      <form method="post">
        <fieldset class="push_form">
          <label class="transform_label"
            ><input type="radio" name="radio" value="inWindow" />В карточку в
            текущем окне</label
          >
          <label class="transform_label"
            ><input type="radio" name="radio" value="outWindow" />В карточку в
            отдельном окне</label
          ><label class="transform_label"
            ><input type="radio" name="radio" value="toSource" />На
            источник</label
          >
        </fieldset>
      </form>
    </div>
  </div></template
>

<script>
export default {
  name: "AvTransToCard"
};
</script>

<style></style>

<style scoped>
fieldset {
  margin-top: 1.6rem;
}

.transform_label:not(:last-child) {
  border-bottom: 1px solid #e1e1e3;
  margin-bottom: 1.2rem;
  padding-bottom: 1.2rem;
}
.transform_label {
  font-size: 1.4rem;
  cursor: pointer;
  display: inline-block;
}
input {
  margin-right: 5px;
}
</style>
