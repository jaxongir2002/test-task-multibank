import {defineStore} from 'pinia'

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
                this.employees = [
                    {
                        id: 1,
                        firstName: 'John',
                        lastName: 'Smith',
                        passport: 'AA123456',
                        birthDate: '1990-01-01',
                        gender: 'М',
                        isActive: true
                    },
                    {
                        id: 2,
                        firstName: 'Jane',
                        lastName: 'Doe',
                        passport: 'BB654321',
                        birthDate: '1992-05-12',
                        gender: 'Ж',
                        isActive: false
                    }
                ]
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
