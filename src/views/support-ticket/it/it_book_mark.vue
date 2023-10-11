<template>
  <div>
    <CCard class="mb-3">
      <CCardBody>
        <CRow style="margin-bottom: 22px">
          <CCol xs="auto">
            <div class="d-flex align-items-center">
              <div class="images">
                <CImage :src="Icon_bookmark" />
              </div>
              <div class="ml-2">
                <CCardTitle style="font-size: 25px; line-height: 1.2"><b>Bookmark</b></CCardTitle>
              </div>
            </div>
          </CCol>

        </CRow>
        <svg xmlns="http://www.w3.org/2000/svg" width="175" height="50" viewBox="0 0 220 10" fill="none">
          <rect y="0.259277" width="175" height="2.2588" fill="#EA5252" />
          <path d="M69.4795 0.259277H219V2.51807H69.4795V0.259277Z" fill="#030303" />
        </svg>


        <CRow>
          <CCol xs="auto">
            <CNav variant="tabs">
              <CNavItem>
                <CNavLink active> All </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink>Pending</CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink>Open </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink> Closed </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink> Closed Bug </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink> Cancel </CNavLink>
              </CNavItem>
            </CNav>
          </CCol>
        </CRow>

        <CSmartTable :tableProps="{
          striped: true,
          hover: true,
        }" :items="items" :columns="columns" columnFilter tableFilter cleaner itemsPerPageSelect :itemsPerPage="5"
          pagination>
          <template #status="{ item }">
            <td>
              <CBadge :color="getBadge(item.status)">{{ item.status }}</CBadge>
            </td>
          </template>
          <template #bookmark="{ item }">
            <td>
              <CImage :src="item.bookmark ? Icon_bookmark : Icon_bookmark_not_active" @click="toggleBookmark(item)" />
            </td>
          </template>
        </CSmartTable>
      </CCardBody>
    </CCard>
  </div>
</template>


<script>
import { CIcon } from '@coreui/icons-vue'
import * as icon from '@coreui/icons'
import Icon_bookmark from '@/assets/images/Icon_bookmark.png'
import Icon_bookmark_not_active from '@/assets/images/Icon_bookmark_not_active.png'
import { CCol, CImage, CRow } from '@coreui/vue-pro'

export default {
  name: 'comment',
  components: {
    CIcon,
    CRow,
    CImage,
    CCol,
  },
  data() {
    return {
      icon,
      Icon_bookmark,
      Icon_bookmark_not_active,
      items: [
        {
          ticketId: 'TK001',
          owner: 'test1',
          title: 'Ticket 1',
          status: 'Active',
          type: 'Software',
          startDate: '2023-09-22',
          bookmark: true,
        },
        {
          ticketId: 'TK002',
          owner: 'test2',
          title: 'Ticket 2',
          status: 'Pending',
          type: 'Hardware',
          startDate: '2023-09-23',
          bookmark: true,
        },
        {
          ticketId: 'TK003',
          owner: 'test3',
          title: 'Ticket 3',
          status: 'Closed',
          type: 'Service Request',
          startDate: '2023-09-24',
          bookmark: true,
        },
        // เพิ่มรายการ Ticket
      ],
      columns: [
        { key: 'ticketId', label: 'Ticket ID' },
        { key: 'owner', label: 'Owner' },
        { key: 'title', label: 'Title' },
        { key: 'status', label: 'Status' },
        { key: 'type', label: 'Type' },
        { key: 'startDate', label: 'Start Date' },
        { key: 'bookmark', label: 'Bookmark' },
      ],
    }
  },
  methods: {
    getBadge(status) {
      // สร้างสีตามสถานะของ Ticket
      if (status === 'Active') return 'success';
      if (status === 'Pending') return 'warning';
      if (status === 'Closed') return 'danger';
      return 'primary';
    },
    toggleBookmark(item) {
      item.bookmark = !item.bookmark;
    },
  },
}
</script>

<style>
.mb-3 {
  width: 943px;
  height: 691px;
  flex-shrink: 0;
  border-radius: 18px;
  background: #fff;
}

.images {
  width: 55px;
  height: 39.672px;
  flex-shrink: 0;
}

.Tasks {
  color: #000;
  font-family: Inter;
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding: 4px;
}

.form-inline {
  width: 300px;
  height: 31px;
  flex-shrink: 0;
}

svg {
  vertical-align: left;
  /* จัดวางให้เรียงกลางตามแนวดิ่ง */
  margin-left: 3px;
  /* ปรับระยะห่างระหว่าง <svg> กับข้อความ Bookmark */
  margin-top: -60px;
}
</style>
