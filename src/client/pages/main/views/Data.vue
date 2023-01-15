<template>
  <v-card>
    <v-card-title class="text-h5 font-weight-regular blue-grey white--text">
      User data
    </v-card-title>
    <v-card-text>
   
      <v-autocomplete
        v-model="model"
        :hint="!isEditing ? 'Click the icon to edit' : 'Click the icon to save'"
        :items="states"
        :readonly="!isEditing"
        :label="`State — ${isEditing ? 'Editable' : 'Readonly'}`"
        persistent-hint
        prepend-icon="mdi-city"
      >
        <template v-slot:append-outer>
          <v-slide-x-reverse-transition
            mode="out-in"
          >
            <v-icon
              :key="`icon-${isEditing}`"
              :color="isEditing ? 'success' : 'info'"
              @click="isEditing = !isEditing"
              v-text="isEditing ? 'mdi-check-outline' : 'mdi-circle-edit-outline'"
            ></v-icon>
          </v-slide-x-reverse-transition>
        </template>
      </v-autocomplete>
    </v-card-text>
  </v-card>
</template>

<script>

  export default {
    data () {
      return {
        isEditing: false,
        model: null,
        users: [
        ],
      }
    },
    methods:{
      show(){
        console.log(this.users);
      }
    }
    ,
  }
</script>


