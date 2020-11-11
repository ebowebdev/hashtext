<template>
  <div class="flexrow">
    <h1>{{ msg }}</h1><hr/>
    <textarea 
    class="area"
    v-model="message" 
    name="message" cols="30" rows="3"></textarea>
    <button @click="codertext">Coder</button>
    <button @click="decodertext">Decoder</button>
    <div class="res">
      <h4>{{ req }}</h4>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { coder , decoder } from '../codemodule' 

export default {
  name: 'block',
  props: {
    msg: String,
  },
  setup(){
    let message = ref("")
    let req = ref("")
    let isDecoded = ref(false)
    const codertext = ()=>{
      if(message.value == "") return;
      req.value = coder(message.value);
      message.value = "";
      isDecoded.value = false
    }
    const decodertext = ()=>{
      if(req.value == "" || isDecoded.value) return;
      if(message.value == "" && req.value != ""){
        req.value = decoder(req.value)
        isDecoded.value = true
      }
      if(message.value != "" && req.value != ""){
        const isConfirm = confirm('you want to decoder this message ?')
        if(isConfirm){
          req.value = decoder(message.value)
          isDecoded.value = true
        }
      }
    }
    return {
      message,
      req,
      isDecoded,
      codertext,
      decodertext
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

