const InputForm = {
  template: `
    <div class="input-form">
      <form @submit="submitForm" class="ui form">
        <div class="field">
          <label>New Item</label>
          <input v-model="fields.newItem" type="text"
                 placeholder="Add an item!"/>
           <span style="color: red">{{ fieldErrors.newItem }}</span>
        </div>
        <div class="field">
          <label>Email</label>
          <input v-model="fields.email" type="text"
                 placeholder="What's your email?"/>
           <span style="color: red">{{ fieldErrors.newItem }}</span>
        </div>
        <div class="field">
          <label>Urgency</label>
          <select v-model="fields.urgency" class="ui fluid search dropdown">
            <option disabled value="">Please select one</option>
            <option>Nonessential</option>
            <option>Moderate</option>
            <option>Urgent</option>
          </select>
          <span style="color: red">{{ fieldErrors.newItem }}</span>
        </div>
        <div class="field">
          <div class="ui checkbox">
            <input v-model="fields.termsAndConditions" type="checkbox"/>
            <label>I accept the terms and conditions</label></div>
            <span style="color: red">{{ fieldErrors.newItem }}</span>
        </div>
        <button class="ui button">Submit</button>
      </form>
      <div class="ui segment">
        <h4 class="ui header">Items</h4>
        <ul>
          <li v-for="item in items" class="item">{{ item }}</li>
        </ul>
      </div>
    </div>`,
  data() {
    return {
      fields: {
        newItem: '',
        email: '',
        urgency: '', termsAndConditions: false
      },
      fieldErrors: {
        newItem: undefined,
        email: undefined,
        urgency: undefined,
        termsAndConditions: undefined
      },
      items: []
    }
  },
  methods: {
    submitForm(evt) {
      this.items.push(this.newItem);
      this.newItem = '';
      evt.preventDefault();
    }
  }
};

new Vue({
  el: '#app',
  components: {
    'input-form': InputForm
  }
});