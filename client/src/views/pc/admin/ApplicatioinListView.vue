<template>
  <v-data-table
      :headers="headers"
      :items="applications"
      sort-by="updateTime"
      class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>My Applications</v-toolbar-title>
        <v-divider
            class="mx-4"
            inset
            vertical
        ></v-divider>
        <v-spacer></v-spacer>
      </v-toolbar>
    </template>
  </v-data-table>
</template>

<script>
import moment from 'moment';
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
      {text: 'email', value: 'email', sortable: true,},
      {text: 'type', value: 'type', sortable: true,},
      {text: 'profile', value: 'profile', sortable: true,},
    ],
    applications: [],
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
      this.$api.application.selectApplications().then(res => {
        this.applications = res.data;
      })
    },
    createApplication() {
      this.$router.push("/admin/applications/md")
    },
    editApplication(applicationId) {
      this.$router.push("/admin/applications/" + applicationId + "/md")
    },
    deleteApplication(applicationId) {
      confirm('Are you sure you want to delete this item?')
      && this.$api.application.deleteApplication(applicationId).then(res => {
        if (res.code === '0') {
          this.initialize();
        }
      })
    }
  },
  filters: {
    moment: function (date) {
      return moment(date).format('YYYY/MM/DD HH:mm:ss');
    }
  }

}
</script>