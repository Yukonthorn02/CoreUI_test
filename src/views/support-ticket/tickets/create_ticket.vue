<template>
  <div>
    <CCard>
      <CCardHeader>
        <h4>Create new Ticket</h4>
      </CCardHeader>
      <CCardBody>
        <CForm >
          <CRow class="mb-2">
            <div class="col-lg-1"></div>
            <CFormLabel class="col-lg-3 col-md-12 col-form-label">Title</CFormLabel>
            <div class="col-lg-7 col-md-12">
              <CFormInput
                v-model="form.tkt_title"
                feedbackInvalid="ห้ามเว้นว่าง"
                :invalid="validate.tkt_title"
                required
                
              />
            </div>
          </CRow>
          <CRow class="mb-2">
            <div class="col-lg-1"></div>
            <CFormLabel  class="col-lg-3 col-md-12 col-form-label">Type</CFormLabel>
            <div class="col-lg-7 col-md-12">
              <CFormSelect
                v-model="form.tkt_types"
                :options="typeOptions"
                feedbackInvalid="ห้ามเว้นว่าง"
                :invalid="validate.tkt_types"
                required
                @change="checktype"
              />
            </div>
          </CRow>
          <CRow class="mb-2">
            <div class="col-lg-1 "></div>
            <CFormLabel class="col-lg-3 col-md-12 col-form-label">Priority</CFormLabel>
            <div class="col-lg-7 col-md-12">
              <CFormSelect
              v-model="form.tkt_priorities"
              :options="piorityOptions"
              feedbackInvalid="ห้ามเว้นว่าง"
              :invalid="validate.tkt_priorities"
              required
              @change="checkpiority"
              />
            </div>
          </CRow>
          <CRow class="mb-2">
            <div class="col-lg-1"></div>
            <CFormLabel class="col-lg-3 col-md-12 col-form-label">Description</CFormLabel>
            <div class="col-lg-7 col-md-12">
              <CFormTextarea
                v-model="form.tkt_description"
                feedbackInvalid="ห้ามเว้นว่าง"
                :invalid="validate.tkt_description"
                required
                id="validationTextarea"
                rows="4"
                
              />
            </div>
          </CRow>
        </CForm>
        <CRow class="mb-2">
            <div class="col-lg-1"></div>
            <CFormLabel class="col-lg-3 col-md-12 col-form-label">Upload A File</CFormLabel>
            <div class="col-lg-7 col-md-12">
              <CFormInput 
              type="file" 
              size="lg" 
              id="formFileLg"  
              v-model="form.tkt_picture" />
            </div>
          </CRow>

      </CCardBody>
      <CCardFooter class="footer">
        <CButton  color="secondary" @click="vaildateBeforeSave,createToast"  >Cancle</CButton>
        
        <CButton class="btn-sec" color="success" @click="vaildateBeforeSave"  >Submit</CButton>
      </CCardFooter>
      <CElementCover :opacity="0.5" v-if="pageLoading" />
    </CCard>
  </div>
</template>
<style>
.footer {
  display: flex;
  justify-content: end;
}
.btn-sec{
  margin: 5px;
}
</style>

<script>
import dayjs from 'dayjs'
import 'dayjs/locale/th'
import 'dayjs/plugin/timezone' // นำเข้าโมดูล timezone
import { CForm } from '@coreui/vue-pro'
import axios from 'axios';

