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
            :value="state.traditional"
            type="text"
            class="form__input"
            placeholder="電腦"
            required
          /><br />
          <label class="form__label">Simplified</label><br />
          <input
            name="simplified"
            @input="setSimplified"
            :value="state.simplified"
            type="text"
            class="form__input"
            placeholder="电脑"
            required
          /><br />
          <label class="form__label">Pinyin</label><br />
          <input
            name="pinyin"
            @input="setPinyin"
            :value="state.pinyin"
            type="text"
            class="form__input"
            placeholder="diànnǎo"
            required
          /><br />
          <label class="form__label">English</label><br />
          <input
            name="english"
            @input="setEnglish"
            :value="state.english"
            type="text"
            class="form__input"
            placeholder="computer"
            required
          /><br />
          <p class="form__error-message" v-if="error">
            {{ errorMsg }}
          </p>
          <!-- <p class="form__success-message">
            {{ submittedMsg }}
          </p> -->
          <button
            :disabled="disabled"
            :class="[disabled ? 'form__btn--disabled' : 'form__btn']"
            type="submit"
            value="Submit"
          >
            Suggest
          </button>
        </form>
      </div>
    </section>
  </div>
</template>

<script setup>
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import emailjs from "@emailjs/browser";
import { reactive, ref, computed, nextTick } from "vue";

const state = reactive({
  traditional: "",
  simplified: "",
  pinyin: "",
  english: "",
});

let isDisabled = ref(true);
let error = ref(false);
let submissionReady = ref(false);
let submitted = ref(false);

let errorMsg = ref("");
const submittedMsg =
  "Your suggested translation has been sent. It will be reviewed shortly!";

const checkAgainstLatinChars = ($event) => {
  const latinCharacters = /^[A-Za-z0-9]*$/.test($event.target.value);
  if (latinCharacters && $event.target.value !== "") {
    error.value = true;
    errorMsg.value =
      "Please don't type latin characters in the Chinese inputs. 🙎";
  } else if ($event.target.value === "" || !latinCharacters) {
    error.value = false;
    errorMsg.value = "";
  }
};

const checkForLatinChars = ($event) => {
  const latinCharacters = /^[A-Za-z0-9]*$/.test($event.target.value);
  if (!latinCharacters) {
    error.value = true;
    errorMsg.value =
      "Please only type latin characters in the Pinyin and English inputs. 🙎";
  } else if ($event.target.value === "" || latinCharacters) {
    error.value = false;
    errorMsg.value = "";
  }
};

const setTraditional = ($event) => {
  state.traditional = $event.target.value;
  checkAgainstLatinChars($event);
};

const setSimplified = ($event) => {
  state.simplified = $event.target.value;
  checkAgainstLatinChars($event);
};

const setPinyin = ($event) => {
  state.pinyin = $event.target.value;
  checkForLatinChars($event);
};

const setEnglish = ($event) => {
  state.english = $event.target.value;
  checkForLatinChars($event);
};

const disabled = computed(
  () =>
    !state.traditional ||
    !state.simplified ||
    !state.pinyin ||
    !state.english ||
    error.value,
);

const submit = () => {
  if (submissionReady.value) {
    emailjs
      .sendForm(
        "service_tfsl6fy",
        "template_y9i14r9",
        $refs.form,
        "MSRjmXN5q5SR9tq8I",
      )
      .then(() => {
        $refs.form.reset();
        submitted = true;
      });
  }
};
</script>

<style lang="scss">
@import "./src/assets/styles/_variables.scss";

.disabledBtn {
  background-color: red;
}

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

  &__btn--disabled {
    margin-top: 20px;
    background-color: $main-color;
    box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.1);
    border: none;
    font-size: 20px;
    font-weight: 500;
    padding: 7px;
    color: #fff;
    opacity: 0.7;
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
