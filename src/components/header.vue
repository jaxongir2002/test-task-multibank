<template>
  <header class="header">
    <div class="logo-section">
      <img src="https://multibank.uz/local/templates/v2/assets/images/multibank/mb-accent-color-ico.png" alt="Logo"
           class="logo-img"/>
    </div>

    <div class="system-name">
      Multibank
    </div>

    <div class="profile-section">
      <span class="profile-name">John Smith</span>
      <img
          src="https://i.pravatar.cc/40?img=3"
          alt="Profile"
          class="profile-img"
      />
    </div>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
  background-color: white;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.logo-section {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo-img {
  height: 40px;
  width: 40px;
  object-fit: contain;
}

.logo-text {
  font-weight: bold;
  font-size: 20px;
  color: #333;
}

.system-name {
  font-size: 18px;
  font-weight: 600;
  color: #444;
}

.profile-section {
  display: flex;
  align-items: center;
  gap: 10px;
}

.profile-name {
  color: #555;
}

.profile-img {
  width: 40px;
  height: 40px;
  border-radius: 9999px;
  border: 1px solid #ccc;
  object-fit: cover;
}
</style>
