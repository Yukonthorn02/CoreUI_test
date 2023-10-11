<template>
  <div class="bg-white rounded" style="width: 100%; height: 845px">
    <!-- Head Priorities List -->
    <div class="bg-white rounded px-5 py-3 ">
      <h1 class="underline">Priorities List</h1>
    </div>

    <!-- body Priorities List -->
    <div class="py-5 px-5">
      <CButton class="px-5" variant="ghost">User</CButton>
      <CButton class="px-5" variant="ghost">Priority</CButton>

      <!-- Search bar -->
      <div class="container pt-5">
        <div class="row justify-content-center w-75">
          <div class="col-md-6">
            <form class="form-inline">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control rounded-start-pill"
                  placeholder="Search"
                />
                <div class="input-group-append">
                  <button
                    class="btn btn-primary rounded-start-0 rounded-end-circle"
                    type="submit"
                  >
                    <CIcon :icon="icon.cilMagnifyingGlass" size="xl" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <!-- End Search bar -->

      <!-- Smart Table -->
      <div class="container">
      <CSmartTable
        class="w-50"
        :active-page="3"
        cleaner
        column-filter
        column-sorter
        :columns="columns"
        clickable-rows
        header
        :items-per-page="5"
        items-per-page-select
        :items="items"
        pagination
        table-filter
        :table-props="{
          striped: true,
          hover: true,
        }"
      >
      <!---->
        <template #status_eng="{ item }">
          <td>
            <CBadge :color="getBadge(item.status_eng)">{{ item.status_eng }}</CBadge>
          </td>
        </template>
        <template #show_details="{ item }">
          <td class="py-2">
            
            <CDropdown src="More_Priority">
              
              <CDropdownToggle ><img :src="More_Priority"  /></CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem href="#">Edit</CDropdownItem>
                <CDropdownItem href="#" class="text-danger">Delete</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>

            <!-- <input type="image" :src="More_Priority" alt="button" /> -->

            <!-- <CButton type="submit" :src = "More_Priority"></CButton> -->
            <!-- <CImage :src = "More_Priority" type="button" class="dropbtn"/> -->

            <!-- :src = "More_Priority" -->
            <!-- @click="toggleDetails(item)" -->
          </td>
        </template>
      </CSmartTable>
      </div>
      <!-- END Smart Table -->
    </div>
  </div>
</template>




<script>
import { CIcon } from '@coreui/icons-vue'
import * as icon from '@coreui/icons'
import More_Priority from '@/assets/images/More_Priority.png'
import { CAvatar, CButton, CCol, CImage, CRow } from '@coreui/vue-pro'

export default {
  components: {
    CIcon,
    CRow,
    CImage,
    CCol,
    CAvatar,
    CButton,
  },
  setup() {
    return {
      icon,
      More_Priority,
    }
  },

  data() {
    return {
      columns: [
        {
          key: 'number',
          label: '#',
          filter: false,
          sorter: false,
          _style: { width: '5%' },
        },
        {
          key: 'status_eng',
          label: 'NAME (ENG)',
          _style: { width: '20%' },
        },
        {
          key: 'status_th',
          label: 'NAME (TH)',
          _style: { width: '20%' },
        },
        {
          key: 'level_of_priority',
          label: 'LEVEL 0F PRIORITY',
          _style: { width: '20%' },
        },
        
        {
          key: 'show_details',
          label: 'MORE',
          _style: { width: '1%' },
          filter: false,
          sorter: false,
        },
      ],
      details: [],
      items: [
        {
          id: 1,
          number: '1',
          status_eng : 'High',
          status_th : 'สำคัญมาก',
          level_of_priority : '3',
        },
        {
          id: 2,
          number: '2',
          status_eng : 'Medium',
          status_th : 'สำคัญปานกลาง',
          level_of_priority : '2',
        },
        {
          id: 3,
          number: '3',
          status_eng : 'Low',
          status_th : 'สำคัญเล็กน้อย',
          level_of_priority : '1',
          _selected: true,
        },
        {
          id: 4,
          number: '4',
          status_eng : 'High',
          status_th : 'สำคัญมาก',
          level_of_priority : '3',
        },
        {
          id: 5,
          number: '5',
          status_eng : 'Low',
          status_th : 'สำคัญเล็กน้อย',
          level_of_priority : '1',
        },
      ],
    }
  },
  methods: {
    getBadge(status_eng) {
      switch (status_eng) {
        case 'Low':
          return 'success'
        case 'Medium':
          return 'warning'
        case 'High':
          return 'danger'
        default:
          'primary'
      }
    },
    toggleDetails(item) {
      if (this.details.includes(item._id)) {
        this.details = this.details.filter((_item) => _item !== item._id)
        return
      }
      this.details.push(item._id)
    },
  }
  
}

</script>


<style>
.dropdown-toggle::after {
    display: none !important;
}

.container{
  display: flex;
  justify-content: center; /* จัดเนื้อหาในแนวนอนกลาง */
  align-items: center; /* จัดเนื้อหาในแนวตั้งกลาง */
}

.underline {
  position: relative; /* ตั้งค่าตำแหน่งเป็น relative เพื่อให้เราสามารถกำหนดตำแหน่งของ ::after pseudo-element ได้ */
}

.underline::after {
  content: ""; /* เพิ่มเนื้อหาของ pseudo-element */
  position: absolute; /* ตั้งค่าตำแหน่งเป็น absolute เพื่อให้เส้นใต้เริ่มต้นจากตัวหนังสือ */
  bottom: 0; /* ตำแหน่งด้านล่างของ pseudo-element */
  left: 0; /* ตำแหน่งด้านซ้ายของ pseudo-element (จากด้านขวาของตัวหนังสือ) */
  width: 100%; /* กว้างเท่ากับตัวหนังสือ */
  height: 2px; /* ความสูงของเส้นใต้ */
  background-image: linear-gradient(to right, red 30%, blue 30%); /* สร้างเส้นใต้ที่มีสีแดง 30% และน้ำเงิน 70% */
  background-repeat: no-repeat; /* ไม่ต้องรีเพียต์พื้นหลัง */
  background-size: 100% 100%; /* ความกว้างของเส้นใต้และความสูงของเส้นใต้ (เท่ากับตัวอักษร) */
}

</style>