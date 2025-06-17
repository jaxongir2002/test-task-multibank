<template>
  <Header/>

  <div class="layout">
    <aside class="sidebar">
      <nav>
        <ul class="menu">
          <li v-for="item in menuItems" :key="item.path">
            <router-link :to="item.path" class="menu-link" active-class="active">
              {{ item.title }}
            </router-link>
          </li>
        </ul>
      </nav>
    </aside>

    <main class="main-content">
      <router-view/>
    </main>
  </div>
</template>

<script setup>
import Header from "@/components/header.vue";

const menuItems = [
  {title: 'Сотрудники', path: '/employees'},
  {title: 'Документы', path: '/documents'}
]
</script>
<style scoped>
.layout {
  display: flex;
  min-height: 100vh;
  font-family: Arial, sans-serif;
}

/* Sidebar */
.sidebar {
  width: 220px;
  background-color: #f5f5f5;
  padding: 16px;
  box-shadow: 2px 0 4px rgba(0, 0, 0, 0.05);
}

.menu {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu-link {
  display: block;
  padding: 10px 14px;
  color: #333;
  text-decoration: none;
  border-radius: 4px;
  margin-bottom: 4px;
  transition: background-color 0.2s ease;
}

.menu-link:hover {
  background-color: #e0e0e0;
}

.menu-link.active {
  background-color: #d6d6d6;
  font-weight: bold;
}

/* Main content */
.main-content {
  flex: 1;
  padding: 24px;
  background-color: #fafafa;
}
</style>
