<template>
  <h2 class="text-h5 mb-3">Список сотрудников</h2>
  <v-data-table
      :headers="headers"
      :items="employeeStore.employees"
      :items-per-page="employeeStore.limit"
      :loading="employeeStore.loading"
      class="elevation-1"
  >
    <template #item.isActive="{ item }">
      <v-checkbox-btn
          v-model="item.isActive"
          :ripple="false"
      ></v-checkbox-btn>
    </template>
    <template #item.actions="{ item }">
      <v-btn size="small" @click="goToDetail(item.id)">Открыть</v-btn>
    </template>
    <template v-slot:bottom>
      <div class="text-center pt-2">
        <v-pagination
            @update:model-value="employeeStore.setPage"
            :length="employeeStore.total"
        ></v-pagination>
      </div>
    </template>
  </v-data-table>
</template>

<script setup>
import {useEmployeeStore} from '@/store/employeeStore'
import {onMounted} from 'vue'
import {useRouter} from 'vue-router'

const employeeStore = useEmployeeStore()
const router = useRouter();

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
