<template>
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <title>Document1</title>
    </head>
    <body>
      <div class="hello">

        <vs-row vs-w="12">
          
        <vs-card class="cardx">
        <vs-row vs-justify="center">

         
          
            <vs-col vs-type="flex" vs-justify="center"  vs-align="center"  vs-lg="2"
                vs-sm="4"
                vs-xs="6">
                <di>
                  <h2>Contactos</h2>
                  <br />
                  <br />
                  <vs-input
                    :success="true"
                    success-text="The mail is valid"
                    placeholder="Email Success"
                  />
                  <vs-input
                    :danger="true"
                    danger-text="The password does not meet the standards"
                    placeholder="Password Danger"
                  />
                  <vs-input
                    :warning="true"
                    warning-text="The entered data could not be verified"
                    placeholder="Date Warning"
                  />
                  <vs-input
                    description-text="Just enter the first two numbers of your phone"
                    placeholder="Phone Description"
                  />
                  <vs-button color="primary" type="filled">Enviar</vs-button>
                </di>
                
    </vs-col>
    <vs-col vs-type="flex" vs-justify="center"  vs-align="center"  vs-lg="2"
                vs-sm="4"
                vs-xs="6">
                <img
                  src="../assets/contactos-phones.png"
                  style="max-width: 100%"
                />
    </vs-col>

          
      
            
  </vs-row>

</vs-card>

</vs-row>     
   

       <!--///////////////////////////////////////////////////////////-->
          <!-- <vs-row vs-w="12">
            <vs-card class="cardx">
              <vs-col
                vs-type="flex"
                vs-justify="center"
                vs-align="center"
                vs-lg="2"
                vs-sm="4"
                vs-xs="6"
              >
                <div>
                  <h2>Contactos</h2>
                  <br />
                  <br />
                  <vs-input
                    :success="true"
                    success-text="The mail is valid"
                    placeholder="Email Success"
                  />
                  <vs-input
                    :danger="true"
                    danger-text="The password does not meet the standards"
                    placeholder="Password Danger"
                  />
                  <vs-input
                    :warning="true"
                    warning-text="The entered data could not be verified"
                    placeholder="Date Warning"
                  />
                  <vs-input
                    description-text="Just enter the first two numbers of your phone"
                    placeholder="Phone Description"
                  />
                  <vs-button color="primary" type="filled">Enviar</vs-button>
                </div>
              </vs-col>
             
              <vs-col
                vs-type="flex"
                vs-justify="center"
                vs-align="center"
                vs-lg="2"
                vs-sm="4"
                vs-xs="6"
              >
                <img
                  src="../assets/contactos-phones.png"
                  style="max-width: 100%"
                />
              </vs-col>
            </vs-card>
          </vs-row> -->
<!--///////////////////////////////////////////////////////////-->



      </div>
    </body>
  </html>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    msg: String,
  },
})
export default class contactos extends Vue {
  msg!: string;
}
</script>

<style>
.cardx {
  margin: 15px;
  background-color: #f5f5f5;
 
}

pre {
  width: 100%;
  color: rgba(255, 255, 255, 0.8);
}
</style>
