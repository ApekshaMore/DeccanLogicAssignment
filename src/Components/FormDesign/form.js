import React, { Component } from 'react';
import styles from './form.module.css'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import img from '../../Assets/upload.png'
import Grid from '@material-ui/core/Grid';

// import SelectBox from './Components/SelectBox/selectbox';

class formDesign extends Component {
    state = {
        option: ''
    }

    handleChange=(event)=>{
        this.setState({option:event.target.value});
    }
    render() { 
        return ( 
            <>
            <Container maxWidth="lg">
            <div className="row">
                <div className="col">
                    <h4 className={styles.heading}>Create Event</h4> 
                </div>
                <div className="col">
           
                    <button id={styles.btn1}  className="btn btn-sm m-10">Create</button>
                    <button id={styles.btn2} className={"btn btn-light btn-sm"}>Cancel</button>
                </div>              
            </div>
            <hr/>
            </Container>
            <Container maxWidth="sm">

                <FormControl style={{width:'100%'}}>
                    <InputLabel id="demo-controlled-open-select-label">Add Event in*</InputLabel>
                    <Select placeholder="Select..."
                    labelId="demo-controlled-open-select-label"
                    id={styles.title}
                    // open={open}
                    // value={age}
                    onChange={this.handleChange}
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={'o1'}>Option 1</MenuItem>
                    <MenuItem value={'o2'}>Option 2</MenuItem>
                    <MenuItem value={'o3'}>Option 3</MenuItem>
                    </Select>
                </FormControl>
                <div style={{margin : '0 3%'}}>
                    <div class="row">
                        <div>
                    <label className={styles.newbtn}>
                        <img id={styles.blah} src={img} ></img>
                        <input id={styles.pic} className='pis' type="file"></input>
                    </label>    
                    </div>
                </div>
                </div>

                <TextField id="standard-basic" style={ styles} label="Standard" helperText="(0/250)" style={{width:'100%'}} />


                <Grid container spacing={3} style={{marginTop:'2%'}}>
                    <Grid item xs>
                    <TextField
                      id="date"
                      label="Birthday"
                      type="date"
                      defaultValue="2017-05-24"

                    />
                    </Grid>
                    <Grid item xs>
                    <TextField
                        id="time"
                        label="Alarm clock"
                        type="time"
                        defaultValue="07:30"
                        style={{width:'100%'}}
                    />
                    </Grid>
                    <Grid item xs>
                    </Grid>
                </Grid>

                <Grid container spacing={3} style={{marginTop:'2%'}}>
                    <Grid item xs>
                    <TextField
                      id="date"
                      label="Birthday"
                      type="date"
                      defaultValue="2017-05-24"
                      
                    />
                    </Grid>
                    <Grid item xs>
                    <TextField
                        id="time"
                        label="Alarm clock"
                        type="time"
                        defaultValue="07:30"
                        style={{width:'100%'}}
                    />
                    </Grid>
                    <Grid item xs>
                    </Grid>
                </Grid>


            </Container>
            {/* </div> */}
            </>
         );
    }
}
 
export default formDesign;