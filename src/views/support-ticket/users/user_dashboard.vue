<template>
  <div class="box">
    <CRow>
      <Ccrad>
        <CCardHeader>
          <h2>Dashboard</h2>
        </CCardHeader>
        <CRow class="mb-3">
          <CCol>
            <CCard class="p-2 mb-2" id="border">
              <CCardbody>
                <b id="all">All Tickets</b>
                <CRow>
                  <CCol>
                    <p class="ps-5 ms-3" id="font">{{ count_all }}</p>
                  </CCol>
                  <CCol class="mt-5">
                    <CImage class="LG" :src="LGblue" fluid block />
                  </CCol>
                </CRow>
              </CCardbody>
            </CCard>
          </CCol>
          <CCol>
            <CCard class="p-2 mb-2" id="border">
              <CCardbody>
                <b id="open">Open Tickets</b>
                <CRow>
                  <CCol>
                    <p class="ps-5 ms-3 " id="font">{{ count_open }}</p>
                  </CCol>
                  <CCol class="mt-5">
                    <CImage class="LG" :src="LGgreen" fluid block />
                  </CCol>
                </CRow>
              </CCardbody>
            </CCard>
          </CCol>
          <CCol>
            <CCard class="p-2 mb-2" id="border">
              <CCardbody>
                <b id="closed">Closed Tickets</b>
                <CRow>
                  <CCol>
                    <p class="ps-5 ms-3" id="font">{{ count_closed }}</p>
                  </CCol>
                  <CCol class="mt-4">
                    <CImage class="LG" :src="LGred" fluid block />
                  </CCol>
                </CRow>
              </CCardbody>
            </CCard>
          </CCol>
        </CRow>
      </Ccrad>
    </CRow>
    <CCard class="p-2">
      <CCardHeader>
        <h2>My Tickets</h2>
      </CCardHeader>
      <CSmartTable
        :active-page="1"
        footer
        header
        cleaner
        
        :items="items"
        :columns="columns"
        columnFilter
        column-sorter
        clickable-rows
        table-filter
        :items-per-page="5"
        items-per-page-select

        pagination
        columnSorter
        :sorterValue="{ column: 'status', state: 'asc' }"
        :table-props="{
          striped: true,
          hover: true,
        }"
      >
      
      <template #status="{ item }">
        <td>
          <CBadge :color="getBadge(item.STATUS)">{{ item.STATUS }}</CBadge>
        </td>
      </template>

        <template #BOOKMARK="{ item, index }" >
          <td class="text-center">
            <CButton
              variant="outline"
              square
              size="xl"
              @click="toggleDetails(item, index)"
            >
            {{ Boolean(item.BOOKMARK) ? '👁️' : '🙈' }}
            </CButton>
          </td>
        </template>
        <!-- <template #details="{ item }">
          <CCollapse :visible="Boolean(item._toggled)">
            <CCardBody>
              <h4>
                {{ item.username }}
              </h4>
              <p class="text-muted">User since: {{ item.registered }}</p>
              <CButton size="sm" color="info" class=""> User Settings </CButton>
              <CButton size="sm" color="danger" class="ml-1"> Delete </CButton>
            </CCardBody>
          </CCollapse>
        </template> -->
      </CSmartTable>
    </CCard>
  </div>
</template>
<style>
#all {
  font-size: 24px;
  color: #1a72b8;
}
#open {
  font-size: 24px;
  color: #147a2a;
}
#closed {
  font-size: 24px;
  color: #b22424;
}
#font {
  font-weight: 700;
  align-items: center;
  font-size: 100px;
  color: #000;
}
.LG {
  width: 50%;
}
#border {
  border-radius: 6%;
}
</style>

