import React, {useEffect,useContext, useState, Component} from 'react';
// import ReactDOM from 'react-dom';
// import { useHistory } from 'react-router'
// import OtpInput from 'react-otp-input';
// import { userService } from '../_services';
import { MDBDataTableV5 } from 'mdbreact';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  {Header} from  "./common/Header"
import { userService } from '../_services';


export class Users extends React.Component{
    
    state = { users:[] };

    componentWillMount(){
         userService.get_all_goals()
        .then( (response) => {

          
            this.setState({ users: response.data.my_goals})

          
        }).catch((error) =>{
        
        
        });
       
    }




    
 
    handleChange = (state) => this.setState({ state });

	render() {
        let data_table=
        {    columns: [
            {
              label: 'Description',
              field: 'description',
              width: 150,
              attributes: {
                'aria-controls': 'DataTable',
                'aria-label': 'Description',
              },
            },
             {
              label: 'Amount',
              field: 'amount',
              width: 150,
              attributes: {
                'aria-controls': 'DataTable',
                'aria-label': 'Amount',
              },
            },
              {
              label: 'Target Date',
              field: 'target_date',
              width: 150,
              attributes: {
                'aria-controls': 'DataTable',
                'aria-label': 'Target Date',
              },
            },
              
            ],
          rows:[
              
          ]
      }

      let  mappedUser =[]
      this.state.users && this.state.users.length>0 && this.state.users.map((key, value)=>{
          
         let hsh = {}
         hsh["description"] = key.description
         hsh["amount"] = key.amount
        hsh["target_date"] = key.goal_target_date
  
         mappedUser.push(hsh)
         
 
       })
 
       data_table["rows"]=mappedUser

    return ( 
     <>
     <Header></Header>
     <MDBDataTableV5
                    hover
                    entriesOptions={[5, 20, 25]}
                    entries={5}
                    pagesAmount={4}
                    data={data_table}
                    
                    
                    proCheckboxes
                    filledCheckboxes
                    proSelect
                />
     




     </>
    	)
  }
}


export default (Users);
