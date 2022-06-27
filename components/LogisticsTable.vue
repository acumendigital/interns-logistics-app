<template>
  <div v-if="data !== null" class="saturn-table-ctn">
    <div class="table-header">
      <div class="table-title">
        {{ dataMutable.title }}
      </div>
      <div v-if="data.searchBy !== undefined" class="search-input">
        <input type="text" :placeholder="`Search by ${searchBy.label}`" @input="searchLabels($event.target.value)">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18C14.866 18 18 14.866 18 11C18 7.13401 14.866 4 11 4ZM2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11C20 15.9706 15.9706 20 11 20C6.02944 20 2 15.9706 2 11Z" fill="#cecece" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9429 15.9429C16.3334 15.5524 16.9666 15.5524 17.3571 15.9429L21.7071 20.2929C22.0977 20.6834 22.0977 21.3166 21.7071 21.7071C21.3166 22.0976 20.6834 22.0976 20.2929 21.7071L15.9429 17.3571C15.5524 16.9666 15.5524 16.3334 15.9429 15.9429Z" fill="#cecece" />
        </svg>
      </div>
    </div>
    <div :class="[searchMode ? 'search-mode' : 'no-search-mode']">
      <div class="saturn-table-wrapper">
        <table :class="['table', {'full-width': dataMutable.styles.fullWidth}]">
          <tr class="header-row">
            <th>
              <button class="clear-btn checkbox" @click="checkAllRows">
                <svg
                  v-show="allRowsChecked"
                  class="checked reveals"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.21 14.75C10.303 14.8437 10.4136 14.9181 10.5354 14.9689C10.6573 15.0197 10.788 15.0458 10.92 15.0458C11.052 15.0458 11.1827 15.0197 11.3046 14.9689C11.4264 14.9181 11.537 14.8437 11.63 14.75L15.71 10.67C15.8983 10.4817 16.0041 10.2263 16.0041 9.96C16.0041 9.6937 15.8983 9.4383 15.71 9.25C15.5217 9.0617 15.2663 8.95591 15 8.95591C14.7337 8.95591 14.4783 9.0617 14.29 9.25L10.92 12.63L9.71 11.41C9.5217 11.2217 9.2663 11.1159 9 11.1159C8.7337 11.1159 8.4783 11.2217 8.29 11.41C8.1017 11.5983 7.99591 11.8537 7.99591 12.12C7.99591 12.3863 8.1017 12.6417 8.29 12.83L10.21 14.75ZM21 2H3C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3V21C2 21.2652 2.10536 21.5196 2.29289 21.7071C2.48043 21.8946 2.73478 22 3 22H21C21.2652 22 21.5196 21.8946 21.7071 21.7071C21.8946 21.5196 22 21.2652 22 21V3C22 2.73478 21.8946 2.48043 21.7071 2.29289C21.5196 2.10536 21.2652 2 21 2ZM20 20H4V4H20V20Z" fill="#FF691C" />
                </svg>
                <svg
                  v-show="!allRowsChecked"
                  class="unchecked reveals"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1V19C0 19.2652 0.105357 19.5196 0.292893 19.7071C0.48043 19.8946 0.734784 20 1 20H19C19.2652 20 19.5196 19.8946 19.7071 19.7071C19.8946 19.5196 20 19.2652 20 19V1C20 0.734784 19.8946 0.48043 19.7071 0.292893C19.5196 0.105357 19.2652 0 19 0ZM18 18H2V2H18V18Z" fill="#7C86A1" />
                </svg>
              </button>
            </th>
            <th v-for="(header) in dataMutable.headers" :key="header.key" :class="{'no-filter': !header.isFilterable}" @click="sortColumn(header)">
              <span> {{ header.label }} </span>
              <span>
                <!-- <svg
                  style="transform: rotate(180deg)"
                  class="filter-icon"
                  width="7"
                  height="13"
                  viewBox="0 0 7 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path opacity="0.4" d="M3.5 0L6.53109 5.25H0.468911L3.5 0Z" fill="#7C86A1" />
                  <path d="M3.5 13L6.53109 7.75H0.468911L3.5 13Z" fill="#7C86A1" />
                </svg> -->
              </span>
            </th>
            <th>
              <!-- Action -->
            </th>
          </tr>
          <tr v-for="(label, index) in (searchMode ? searchedLabels : currentLabels)" :key="index" class="table-row">
            <td>
              <button class="clear-btn checkbox" @click="toggleCheck(label)">
                <svg
                  v-show="checkedRowsArray.includes(label._id)"
                  class="checked reveals"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.21 14.75C10.303 14.8437 10.4136 14.9181 10.5354 14.9689C10.6573 15.0197 10.788 15.0458 10.92 15.0458C11.052 15.0458 11.1827 15.0197 11.3046 14.9689C11.4264 14.9181 11.537 14.8437 11.63 14.75L15.71 10.67C15.8983 10.4817 16.0041 10.2263 16.0041 9.96C16.0041 9.6937 15.8983 9.4383 15.71 9.25C15.5217 9.0617 15.2663 8.95591 15 8.95591C14.7337 8.95591 14.4783 9.0617 14.29 9.25L10.92 12.63L9.71 11.41C9.5217 11.2217 9.2663 11.1159 9 11.1159C8.7337 11.1159 8.4783 11.2217 8.29 11.41C8.1017 11.5983 7.99591 11.8537 7.99591 12.12C7.99591 12.3863 8.1017 12.6417 8.29 12.83L10.21 14.75ZM21 2H3C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3V21C2 21.2652 2.10536 21.5196 2.29289 21.7071C2.48043 21.8946 2.73478 22 3 22H21C21.2652 22 21.5196 21.8946 21.7071 21.7071C21.8946 21.5196 22 21.2652 22 21V3C22 2.73478 21.8946 2.48043 21.7071 2.29289C21.5196 2.10536 21.2652 2 21 2ZM20 20H4V4H20V20Z" fill="#FF691C" />
                </svg>
                <svg
                  v-show="!checkedRowsArray.includes(label._id)"
                  class="unchecked reveals"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1V19C0 19.2652 0.105357 19.5196 0.292893 19.7071C0.48043 19.8946 0.734784 20 1 20H19C19.2652 20 19.5196 19.8946 19.7071 19.7071C19.8946 19.5196 20 19.2652 20 19V1C20 0.734784 19.8946 0.48043 19.7071 0.292893C19.5196 0.105357 19.2652 0 19 0ZM18 18H2V2H18V18Z" fill="#7C86A1" />
                </svg>
              </button>
            </td>
            <td v-for="(header) in dataMutable.headers" :key="header.key">
              <!--
            Information here renders based on the type of the [label]
            Valid types are 'date/time', 'currency'
          -->
              <span v-if="label[header.key + 'Color'] !== undefined" :style="{ color: label[header.key + 'Color'] }">
                {{ formatCell(header.type, label[header.key]) }}
              </span>
              <span v-else>
                {{ formatCell(header.type, label[header.key]) }}
              </span>
            </td>
            <td class="action">
              <button v-if="dataMutable.actions !== undefined && dataMutable.actions.length > 0" class="clear-btn" @click.capture="toggleActionsVisibility(index)">
                <svg
                  width="18"
                  height="4"
                  viewBox="0 0 18 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 2C0 0.9 0.9 0 2 0C3.1 0 4 0.9 4 2C4 3.1 3.1 4 2 4C0.9 4 0 3.1 0 2ZM11 2C11 3.1 10.1 4 9 4C7.9 4 7 3.1 7 2C7 0.9 7.9 0 9 0C10.1 0 11 0.9 11 2ZM16 0C14.9 0 14 0.9 14 2C14 3.1 14.9 4 16 4C17.1 4 18 3.1 18 2C18 0.9 17.1 0 16 0Z" fill="#0082FA" />
                </svg>
                <div v-if="visibleActionIndex === index" class="actions-container">
                  <button v-for="(action, actionIndex) in dataMutable.actions" :key="actionIndex" class="clear-btn" @click.capture="action.action(label)">
                    <span :style="{ color: action.name.toLowerCase() === 'delete' || action.name.toLowerCase() === 'disable' ? '#962727E6' : '' }">
                      {{ action.name }}
                    </span>
                  </button>
                </div>
              </button>
              <button v-else class="clear-btn" @click="$emit('action', label)">
                <svg v-if="dataMutable.iconType === 'arrow'" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L5 5L9 1" stroke="#777777" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <svg v-else-if="dataMutable.iconType === 'three-dots'" width="26" height="6" viewBox="0 0 26 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.75922 0.440232C2.08027 0.440232 1.42902 0.709873 0.949024 1.19004C0.468842 1.67004 0.199219 2.32128 0.199219 3.00023C0.199219 3.67918 0.46886 4.33043 0.949024 4.81043C1.42902 5.29061 2.08027 5.56023 2.75922 5.56023C3.43817 5.56023 4.08941 5.29059 4.56941 4.81043C5.0496 4.33043 5.31922 3.67918 5.31922 3.00023C5.31922 2.32128 5.04958 1.67004 4.56941 1.19004C4.08941 0.709855 3.43817 0.440232 2.75922 0.440232ZM12.9992 0.440232C12.3203 0.440232 11.669 0.709873 11.189 1.19004C10.7088 1.67004 10.4392 2.32128 10.4392 3.00023C10.4392 3.67918 10.7089 4.33043 11.189 4.81043C11.669 5.29061 12.3203 5.56023 12.9992 5.56023C13.6782 5.56023 14.3294 5.29059 14.8094 4.81043C15.2896 4.33043 15.5592 3.67918 15.5592 3.00023C15.5592 2.31827 15.2873 1.66451 14.8033 1.184C14.3196 0.703455 13.664 0.435798 12.9821 0.440232H12.9992ZM23.2392 0.440232C22.5603 0.440232 21.909 0.709873 21.429 1.19004C20.9488 1.67004 20.6792 2.32128 20.6792 3.00023C20.6792 3.67918 20.9489 4.33043 21.429 4.81043C21.909 5.29061 22.5603 5.56023 23.2392 5.56023C23.9182 5.56023 24.5694 5.29059 25.0494 4.81043C25.5296 4.33043 25.7992 3.67918 25.7992 3.00023C25.7992 2.31452 25.5244 1.65756 25.0358 1.17632C24.5474 0.69509 23.8864 0.429901 23.2008 0.440232H23.2392Z" fill="black"/>
                </svg>
              </button>
            </td>
          </tr>
        </table>
      </div>
      <div class="pagination-bulk">
        <div v-if="dataMutable.bulkActions !== undefined && dataMutable.bulkActions.length > 0" class="bulk">
          <span>
            Bulk Action:
          </span>
          <select v-model="selectedAction">
            <option :value="null">
              Choose Action
            </option>
            <option v-for="action in dataMutable.bulkActions" :key="action.key" :value="action.event">
              {{ action.name }}
            </option>
          </select>
        </div>
        <div class="pagination">
          <span>
            PAGE {{ (endRow / data.rowPerPage) }} of {{ lastPageValue }}
          </span>
          <span>
            <button class="nav-btn first" @click="firstPage">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="4" />
                <path d="M23.1602 11.41L18.5802 16L23.1602 20.59L21.7502 22L15.7502 16L21.7502 10L23.1602 11.41Z" fill="#8692A7" />
                <path d="M17.1602 11.41L12.5802 16L17.1602 20.59L15.7502 22L9.75016 16L15.7502 10L17.1602 11.41Z" fill="#8692A7" />
              </svg>
            </button>
            <button class="nav-btn previous" @click="previousPage">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="4" />
                <path d="M17.1602 11.41L12.5802 16L17.1602 20.59L15.7502 22L9.75016 16L15.7502 10L17.1602 11.41Z" fill="#8692A7" />
              </svg>
            </button>
            <div class="space" />
            <button class="nav-btn next" @click="nextPage">
              <svg
                style="transform: rotate(180deg)"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="32" height="32" rx="4" />
                <path d="M17.1602 11.41L12.5802 16L17.1602 20.59L15.7502 22L9.75016 16L15.7502 10L17.1602 11.41Z" fill="#8692A7" />
              </svg>
            </button>
            <button class="nav-btn last" @click="lastPage">
              <svg
                style="transform: rotate(180deg)"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="32" height="32" rx="4" />
                <path d="M23.1602 11.41L18.5802 16L23.1602 20.59L21.7502 22L15.7502 16L21.7502 10L23.1602 11.41Z" fill="#8692A7" />
                <path d="M17.1602 11.41L12.5802 16L17.1602 20.59L15.7502 22L9.75016 16L15.7502 10L17.1602 11.41Z" fill="#8692A7" />
              </svg>
            </button>
          </span>
          <span>
            {{ data.rowPerPage }} rows per page
          </span>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="stuff">
    Add <b>Correct and Full</b> Data to mount table
  </div>
