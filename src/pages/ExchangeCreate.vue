<template>
  <div class="container">
    <div class="form-container">
      <form>
        <div class="field">
          <label class="label">Type</label>
          <div class="control">
            <div class="select">
              <select v-model="form.type">
                <option value="service">Service</option>
                <option value="product">Product</option>
              </select>
            </div>
          </div>
        </div>
        <div class="field">
          <label class="label">Title</label>
          <div class="control">
            <input 
              v-model="form.title"
              class="input" 
              type="text" 
              placeholder="Some Nice Product">
            <div v-if="$v.form.title.$error" class="form-error">
              <span 
                v-if="!$v.form.title.required" 
                class="help is-danger">Title is required</span>
              <span 
                v-if="!$v.form.title.minLength" 
                class="help is-danger">Minimum length of title is 10 characters!</span>
            </div>
          </div>
        </div>
        <div class="field">
          <label class="label">Description</label>
          <div class="control">
            <textarea 
              v-model="form.description"
              class="textarea" 
              placeholder="Some catchy description about product">
            </textarea>
            <div v-if="$v.form.description.$error"  class="form-error">
              <span
                v-if="!$v.form.description.required"  
                class="help is-danger">Description is required</span>
            </div>
          </div>
        </div>
        <div class="field">
          <label class="label">Image Link</label>
          <div class="control">
            <input 
              v-model="form.image"
              class="input" 
              type="text" 
              placeholder="https://unsplash....">
            <div v-if="$v.form.image.$error" class="form-error">
              <span 
                v-if="!$v.form.image.url"
                class="help is-danger">Image url is not valid!</span>
              <span 
                v-if="!$v.form.image.supportedFileType"
                class="help is-danger">Provided image extension is not supported!</span>
            </div>
          </div>
        </div>
        <!-- TODO: Rename To Price -->
        <div class="field">
          <label class="label">Price</label>
          <div class="control">
            <input 
              v-model="form.price"
              class="input" 
              type="number" 
              placeholder="249">
            <div v-if="$v.form.price.$error"  class="form-error">
              <span
                v-if="!$v.form.price.required" 
                class="help is-danger">Price is required</span>
              <span
                v-if="!$v.form.price.minValue" 
                class="help is-danger">Minum price is 10$</span>
            </div>
          </div>
        </div>
        <div class="field">
          <label class="label">Country</label>
          <div class="control">
            <input 
              v-model="form.country"
              class="input" 
              type="text" 
              placeholder="Slovakia">
            <div v-if="$v.form.country.$error"  class="form-error">
              <span 
                v-if="!$v.form.country.required" 
                class="help is-danger">Country is required</span>
            </div>
          </div>
        </div>
        <div class="field">
          <label class="label">City</label>
          <div class="control">
            <input 
              v-model="form.city"
              class="input" 
              type="text" 
              placeholder="Bratislava">
            <div 
              v-if="$v.form.city.$error"  class="form-error">
              <span 
                v-if="!$v.form.city.required" 
                class="help is-danger">City is required</span>
            </div>
          </div>
        </div>

        <!-- TODO: provide tags inputs -->

        <div class="field is-grouped">
          <div class="control">
            <button
              @click.prevent="createExchange"
              class="button is-link">Submit</button>
          </div>
          <div class="control">
            <button class="button is-text">Cancel</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { required, minLength, url, minValue } from 'vuelidate/lib/validators'
import { supportedFileType } from '@/helpers/validators'
export default {
  data() {
    return {
      form: {
        title: '',
        description: '',
        type: 'service',
        image: '',
        price: null,
        country: '',
        city: '',
        tags: []
      }
    }
  },
  validations: {
    form: {
      title: {
        required,
        minLength: minLength(10)
      },
      description: {
        required
      },  
      image: {
        url,
        supportedFileType
      },
      price: {
        required,
        minValue: minValue(10)
      },
      country: {
        required
      },
      city: {
        required
      }
    }
  },
  computed: {
    isFormValid() {
      return !this.$v.form.$invalid
    }
  },
  methods: {
    createExchange() {
      this.$v.form.$touch()

      if (this.isFormValid) {
        alert(JSON.stringify(this.form))
      }
    }
  }
}
</script>


<style>
.form-container {
  max-width: 960px;
  margin: 0 auto;
}
</style>


















