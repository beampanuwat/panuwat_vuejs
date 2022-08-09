<template>
  <header>
    <nav>
      <span class="nav-toggle" id="js-nav-toggle">
        <i link @click="toggleBar" class="fa-solid fa-bars"></i>
      </span>
      <div class="logo">
        <h1 link @click="goToHome">Portfolio</h1>
      </div>
      <ul id="js-menu">
        <li><a link @click="goToHome">Home</a></li>
        <li><a link @click="goToAbout">About</a></li>
        <li><a link @click="goToContact">Contact</a></li>
        <li><a link @click="goToWork">Work</a></li>
      </ul>
      <div class="search">
        <form>
          <input type="text" placeholder="Search..." name="search" />
          <a>Search</a>
        </form>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "App",
  methods: {
    toggleBar() {
      let mainNav = document.getElementById("js-menu");
      let NavToggle = document.getElementById("js-nav-toggle");
      NavToggle.addEventListener("click", function () {
        mainNav.classList.toggle("active");
      });
    },
    goToHome() {
      this.$router.push({ name: "Home" }).catch((err) => {});
    },
    goToAbout() {
      this.$router.push({ name: "About" }).catch((err) => {});
    },
    goToContact() {
      this.$router.push({ name: "Contact" }).catch((err) => {});
    },
    goToWork() {
      this.$router.push({ name: "Work" }).catch((err) => {});
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/sass/main.scss";

header {
  background-color: #bca;
  height: auto;
}
nav {
  position: relative;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  .nav-toggle {
    position: absolute;
    top: 20px;
    left: 20px;
    font-size: 24px;
    cursor: pointer;
  }
  .logo {
    display: flex;
    justify-content: center;
    margin: 40px 0 20px 0;
    font-size: 24px;
  }
}
ul {
  display: none; //none to flex
  flex-direction: column;
  justify-content: center;
  text-align: center;

  li {
    list-style-type: none;
    font-size: 20px;
    margin: 20px;
    padding: 0 10px;
    justify-content: center;
    text-align: center;
    cursor: pointer;
    @include borderSet;
    &:hover {
      opacity: 0.5;
    }

    a {
      color: $black-color;
    }
  }
}
.search {
  padding: 10px;
  form {
    input {
      padding: 10px 20px;
      border: solid 1px $gray-color;
      border-radius: 10px;
      background-color: $white-color;
    }
    a {
      border: solid 1px $white-color;
      padding: 10px 10px;
      border-radius: 10px;
      margin-left: 10px;
      color: $white-color;
    }
  }
}
.active {
  display: flex;
}

@media screen and (min-width: 960px) {
  nav {
    flex-direction: row;
    height: 80px;
    justify-content: center;
    text-align: center;
    .nav-toggle {
      display: none;
    }
    .logo {
      align-items: center;
      margin: 0;
      margin-left: 30px;
      cursor: pointer;
    }
  }
  ul {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    flex-direction: row;
    li {
      border-bottom-style: none;
      &:hover {
        @include borderSet;
      }
    }
  }
  .search {
    padding: 15px 20px 10px 0;
    form {
      display: flex;
    }
  }
}
</style>
