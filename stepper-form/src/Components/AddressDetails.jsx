import React, { memo } from 'react'
import { Input, Label } from 'reactstrap'
const AddressDetails = memo(({ handleInput, formVals, errors }) => {
    return (
        <div className='row g-4' >
            <div className="col-md-6">
                <Input placeholder='AddressLine1' className='rounded-0 py-2' name='addressLine1' invalid={Boolean(errors?.addressLine1)} onChange={handleInput} value={formVals?.addressLine1} />
                <span className="d-block text-danger text-capitalize">
                    {errors?.addressLine1}
                </span>
            </div>

            <div className="col-md-6">
                <Input placeholder='AddressLine2' className='rounded-0 py-2' name='addressLine2' invalid={Boolean(errors?.addressLine2)} onChange={handleInput} value={formVals?.addressLine2} />
                <span className="d-block text-danger text-capitalize">
                    {errors?.addressLine2}
                </span>
            </div>

            <div className="col-md-6">
                <Input placeholder='City' type='select' className='rounded-0 py-2' name='city' invalid={Boolean(errors?.city)} onChange={handleInput} value={formVals?.city}>
                    <option value="">City</option>
                    <option value="Lucknow">Lucknow</option>
                    <option value="Noida">Noida</option>
                </Input>
                <span className="d-block text-danger text-capitalize">
                    {errors?.city}
                </span>
            </div>

            <div className="col-md-6">
                <Input placeholder='State' className='rounded-0 py-2' name='state' type='select' invalid={Boolean(errors?.state)} onChange={handleInput} value={formVals?.state}>
                    <option value="">State</option>
                    <option value="UP">UP</option>
                    <option value="UK">UK</option>
                </Input>
                <span className="d-block text-danger text-capitalize">
                    {errors?.state}
                </span>
            </div>

            <div className="col-md-6">
                <Input placeholder='Pincode' className='rounded-0 py-2' name='pincode' invalid={Boolean(errors?.pincode)} onChange={(e) => handleInput(e)} 
                value={formVals?.pincode} />
                <span className="d-block text-danger text-capitalize">
                    {errors?.pincode}
                </span>
            </div>

            <div className="col-md-6">
                <Input type='select' placeholder='Country' className='rounded-0 py-2' name='country' invalid={Boolean(errors?.country)} onChange={handleInput} value={formVals?.country}>
                    <option value="">Country</option>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                </Input>
                <span className="d-block text-danger text-capitalize">
                    {errors?.country}
                </span>
            </div>
        </div>
    )
})

export default AddressDetails