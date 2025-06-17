import {defineStore} from 'pinia'

export const useDocumentStore = defineStore('document', {
    state: () => ({
        documents: [],
        total: 0,
        page: 1,
        limit: 10,
        loading: false,
        employeeFilter: null
    }),
    actions: {
        async fetchDocuments() {
            this.loading = true
            try {
                // Mock data:
                let docs = [{
                    id: 1,
                    type: 'Счет-фактура',
                    number: `DOC-1000`,
                    date: `2023-06-11`,
                    description: `Описание документа 2`,
                    employeeId: 1
                },
                    {
                        id: 2,
                        type: 'Доверенность',
                        number: `DOC-1001`,
                        date: `2023-06-12`,
                        description: `Описание документа 3`,
                        employeeId: 2
                    }]

                // Filter by employee
                if (this.employeeFilter) {
                    docs = docs.filter(doc => doc.employeeId === this.employeeFilter)
                }

                this.documents = docs
                this.total = 50
            } catch (error) {
                console.error('Ошибка загрузки документов:', error)
                this.documents = []
            } finally {
                this.loading = false
            }
        },
        setPage(newPage) {
            this.page = newPage
            this.fetchDocuments()
        },
        setEmployeeFilter(id) {
            this.employeeFilter = id
            this.page = 1
            this.fetchDocuments()
        }
    }
})
