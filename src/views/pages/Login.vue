<template>
    <div class="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CCardGroup>
          <CCard>
          <CCardBody>
          <CRow>
              <CCol>
                <CImage
                  :src="login"
                  fluid
                  block
                  class="c-image"
                />
              </CCol>
              <CCol>
                  <CForm>
                    <h1 class="mt-5">LOGIN</h1>
                    <CFormLabel>Username</CFormLabel>
                    <CInputGroup class="mb-3">
                      <CFormInput
                        v-model="form.username"
                        feedbackInvalid="ห้ามเว้นว่าง"
                        :invalid="validate.username"
                        size="lg"
                        id="username"
                      />
                    </CInputGroup>
                    <CFormLabel>Password</CFormLabel>
                    <CInputGroup class="mb-4">
                      <CFormInput
                        type="password"
                        id="password"
                        v-model="form.password"
                        feedbackInvalid="ห้ามเว้นว่าง"
                        :invalid="validate.password"
                        autocomplete="current-password"
                        size="lg"
                      />
                      <CInputGroupText>
                        <CFormCheck
                        type="radio"
                        autocomplete="off"
                        @click="showPassword"
                        >
                        <template #label><CIcon :icon="cilToggleOff" /></template>
                        </CFormCheck>
                      </CInputGroupText>
                    </CInputGroup>
                    <CFormCheck class="remember" id="rememberMe" label="Remember me"/>
                    <CRow>
                      <CCol :xs="6">
                        <CButton color="dark" class="px-4" @click="onLoginClick"> Login </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
              </CCol>
          </CRow>
        </CCardBody>
        </CCard>
        </CCardGroup>
      </CContainer>
    </div>
</template>
<style>
.c-image {
    border-radius: 15px 15px 15px 15px;
  }
</style>
<script>
import axios from 'axios'
import { CIcon } from '@coreui/icons-vue';
import { cilToggleOff,cilToggleOn } from '@coreui/icons';
import login  from '@/assets/images/login.jpg'
import { CFormInput } from '@coreui/vue-pro';
export default {
    name: 'Login1',
    data() {
      return {
        cilToggleOff,
        cilToggleOn,
        login: login,
        validatedCustom01: null,
        form: {
          username: '',
          password: '',
        },
        validate: {
          username: null,
          password: null,
        }
      };
    },
    methods: {
      vaildateBeforeSave() {
        let error = false
        if (this.form.username === '') {
          error = true
          this.validate.username = true
        }
        if (this.form.password === '') {
          error = true
          this.validate.password = true
        }
        return error
        // if (error) {
          // } else if(this.form.username === 'supakit' && this.form.password === '00000000') {
          //   this.onLoginClick()
        // }else{
          // alert("เข้าสู่ระบบไม่สำเร็จ")
        // }
      },
      async onLoginClick() {
        if (this.vaildateBeforeSave()) {
          

        } else {
          try {
            const response = await axios.post('http://localhost:3000/auth/login', { username: this.form.username, password: this.form.password })
            console.log(response);
            console.log(response.data.user.role)
            const user = {
              id: response.data.user.id, 
              USERNAME: response.data.user.USERNAME,
              role:response.data.user.role,
              // role: response.data.data.role,  
              token: response.data.user.token
              
            }

            localStorage.setItem('USER_DATA', JSON.stringify(user))
            setTimeout(function() {
              this.$router.push('/support-ticket/user/dashboard');
            }.bind(this), 1500)
            
          } catch (error) {
            console.log(error)
          }
        }
        
        // this.$router.push('/support-ticket/user/dashboard');
      },
      showPassword(){
        var x = document.getElementById("password");
        if (x.type === "password") {
          x.type = "text";
        } else {
          x.type = "password";
        }
      },
    },
    components: {
      CFormInput,
      CIcon
    }
}
</script>