<script>
import { ref } from 'vue'
import { CCol, CRow } from '@coreui/vue-pro'
import LGblue from '@/assets/images/blueTick.png'
import LGred from '@/assets/images/redTick.png'
import LGgreen from '@/assets/images/greenTick.png'
import axios from 'axios';
import { CBadge } from '@coreui/vue-pro'
export default {

  name: 'SmartTableBasixExample',
    data(){
      return {
            data_array:[],
            
            tkt_number: '',
            tkt_description: '',
            tkt_picture: '',
            tkt_title: '',
            tkt_time: '',
            tkt_last_update: '',
            tkt_status: '',
            tkt_priorities: '',
            tkt_types: '',
            tkt_book: '',
            tkt_act: '',
            count_all:'',
            count_open:'',
            count_closed:'',


        };

    },
    setup() {
        const columns = [
            { key: '#',_style: { width: '5%' }},
            { key: 'TicketID',_style: { width: '10%' }},            
            { key: 'TITLE', _style: { width: '10%' } },
            { key: 'START DATE', _style: { width: '11%' } },
            { key: 'STATUS', _style: { width: '10%' } },
            { key: 'TYPE', _style: { width: '10%' } },
            { key: 'BOOKMARK', _style: { width: '10%' } }
          
            
     
        ];
        const getBadge = (tkt_status) => {
          switch (tkt_status) {
            case 'Pending':
              return 'success';
            case 'Open':
              return 'secondary';
            case 'Closed':
              return 'warning';
            case 'Banned':
              return 'danger';
            default:
              return 'primary'; // Return a default color if none of the cases match.
          }
        };
        const items = ref([]);
        const toggleDetails =  async(item) => {

          item.BOOKMARK = !item.BOOKMARK;
          console.log(item.BOOKMARK)
          console.log(item)
          try {
            const itemId = item._id.toString(); 
            // ทำการอัปเดตข้อมูลใน MongoDB โดยใช้ Axios
            await axios.put(`http://localhost:3000/mongoose/update/stts_tickets/${itemId}`, {
              data:{
                  tkt_book: item.BOOKMARK

              }
            });

            // หลังจากอัปเดตสำเร็จ คุณสามารถทำสิ่งอื่นที่คุณต้องการได้ที่นี่
            console.log('อัปเดต BOOKMARK และส่งข้อมูลไปยัง MongoDB สำเร็จ');
          } catch (error) {
            console.error('เกิดข้อผิดพลาดในการอัปเดตข้อมูล:', error);
          }
        };

        

        async function getData() {
          const user = JSON.parse(localStorage.getItem("USER_DATA"))
          try {
            const response = await axios({
              method: 'GET',
              url: 'http://localhost:3000/mongoose/get/check-token',
              headers: { 'Authorization': 'Bearer ' + user.token }
            })
            console.log(response)
          } catch (error) {
            console.log(error)
          }
        }
        
        return {
            LGblue,
            LGgreen,
            LGred,
            columns,
            items,
            getBadge,
            toggleDetails,

            getData,
        };
    },

    components: { CRow, CCol },
    methods:{
      async getTicket(){
        try {
          const userData = JSON.parse(localStorage.getItem('USER_DATA')); // ดึงข้อมูล USER_DATA จาก local storage
          const userId = userData.id.toString(); // ดึงค่า id จาก userData

          const response = await axios.post('http://localhost:3000/mongoose/get/stts_tickets', {
            where: {
              tkt_act: userId,

            },
          });
          console.log(response.data);
          console.log(userId)
          // นำข้อมูลที่ได้รับมาใส่ในตัวแปร items
          this.items = response.data.map((element, index) => ({
            '#': index + 1, // หมายเลขแถว
            _id:element._id,
            TicketID: element.tkt_number, // ข้อมูล TicketID จาก response
            TITLE: element.tkt_title, // ข้อมูล tkt_title จาก response
            // นำข้อมูลอื่นๆ จาก response มาใส่ตามที่คุณต้องการ
            // ตามลำดับของ columns ในตัวแปร columns
            // เพิ่มเติมตามความต้องการ
            'START DATE': element.tkt_time,
            STATUS:element.tkt_status  ,
            TYPE: element.tkt_types,
            BOOKMARK: element.tkt_book,
            _toggled: false, // ให้เริ่มต้นเป็น false สำหรับการแสดงรายละเอียด
          }));
        } catch (error) {
          console.error('Error fetching data:', error);
        }

      }, 


      async getCountall (){
        const userData = JSON.parse(localStorage.getItem('USER_DATA')); // ดึงข้อมูล USER_DATA จาก local storage
          const userId = userData.id.toString(); // ดึงค่า id จาก userData
          console.log(userId)
          const allTicket = await axios.post('http://localhost:3000/mongoose/get/stts_tickets', {
            where: {
              tkt_act: userId,
            },
          });
          // console.log(allTicket)
        var countAll =0;
        var countOpen =0;
        var countClosed =0;
        allTicket.data.forEach(element => {
            countAll++;
            if(element.tkt_status=='Open'){
              countOpen++;
            }else if(element.tkt_status=='Closed'){
              countClosed++;
            }

          });

          this.count_all=countAll;
          this.count_open=countOpen;
          this.count_closed=countClosed;
      }


    },
    mounted(){
      //เรียกใช้ฟังชั่นเมื่อโหลดหน้า
      this.getCountall();
      this.getTicket();

    }
  }
</script>
