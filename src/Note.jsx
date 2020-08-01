import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { useState } from 'react';




const Note = (props) =>{


    const [noteValue, setNoteValue] = useState({
        titleName: '',
        content: '',
    });

    const textValue = (event) =>{
        let value = event.target.value;
        let name = event.target.name;
        setNoteValue( (preVal) => {
            return{
                ...preVal,
                [name]: value,
            }
        })

    }

    const addValue = () =>{
        props.SubmitValue(noteValue);
        setNoteValue({
            titleName: '',
            content: '',
        });
    }


    



return(
        <>
        <div className="note_div">
        <form>
        <input type="text" value={noteValue.titleName} placeholder="Title" onChange={textValue} name="titleName" /> <br />
        <textarea rows=" " cols=" " value={noteValue.content} placeholder="write a note..." onChange={textValue}  name="content" /> <br />
        <Button onClick={addValue} class="btn_icon"> 
             <AddIcon  />
        </Button>
        </form>
    
        </div>

        

        </>
    )
}


export default Note;