<template>
  <div class="settings_container account_section">
    <div><h2 class="settings_h2">Учётная запись</h2></div>
    <div class="form_account_container">
      <form action="" method="get">
        <div class="account_form_inp">
          <label for="company" class="account_info_text">Компания</label>
          <input
            type="text"
            name="company"
            class="form_inp"
            id="company"
            placeholder="Частное лицо"
            required
          />
        </div>
        <div class="account_form_inp">
          <label for="login" class="account_info_text">Логин</label>
          <input
            type="text"
            name="login"
            id="login"
            class="form_inp"
            required
          />
        </div>
        <div class="account_form_inp">
          <label for="phoneNum" class="account_info_text"
            >Номер <br />телефона</label
          >
          <input
            type="text"
            name="phoneNum"
            id="phoneNum"
            class="form_inp"
            required
          />
        </div>
        <div class="account_form_inp">
          <label for="name" class="account_info_text">Имя</label>
          <input type="text" name="name" id="name" class="form_inp" required />
        </div>
        <div class="account_form_inp">
          <label for="surname" class="account_info_text surname_label"
            >Фамилия</label
          >
          <div class="input_surname_box">
            <input
              type="text"
              name="surname"
              id="surname"
              class="form_inp"
              required
            />
            <small class="small_inp">* Не обязательно </small>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default { name: "AvAccountInfo" };
</script>

<style>
.account_form_inp {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.form_inp {
  box-sizing: border-box;
  border: 1px solid #e1e1e3;
  border-radius: 2px;
  padding: 13px 40px 13px 10px;
  flex: 1 0 auto;
}
</style>

<style scoped>
.account_section {
  height: 331px;
}
.form_account_container {
  width: 370px;
}
.account_info_text {
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 21px;
  color: #000;
  width: 120px;
  display: block;
  margin-right: 10px;
  word-break: break-all;
}
.surname_label {
  align-self: flex-start;
  padding-top: 10px;
}
.input_surname_box {
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
}
.small_inp {
  color: #a3a3a3;
  display: block;
  font-size: 1.2rem;
  margin-top: 0.5rem;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  font-weight: 400;
  line-height: 18px;
}
</style>
