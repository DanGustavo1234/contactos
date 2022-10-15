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
                  <form @submit.prevent="onSubmit">
                    <!-- Email -->
                    <div
                      class="form-group"
                      :class="{ error: v$.form.email.$errors.length }"
                    >
                      <label for="">Email</label>
                      <input
                        class="form-control"
                        placeholder="Enter your username"
                        type="email"
                        v-model="v$.form.email.$model"
                      />
                      <div
                        class="pre-icon os-icon os-icon-user-male-circle"
                      ></div>
                      <!-- error message -->
                      <div
                        class="input-errors"
                        v-for="(error, index) of v$.form.email.$errors"
                        :key="index"
                      >
                        <div class="error-msg">{{ error.$message }}</div>
                      </div>
                    </div>

                    <!-- password -->
                    <div
                      class="form-group"
                      :class="{ error: v$.form.password.$errors.length }"
                    >
                      <label for="">Password</label>
                      <input
                        class="form-control"
                        placeholder="Enter your password"
                        type="password"
                        v-model="v$.form.password.$model"
                      />
                      <div class="pre-icon os-icon os-icon-fingerprint"></div>
                      <!-- error message -->
                      <div
                        class="input-errors"
                        v-for="(error, index) of v$.form.password.$errors"
                        :key="index"
                      >
                        <div class="error-msg">{{ error.$message }}</div>
                      </div>
                    </div>

                    <!-- Submit Button -->
                    <div class="buttons-w">
                      <button
                        :disabled="v$.form.$invalid"
                        class="btn btn-primary"
                      >
                        Login
                      </button>
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
import { Options, Vue } from "vue-class-component";
import useVuelidate from '@vuelidate/core'
import { required, email, minLength, sameAs } from '@vuelidate/validators'

@Options({
  props: {
    msg: String,
  },
})
export default class contactos extends Vue {

  setup () {
    return { v$: useVuelidate() }
  }

  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
      }
    }
  }

  validations() {
    return {
      form: {
        firstName: { 
          required
        },
        lastName: { 
          required
        },
        email: { required, email },
        password: { required, min: minLength(6) },
        confirmPassword: { required }
      },
    }
  }

  msg!: string;

}
</script>

<style>
.cardx {
  margin: 15px;
  background-color: #f5f5f5;
  height: auto;
}
</style>
