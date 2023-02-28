import React, { memo } from 'react'
import { Input, Label } from 'reactstrap'
const UserInformation = memo(({ handleInput, formVals, errors }) => {
  return (
    <div className='row g-3' >
      <div className="col-md-6">
        <Input placeholder='First Name' className='rounded-0 py-2' name='firstName' invalid={Boolean(errors?.firstName)} onChange={handleInput} value={formVals?.firstName} />
        <span className="d-block text-danger text-capitalize">
          {errors?.firstName}
        </span>
      </div>
      <div className="col-md-6">
        <Input placeholder='Middle Name' invalid={Boolean(errors?.middleName)}  name="middleName" className='rounded-0 py-2' onChange={handleInput} value={formVals?.middleName} />
        <span className="d-block text-danger text-capitalize">
          {errors?.middleName}
        </span>
      </div>

      <div className="col-md-6">
        <Input placeholder='Last Name' name="lastName" className='rounded-0 py-2' onChange={handleInput} value={formVals?.lastName} invalid={Boolean(errors?.lastName)} />
        <span className="d-block text-danger text-capitalize">
          {errors?.lastName}
        </span>
      </div>

      <div className="col-md-6">
        <Input placeholder='Mobile No.' name='mobile' className='rounded-0 py-2' onChange={(e) => (!isNaN(e.target.value) && e.target.value.length < 11) && handleInput(e)} value={formVals?.mobile} invalid={Boolean(errors?.mobile)}  />
        <span className="d-block text-danger text-capitalize">
          {errors?.mobile}
        </span>
      </div>

      <div className="col-md-6">
        <Input placeholder='Email' name='email' className='rounded-0 py-2' onChange={handleInput} value={formVals?.email} invalid={Boolean(errors?.email)}  />
        <span className="d-block text-danger text-capitalize">
          {errors?.email}
        </span>
      </div>

      <div className="col-md-6">
        <Input placeholder='Birthday' type='date' name='birthday' className='rounded-0 py-2 ' invalid={Boolean(errors?.birthday)} onChange={handleInput}  />
        <span className="d-block text-danger text-capitalize">
          {errors?.birthday}
        </span>
      </div>

      <div className="col-md-6">
        <Input placeholder='Age' name='age' invalid={Boolean(errors?.age)} className='rounded-0 py-2' onChange={(e) => !isNaN(e.target.value) && handleInput(e)} value={formVals?.age} />
        <span className="d-block text-danger text-capitalize">
          {errors?.age}
        </span>
      </div>

      <div className="col-md-6">
        <Input placeholder='Bloodgroup'  invalid={Boolean(errors?.bloodgroup)}  name='bloodgroup' className='rounded-0 py-2 ' onChange={handleInput} value={formVals?.bloodgroup} />
        <span className="d-block text-danger text-capitalize">
          {errors?.bloodgroup}
        </span>
      </div>

      <div className="col-md-6">
        <Input placeholder='Height in kg' name='height' invalid={Boolean(errors?.height)}  className='rounded-0 py-2 ' onChange={(e) => !isNaN(e.target.value) && handleInput(e)} value={formVals?.height} />
        <span className="d-block text-danger text-capitalize">
          {errors?.height}
        </span>
      </div>

      <div className="col-md-6">
        <Input placeholder='Weight in kg' name='weight' invalid={Boolean(errors?.weight)} className='rounded-0 py-2 ' onChange={(e) => !isNaN(e.target.value) && handleInput(e)} value={formVals?.weight} />
        <span className="d-block text-danger text-capitalize">
          {errors?.weight}
        </span>
      </div>

      <div className="col-md-6">
        <Label className={`d-block ${ Boolean(errors?.gender)?"text-danger":"text-secondary" }`}  >
          Gender
        </Label>
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center ">
            <input checked={formVals?.gender === "male"} type='radio' id='male' name='gender' className='me-3' onChange={handleInput} />
            <Label htmlFor='male' className='d-block mb-0 text-secondary' >
              Male
            </Label>
          </div>

          <div className="d-flex align-items-center ms-3" >
            <input type='radio' checked={formVals?.gender === "female"} id='female' name='gender' className='me-3' onChange={handleInput} />
            <Label htmlFor='female' className='d-block mb-0 text-secondary' >
              Female
            </Label>
          </div>
        </div>
        <span className="d-block text-danger text-capitalize">
          {errors?.gender}
        </span>
      </div>


      <div className="col-md-6">
        <Label className={`d-block   ${Boolean(errors?.maritalStatus)?"text-danger":" text-secondary" }`}  >
          Marital Status
        </Label>
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center ">
            <input type='radio' id='married' name='maritalStatus' className='me-3' checked={formVals?.maritalStatus === "married"} onChange={handleInput} />
            <Label htmlFor='married' className='d-block mb-0 text-secondary' >
              Married
            </Label>
          </div>

          <div className="d-flex align-items-center ms-3" >
            <input type='radio' checked={formVals?.maritalStatus === "single"} onChange={handleInput} id='single' name='maritalStatus' className='me-3' />
            <Label htmlFor='single' className='d-block mb-0 text-secondary' >
              Single
            </Label>
          </div>

          <div className="d-flex align-items-center ms-3" >
            <input type='radio' id='divorced' name='maritalStatus' className='me-3' checked={formVals?.maritalStatus === "divorced"} onChange={handleInput} />
            <Label htmlFor='divorced' className='d-block mb-0 text-secondary' >
              Divorced
            </Label>
          </div>


          <div className="d-flex align-items-center ms-3" >
            <input type='radio' id='widowed' name='maritalStatus' className='me-3' checked={formVals?.maritalStatus === "widowed"} onChange={handleInput} />
            <Label htmlFor='widowed' className='d-block mb-0 text-secondary' >
              Widowed
            </Label>
          </div>
        </div>
        <span className="d-block text-danger text-capitalize">
          {errors?.maritalStatus}
        </span>
      </div>



    </div>
  )
})

export default UserInformation