<template>
  <div>
    <div
      class="imagePreviewWrapper"
      :style="{ 'background-image': `url(${previewImage})` }"
      @click="selectImage"
    />

    <input ref="fileInput" type="file" placeholder="+" @input="pickFile">
  </div>
</template>

<script>
export default {
  data () {
    return {
      previewImage: null
    }
  },
  methods: {
    selectImage () {
      this.$refs.fileInput.click()
    },
    pickFile () {
      const input = this.$refs.fileInput
      const file = input.files
      if (file && file[0]) {
        const reader = new FileReader()
        reader.onload = (e) => {
          this.previewImage = e.target.result
        }
        reader.readAsDataURL(file[0])
        this.$emit('input', file[0])
      }
    }
  }
}
</script>

<style scoped>
.imagePreviewWrapper {
  /* width: 250px; */
  height: 250px;
  display: flex;
  cursor: pointer;
  margin: 0 auto 30px;
  background-size: cover;
  background-position: center center;
}
input {
  width: 70px;
}
</style>
