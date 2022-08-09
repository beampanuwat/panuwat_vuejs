<template>
    <div class="container">
        <h1>Works</h1>
        <div class="row">
            <div class="slide-top">
                <div class="content">
                    <div class="row">
                        <div class="card">
                            <img src="@/assets/image/avatar1.jpg" alt="Denim Jeans" style="width: 100%" />
                            <div class="bg-card">
                                <h1>1</h1>
                                <p class="title">html, css, javaScript, vuejs</p>
                                <p>
                                    Some text about the jeans. Super slim and comfy lorem ipsum lorem
                                    jeansum. Lorem jeamsun denim lorem jeansum.
                                </p>
                                <button class="button" @click="showModal = true">Show Modal</button>
                            </div>
                        </div>

                        <div class="card">
                            <img src="@/assets/image/avatar2.jpg" alt="Denim Jeans" style="width: 100%" />
                            <div class="bg-card">
                                <h1>2</h1>
                                <p class="title">html, css, javaScript, vuejs</p>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit maxime officia numquam.
                                    Consequuntur, aut ipsum!
                                </p>
                                <button class="button" @click="showModal = true">Show Modal</button>
                            </div>
                        </div>
                        <div class="card">
                            <img src="@/assets/image/avatar3.jpg" alt="Denim Jeans" style="width: 100%" />
                            <div class="bg-card">
                                <h1>3</h1>
                                <p class="title">html, css, javaScript, vuejs</p>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam incidunt dolorum
                                    labore eaque hic. Sed.
                                </p>
                                <button class="button" @click="showModal = true">Show Modal</button>
                            </div>
                        </div>
                        <div class="card">
                            <img src="@/assets/image/avatar4.jpg" alt="Denim Jeans" style="width: 100%" />
                            <div class="bg-card">
                                <h1>4</h1>
                                <p class="title">html, css, javaScript, vuejs</p>
                                <p>
                                    Some text about the jeans. Super slim and comfy lorem ipsum lorem
                                    jeansum. Lorem jeamsun denim lorem jeansum.
                                </p>
                                <button class="button" @click="showModal = true">Show Modal</button>
                            </div>
                        </div>

                    </div>

                    <div class="btm-sliders">
                        <span-1 onclick="side_slide(-1)">prev</span-1>
                        <span onclick="btm_slide(1)">1</span>
                        <span onclick="btm_slide(2)">2</span>
                        <span onclick="btm_slide(3)">3</span>
                        <span onclick="btm_slide(4)">4</span>
                        <span-2 onclick="side_slide(1)">Next</span-2>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {

    }


}

</script>


<style lang="scss" scoped>
@import '@/sass/main.scss';

.container {
    text-align: center;

    .row {
        display: flex;
        width: 100%;
        justify-content: center;

    }
}

.content {
    overflow: hidden;
}

.card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width: 300px;
    margin: 40px;
    margin-bottom: 20px;
    text-align: left;

    .bg-card {
        background-color: $white-color;
    }

    h1 {
        margin: 0 20px;
    }

    .title {
        color: $success-color;
        font-size: 20px !important;
        margin: 0 20px;
    }

    p {
        margin: 20px;
    }
}

.btm-sliders {
    position: absolute;
    bottom: 20px;
    left: 50%;
    display: flex;
    transform: translateX(-50%);

    span {
        border: solid 1px $gray-color;
        display: flex;
        justify-content: center;
        padding: 10px 20px;
        background: $white-color;
        margin: 0;
        cursor: pointer;

        &:hover {
            background: $success-color;
        }
    }

    span-1 {
        border: solid 1px $gray-color;
        display: flex;
        justify-content: center;
        padding: 10px 20px;
        border-radius: 5px 0 0 5px;
        background: $white-color;
        margin: 0;
        cursor: pointer;

        &:hover {
            background: $success-color;
        }
    }

    span-2 {
        border: solid 1px $gray-color;
        display: flex;
        justify-content: center;
        padding: 10px 20px;
        border-radius: 0 5px 5px 0;
        background: $white-color;
        margin: 0;
        cursor: pointer;

        &:hover {
            background: $success-color;
        }
    }
}

button {
    @include buttonBlue;
    appearance: none;
    outline: none;
    margin: 20px 10px;

    &:hover {
        @include buttonHover;
    }
}

.modal-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 98;
    background-color: rgba(0, 0, 0, 0.3);
}

.modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 99;
    width: 100%;
    max-width: 500px;
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;

    .model-close {
        display: flex;
        justify-content: space-between;

        h1 {
            color: $black-color;
            font-size: 32px;
            font-weight: 900;
        }

        a {
            font-size: 24px;
            color: $black-color;
        }

        p {
            color: $gray-color;
            font-size: 18px;
            font-weight: 400;
            margin-top: 40px;
        }
    }

    .button-modal {
        text-align: end;
        margin-top: 20px;
        margin-right: 35px;

        .button-title-1 {
            background-color: $red-color;
        }

        .button-title-2 {
            background-color: $success-color;
        }
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.slide-enter,
.slide-leave-to {
    transform: transform 0.5s;
}

////////////////// 960px ++ ///////////////////////
@media screen and (max-width: 960px) {
    .bg-home {
        b {
            font-size: 42px !important;
        }

        span {
            font-size: 38px !important;
        }
    }
}

@media screen and (max-width: 1396px) {
    .row {
        flex-direction: column;

        .card {
            margin: 20px auto;

        }
    }
}
</style>