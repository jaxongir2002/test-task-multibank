<template>
  <v-container>
    <h2 class="text-h5 mb-3">Список сотрудников</h2>
    <v-data-table
        :headers="headers"
        :items="employeeStore.employees"
        :items-per-page="employeeStore.limit"
        :loading="employeeStore.loading"
        :page.sync="employeeStore.page"
<<<<<<< HEAD
        :server-items-length="employeeStore.total"
        class="elevation-1"
=======
        :items-length="employeeStore.total"
        class="elevation-1"

>>>>>>> 0c8288e (add document page)
        @update:page="employeeStore.setPage"
    >
      <template #item.isActive="{ item }">
        <div>
<<<<<<< HEAD
          <v-chip
              :color="item.isActive ? 'green' : 'red'"
              :text="item.isActive ? 'Активный' : 'неактивный'"
              class="text-uppercase"
              size="small"
              label
          ></v-chip>
=======
          <v-checkbox-btn
              v-model="item.isActive"
              :ripple="false"
          ></v-checkbox-btn>
>>>>>>> 0c8288e (add document page)
        </div>
      </template>
      <template #item.actions="{ item }">
        <v-btn size="small" @click="goToDetail(item.id)">Открыть</v-btn>
      </template>
    </v-data-table>
  </v-container>
</template>

<script setup>
import {useEmployeeStore} from '@/store/employeeStore'
import {onMounted} from 'vue'
import {useRouter} from 'vue-router'

<<<<<<< HEAD
const employeeStore = useEmployeeStore()
const router = useRouter()
=======
const employeeStore = useEmployeeStore();
const router = useRouter();
>>>>>>> 0c8288e (add document page)

const headers = [
  {title: 'Имя', key: 'firstName'},
  {title: 'Фамилия', key: 'lastName'},
  {title: 'Паспорт', key: 'passport'},
  {title: 'Дата рождения', key: 'birthDate'},
  {title: 'Пол', key: 'gender'},
  {title: 'Активность', key: 'isActive'},
  {title: 'Действия', key: 'actions', sortable: false}
]

function goToDetail(id) {
  router.push(`/employees/${id}`)
}

onMounted(() => {
  employeeStore.fetchEmployees()
})
</script>
