<template>
  <div class="wrapper">
    <h2></h2>
    <div>
      <p>
        Выберите, каким образом будет открываться детальное представление
        выбранного вами транспорта.
      </p>
      <form method="post">
        <fieldset>
          <label
            ><input type="radio" name="radio" value="inWindow" />В карточку в
            текущем окне</label
          >
          <label
            ><input type="radio" name="radio" value="outWindow" />В карточку в
            отдельном окне</label
          ><label
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
