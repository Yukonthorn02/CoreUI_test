<template>
  <div>
    <CCard>
      <CCardHeader>
          <h2>Edit Account</h2>
      </CCardHeader>
      <CCardBody>
        <CForm novalidate :validated="form.validatedCustom01" @submit.prevent="handleSubmitCustom01">

          <CRow class="mb-2" >
            <CCol class="image-container" xs="3">
              <div  v-if="imageUrl">
              <img :src="imageUrl"/>
              </div>
            </CCol>
            <CCol xs="3">
              <CFormLabel class="btn-Picture" for="upload_file">Add Picture</CFormLabel>
              <CFormInput type="file" @change="handleImageUpload" id="upload_file" hidden />
              <CButton class="btn-Picture" variant="outline" @click="deleteImage">Delete Picture</CButton>
            </CCol>
          </CRow>

          <CRow class="mb-2" >
            <div class="col-lg-1"></div>
            <CFormLabel class="col-md-12 col-form-label">Personal Info</CFormLabel>
          </CRow>
          <CRow class="mb-3">
            <div class="row">
              <div class="col-md-3">
                <div class="form-group">
                  <CFormLabel for="FnameTH" class="col-sm-12 col-form-label">First name (Thai)</CFormLabel>
                  <CFormInput
                  name="FnameTH"
                  type="text"
                  feedbackInvalid="Please input firstname(Thai)."
                  id="FnameTH"
                  v-model="form.FnameTH"
                  :invalid="validate.FnameTH"
                    required />
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <CFormLabel for="LnameTH" class="col-sm-12 col-form-label" invalid>Last name (Thai)</CFormLabel>
                  <CFormInput
                    type="text"
                    id="LnameTH"
                    name="FnameTH"
                    feedbackInvalid="Please input lastname(Thai)."
                    v-model="form.LnameTH"
                    :invalid="validate.LnameTH"
                    required
                    />
                </div>
              </div>
              <br>
            </div>

            <div class="row">
              <div class="col-md-3">
                <div class="form-group">
                  <CFormLabel for="FnameEng" class="col-sm-12 col-form-label">First name (English)</CFormLabel>
                  <CFormInput
                    type="text"
                    id="FnameEng"
                    name="FnameEng"
                    feedbackInvalid="Please input firstname(English)."
                    v-model="form.FnameEng"
                    :invalid="validate.FnameEng"
                    required
                    />
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <CFormLabel for="LnameEng" class="col-sm-12 col-form-label">Last name (English)</CFormLabel>
                  <CFormInput
                    type="text"
                    id="LnameEng"
                    name="LnameEng"
                    feedbackInvalid="Please input lastname(English)."
                    v-model="form.LnameEng"
                    :invalid="validate.LnameEng"
                    required
                    />
                </div>
              </div>
              <br>
            </div>
            <div class="row">
              <div class="col-md-7">
                <div class="form-group">
                  <CFormLabel for="role" class="col-sm-12 col-form-label">Role</CFormLabel>
                  <CFormSelect
                    v-model="form.Role"
                    :options="roleOptions"
                    feedbackInvalid="Please select role."
                    :invalid="validate.Role"
                    required
                    @change="checkRole"
                  />
                </div>
              </div>
            </div>
          </CRow>

          <CRow class="mb-2">
            <div class="col-lg-1"></div>
            <CFormLabel class="col-md-12 col-form-label">Login Info</CFormLabel>
          </CRow>
          <CRow class="mb-3">
            <div class="row">
              <div class="col-md-7">
                <div class="form-group">
                  <CFormLabel for="inputEmployee" class="col-sm-12 col-form-label">Employee ID</CFormLabel>
             <CFormInput
                    type="text"
                    id="employeeID"
                    name="employeeID"
                    feedbackInvalid="Please input employee ID."
                    v-model="form.employeeID"
                    :invalid="validate.employeeID"
                    required
                    />
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-3">
                <div class="form-group">
                  <CFormLabel for="Password"
                >Password</CFormLabel
              >
              <div>
                <CFormInput
                text="(a-z) contains 2 letters and (0-9) Contains 4 numbers."
                  type="password"
                  id="password"
                  v-model=form.password
                  feedbackInvalid="Please input password."
                  :invalid="validate.password"
                  autocomplete="current-password"
                  placeholder="•••••••"
                  required
                />
              </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="form-group">
                  <CFormLabel for="Password"
                >Confirm Password</CFormLabel
              >
              <div>
                <CFormInput
                  type="password"
                  id="Confirmpassword"
                  v-model=form.Confirmpassword
                  feedbackInvalid="Please confirm password."
                  :invalid="validate.Confirmpassword"
                  autocomplete="current-password"
                  placeholder="•••••••"
                  required
                />
              </div>
                </div>
              </div>
            </div>
            <div>
            <input type="checkbox" id="showPassword" @click="showPassword" />Show Password
          </div>
          </CRow>
          <CRow class="mb-2">
            <div class="col-lg-1"></div>
            <CFormLabel class="col-md-12 col-form-label">Contact Info</CFormLabel>
          </CRow>
          <CRow class="mb-3">
            <div class="row">
              <div class="col-md-3">
                <div class="form-group">
                  <CFormLabel for="Email" class="col-sm-12 col-form-label">Email Address</CFormLabel>
                  <CFormInput
                    type="email"
                    id="email"
                    name="email"
                    feedbackInvalid="Please input email."
                    v-model="form.email"
                    :invalid="validate.email"
                    required
                    />
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <CFormLabel for="confirmEmail" class="col-sm-12 col-form-label">Confirm Email Address</CFormLabel>
                  <CFormInput
                    type="email"
                    id="confirmEmail"
                    name="confirmEmail"
                    feedbackInvalid="Please input confirm email."
                    v-model="form.confirmEmail"
                    :invalid="validate.confirmEmail"
                    required
                    />
                </div>
              </div>
              <br>
            </div>

            <div class="row">
              <div class="col-md-7">
                <div class="form-group">
                  <CFormLabel for="phone" class="col-sm-12 col-form-label">Phone Number</CFormLabel>
                  <CFormInput
                    type="number"
                    id="phone"
                    name="phone"
                    feedbackInvalid="Please input your phone number."
                    v-model="form.phone"
                    :invalid="validate.phone"
                    required
                    />
                </div>
              </div>
              <br>
            </div>
          </CRow>
          <div class="col-6 mx-auto">
          <CButton class="btn-sec" color="secondary" variant="outline" @click="cancel">Cancel</CButton>
          <CButton class="btn-sec" color="success" variant="outline" @click="validateBeforeSave" >Submit</CButton>
          </div>

        </CForm>
      </CCardBody>
    </CCard>
  </div>

