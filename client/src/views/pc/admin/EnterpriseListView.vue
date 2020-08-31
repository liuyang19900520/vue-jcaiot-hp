<template>
  <v-data-table
      :headers="headers"
      :items="enterprises"
      sort-by="calories"
      class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>My Enterprises</v-toolbar-title>
        <v-divider
            class="mx-4"
            inset
            vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
                color="primary"
                dark
                class="mb-2"
                v-bind="attrs"
                v-on="on"
                @click="createEnterprise"
            >New Enterprise
            </v-btn>
          </template>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
          small
          class="mr-2"
          @click="editEnterprise(item._id)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
          small
          @click="deleteEnterprise(item._id)"
      >
        mdi-delete
      </v-icon>
    </template>
  </v-data-table>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    headers: [
      {
        text: 'ID',
        align: 'start',
        sortable: false,
        value: '_id',
      },
      {
        text: 'Name',
        align: 'start',
        sortable: false,
        value: 'name',
      },
      {text: 'updateTime', value: 'updateTime', sortable: true,},
      {text: 'Actions', value: 'actions', sortable: false},
    ],
    enterprises: [],
  }),
  watch: {
    dialog(val) {
      val || this.close()
    },
  },

  created() {
    this.initialize()
  },

  methods: {
    initialize() {
      this.$api.enterprise.selectEnterprises().then(res => {
        this.enterprises = res.data;
      })
    },
    createEnterprise() {
      this.$router.push("/admin/enterprises/md")
    },
    editEnterprise(enterpriseId) {
      this.$router.push("/admin/enterprises/" + enterpriseId + "/md")
    },
    deleteEnterprise(enterpriseId) {
      confirm('Are you sure you want to delete this item?')
      && this.$api.enterprise.deleteEnterprise(enterpriseId).then(res => {
        if (res.code === '0') {
          this.initialize();
        }
      })
    },
  },
}
</script>