import {defineStore} from 'pinia'
import axios from "axios";

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
                const res = await axios.get(`${import.meta.env.VITE_API_URL}documents?_page=${this.page}&_per_page=${this.limit}`);

                this.documents = res.data.data;
                this.total = res.data.pages;
                // Filter by employee
                if (this.employeeFilter) {
                    this.documents = this.documents.filter(doc => doc.employeeId === this.employeeFilter)
                }

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
        setLimit(newLimit) {
            this.limit = newLimit
            this.fetchDocuments()
        },
        setEmployeeFilter(id) {
            this.employeeFilter = id
            this.page = 1
            this.fetchDocuments()
        }
    }
})
