<template>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
    integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
    crossorigin="anonymous"
  />

  <vs-row vs-justify="center">
    <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="6">
      <vs-row vs-justify="center">
        <vs-card class="cardx">
          <vs-row vs-justify="center" vs-type="flex" vs-align="center">
            <div class="row">
              <vs-col
                vs-type="flex"
                vs-justify="center"
                vs-align="center"
                vs-w="6"
              >
                <div class="center content-inputs">
                  <form @submit.prevent="handleSubmit">
              <div class="form-group">
                <label for="firstName">First Name</label>
                <input type="text" v-model="user.firstName" v-validate="'required'" id="firstName" name="firstName" class="form-control" :class="{ 'is-invalid': submitted && errors.has('firstName') }" />
                <div v-if="submitted && errors.has('firstName')" class="invalid-feedback">
                  {{ errors.first("firstName") }}
                </div>
              </div>
              <div class="form-group">
                <label for="lastName">Last Name</label>
                <input type="text" v-model="user.lastName" v-validate="'required'" id="lastName" name="lastName" class="form-control" :class="{ 'is-invalid': submitted && errors.has('lastName') }" />
                <div v-if="submitted && errors.has('lastName')" class="invalid-feedback">
                  {{ errors.first("lastName") }}
                </div>
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" v-model="user.email" v-validate="'required|email'" id="email" name="email" class="form-control" :class="{ 'is-invalid': submitted && errors.has('email') }" />
                <div v-if="submitted && errors.has('email')" class="invalid-feedback">
                  {{ errors.first("email") }}
                </div>
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input type="password" v-model="user.password" v-validate="{ required: true, min: 6 }" id="password" name="password" class="form-control" :class="{ 'is-invalid': submitted && errors.has('password') }" />
                <div v-if="submitted && errors.has('password')" class="invalid-feedback">
                  {{ errors.first("password") }}
                </div>
              </div>
              <div class="form-group">
                <button class="btn btn-primary">Register</button>
              </div>
            </form>
                </div>
              </vs-col>

              <vs-col
                vs-type="flex"
                vs-justify="center"
                vs-align="center"
                vs-w="6"
              >
                <div>
                  <img
                    srcset="../assets/contactos-phones.png 1x"
                    style="max-width: 90%; height: auto"
                  />
                </div>
              </vs-col>
            </div>
          </vs-row>
        </vs-card>
      </vs-row>
    </vs-col>
  </vs-row>

  <!-- ///////////////////////////////////////////////////////// -->

  <!-- //////////////////////////////////////////// -->
</template>

 <script lang="ts">

export default {
  name: "app",
  data() {
    return {
      user: {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
      },
      submitted: false
    };
  },

  methods: {
    handleSubmit(e) {
      this.submitted = true;
      this.$validator.validate().then(valid => {
        if (valid) {
          alert("SUCCESS!! :-)\n\n" + JSON.stringify(this.user));
        }
      });
    }
  }
};


 
</script>

<style>
.cardx {
  margin: 15px;
  background-color: #f5f5f5;
  height: auto;
}
</style>
