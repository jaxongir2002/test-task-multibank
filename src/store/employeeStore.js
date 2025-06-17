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
                const res = await axios.get(`http://localhost:3000/employees?_page=${this.page}&_limit=${this.limit}`);

                this.employees = res.data;
                this.total = 2;
            } catch (error) {
                console.error('Error:', error)
            } finally {
                this.loading = false
            }
        },
        setPage(newPage) {
            this.page = newPage
            this.fetchEmployees()
        },
        setLimit(newLimit) {
            this.limit = newLimit
            this.fetchEmployees()
        }
    }
})
