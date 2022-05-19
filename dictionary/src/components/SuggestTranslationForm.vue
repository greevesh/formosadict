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
            @input="validateTraditionalInputField"
            :value="inputFields.traditional"
            type="text"
            class="form__input"
            :class="[
              inputFields.traditional !== '' && errorStates.traditional
                ? 'form__input--error'
                : '',
            ]"
            placeholder="電腦"
            required
          /><br />
          <label class="form__label">Simplified</label><br />
          <input
            name="simplified"
            @input="validateSimplifiedInputField"
            :value="inputFields.simplified"
            type="text"
            class="form__input"
            :class="[
              inputFields.simplified !== '' && errorStates.simplified
                ? 'form__input--error'
                : '',
            ]"
            placeholder="电脑"
            required
          /><br />
          <label class="form__label">Pinyin</label><br />
          <input
            name="pinyin"
            @input="validatePinyinInputField"
            :value="inputFields.pinyin"
            type="text"
            class="form__input"
            :class="[
              inputFields.pinyin !== '' && errorStates.pinyin
                ? 'form__input--error'
                : '',
            ]"
            placeholder="diànnǎo"
            required
          /><br />
          <label class="form__label">English</label><br />
          <input
            name="english"
            @input="validateEnglishInputField"
            :value="inputFields.english"
            type="text"
            class="form__input"
            :class="[
              inputFields.english !== '' && errorStates.english
                ? 'form__input--error'
                : '',
            ]"
            placeholder="computer"
            required
          /><br />
          <p
            class="form__error-message"
            v-if="errorStates.traditional || errorStates.simplified"
          >
            {{ errorMessages.latinCharacters }}
          </p>
          <p
            class="form__error-message"
            v-if="errorStates.pinyin || errorStates.pinyin"
          >
            {{ errorMessages.noLatinCharacters }}
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

const inputFields = reactive({
  traditional: "",
  simplified: "",
  pinyin: "",
  english: "",
});

const errorStates = reactive({
  traditional: false,
  simplified: false,
  pinyin: false,
  english: false,
});

const errorMessages = reactive({
  latinCharacters: "",
  noLatinCharacters: "",
});

let isDisabled = ref(true);
let error = ref(false);
let submissionReady = ref(false);
let submitted = ref(false);

let errorMsg = ref("");
const submittedMsg =
  "Your suggested translation has been sent. It will be reviewed shortly!";

const validateTraditionalInputField = (input) => {
  const latinCharacters = /^[A-Za-z0-9]*$/.test(input.target.value);
  inputFields.traditional = input.target.value;
  if (latinCharacters && inputFields.traditional !== "") {
    errorStates.traditional = true;
    errorMessages.latinCharacters =
      "Please don't type latin characters in the Chinese input fields.";
  } else if (inputFields.traditional === "" || !latinCharacters) {
    errorStates.traditional = false;
    errorMessages.latinCharacters = "";
  }
};

const validateSimplifiedInputField = (input) => {
  const latinCharacters = /^[A-Za-z0-9]*$/.test(input.target.value);
  inputFields.simplified = input.target.value;
  if (latinCharacters && inputFields.simplified !== "") {
    errorStates.simplified = true;
    errorMessages.latinCharacters =
      "Please don't type latin characters in the Chinese input fields.";
  } else if (inputFields.simplified === "" || !latinCharacters) {
    errorStates.simplified = false;
    errorMessages.latinCharacters = "";
  }
};

const validatePinyinInputField = (input) => {
  const latinCharacters = /^[A-Za-z0-9]*$/.test(input.target.value);
  inputFields.pinyin = input.target.value;
  if (!latinCharacters && inputFields.pinyin !== "") {
    errorStates.pinyin = true;
    errorMessages.noLatinCharacters =
      "Please only type latin characters in the Pinyin and English input fields.";
  } else if (inputFields.pinyin === "" || latinCharacters) {
    errorStates.pinyin = false;
    errorMessages.noLatinCharacters = "";
  }
};

const validateEnglishInputField = (input) => {
  const latinCharacters = /^[A-Za-z0-9]*$/.test(input.target.value);
  inputFields.english = input.target.value;
  if (!latinCharacters && inputFields.english !== "") {
    errorStates.english = true;
    errorMessages.noLatinCharacters =
      "Please only type latin characters in the Pinyin and English input fields.";
  } else if (inputFields.english === "" || latinCharacters) {
    errorStates.english = false;
    errorMessages.noLatinCharacters = "";
  }
};

const checkForLatinChars = (input) => {
  const latinCharacters = /^[A-Za-z0-9]*$/.test(input.target.value);
  if (!latinCharacters) {
    error.value = true;
    errorMsg.value =
      "Please only type latin characters in the Pinyin and English input fields.";
  } else if (input.target.value === "" || latinCharacters) {
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

  &__input--error,
  &__input--error:focus {
    border: 2px #d8000c solid;
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
