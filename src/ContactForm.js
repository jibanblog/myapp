import React, { Component } from 'react';
import './index.css';



class ContactForm extends Component{
    
    
    
constructor(props){
    super(props);
    this.state= {
        fullname: '',
        email: '',
        phone: '',
        note: '',
        message: '',
        display: '',
        error: '',
        msg: '',
        cont: '',
        mbl: '',
        txt: '',
        valid: '',
        final: '',
    }
}


handleFullname = (event) =>{

    const reg_ex = /^[A-Za-z]+$/;

    
    this.setState({
        fullname: event.target.value,

    })

    if(this.state.fullname === ''){
        this.setState({
            message: 'Please enter a fullname.',
            display: '',
        })
      } else if(this.state.fullname.length <= 1 || this.state.fullname.length > 30){
          this.setState({
              message: 'Fullname must be between 3 and 30 characters.',
              display: '',
          })
          
       }else if(this.state.fullname.match(reg_ex) && this.state.fullname.length >= 1 ){
          this.setState({
              message: '',
              display: 'Fullname is valid.',
          })

        }


}
    
    handleEmail = (event) =>{
    
        this.setState({
            email: event.target.value,
    
        })

        if(this.state.email === ''){
            this.setState({
                error : 'Please enter a email.',
                msg: '',
            })
        }else if(this.state.email.length < 5 || this.state.email.length > 29){
            this.setState({
                error: 'Email must be between 6 and 30 characters',
                msg: '',
            })
        
         }else if(this.state.email.length >= 5 && this.state.email.indexOf('@') > 1){
            this.setState({
                msg: 'Email is valid.',
                error: '',
            })
        
        }    
    
    }


        handlePhone = (event) =>{

            const reg_exp = /^[0-9]+$/;

    
            this.setState({
                phone: event.target.value,
        
            })
            if(this.state.phone.length <= 0){
                this.setState({
                    cont: 'Please enter a phone number.',
                    mbl: '',
                })
             
            }else if(this.state.phone.length > 0 && this.state.phone.length < 9){
                this.setState({
                    cont: 'Please enter 10 digit phone number.',
                    mbl: '',
                })
            }else if(this.state.phone.match(reg_exp) && this.state.phone.length === 9){
                this.setState({
                    mbl: 'Phone number is valid',
                    cont: '',
                })
            }else if(this.state.phone.length > 9 || this.state.phone.length < 9){
                this.setState({
                    cont: 'Invalid phone number.',
                    mbl: '',
                })
            }
        
        }
            
        handleNote = (event) =>{
    
                this.setState({
                    note: event.target.value,
            
                })
            if(this.state.note === ''){
                this.setState({
                    txt: 'Please write something about you.',
                    valid: '',
                })
            }else if(this.state.note.length >= 1 && this.state.note.length < 19){
                this.setState({
                    txt: 'Write about you in 250 letters.',
                    valid: '',
                })
            }else if(this.state.note.length >= 19 && this.state.note.length <= 249){
                this.setState({
                    valid: 'Textarea is Valid.',
                    txt: '',

                })
            }
            
            
            }


SubmitEvent = (event) =>{
      event.preventDefault();
    if(this.state.fullname === '' || this.state.email ==='' || this.state.phone === '' || this.state.phone === ''){
        this.setState({
            final: 'Please enter valid fullname and email and phone number and description',

        })
    }else{
        alert(` Alert:   The fullname is: ${this.state.fullname}📛 
               The email is: ${this.state.email}📧 
               The Phone number: is ${this.state.phone}📱 
               Description:[${this.state.note}]🖥 
        `)

        this.setState({
            fullname: '',
            email: '',
            phone: '',
            note: '',
            display: '',
            msg: '',
            mbl: '',
            valid: ''
        })
    }

    

     
    
        
    
}






render(){

        return(
            <>
            <div className="form">
            <div className="contact">
          <h1> Welcome To Contact Page </h1>
              <form onSubmit={this.SubmitEvent}>
                  <label> Full Name </label> <br />
                  <p className="para1"> {this.state.message} </p>
                  <p className="para2"> {this.state.display} </p>
                  <input type="text" placeholder="Enter Fullname" name="fullname" value={this.state.fullname} onChange={this.handleFullname} /> <br />
                 <label> Email </label> <br />
                 <p className="para1"> {this.state.error} </p>
                 <p className="para2"> {this.state.msg} </p>
                  <input type="email" placeholder="Enter Email" name="email" value={this.state.email} onChange={this.handleEmail}  /> <br />
                  <label> Phone Number  </label> <br />
                  <p className="para1"> {this.state.cont} </p>
                  <p className="para2"> {this.state.mbl} </p>
                  <input type="number" placeholder="Enter Phone Number" name="phone" value={this.state.phone} onChange={this.handlePhone}  />
                  <label> Description </label> <br />
                  <p className="para1"> {this.state.txt} </p>
                  <p className="para2"> {this.state.valid} </p>
                  <textarea placeholder="write about you..." name="note" value={this.state.note} onChange={this.handleNote}  /> <br />
                  <p className="para1"> {this.state.final} </p>
                  <input type="submit" value="Submit" /> <br />
                  
              </form>
          </div>

        </div>

          </>
        )
    }
}


export default ContactForm;