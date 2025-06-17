<template>
  <v-container>
    <h2 class="text-h5 mb-4">Информация о сотруднике</h2>

    <v-card v-if="employee">
      <v-card-text>
        <v-row>
          <v-col cols="6"><strong>Имя:</strong> {{ employee.firstName }}</v-col>
          <v-col cols="6"><strong>Фамилия:</strong> {{ employee.lastName }}</v-col>
          <v-col cols="6"><strong>Дата рождения:</strong> {{ employee.birthDate }}</v-col>
          <v-col cols="6"><strong>Паспорт:</strong> {{ employee.passport }}</v-col>
          <v-col cols="6"><strong>Пол:</strong> {{ employee.gender }}</v-col>
          <v-col cols="6"><strong>Активен:</strong>
            <v-checkbox-btn
                v-model="employee.isActive"
                :ripple="false"
            ></v-checkbox-btn>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="goBack">Назад</v-btn>
      </v-card-actions>
    </v-card>

    <v-alert type="error" v-else>
      Сотрудник не найден.
    </v-alert>
  </v-container>
</template>

<script setup>
import {useRoute, useRouter} from 'vue-router'
import {onMounted, ref} from 'vue'
import {useEmployeeStore} from '@/store/employeeStore'

const route = useRoute()
const router = useRouter()
const employeeStore = useEmployeeStore()
const employee = ref(null)

onMounted(async () => {
  const id = route.params.id

  if (!employeeStore.employees.length) {
    await employeeStore.fetchEmployees()
  }

  employee.value = employeeStore.employees.find((e) => e.id == id)
})

const goBack = () => {
  router.push('/employees')
}
</script>
