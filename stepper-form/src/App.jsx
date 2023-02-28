import { useState, useCallback } from 'react'
import UserInformation from './Components/UserInformation'
import { Button } from 'reactstrap'
import AddressDetails from './Components/AddressDetails'
import UserData from './Components/UserData'

function App() {
  const [errors, setErrors] = useState({})
  const [formVals, setFormVals] = useState({
    firstName: "", middleName: "",
    lastName: "",
    mobile: "",
    email: "",
    birthday: "",
    age: "",
    height: "",
    weight: "",
    bloodgroup: "",
    gender: "",
    maritalStatus: "",
  })
  const [formVals2, setFormVals2] = useState({
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    pincode: "",
    country: ""
  })
  const [step, setStep] = useState(1)

  const handleInput = useCallback((e) => {
    const { name, value, id, } = e.target
    if (step === 1) {

      if (name === "gender" || name === "maritalStatus") {
        setFormVals({ ...formVals, [name]: id })
      } else {
        setFormVals({ ...formVals, [name]: value })
      }
    } else {
      setFormVals2({ ...formVals2, [name]: value })
    }
  }, [formVals, formVals2])

  const handleValid = useCallback(() => {
    let error = false
    let errors = {}
    for (const key in step === 1 ? formVals : formVals2) {
      if (step == 1 ? formVals[key] : formVals2[key]) {
        if (key === "email") {
          if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formVals['email']))) {
            errors['email'] = `Invalid email`
            error = true
          }
        }
      } else {
        errors[key] = `${key} is required`
        error = true
      }
    }
    setErrors({ ...errors })
    errors = {}
    return error
  }, [errors, formVals, formVals2, step])
  return (
    <div className='form-container py-5 d-flex align-items-center justify-content-center'>
      <div className="bg-white form-wrapper p-4">
        <div className="stepper flex-column flex-md-row gap-5 gap-md-0 position-relative d-flex align-items-center justify-content-between mb-5">

          <div className="stepper-content">

            <div className="stepper-item bg-primary text-white d-flex align-items-center justify-content-center">
              {
                step > 1 ?
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"></path></svg>
                  :
                  <span className="stepper-item-number-text">
                    1
                  </span>
              }
            </div>
            <span>User Information</span>
          </div>

          <div className="stepper-content">

            <div className={`stepper-item centered-item bg-primary ${step >= 2 ? "bg-primary" : "bg-secondary"} d-flex align-items-center justify-content-center text-white`}>
              {
                step > 2 ?
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"></path></svg>
                  :
                  <span className="stepper-item-number-text">
                    2
                  </span>
              }
            </div>
            <span>Address Details</span>
          </div>


          <div className="stepper-content">
            <div className={`stepper-item  d-flex align-items-center justify-content-center text-white ${step === 3 ? "bg-primary" : "bg-secondary"}`}>
              <span className="stepper-item-text-text">
                3
              </span>
            </div>
            <span>Thank You</span>
          </div>



        </div>
        {step === 1 && <UserInformation errors={errors} formVals={formVals} handleInput={handleInput} />}

        {
          step === 2 && <AddressDetails formVals={formVals2} errors={errors} handleInput={handleInput} />
        }

        {
          step === 3 && <UserData data={{ ...formVals, ...formVals2 }} />
        }

        <div className='mt-5' >
          <Button color={step > 1 ? "primary" : "secondary"} className="me-3 rounded-1 px-3 py-1" onClick={() => step > 1 && setStep(prev => prev - 1)} > Back</Button>
          {step < 3 && <Button color="primary" onClick={() => !handleValid() && setStep(prev => prev + 1)} className='rounded-1 px-3 py-1' > Next</Button>}
        </div>
      </div>

    </div>
  )
}

export default App
