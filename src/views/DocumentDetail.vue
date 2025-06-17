<template>
  <v-container>
    <v-card v-if="document" class="pa-4">
      <v-card-title>
        Документ №{{ document.number }}
      </v-card-title>
      <v-card-text>

        <v-row>
          <v-col cols="12" sm="6">
            <strong>Тип документа:</strong> {{ document.type }}
          </v-col>
          <v-col cols="12" sm="6">
            <strong>Номер:</strong> {{ document.number }}
          </v-col>
          <v-col cols="12" sm="6">
            <strong>Дата:</strong> {{ document.date }}
          </v-col>
          <v-col cols="12" sm="6" v-if="document.type === 'Счет-фактура'">
            <strong>Тип счет-фактуры:</strong> {{ document.invoiceType }}
          </v-col>
          <v-col cols="12" sm="6" v-if="document.type === 'Доверенность'">
            <strong>ФИО доверенного лица:</strong> {{ document.trusteeName }}
          </v-col>
          <v-col cols="12">
            <strong>Описание:</strong>
            <div>{{ document.description }}</div>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="goBack">Назад</v-btn>
      </v-card-actions>
    </v-card>
    <v-alert v-else type="error" color="red">Документ не найден.</v-alert>
  </v-container>
</template>

<script setup>
import {useRoute, useRouter} from 'vue-router';
import {onMounted, ref} from 'vue';
import {useDocumentStore} from "@/store/documentStore.js";

const route = useRoute();
const router = useRouter();
const documentStore = useDocumentStore();

const document = ref(null);

onMounted(async () => {
  const id = route.params.id

  if (!documentStore.documents.length) {
    await documentStore.fetchDocuments()
  }

  document.value = documentStore.documents.find((e) => e.id == id)
})

const goBack = () => {
  router.push('/documents')
}
</script>
