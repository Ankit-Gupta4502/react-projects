import React,{memo} from 'react'

const UserData = memo(({data}) => {
  return (
    <div>
        <h3 className='text-success'>Data Added Successfully</h3>
        <div className="mt-4">
            {
                Object.entries(data).map(([key,value],index)=>{
                    return <div className="row" key={index} >
                        <div className="col-md-8 col-6">
                            <h6 className='text-capitalize'  > {key} </h6>
                        </div>
                        <div className="col-md-4 col-6">
                        <span className='text-capitalize '  > {value} </span>
                        </div>
                        <hr />
                    </div>
                })
            }
        </div>
    </div>
  )
})

export default UserData