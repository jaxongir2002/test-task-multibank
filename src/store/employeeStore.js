import {defineStore} from 'pinia'
import axios from "axios";

export const useEmployeeStore = defineStore('employee', {
    state: () => ({
        employees: [],
        total: 0,
        page: 1,
        limit: 10,
        loading: false
    }),
    actions: {
        async fetchEmployees() {
            this.loading = true
            try {
                const res = await axios.get('http://localhost:3000/employees');

                this.employees = res.data;
                this.total = 50
            } catch (error) {
                console.error('Error:', error)
            } finally {
                this.loading = false
            }
        },
        setPage(newPage) {
            this.page = newPage
            this.fetchEmployees()
        }
    }
})
