import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('@/components/defaultLayout.vue'),
        children: [
            {
                path: '/employees',
                name: 'Employees',
                component: () => import('@/views/Employees.vue'),
            },
            {
                path: '/employees/:id',
                name: 'EmployeeDetail',
                component: () => import('@/views/EmployeeDetail.vue'),
            },
            {
                path: '/documents',
                name: 'Documents',
                component: () => import('@/views/Documents.vue'),
            },
            {
                path: '/documents/:id',
                name: 'DocumentDetail',
                component: () => import('@/views/DocumentDetail.vue'),
            },
        ]
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
