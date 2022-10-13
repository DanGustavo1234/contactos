<template>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">



<vs-row vs-justify="center">

  <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="6">

<vs-row vs-justify="center">
  
    <vs-card class="cardx ">
      

      <vs-row vs-justify="center" vs-type="flex" vs-align="center">
        <div class="row">
          <vs-col vs-type="flex"  vs-justify="center"  vs-align="center"  vs-w="6"
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

        
     
     
          <vs-col  vs-type="flex" vs-justify="center"  vs-align="center"  vs-w="6"
                >
                <div>
                  <img
                  srcset="../assets/contactos-phones.png 1x"
                  style="max-width: 90%;height: auto; "
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
 height: auto;
 
}


</style>