</template>
<script>
import { CFormLabel} from '@coreui/vue-pro';
export default {
  components: { CFormLabel},
  data: () => {
    return {
      form: {
        FnameTH: '',
        LnameTH: '',
        FnameEng: '',
        LnameEng: '',
        Role: '',
        email: '',
        confirmEmail: '',
        phone: '',
        employeeID: '',
        password: '',
        Confirmpassword: ''
      },
      validate: {
        info:null,
      },
      imageUrl:"../../../assets/images/preProfile01.svg",
      imageFile: null,
      pageLoading: false,
    }
  },
  created() {
        this.roleOptions  = [
            { label: 'Select Role', value: '' },
            { label: 'Employee', value: 'Employee' },
            { label: 'IT Support', value: 'IT Support' },
            { label: 'Admin', value: 'Admin' },
            { label: 'Manager', value: 'Manager'}
        ];
    },
  methods: {
    handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.imageUrl = URL.createObjectURL(file);
        this.imageFile = file;
      }
    },
    deleteImage() {
      this.imageUrl = "../../../assets/images/preProfile01.svg";
      this.imageFile = "../../../assets/images/preProfile01.svg";
      // You can also send an API request to delete the image on the server here.
    },
    handleSubmitCustom01(event) {
      if (!event.currentTarget.checkValidity()) {
        event.preventDefault();
      }
      this.form.validatedCustom01 = true;
    },
    validateBeforeSave() {
      let error = false;
      if (this.form.FnameTH === '') {
        error = true;
        this.validate.FnameTH = true;
      }
      if (this.form.LnameTH === '') {
        error = true;
        this.validate.LnameTH = true;
      }
      if (this.form.FnameEng === '') {
        error = true;
        this.validate.FnameEng = true;
      }
      if (this.form.LnameEng === '') {
        error = true;
        this.validate.LnameEng = true;
      }
      if (this.form.Role === '') {
        error = true;
        this.validate.Role = true;
      }
      if (this.form.email === '') {
        error = true;
        this.validate.email = true;
      }
      if (this.form.confirmEmail === '') {
        error = true;
        this.validate.confirmEmail = true;
      }
      if (this.form.phone === '') {
        error = true;
        this.validate.phone = true;
      }
      if (this.form.employeeID === '') {
        error = true;
        this.validate.employeeID = true;
      }
       if (this.form.password === '') {
        error = true;
        this.validate.password = true;
       }
       if (this.form.Confirmpassword === '') {
        error = true;
        this.validate.Confirmpassword = true;
      }
      if (error) {
      }
      else {
        this.onSave();
      }
    },
    showPassword() {
            var p1 = document.getElementById('password');
            var p2 = document.getElementById('Confirmpassword');
            if (p1.type === 'password') {
                p1.type = 'text';
                p2.type = 'text';
            } else {
                p1.type = 'password';
                p2.type = 'password';
            }
        },
  }
}
</script>
<style>
.pic {
  background-color: #7f9ccb;
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px ridge black;
  font-size: 0.8rem;
  height: auto;
}

