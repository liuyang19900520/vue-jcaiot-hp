<template>
  <v-data-table
      :headers="headers"
      :items="menus"
      sort-by="updateTime"
      class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>My Menus</v-toolbar-title>
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
                @click="createMenu"
            >New Menu
            </v-btn>
          </template>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
          small
          class="mr-2"
          @click="editMenu(item._id)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
          small
          @click="deleteMenu(item._id)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:item.updateTimeItem="{ item }">
      <div>{{ item.updateTime | moment }}</div>
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
        text: 'Title',
        align: 'start',
        sortable: false,
        value: 'title',
      },
      {
        text: 'Link',
        align: 'start',
        sortable: false,
        value: 'link',
      },
      {text: 'updateTime', value: 'updateTimeItem', sortable: true,},
      {text: 'Actions', value: 'actions', sortable: false},
    ],
    menus: [],
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
      this.$api.menu.listMenus().then(res => {
        this.menus = res.data;
      })
    },
    createMenu() {
      this.$router.push("/admin/menus/md")
    },
    editMenu(menuId) {
      this.$router.push("/admin/menus/" + menuId + "/md")
    },
    deleteMenu(menuId) {
      confirm('Are you sure you want to delete this item?')
      && this.$api.menu.deleteMenu(menuId).then(res => {
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