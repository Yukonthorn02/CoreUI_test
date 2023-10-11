<template>
    <div class="px-5 bg-white rounded" style="width: 100%; height: 845px">
      <!-- Head Priorities List -->
      <div style="width: 60%">
      <br>
      <CRow class="e-3">
        <h1>Edit Priority</h1>

      </CRow>
      <br>
      <div class="purple" >
        <h1>Priority Info</h1>
      </div>
      <br>
      <div >
        <CFormLabel for="priorityNameTha"><h4>Priority Name(Thai)*</h4></CFormLabel>
        <CInputGroup >
        <CFormInput placeholder="สำคัญมากที่สุด" aria-label="priorityNameTha"/>
        </CInputGroup>
      </div>
      <br>
      <div >
        <CFormLabel for="priorityNameEng"><h4>Priority Name(English)*</h4></CFormLabel>
        <CInputGroup >
        <CFormInput placeholder="Very High" aria-label="priorityNameEng"/>
        </CInputGroup>
      </div>
      <br>
      <div class="grid gap-0 column-gap-3">
        <CRow class="justify-content-between">
          <CCol xs="4">
            <CFormLabel for="priorityLevel"><h4>Level of Priority*</h4></CFormLabel>
          </CCol>
          <CCol xs="4">
            <CFormLabel for="priorityLevel"><h4>Color*</h4></CFormLabel>
          </CCol>
        </CRow>
        <CRow class="justify-content-between">
          <CCol xs="4">
            <CFormSelect
          aria-label="Default select example"
          :options="[
            '1',
            { label: 'One', value: '1' },
            { label: 'Two', value: '2' },
            { label: 'Three', value: '3', disabled: true }
          ]">
        </CFormSelect>
          </CCol>
          <CCol xs="4">
            <input style="width: 220px" type="color" id="favcolor" name="favcolor" value="#ff0000">
          </CCol>
        </CRow>
      </div>
      <br>
      <CForm>
        <CFormLabel for="desc"><h4>Description*</h4></CFormLabel>
        <CFormTextarea
          class="mb-3"
          placeholder="รอดำเนินการภายใน 8 ชั่วโมง"
        ></CFormTextarea>
      </CForm>
      <br>
      <CRow class="d-flex justify-content-center">
        <CCol xs="4">
          <CButton color="secondary" shape="rounded-pill" size="xl">Cancel</CButton>
        </CCol>
        <CCol xs="4">
          <CButton class="textButton" color="success" shape="rounded-pill" size="xl">Submit</CButton>
        </CCol>
      </CRow>

      </div>
    </div>
  </template>
  <script >

  </script>
  <style>
  textButton{
    color: white;
  }
  .purple{
    color: #5E5ADB;
  }
  .black{
    color: #303030;
  }
  </style>