</template>

<script>
export default {
  name: 'SaturnTable',
  props: {
    /**
     * @name data
     * @type {Object}
     * @returns Encapsulated Data of to be rendered by DOM table
     *  @name data.title is the main title of the Table, must have a type of String
     *  @name data.rowPerPage
     *  @name data.searchBy
     *  @name data.headers are the contents of each column in the table, must have a type of Array<Object>
     *  @name data.labels are the contents in each cell respective to the headers initially defined, must have a type of Array<Object>
     *  @name data.styles are used to manipulate the default look of the table, must have a type of Object
     *   @name data.styles.fullWidth boolean value to apply a full width to the table's vertical edges, defaults to false
     *   @name data.styles.actionText string value to replace the action icon, if [actionText] is undefined, icon is used
     */
    data: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      checkedRows: new Set(),
      checkedRowsArray: [],
      dataMutable: { ...this.data },
      selectedAction: null,
      startRow: 0,
      endRow: this.data.rowPerPage,
      searchMode: false,
      searchedLabels: [],
      visibleActionIndex: -1
    }
  },
  computed: {
    searchBy () {
      const labelId = this.data.searchBy
      for (const header of this.data.headers) {
        if (header.key === labelId) {
          return header
        }
      }
      return null
    },
    allRowsChecked () {
      for (const label of this.currentLabels) {
        if (!this.checkedRowsArray.includes(label._id)) {
          return false
        }
      }
      return true
    },
    lastPageValue () {
      return Math.ceil(this.data.labels.length / this.data.rowPerPage)
    },
    months () {
      return ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December']
    },
    currentLabels () {
      return this.data.labels.slice(this.startRow, this.endRow)
    }
  },
  watch: {
    selectedAction: {
      immediate: true,
      handler (val, _old) {
        if (val !== null) {
          this.$emit(val, this.checkedRowsArray)
        }
      }
    }
  },
  created () {
    this.$emit('created')
  },
  mounted () {
    this.$emit('mounted')
  },
  methods: {
    formatDate (dateString) {
      const date = new Date(dateString)
      const dayString = `${this.months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
      const timeString = date.toLocaleTimeString()
      return `${dayString},  ${timeString}`
    },
    formatCurrency (num) {
      return num ? '₦' + num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') : ''
    },
    filterLabels (query) {
      query = query.toLowerCase()
      this.searchedLabels = [...this.dataMutable.labels].filter(label => label[this.data.searchBy].toLowerCase().includes(query))
    },
    searchLabels (query) {
      if (query.length > 0) {
        this.searchMode = true
        this.filterLabels(query)
      } else {
        this.searchMode = false
      }
    },
    /**
     * @type {String}
     * @returns formatted and more accurate string based on the type assigned in {dataMutable.headers[i].key}
     *  valid keys are 'date/time', 'currency'
     */
    formatCell (type, rawContent) {
      if (type === 'date/time') {
        return this.formatDate(rawContent)
      } else if (type === 'currency') {
        return this.formatCurrency(rawContent)
      } else {
        return rawContent
      }
    },
    /**
     * Method to check all rows in the table
     * The Vue Framwework's reactivity is limited with data structures such as sets,
     * ...as such an array is used to check whether a label has been checked [line 238]
     */
    checkAllRows () {
      if (this.allRowsChecked) {
        for (const label of this.dataMutable.labels.slice(this.startRow, this.endRow)) {
          this.checkedRows.delete(label._id)
        }
      } else {
        for (const label of this.dataMutable.labels.slice(this.startRow, this.endRow)) {
          this.checkedRows.add(label._id)
        }
      }
      this.checkedRowsArray = Array.from(this.checkedRows)
    },
    /**
     * Method to check a row in the table
     * @param label identifies the specific row that is to be checked
     * The Vue Framwework's reactivity is limited with data structures such as sets,
     * ...as such an array is used to check whether a label has been checked [line 252]
     */
    toggleCheck (label) {
      if (this.checkedRows.has(label._id)) {
        this.checkedRows.delete(label._id)
      } else {
        this.checkedRows.add(label._id)
      }
      this.checkedRowsArray = Array.from(this.checkedRows)
    },
    /**
     * Method to sort column of data clicked according to { header.type }
     * @param header contains information about the column that is to be sorted
     */
    sortColumn (header) {
      switch (header.type) {
        case 'string':
          this.dataMutable.labels.sort((a, b) => {
            const stringA = a[header.key].toString().toLowerCase()
            const stringB = b[header.key].toString().toLowerCase()
            return (stringA > stringB ? 1 : (stringB > stringA ? -1 : 0))
          })
          break
        case 'currency':
        case 'number':
          this.dataMutable.labels.sort((a, b) => {
            const numberA = Number(a[header.key])
            const numberB = Number(b[header.key])
            return (numberA > numberB ? -1 : 1)
          })
          break
        case 'date/time':
          this.dataMutable.labels.sort((a, b) => {
            const dateA = new Date(a[header.key]).getTime()
            const dateB = new Date(b[header.key]).getTime()
            return (dateA > dateB ? -1 : 1)
          })
          break
      }
    },
    nextPage () {
      if (this.endRow < this.dataMutable.labels.length) {
        this.startRow += this.data.rowPerPage
        this.endRow += this.data.rowPerPage
      }
    },
    previousPage () {
      if (this.startRow !== 0) {
        this.startRow -= this.data.rowPerPage
        this.endRow -= this.data.rowPerPage
      }
    },
    firstPage () {
      this.startRow = 0
      this.endRow = this.data.rowPerPage
    },
    lastPage () {
      const lastPageValue = this.lastPageValue * this.data.rowPerPage
      this.endRow = lastPageValue
      this.startRow = lastPageValue - this.data.rowPerPage
    },
    toggleActionsVisibility (index) {
      if (this.visibleActionIndex === index) {
        this.visibleActionIndex = -1
      } else {
        this.visibleActionIndex = index
      }
    }
  }
}
</script>

<style scoped>
/* Global Styles */
.clear-btn {
  width: 100%;
  text-align: left;
  border: none;
  background: transparent;
  cursor: pointer;
}
.pagination-bulk {
  margin: 81px 0 24px 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: #4B545A;
  padding: 0 24px;
}
.pagination-bulk > .pagination {
  display: flex;
  align-items: center;
  color: #4B545A;
  justify-content: flex-end;
}
.pagination-bulk > .pagination > span {
  margin-left: 16px;
  display: flex;
  align-items: center;
}
.bulk select {
  border: 1px solid #DFE3E8;
  box-sizing: border-box;
  border-radius: 4px;
  height: 40px;
  padding: 8px 0;
  margin-left: 8px;
}
.nav-btn {
  text-align: left;
  border: 1px solid #cecece;
  border-radius: 4px;
  background: transparent;
  cursor: pointer;
  padding: 0 2px;
  margin-right: 4px;
}
.nav-btn.active, .nav-btn:focus {
  border: 2px solid #0547e067;
}
.table-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.search-input {
  margin-right: 24px;
  position: relative;
}
.search-input svg {
  position: absolute;
  left: 12px;
  top: 20%;
}
.table-header input {
  height: 45px;
  padding: 0 12px;
  padding-left: 46px;
  border-radius: 8px;
  min-width: 280px;
  font-size: 16px;
  outline: none;
  border: 1px solid #cecece;
}
.table-title {
  font-size: 1.25rem;
  font-weight: 600;
  padding: 0 24px;
}
.clear-btn.checkbox {
  display: grid;
  place-items: center;
}
.link {
  text-decoration: underline;
  text-align: left;
  height: 24px;
}
.count-buttons {
  margin: 0 16px;
}
button .count {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.saturn-table-ctn {
}
.table {
  /* margin: 24px 0; */
  border-spacing: 0px;
  overflow-x: auto;
}
.space {
  padding: 0 8px;
}
.saturn-table-wrapper {
  overflow-x: auto;
}
.full-width {
  width: 100%;
}
.header-row {
  text-align: left;
  background: #fffceb91;
  font-size: 16px;
  line-height: 18px;
}
.table-row:nth-of-type(odd) {
  text-align: left;
  background: #FFF;
  font-size: 16px;
  line-height: 18px;
}
th {
  color: #cc5500dc;
}
th {
  padding: 24px 14px;
  white-space: nowrap;
  cursor: pointer;
}
/* th:first-of-type, td:first-of-type {
  padding-left: 50px;
} */

th:last-of-type, td:last-of-type {
  padding-right: 50px;
}
th.no-filter {
  pointer-events: none;
  cursor: default;
}
th.no-filter .filter-icon {
  display: none;
}
td {
  padding: 20px 14px;
  white-space: nowrap;
  font-weight: 400;
  font-family: 'DM Sans Regular';
  font-size: 1rem;
}
tr{
  background-color: #FFFF;
  font-weight: 400;
  font-family: 'DM Sans Regular';
  font-size: 1rem;
  line-height: 1.5rem;
}
.action {
  position: relative;
}
.action .actions-container {
  position: absolute;
  top: 50px;
  right: 110px;
  display: grid;
  background-color: #FFFFFF;
  border: 1px solid #E1EDFE;
  box-shadow: -1px 10px 15px rgba(18, 94, 164, 0.08);
  z-index: 1;
}
.actions-container button {
  padding: 24px 32px;
  font-size: 16px;
  line-height: 30px;
  color: #30425AE6;
}
.actions-container button:hover {
  background-color: #F9FAFB;
}
/* Animations */
.reveals {
  animation: reveals .3s ease-in-out;
  -webkit-animation: reveals .3s ease-in-out;
}
@keyframes reveals {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  60% {
    opacity: 1;
    transform: scale(1);
  }
  80% {
    opacity: 1;
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@media screen and (max-width: 800px) {
  .pagination-bulk {
    flex-direction: column;
    align-items: flex-start;
  }
  .bulk {
    margin-bottom: 12px;
  }
  .pagination {
    font-size: 13px;
  }
  .pagination-bulk > .pagination > span {
    margin-left: 0;
    margin-right: 8px;
  }
}
@media screen and (max-width: 500px) {
  .table-header {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
  }
  .table-title {
    font-size: 17px;
  }
  .search-input {
    margin: auto;
    margin-top: 8px;
    width: 90%;
  }
  .search-input input {
    width: 100%;
    min-width: auto;
  }
  th,td {
    font-size: 13px;
  }
  td {
    padding: 12px 10px;
  }
  .pagination {
    font-size: 13px;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
  }
  .pagination span:nth-child(1), .pagination span:nth-last-child(1) {
    display: none;
  }
  .count-buttons {
    margin: 8px 0;
  }
  .count-buttons button {
    display: none;
  }
}
</style>
