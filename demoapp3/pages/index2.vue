<template>
  <div>
    <AddIndex/>
    <SubmitForm/>
  </div>
</template>

<script>
import AddIndex from '~/components/AddIndex.vue'
import SubmitForm from '~/components/SubmitForm.vue'

export default {
  components:{
    AddIndex,
    SubmitForm
  },
  name: 'IndexPage'
}
</script>
