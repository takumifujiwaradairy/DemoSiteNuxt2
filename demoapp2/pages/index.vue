<template>
  <div>
    <SubmitForm/>
    <AddIndex/>
  </div>
</template>

<script>
import SubmitForm from '~/components/SubmitForm.vue';
import AddIndex from '~/components/AddIndex.vue';
export default {
  components: {
    SubmitForm,
    AddIndex
  },
  name: 'IndexPage'
}
</script>
