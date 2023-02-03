
  export const  formattedDate=(date)=>{
    let dateModified = new Date(date);
    let dateFormatted = dateModified.toLocaleDateString();


    return   dateFormatted
    
    }

