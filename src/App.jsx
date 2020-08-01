import React from 'react';
import Header from './Header.jsx';
import Note from './Note.jsx';
import CreateDiv from './CreateDiv.jsx';
import { useState } from 'react';
import ContactForm from './ContactForm.js';





const App = (props) =>{

    const [list, setList] = useState([]);

    const ClickEvent = (noteValue) =>{
        setList( (preValue) =>{
            return[...preValue, noteValue]
        });
        
    }

    const dltFunction = (id) =>{
        setList( (preVal) =>{
            return preVal.filter( (newVal, index) =>{
                return index !== id;
            })

        })

    }

    


    return(
        <>
        <div className="first">
        <Header> </Header>
        <Note
        SubmitValue={ClickEvent}> 
        </Note>

        {list.map((curVal, index) =>{
            return <CreateDiv
                key={index}
                id={index}
                status={curVal.titleName}
                description={curVal.content}
                removeItems={dltFunction}
                />
            
        })}

        </div>


        
            <ContactForm> </ContactForm>
        

        
          
        
        

        
        
       </>
        )



}



export default App;