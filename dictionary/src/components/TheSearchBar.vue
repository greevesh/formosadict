<template>
    <div id="searchbox-container">
        <div id="searchbox"></div>
    </div>
</template>

<style lang="scss">
@import "./src/assets/styles/_variables.scss";

    #searchbox-container {
        display: flex;
        justify-content: center;
    }

    #searchbox {
        width: 50% !important;
    }

    // search icon
    .ais-SearchBox-form:before {
        margin-top: -4px;
    }

    .ais-SearchBox-input {
        font-size: 20px;
        height: 50px;
        border-radius: 500px;

    &:focus {
        border-color: $main-color;
    }
}

    .ais-SearchBox-reset {
    margin-top: 4px;
    }
</style>