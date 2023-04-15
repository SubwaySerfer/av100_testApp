<template>
  <div class="wrapper">
    <h2>Прочие настройки</h2>
    <div>
      <div>
        <p>Часовой пояс</p>
        <div>Москва</div>
        <fieldset>
          <div>
            <input type="checkbox" id="autoBlink" name="autoBlink" checked />
            <label for="autoBlink"
              >Автоматически переходить к новым объявлениям</label
            >
          </div>

          <div>
            <input type="checkbox" id="onColor" name="onColor" />
            <label for="onColor">Включить цвета в ленте</label>
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
