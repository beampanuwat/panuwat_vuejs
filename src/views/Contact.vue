<template>
  <div class="container">
    <h1>INFORMATION TO CONTACT ME</h1>
    <div class="form-card">
      <div class="row">
        <div class="text-name">
          <strong><span>Name :</span></strong>
          <input v-model="name" placeholder="Name" />
        </div>

        <div class="text-last">
          <strong><span>LastName :</span></strong>
          <input v-model="last" placeholder="LastName" />
        </div>

        <div class="text-user">
          <strong><span>Username :</span></strong>
          <div class="input-user">
            <b>@</b>
            <input v-model="username" placeholder="username" />
          </div>
        </div>
      </div>

      <div class="row">
        <div class="text-city">
          <strong><span>City :</span></strong>
          <input v-model="city" placeholder="city" />
        </div>

        <div class="text-state">
          <strong><span>State :</span></strong>
          <input v-model="state" placeholder="state" />
        </div>

        <div class="text-zip">
          <strong><span>Zip :</span></strong>
          <input v-model="zip" placeholder="Zip" />
        </div>
      </div>
      <button>Submit form</button>
    </div>

    <div class="form-title">
      <h1>Form example</h1>
      <div class="name-title">
        <p>First Name : {{ name }}</p>
      </div>
      <div class="last-title">
        <p>Last Name : {{ last }}</p>
      </div>
      <div class="user-title">
        <p>UserName : {{ username }}</p>
      </div>
      <div class="city-title">
        <p>City : {{ city }}</p>
      </div>
      <div class="state-title">
        <p>State : {{ state }}</p>
      </div>
      <div class="zip-title">
        <p>Zip : {{ zip }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      last: "",
      username: "",
      city: "",
      state: "",
      zip: "",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/sass/main.scss";

.container {
  text-align: center;
  h1 {
    margin: 40px;
  }
}

.form-card {
  // border: solid 1px red;
  height: auto;
  max-width: 100%;
  margin: 10px 300px;

  .row {
    display: flex;
  }

  span {
    @include span;
  }

  input {
    @include input;
  }

  .text-name,
  .text-last {
    width: 400px;
    @include displayInput;
  }


  .text-user {
    display: block;
    // border: solid 1px green;
    width: 300px;
    margin-bottom: 10px;
    margin: 10px 5px;
    @include displayInput;

    .input-user {
      display: flex;

      b {
        background: $gray-color;
        border: solid 1px rgba(133, 133, 133);
        border-radius: 5px 0 0 5px;
        padding: 5px 10px;
      }

      input {
        border: solid 1px rgb(133, 133, 133);
        padding: 5px 10px;
        width: 100%;
        border-radius: 0 5px 5px 0;
        margin: 0;
      }
    }
  }

  .text-city {
    width: 600px;
    @include displayInput;
  }

  .text-state,
  .text-zip {
    width: 250px;
    @include displayInput;
  }


  button {
    margin: 20px 0;
    display: flex;
    @include buttonBlue;

    &:hover {
      @include buttonHover;
    }
  }
}

.form-title {
  border-radius: 10px;
  margin: 100px 400px;
  padding: 20px 100px;
  background: $white-color;
  text-align: left;
  h1 {
    text-align: center;
    border: solid 1px $success-color;
    border-radius: 10px;
    margin: 0 300px;
    color: $success-color;
  }
}

@media screen and (max-width: 960px) {
  .container {
  h1 {
    margin: 30px 0 10px 0;
  }
}
  .form-title {
    padding: 30px 20px;
    margin: 0 10px;
    h1 {
      margin: 0 0 30px 0;
    }
  }
  .form-card {
    margin: 0;
    max-width: 100%;
    display: inline-block;

    .row {
      display: flex;
      flex-direction: column;
    }

    .text-name,
    .text-last,
    .text-user,
    .text-city,
    .text-state,
    .text-zip {
      width: 100%;
    }
  }
}
</style>