export default {
    data() {
        return {
            form: {
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
            },
            userOptions:[],
            userOptions:[],
            genderOptions: [],
            pageLoading: false,
            validatedCustom01: null,
            validate: {
                ticket: null,
            },
            toasts: []
        };
    },
    //สร้างข้อมูลของ Options ต่างๆใน selectfrom
    created() {
        this.piorityOptions = [
            { label: 'Select Priority', value: '' },
            { label: 'Low', value: 'Low' },
            { label: 'Mediem', value: 'Mediem' },
            { label: 'High', value: 'High' },
            { label: 'ไม่ระบุ', value: 'none', disabled: true }
        ],
            this.typeOptions = [
                { label: 'Select type', value: '' },
                { label: 'Software', value: 'Software' },
                { label: 'Hardware', value: 'Hardware' },
                { label: 'Service Request', value: 'Service' },
                { label: 'ไม่ระบุ', value: 'none', disabled: true }
            ];
            // this.getUser() 

    },

    methods: {
      //เรียกใช้ฟังกืชั่น get จาก server ดึงข้อมูลจาก model stts_account
        // async getUser(){
        //   const user= await axios.get('http://localhost:3000/mongoose/get/stts_accounts')
        //   const users= await axios.post('http://localhost:3000/mongoose/get/stts_tickets',{populate:['tkt_act']})
        //   console.log(users)
        //   user.data.forEach(element => {
        //     this.userOptions.push({value:element._id,label:element.act_username})
            
        //   });

          
        // },
        async getType(){
          const type= await axios.get('http://localhost:3000/mongoose/get/stts_types')
          const types= await axios.post('http://localhost:3000/mongoose/get/stts_types')//,{populate:['tkt_act']}
          console.log(types)
          type.data.forEach(element => {
            this.userOptions.push({value:element._id,label:element.typ_name})
            
          });

          
        },
      //ฟังก์ชั่นตรวจข้อมูลว่าไม่ส่งค่าเปล่า
        vaildateBeforeSave() {
            let error;
            if (this.form.tkt_title === '') {
                error = true;
                this.validate.tkt_title = true;
            }
            if (this.form.tkt_types === '') {
                error = true;
                this.validate.tkt_types = true;
            }
            if (this.form.tkt_priorities === '') {
                error = true;
                this.validate.tkt_priorities = true;
            }
            if (this.form.tkt_description === '') {
                error = true;
                this.validate.tkt_description = true;
            }
            
            if (error) {
            }
            else {
                this.onSave();
                
            }
        },
        //แสดงค่าทุกครั้งที่กดเปลี่ยนข้อมูลในselectชั่น
        checktype(events) {
            console.log(events.target.value);
        },
        //แสดงค่าทุกครั้งที่กดเปลี่ยนข้อมูลในselectชั่น
        checkpiority(events) {
            console.log(events.target.value);
        },
        //กดบันทึกแล้วเซฟข้อมูลลงดาต้า
        async onSave() {
            dayjs.locale('th')
            dayjs.extend(require('dayjs/plugin/timezone'))
            dayjs.tz.setDefault('Asia/Bangkok')

            const userData = JSON.parse(localStorage.getItem('USER_DATA')); // ดึงข้อมูล USER_DATA จาก local storage
            const userId = userData.id; // ดึงค่า id จาก userData
            const date = dayjs();
            
            this.pageLoading = true;
            setTimeout(function () {
                this.pageLoading = false;
            }.bind(this), 3000);
            const ticket_status = `Pending`;
            const ticket_date = `${date.format('DD/MM/YYYY-HH:mm:ss:SSS')}`
            const ticket_number = `TKT-${date.format('DDMMYYYYHHmmssSSS')}`
            this.form.tkt_time = ticket_date;
            this.form.tkt_number = ticket_number;
            this.form.tkt_act = userId;
            this.form.tkt_status = ticket_status;
            this.form.tkt_book= false;
            console.log(this.form);

            try {
              await axios.post('http://localhost:3000/mongoose/insert/stts_tickets',{data:this.form} )
              .then((result) => {
                
                this.$router.push('/support-ticket/user/dashboard')
              }).catch((err) => {
                console.log(error)
              });
            }catch(error){
              console.log(error)
            }

        },
        createToast() {
          this.toasts.push({
            title: 'Create Ticket',
            content: 'สร้างสำเร็จ'
          })
        },
    },
    components: { CForm }
}
</script>
