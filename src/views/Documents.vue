<template>
  <v-row class="mb-3" align="center" justify="space-between">
    <h2 class="text-h5">Список документы</h2>
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
</template>

<script setup>
import {onMounted, ref} from 'vue'
import {useDocumentStore} from '@/store/documentStore'
import {useEmployeeStore} from '@/store/employeeStore'
import {useRouter} from 'vue-router'

const documentStore = useDocumentStore();
const employeeStore = useEmployeeStore();
const router = useRouter();

const selectedEmployeeId = ref(null)

const headers = [
  {title: 'Тип документа', key: 'type'},
  {title: 'Номер', key: 'number'},
  {title: 'Дата', key: 'date'},
  {title: 'Описание', key: 'description'},
  {title: 'Тип счет-фактуры', key: 'invoiceType'},
  {title: 'ФИО доверенного человека', key: 'trusteeName'},
  {title: 'Действия', key: 'actions', sortable: false}
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
