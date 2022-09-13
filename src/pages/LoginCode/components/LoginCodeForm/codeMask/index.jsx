import './codeMask.css'

const CodeMask = ({input, register, errors,changeActiv, removeActiv,clicked,setClicked,setCode, error,setEmail,}) => {

    const handleChange = (inputCard) => {
        const cardValue = inputCard.target.value.replace(/\D/g, '').match(/(\d{0,4})(\d{0,6})/);
        inputCard.target.value = !cardValue[2]
            ? cardValue[1]
            : `${cardValue[1]} ${cardValue[2]}${`${
                cardValue[3] ? ` ${cardValue[3]}` : ''
            }`}${`${cardValue[4] ? ` ${cardValue[4]}` : ''}`}`;
            
    };

    const maxValueInputs = (e) => {
        if(e.target.value !== '') {
            e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 1)
        }
    }

    const handleFocusNext = (e) => {
        if(clicked) {
            setClicked(false)
        }
        e.target.setSelectionRange(0, 1)
        if(e.target.nextSibling && e.target.value !== '') {
            e.target.nextSibling.focus();
        }
        changeActiv(e.target.name)
    }
    const handleFocusPrev = (e) => {
        if(clicked) {
            setClicked(false)
        }
        if(e.target.previousSibling && e.target.value === '') {
            e.target.previousSibling.focus()
        }
        removeActiv(e.target.name)
    }
    return (
        <>
            <input type="tel" autoComplete='off' 
            
             className={errors[input.name] && clicked ? 'error_input' : 'mask'}
            style={{borderBottom: (input.active && '3px solid #003367') || 
                    (error && '3px solid red')}} 
          
                  onKeyUp={(e) => {if(e.keyCode === 8) {handleFocusPrev(e)}}} 
                 removeActiv={removeActiv}
                  onInput={(e => {
              
                    handleChange(e)
                    maxValueInputs(e)
                    handleFocusNext(e)
                  })} {...register(`${input.name}`, {
                    required: "this is required",
                  })}
           
            />
        </>
    )
    
}

export default CodeMask;