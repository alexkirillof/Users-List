<template>
  <v-data-table
    :headers="headers"
    :items="users"
    sort-by="name"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Users List</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="blue-grey darken-3"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
              New User
            </v-btn>
           

          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.lastName"
                      label="Фамилия"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.name"
                      label="Имя"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.patronymic"
                      label="Отчество"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.email"
                      label="Email"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      disabled
                      v-model="editedItem.friendIds.length"
                      label="Количество друзей"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>
</template>

<script>
export default {
    data: () => ({
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: 'Users',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Фамилия', value: 'lastName' },
        { text: 'Имя', value: 'name' },
        { text: 'Отчество', value: 'patronymic' },
        { text: 'Email', value: 'email' },
        { text: 'Количество друзей', value: 'friendIds.length' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      users: [],
      editedIndex: -1,
      editedItem: {
        lastName: '',
        name: '',
        patronymic: '',
        email: '',
        friendIds: [],
      },
      defaultItem: {
        lastName: '',
        name: '',
        patronymic: '',
        email: '',
        friendIds: [],
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New User' : 'Edit User'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      show(){
        console.log(this.users);
      },
      initialize () {
        this.users = [
          {
            id: 'user-1',
            lastName: 'Kirillov',
            name: 'Alex',
            patronymic: 'Vladimirovich',
            email: 'alexkirillof@yandex.ru',
            friendIds: [],
          },
          {
            id: 'user-2',
            lastName: 'Zimina',
            name: 'Viktoria',
            patronymic: 'Dmirtievna',
            email: 'zdmitr@yandex.ru',
            friendIds: [],
          },
          {
            id: 'user-3',
            lastName: 'Popov',
            name: 'Konstantin',
            patronymic: 'Mihailovich',
            email: 'PoKonst56@mail.ru',
            friendIds: ['user-1', 'user-2'],
          },
          {
            id: 'user-4',
            lastName: 'Lukin',
            name: 'Roman',
            patronymic: 'Vladimirovich',
            email: 'Luck12@gmail.com',
            friendIds: ['user-1'],
          },

        ]
      },

      editItem (item) {
        this.editedIndex = this.users.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.users.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.users.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.users[this.editedIndex], this.editedItem)
        } else {
          const newUser = {
            ...this.editedItem,
            friendIds: [],
            id: `${Math.random()}`,
          }
          this.users.push(newUser)
        }
        this.close()
      },
    },
  }
</script>


