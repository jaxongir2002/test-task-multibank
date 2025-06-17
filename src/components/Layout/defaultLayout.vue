<template>
  <v-app>
    <!-- Header -->
    <v-app-bar app color="primary" dark>
      <v-toolbar-title class="text-h6">Документы и Сотрудники</v-toolbar-title>
    </v-app-bar>

    <!-- Sidebar + Content -->
    <v-main>
      <v-container fluid class="pa-0">
        <v-row no-gutters>
          <!-- Sidebar -->
          <v-col cols="2" class="bg-grey-lighten-4" style="min-height: 100vh">
            <v-list>
              <v-list-item
                  v-for="item in menuItems"
                  :key="item.path"
                  :to="item.path"
                  link
                  exact
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-col>

          <!-- Main Content -->
          <v-col cols="10" class="pa-4">
            <router-view />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
const menuItems = [
  { title: 'Сотрудники', path: '/employees' },
  { title: 'Документы', path: '/documents' }
]
</script>
