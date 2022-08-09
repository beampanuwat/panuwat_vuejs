<template>
  <div class="container">
    <header style="text-align: center">
      <img src="@/assets/image/avatar3.jpg" alt="" style="max-width: 100%" />
      <div class="bg-home">
        <h1 class="text-home">
          <span><b>BEAM</b></span><span>Galapagos</span>
        </h1>
      </div>
    </header>
    <hr>
    <h1 style="text-align: center"><i class="fa-solid fa-fire"></i> Works <i class="fa-solid fa-fire"></i></h1>


    <!-- card -->
    <div class="row">
      <div class="card">
        <img src="@/assets/image/avatar1.jpg" alt="Denim Jeans" style="width: 100%" />
        <div class="bg-card">
          <h1>BEAM-LOL-TEA</h1>
          <p class="title">html, css, javaScript, vuejs</p>
          <p>
            Some text about the jeans. Super slim and comfy lorem ipsum lorem
            jeansum. Lorem jeamsun denim lorem jeansum.
          </p>
          <button class="button" @click="showModal = true">Show Modal</button>
        </div>
        <div class="row">
          <transition name="fade" appear>
            <div class="modal-overlay" v-if="showModal" @click="showModal = false"></div>
          </transition>
          <transition name="slide" appear>
            <div class="modal" v-if="showModal">
              <div class="model-close">
                <h1>You want buy a project ?</h1>
                <a @click="showModal = false"><i class="fa-solid fa-xmark"></i></a>
              </div>
              <p>คุณต้องการดาวโหลด Source Code นี้ให้ Click "Download"</p>
              <div class="button-modal">
                <a class="button-title-1" @click="showModal = false">
                  Close
                </a>
                <a class="button-title-2" href="https://github.com/beampanuwat/Panuwat-vuejs">
                  Download
                </a>
              </div>
            </div>
          </transition>
        </div>
      </div>
      <div class="card">
        <img src="@/assets/image/avatar1.jpg" alt="Denim Jeans" style="width: 100%" />
        <div class="bg-card">
          <h1>BEAM-LOL-TEA</h1>
          <p class="title">html, css, javaScript, vuejs</p>
          <p>
            Some text about the jeans. Super slim and comfy lorem ipsum lorem
            jeansum. Lorem jeamsun denim lorem jeansum.
          </p>
          <button class="button" @click="showModal = true">Show Modal</button>
        </div>
        <div class="row">
          <transition name="fade" appear>
            <div class="modal-overlay" v-if="showModal" @click="showModal = false"></div>
          </transition>
          <transition name="slide" appear>
            <div class="modal" v-if="showModal">
              <div class="model-close">
                <h1>You want buy a project ?</h1>
                <a @click="showModal = false"><i class="fa-solid fa-xmark"></i></a>
              </div>
              <p>คุณต้องการดาวโหลด Source Code นี้ให้ Click "Download"</p>
              <div class="button-modal">
                <a class="button-title-1" @click="showModal = false">
                  Close
                </a>
                <a class="button-title-2" href="https://github.com/beampanuwat/Panuwat-vuejs">
                  Download
                </a>
              </div>
            </div>
          </transition>
        </div>
      </div>
      <div class="card">
        <img src="@/assets/image/avatar1.jpg" alt="Denim Jeans" style="width: 100%" />
        <div class="bg-card">
          <h1>BEAM-LOL-TEA</h1>
          <p class="title">html, css, javaScript, vuejs</p>
          <p>
            Some text about the jeans. Super slim and comfy lorem ipsum lorem
            jeansum. Lorem jeamsun denim lorem jeansum.
          </p>
          <button class="button" @click="showModal = true">Show Modal</button>
        </div>
        <div class="row">
          <transition name="fade" appear>
            <div class="modal-overlay" v-if="showModal" @click="showModal = false"></div>
          </transition>
          <transition name="slide" appear>
            <div class="modal" v-if="showModal">
              <div class="model-close">
                <h1>You want buy a project ?</h1>
                <a @click="showModal = false"><i class="fa-solid fa-xmark"></i></a>
              </div>
              <p>คุณต้องการดาวโหลด Source Code นี้ให้ Click "Download"</p>
              <div class="button-modal">
                <a class="button-title-1" @click="showModal = false">
                  Close
                </a>
                <a class="button-title-2" href="https://github.com/beampanuwat/Panuwat-vuejs">
                  Download
                </a>
              </div>
            </div>
          </transition>
        </div>
      </div>
      <div class="card">
        <img src="@/assets/image/avatar1.jpg" alt="Denim Jeans" style="width: 100%" />
        <div class="bg-card">
          <h1>BEAM-LOL-TEA</h1>
          <p class="title">html, css, javaScript, vuejs</p>
          <p>
            Some text about the jeans. Super slim and comfy lorem ipsum lorem
            jeansum. Lorem jeamsun denim lorem jeansum.
          </p>
          <button class="button" @click="showModal = true">Show Modal</button>
        </div>
        <div class="row">
          <transition name="fade" appear>
            <div class="modal-overlay" v-if="showModal" @click="showModal = false"></div>
          </transition>
          <transition name="slide" appear>
            <div class="modal" v-if="showModal">
              <div class="model-close">
                <h1>You want buy a project ?</h1>
                <a @click="showModal = false"><i class="fa-solid fa-xmark"></i></a>
              </div>
              <p>คุณต้องการดาวโหลด Source Code นี้ให้ Click "Download"</p>
              <div class="button-modal">
                <a class="button-title-1" @click="showModal = false">
                  Close
                </a>
                <a class="button-title-2" href="https://github.com/beampanuwat/Panuwat-vuejs">
                  Download
                </a>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
    <!-- end-card -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
@import "@/sass/main.scss";

.container {
  background-color: rgb(240, 240, 240);
  position: relative;

  h1 {
    margin: 20px 0;
    font-size: 45px;
  }

  hr {
    @include BarCut;
    margin-bottom: 20px;
    margin: 20px auto;
  }

  .row {
    display: flex;
    width: 100%;
    justify-content: center;

  }
}

header {
  width: 100%;
  position: relative;
  margin: auto;

  .bg-home {
    width: 100%;
    // border: solid 1px green;
    position: absolute;
    top: 50%;
    text-align: center;

    h1 {
      // margin: 0;
      // padding: 20px;

      b {
        color: $white-color;
        background-color: rgba(255, 255, 255, 0.5);
        @include HoverText;
      }

      span {
        color: $white-color;
        font-size: 60px;
      }
    }
  }
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: 40px;
  margin-bottom: 20px;
  text-align: left;

  .bg-card {
    background-color: $white-color;

    h1 {
      font-size: 30px;
    }
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
      padding: 8px 20px;
      margin-right: 15px;
      @include HoverButton;
    }

    .button-title-2 {
      background-color: $success-color;
      padding: 8px 20px;
      @include HoverButton;
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

///////////////// 1396px ++ ///////////////////////
@media screen and (max-width: 1396px) {
  .row {
    flex-direction: column;

    .card {
      margin: 20px auto;

    }
  }
}
</style>
