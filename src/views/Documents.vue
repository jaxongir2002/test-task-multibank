<<<<<<< HEAD
<script setup lang="ts">

</script>

<template>

</template>

<style scoped>

</style>
=======
<template>
  <v-container>
    <v-row class="mb-4" align="center" justify="space-between">
      <v-col cols="12" sm="4">
        <v-select
            v-model="selectedEmployeeId"
            :items="employeeStore.employees"
            item-title="firstName"
            item-value="id"
            label="Фильтр по сотруднику"
            clearable
            @update:modelValue="filterDocuments"
        />
      </v-col>
    </v-row>

    <v-data-table
        :headers="headers"
        :items="documentStore.documents"
        :items-per-page="documentStore.limit"
        :loading="documentStore.loading"
        :page.sync="documentStore.page"
        :server-items-length="documentStore.total"
        class="elevation-1"
        @update:page="documentStore.setPage"
    >
      <template #item.actions="{ item }">
        <v-btn size="small" @click="goToDetail(item.id)">Открыть</v-btn>
      </template>
    </v-data-table>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useDocumentStore } from '@/store/documentStore'
import { useEmployeeStore } from '@/store/employeeStore'
import { useRouter } from 'vue-router'

const documentStore = useDocumentStore()
const employeeStore = useEmployeeStore()
const router = useRouter()

const selectedEmployeeId = ref(null)

const headers = [
  { text: 'ID', value: 'id' },
  { text: 'Тип документа', value: 'type' },
  { text: 'Номер', value: 'number' },
  { text: 'Дата', value: 'date' },
  { text: 'Описание', value: 'description' },
  { text: 'Действия', value: 'actions', sortable: false }
]

const goToDetail = (id) => {
  router.push(`/documents/${id}`)
}

const filterDocuments = () => {
  documentStore.setEmployeeFilter(selectedEmployeeId.value)
}

onMounted(() => {
  employeeStore.fetchEmployees()
  documentStore.fetchDocuments()
})
</script>
>>>>>>> 0c8288e (add document page)
