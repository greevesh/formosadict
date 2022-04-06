<template>
    <div id="suggest-form" class="form">
            <section class="form__container">
              <h2 class="form__header">Suggest a Translation 📘</h2>
              <p class="form__paragraph">Please follow the format of the input placeholders if possible</p>
              <div>
                <form action="">
                  <label class="form__label" for="">Traditional</label><br>
                  <input type="text" class="form__input" placeholder="電腦" required><br>
                  <label class="form__label" for="">Simplified</label><br>
                  <input type="text" class="form__input" placeholder="电脑" required><br>
                  <label class="form__label" for="">Pinyin</label><br>
                  <input type="text" class="form__input" placeholder="Diànnǎo" required><br>
                  <label class="form__label" for="">Definition</label><br>
                  <input type="text" class="form__input" placeholder="computer" required><br>
                  <button class="form__btn">Suggest</button>
                </form>
              </div>
              
            </section>
          </div>          

</template>

<style lang="scss">
@import "./src/assets/styles/_variables.scss";

    .form {
    display: flex;
    justify-content: center;
  
    &__container {
      width: 45vw;
      height: 50vh;
      border-radius: 200px;
      padding-bottom: 10px;
    }
  
    &__header {
      margin-left: 29px;
    }
  
    &__paragraph {
      text-align: center;
    }
  
    &__container div {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
  
    &__label {
      margin-left: 12px;
    }
  
    &__input {
      padding: 5px;
      margin: 5px;
      height: 25px;
      font-size: 20px;
      border-radius: 500px;
      border: 2px #d7dbdb solid;
    }
  
    &__input:focus {
      border-color: #5cbbf6;
      caret-color: #2c3e50;
    }
  
    &__btn {
      margin-top: 20px;
      margin-left: 8px;
    //   background-color: $main-color;
      box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.1);
      border: none;
      font-size: 20px;
      font-weight: 500;
      padding: 7px;
      color: #fff;
    }
  
    &__btn:hover {
      cursor: pointer;
      background-color: #1d9bf0;
    }
  }

</style>