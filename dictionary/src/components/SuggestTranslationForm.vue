

<template>
    <div id="suggest-form" class="form">
            <section class="form__container">
              <h2 class="form__header">Suggest a Translation 📘</h2>
              <p class="form__paragraph">Please follow the format of the input placeholders</p>
              <div>
                <form action="">
                  <label class="form__label" for="">Traditional</label><br>
                  <input @input="setTraditional" :value="traditional" type="text" class="form__input" placeholder="電腦" required><br>
                  <label class="form__label" for="">Simplified</label><br>
                  <input @input="setSimplified" :value="simplified" type="text" class="form__input" placeholder="电脑" required><br>
                  <label class="form__label" for="">Pinyin</label><br>
                  <input @input="setPinyin" :value="pinyin" type="text" class="form__input" placeholder="Diànnǎo" required><br>
                  <label class="form__label" for="">English</label><br>
                  <input @input="setEnglish" :value="english" type="text" class="form__input" placeholder="computer" required><br>
                  <button class="form__btn">Suggest</button>
                </form>
              </div>
              
            </section>
          </div>          

</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'

export default {
  setup () {
    return {
      v$: useVuelidate()
    }
  },
  data () {
    return {
      traditional: '',
      simplified: '',
      pinyin: '',
      english: ''
    }
  },
  validations () {
    return {
      traditional: { required },
      simplified: { required},
      pinyin: { required },
      english: { required }
    }
  },
  methods: {
    checkForLatinChars ($event) {
        const latinCharacters = /^[A-Za-z0-9]*$/.test($event.target.value)
        if (!latinCharacters) {
            console.log('Please type latin characters here')
        }
    },
    checkAgainstLatinChars ($event) {
        const latinCharacters = /^[A-Za-z0-9]*$/.test($event.target.value)
        if (latinCharacters) {
            console.log(`Please don't type latin characters here`)
        }
    },
    setTraditional ($event) {
      // do some silly transformation
      this.traditional = $event.target.value
      this.v$.traditional.$touch()
      console.log(this.traditional)
      this.checkAgainstLatinChars($event)
    },
    setSimplified ($event) {
      // do some silly transformation
      this.simplified = $event.target.value
      this.v$.simplified.$touch()
    },
    setPinyin ($event) {
      // do some silly transformation
      this.pinyin = $event.target.value
      this.v$.pinyin.$touch()
    },
    setEnglish ($event) {
      // do some silly transformation
      this.english = $event.target.value
      this.v$.english.$touch()
      this.checkForLatinChars($event)
    },
  }
}
</script>

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
            text-align: center;
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
        background-color: $main-color;
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