.card-1 {
  width: 1160px;
  height: 1496px;
  flex-shrink: 0;
  background-color: #FFF;
  border-radius: 5px;
}

.h2 {

  color: #303030;
  font-family: Inter;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.card-header {
  padding: 30px;
}

.hr {
  width: 357.501px;
  height: 2.223px;
  flex-shrink: 0;
  background: #EA5252;
}

.btn-Picture {
  width: 184px;
  height: 53px;
  background-color: transparent;
  /* Set the background color to transparent */
  border: 2px solid #5E5ADB;
  /* Add a border with a 2px width and color of your choice */
  padding: 10px 20px;
  /* Add padding to provide spacing inside the button */
  color: #303030;
  /* Set text color to match the border color */
  cursor: pointer;
  /* Change the cursor to a pointer when hovering */
  text-decoration: none;
  /* Remove the default underline if it's an anchor tag */
  display: inline-block;
  /* Make sure it behaves as an inline block element */
  font-size: 16px;
  /* Set the font size to your preference */
  border-radius: 5px;
  margin-top: 30px;
  text-align: center;
  /* margin-bottom: 30px; */

}

.btn-Picture:hover {
  background-color: #5E5ADB;
  /* Change the background color on hover */
  color: #fff;
  /* Change text color on hover */
}

.mb-2 {
  padding-left: 150px;
  color: #5E5ADB;
  /* font-family:'Inter'; */
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

/* .row{
  padding-left: 150px;
} */
.col-md-4 {
  padding-left: 50px;
}

.mb-3 {
  padding-left: 150px;
}

.footer {
  display: flex;
  justify-content: end;
  border-radius: 20px;

}

.btn-sec {
  margin: 5px;
  border-radius: 10px;
  width: 182px;
  height: 50px;
  flex-shrink: 0;
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.image-container img {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  margin-top: 20px;
  margin-bottom: 30px;
  border: 20px solid #F7F9FC;
  stroke-width: 20px;
  stroke: #F7F9FC;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

}

</style>