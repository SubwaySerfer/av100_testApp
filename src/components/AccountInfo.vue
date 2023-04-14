<template>
  <div class="settings_container">
    <div class="settings_h2"><h2>Учётная запись</h2></div>
    <div>
      <form action="" method="get">
        <div>
          <label for="company">Компания</label>
          <input
            type="text"
            name="company"
            id="company"
            placeholder="Частное лицо"
            required
          />
        </div>
        <div>
          <label for="login">Логин</label>
          <input type="text" name="login" id="login" required />
        </div>
        <div>
          <label for="phoneNum">Номер телефона</label>
          <input type="text" name="phoneNum" id="phoneNum" required />
        </div>
        <div>
          <label for="name">Имя</label>
          <input type="text" name="name" id="name" required />
        </div>
        <div>
          <label for="surname">Фамилия</label>
          <input type="text" name="surname" id="surname" required />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default { name: "AvAccountInfo" };
</script>

<style></style>
