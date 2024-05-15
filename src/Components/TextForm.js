import React,{useState} from 'react'

export default function TextForm(props) {
    const handleupclick=()=>{
       
        let newText=text.toUpperCase()
        setText(newText);
        props.showAlert('converted To Uppercase','success')
    }
    const handlelowclick=()=>{
        
        let newText=text.toLowerCase()
        setText(newText);
        props.showAlert('converted To Lowercase','success')
    }
    const handleonchange=(event)=>{
        
        setText(event.target.value)
    }

    const handlecopy=()=>{
     
        navigator.clipboard.writeText(text);
        props.showAlert('Text copied','success')
        
    }
    const handleExtraSpaces=()=>{
       let newText= text.split(/[ ]+/)
       setText(newText.join(' '))
       props.showAlert('Extra spaces removed','success')
    }
    const handleclear=()=>{
        
        setText('')
        props.showAlert('Text cleard','success')
    }

    const [text,setText]=useState('');
  return (
    <>
    <div className='container' style={{color :props.mode==='dark'?'white':'#031837'}}>
        <h1>{props.head}</h1>
        <div className='mb-3'>
      
        <textarea className='form-control' onChange={handleonchange}  style={{backgroundColor :props.mode==='dark'?'rgb(10 51 100)':'white'}}  value={text} id='my-box' rows='8'></textarea>
        </div>
        <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleupclick}>Upper case</button>
        <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handlelowclick}>Lower case</button>
        <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handlecopy}>Copy</button>
       
       <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
       <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleclear}>Clear</button>


    </div>
    <div className="container my-3 "  style={{color :props.mode==='dark'?'white':'#031837' }} >
        <h2>Your text summary</h2>
        <p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} and {text.length}</p>
        <p> {0.008*text.split(' ').filter((element)=>{return element.length!==0}).length} mints read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter something in the text box above to preview it here'}</p>
    </div>
  
    </>
  )
}
