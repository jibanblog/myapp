import React from 'react';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';



const CreateDiv = (props) =>{
   
    const DeleteEvent = () =>{
        props.removeItems(props.id);
    }

    return(
   <>
 <div class="auto">
   <div className="lt_div">

   <h2> {props.status} </h2>
   <h4> {props.description} </h4>

   <Button class="btn" onClick={DeleteEvent}>
    <DeleteIcon className="dlt_icon" />
</Button>
              
</div>
</div>


   </>
    )



}



export default CreateDiv;