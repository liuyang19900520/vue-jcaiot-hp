<template>
  <v-data-table
      :headers="headers"
      :items="experts"
      sort-by="calories"
      class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>My Experts</v-toolbar-title>
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
                @click="createExpert"
            >New Expert
            </v-btn>
          </template>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
          small
          class="mr-2"
          @click="editExpert(item._id)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
          small
          @click="deleteExpert(item._id)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:item.updateTime="{ item }">
      <div>{{ item.updateTime | moment }}</div>
    </template>
  </v-data-table>
</template>

<script>
import moment from "moment";

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
    experts: [],
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
      this.$api.expert.selectExperts().then(res => {
        this.experts = res.data;
      })
    },
    createExpert() {
      this.$router.push("/admin/experts/md")
    },
    editExpert(expertId) {
      this.$router.push("/admin/experts/" + expertId + "/md")
    },
    deleteExpert(expertId) {
      confirm('Are you sure you want to delete this item?')
      && this.$api.expert.deleteExpert(expertId).then(res => {
        if (res.code === '0') {
          this.initialize();
        }
      })
    },
  },

  filters: {
    moment: function (date) {
      return moment(date).format('YYYY/MM/DD HH:mm:ss');
    }
  }
}
</script>