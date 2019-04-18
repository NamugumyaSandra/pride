import React, { Component } from 'react'

class AddFarmer extends Component {
    state = {
        Officer : "",
        parish : "",
        village : "",
        gender : "",
        birth_year : "",
        username : "",
        marriage : "",
        language : "",
        phone : "",
        profile_photo : "",
        community_status : "",
        instructor_possibility : "",
        farm_area : "",
        crop_type : "",
        past_harvests : ""
    }
  render() {
    return (
      <div className='container'>
    
        <div className='content'>
            <div className='row'>
                <form onSubmit={this.onSubmit}>
                    <legend> Farmer </legend>
                    <fieldset> 
                        <div className="form-group">
                            <label>Username</label>
                            <input type="text" placeholder='Username' className="form-control" />
                            name='username' onChange={this.onChange} value={username}
                        </div>
                        <div className="form-group input-group mb-2 date" id="datetimepicker1" data-target-input="nearest">
                            <label>D.O.B</label>
                            <input type="text" placeholder='Date of Birth' className="form-control datetimepicker-input" data-target="#datetimepicker1" />
                            {/* onChange={this.onChange} value={birth_year} */}
                            <div className="input-group-append" data-target="#datetimepicker1" data-toggle="datetimepicker">
                            <div className="input-group-text"><i className="fa fa-calendar"></i></div>
                            </div>
                        </div>
        
                        <div className='row'>
                            <div className="form-group col-6">
                                <label>Gender</label>
                                <select className="form-control" >
                                onChange={this.onChange} value={gender} */}
                                </select>
                            </div>
                            <div className="form-group col-6">
                                <label>marriage</label>
                                <select className="form-control" >
                                {/* onChange={this.onChange} value={marriage} */}
                                </select>
                            </div>
                        </div>

                        <div className="input-group mt-2 mb-3">
                            <label> Phone </label>
                            <input type="tel" className="form-control" />
                            {/* onChange={this.onChange} value={phone} */}
                            {/* <span className="input-group-addon">phone</span> */}
                        </div>
                       
                           
                        <div className="form-group">
                            <label>Language</label>
                            <select className="form-control" >
                            {/* onChange={this.onChange} value={language} */}
                            </select>
                        </div>

                        <div className="form-group ">
                            <label>Community Status</label>
                            <select className="form-control" >
                            {/* onChange={this.onChange} value={community_status} */}
                            </select>
                        </div>
                        <div className="form-group ">
                            <label>Instructor Possibility</label>
                            <select className="form-control" >
                            {/* onChange={this.onChange} value={instructor_possibility} */}
                            </select>
                        </div>
                        <div className="form-group inline ">
                            <label>Parish</label>
                            <select className="form-control" >
                            {/* onChange={this.onChange} value={parish} */}
                            </select>
                        </div> 
                        <div className="form-group mt-4">
                            <label >Village</label>
                            <input type="text" className="form-control" />
                            {/* onChange={this.onChange} value={village} */}
                        </div>
                        <div className="form-group">
                            <label>Officer</label>
                            <select className="form-control" >
                            {/* onChange={this.onChange} value={Officer} */}
                            </select>
                        </div>
 

                        <div className='row'>
                            <div className="form-group col-4">
                                <label>Crop Type</label>
                                <select className="form-control" >
                                {/* onChange={this.onChange} value={crop_type} */}
                                </select>
                            </div>
                            <div className="form-group col-4">
                                <label> Farm Area</label>
                                <select className="form-control" >
                                {/* onChange={this.onChange} value={farm_area} */}
                                </select>
                            </div>
                            
                            <div className="form-group col-4">
                                <label>Past Harvest</label>
                                <select className="form-control " >
                                {/* onChange={this.onChange} value={past_harvests} */}
                                </select>
                            </div>
                        </div>
                        <div className="form-group ">
                            <label>Profile Picture</label>
                            <input type="file" className="form-control-file"  aria-describedby="fileHelp"/>
                            {/* onChange={this.onChange} value={profile_photo} */}
                        </div>
                        <div>
                            <button type="submit" class="btn btn-primary">Create</button>
                        </div>

                    </fieldset>
                </form> 
            </div>
        </div>
      </div>
    )
  }
}
export default AddFarmer;
