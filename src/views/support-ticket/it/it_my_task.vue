<template>
  <div>
    <CCard class="mb-3">
      <CCardBody>
        <CRow style="margin-bottom: 22px">
          <CCol xs="auto">
            <div Class="clearfix">
              <CImage Class="images_Ticket" :src="images_Ticket" width="55" height="40"/>
            </div>
          </CCol>
          <CCol xs="auto">
            <div Class="text-end p-2">
              <CCardTitle> <b> My Tasks </b></CCardTitle>
            </div>
          </CCol>
          <div Class="line">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="219"
              height="3"
              viewBox="0 0 219 3"
              fill="none"
            >
              <rect
                y="0.259277"
                width="215.682"
                height="2.2588"
                fill="#EA5252"
              />
              <path
                d="M69.4795 0.259277H219V2.51807H69.4795V0.259277Z"
                fill="#030303"
              />
            </svg>
          </div>
        </CRow>

        <CSmartTable
          clickableRows
          :tableProps="{
            striped: true,
            hover: true,
          }"
          :activePage="2"
          footer
          header
          :items="items"
          :columns="columns"
          columnFilter
          tableFilter
          cleaner
          itemsPerPageSelect
          :itemsPerPage="5"
          columnSorter
          :sorterValue="{ column: 'status', state: 'asc' }"
          pagination
        >
          <template #avatar="{ item }">
            <td>
              <CAvatar :src="$withBase(`/images/avatars/${item.avatar}`)" />
            </td>
          </template>
          <template #status="{ item }">
            <td>
              <CBadge :color="getBadge(item.status)">{{ item.status }}</CBadge>
            </td>
          </template>
          <template #show_details="{ item, index }">
            <td class="py-2">
              <CButton
                color="primary"
                variant="outline"
                square
                size="sm"
                @click="toggleDetails(item, index)"
              >
                {{ Boolean(item._toggled) ? 'Hide' : 'Show' }}
              </CButton>
            </td>
          </template>
          <template #details="{ item }">
            <CCollapse :visible="this.details.includes(item._id)">
              <CCardBody>
                <h4>
                  {{ item.username }}
                </h4>
                <p class="text-muted">User since: {{ item.registered }}</p>
                <CButton size="sm" color="info" class="">
                  User Settings
                </CButton>
                <CButton size="sm" color="danger" class="ml-1">
                  Delete
                </CButton>
              </CCardBody>
            </CCollapse>
          </template>
        </CSmartTable>
      </CCardBody>
    </CCard>
  </div>
</template>

<script>
import { CIcon } from '@coreui/icons-vue'
import * as icon from '@coreui/icons'
import images_Ticket from '@/assets/images/Ticket.png'
import { CCol, CImage, CRow } from '@coreui/vue-pro'
export default {
  name: 'comment',
  components: {
    CIcon,
    CRow,
    CImage,
    CCol,
  },
  setup() {
    return {
      images_Ticket,
      icon,
    }
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
  max-width: 100%;
  display: flex;
}

.clearfix {
  flex-shrink: 0;
}

.text-end {
  padding-left: 0px;
  flex-shrink: 0;
  color: #000;
  padding-left: 0%;
  margin-left: 0px;
}

.line {
  margin-top: auto;
}
</style>
