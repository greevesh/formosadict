<template>
  <div id="suggest-form" class="form">
    <section class="form__container">
      <h2 class="form__header">Suggest a Translation 📘</h2>
      <p class="form__paragraph">
        Please follow the format of the input placeholders
      </p>
      <div>
        <form ref="form" @submit.prevent.once="sendEmail">
          <label class="form__label">Traditional</label><br />
          <input
            name="traditional"
            @input="setTraditional"
            :value="traditional"
            type="text"
            class="form__input"
            placeholder="電腦"
            required
          /><br />
          <label class="form__label">Simplified</label><br />
          <input
            name="simplified"
            @input="setSimplified"
            :value="simplified"
            type="text"
            class="form__input"
            placeholder="电脑"
            required
          /><br />
          <label class="form__label">Pinyin</label><br />
          <input
            name="pinyin"
            @input="setPinyin"
            :value="pinyin"
            type="text"
            class="form__input"
            placeholder="diànnǎo"
            required
          /><br />
          <label class="form__label">English</label><br />
          <input
            name="english"
            @input="setEnglish"
            :value="english"
            type="text"
            class="form__input"
            placeholder="computer"
            required
          /><br />
          <p class="form__error-message" v-if="error">{{ errorMessage }}</p>
          <p class="form__success-message" v-else-if="valid">
            {{ validMessage }}
          </p>
          <p class="form__success-message" v-else-if="submitted">
            {{ formSubmittedMessage }}
          </p>

          <button type="submit" value="Submit" class="form__btn">
            Suggest
          </button>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import emailjs from "@emailjs/browser";

export default {
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  data() {
    return {
      traditional: "",
      simplified: "",
      pinyin: "",
      english: "",
      isDisabled: true,
    };
  },
  validations() {
    return {
      traditional: { required },
      simplified: { required },
      pinyin: { required },
      english: { required },
    };
  },
  messages() {
    return {
      invalid: {
        error: false,
        errorMessage: "",
      },
      valid: {
        valid: false,
        validMessage: "",
      },
      formStatus: {
        submitted: false,
        formSubmittedMessage: "",
      },
    };
  },
  methods: {
    checkForLatinChars($event) {
      const latinCharacters = /^[A-Za-z0-9]*$/.test($event.target.value);
      if (!latinCharacters) {
        this.error = true;
        this.errorMessage =
          "Please only type latin characters in the Pinyin and English inputs. 🙎";
      }
    },
    checkAgainstLatinChars($event) {
      const latinCharacters = /^[A-Za-z0-9]*$/.test($event.target.value);
      if (latinCharacters) {
        this.error = true;
        this.errorMessage =
          "Please don't type latin characters in the Chinese inputs. 🙎";
        console.log(this.errorMessage);
      } else if ($event.target.value === "") {
        this.error = false;
        this.errorMessage = "";
      }
    },
    falsifyError(input) {
      if (input === "") {
        this.error = false;
      }
    },
    confirm(input) {
      if (input !== "") {
        this.valid = true;
        this.validMessage = "All good so far! 👌";
        console.log(this.validMessage);
      } else if (input === "" && this.error === false) {
        this.valid = false;
      }
    },
    setTraditional($event) {
      this.traditional = $event.target.value;
      this.v$.traditional.$touch();
      this.checkAgainstLatinChars($event);
      this.falsifyError(this.traditional);
      this.confirm(this.traditional);
    },
    setSimplified($event) {
      this.simplified = $event.target.value;
      this.v$.simplified.$touch();
      this.checkAgainstLatinChars($event);
      this.falsifyError(this.simplified);
      this.confirm(this.simplified);
    },
    setPinyin($event) {
      this.pinyin = $event.target.value;
      this.v$.pinyin.$touch();
      this.checkForLatinChars($event);
      this.falsifyError(this.pinyin);
      this.confirm(this.pinyin);
    },
    setEnglish($event) {
      this.english = $event.target.value;
      this.v$.english.$touch();
      this.checkForLatinChars($event);
      this.falsifyError(this.english);
      this.confirm(this.english);
    },
    sendEmail() {
      emailjs
        .sendForm(
          "service_tfsl6fy",
          "template_y9i14r9",
          this.$refs.form,
          "MSRjmXN5q5SR9tq8I"
        )
        .then(() => {
          this.$refs.form.reset();
          this.valid = false;
          this.submitted = true;
          this.formSubmittedMessage =
            "Your suggested translation has been sent. It will be reviewed shortly!";
        });
    },
    // isDisabled() {
    //   if (!this.error && !this.valid) {
    //     return true;
    //   }
    // },
    logStatus() {
      console.log(this.isDisabled);
    },
  },
};
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
    outline: none;
    border-color: $main-color;
  }

  &__btn {
    margin-top: 20px;

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

  &__error-message {
    color: #d8000c;
  }

  &__success-message {
    color: #0c6425;
  }
}
</style>
