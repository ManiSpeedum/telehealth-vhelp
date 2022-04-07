import React from 'react'

export const SpdInputtext=(props)=>{

    return (<input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>);
}
export const SpdInputNameLabel=(props)=>{

    return (<label class="form-label">Name</label>);
}

export const SpdInputEmail=(props)=>{

    return (<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>);
}
export const SpdInputEmailLabel=(props)=>{
    return (<label class="form-label">Email</label>)
}

export const SpdInputNumber=(props)=>{

    return (<input type="number"/>);
}
export const SpdInputNumberLabel=(props)=>{
    return (<label class="form-label">Number</label>)
}

export const SpdInputPassword=(props)=>{
    return (<input type="password" class="form-control" id="exampleInputPassword1"/>)
}
export const SpdInputPasswordLabel=(props)=>{
    return (<label class="form-label">Password</label>)
}

export const SpdInputRadio = (props) =>{
    return (<input type="radio"/>)
}
export const SpdInputRadioLabel = (props) =>{
    return (<label class="form-label">Radio</label>)
}

export const SpdInputCheckbox = (props) =>{
    return (<input type="checkbox"/>)
}
export const SpdInputCheckboxLabel = (props) =>{
    return (<label class="form-label">Checkbox</label>)
}

export const SpdInputFile = (props) =>{
    return (<input type="file"/>)
}
export const SpdInputFileLabel = (props) =>{
    return (<label class="form-label">File</label>)
}

export const SpdInputDate = (props) =>{
//    const [date,setDate]=useState()
    return (
       <input type="date"/>
    )
}
export const SpdInputDateLabel = (props) =>{
    return (<label class="form-label">Date</label>)
}

export const SpdInputSubmit = (props) =>{
    return (<input type="submit"/>)
}
export const SpdInputSubmitLabel = (props) =>{
    return (<label class="form-label">Submit</label>)
}

export const SpdInputSearch = (props) =>{
    return (<input type="search"></input>)
}
export const SpdInputSearchLabel = (props) =>{
    return (<label class="form-label">Search</label>)
}




export const InputObject={};

InputObject.SpdInputtext=SpdInputtext;
InputObject.SpdInputNameLabel=SpdInputNameLabel;
InputObject.SpdInputEmail=SpdInputEmail;
InputObject.SpdInputEmailLabel=SpdInputEmailLabel;
InputObject.SpdInputNumber=SpdInputNumber;
InputObject.SpdInputNumberLabel=SpdInputNumberLabel;
InputObject.SpdInputPassword=SpdInputPassword;
InputObject.SpdInputPasswordLabel=SpdInputPasswordLabel;
InputObject.SpdInputRadio=SpdInputRadio;
InputObject.SpdInputRadioLabel=SpdInputRadioLabel;
InputObject.SpdInputCheckbox=SpdInputCheckbox;
InputObject.SpdInputCheckboxLabel=SpdInputCheckboxLabel;
InputObject.SpdInputFile=SpdInputFile;
InputObject.SpdInputFileLabel=SpdInputFileLabel;
InputObject.SpdInputDate=SpdInputDate;
InputObject.SpdInputDateLabel=SpdInputDateLabel;
InputObject.SpdInputSubmit=SpdInputSubmit;
InputObject.SpdInputSubmitLabel=SpdInputSubmitLabel;
InputObject.SpdInputSearch=SpdInputSearch;
InputObject.SpdInputSearchLabel=SpdInputSearchLabel;

// export SpdInputtext;