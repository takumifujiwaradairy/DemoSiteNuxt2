<template>
  <div>
    <TheHeader/>
      <Nuxt/>  
    <TheFooter/>
  </div>
</template>

<script>
import TheHeader from './TheHeader';
import TheFooter from './TheFooter';
export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>