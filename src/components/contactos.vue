<template>




<vs-row vs-justify="center">
  <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="5">
<vs-row vs-justify="center">
  
    <vs-card class="cardx">
      <vs-row vs-justify="center">
      <vs-col vs-type="flex" vs-justify="center"  vs-align="center"  vs-lg="5"
                vs-sm="4"
                vs-xs="4">

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
        <vs-col vs-type="flex" vs-justify="center"  vs-align="center"  vs-lg="7"
                vs-sm="4"
                vs-xs="4">
                
                  <img
                  src="../assets/contactos-phones.png"
                  style="max-width: 90%;max-height: 90%; "
                />
                
                
        </vs-col>
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


</style>
