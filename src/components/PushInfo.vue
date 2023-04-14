<template>
  <div>
    <h2>Оповещения о новых подборках</h2>
    <div>
      <p>
        Выберите, куда будут приходить уведомления при появлении автомобилей,
        которые подходят под критерии вашей подборки.
      </p>
      <form method="post">
        <fieldset>
          <legend>Уведомления</legend>
          <label><input type="radio" name="radio" value="no" /> Выкл</label>
          <label><input type="radio" name="radio" value="push" />Push</label
          ><label><input type="radio" name="radio" value="email" />Email</label
          ><label
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

<style></style>
