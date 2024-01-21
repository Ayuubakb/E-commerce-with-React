import React,{useContext, useEffect, useState} from 'react'
import contextShare from '../Fonction/contextShare'

export const SingleItem = () => {
    let params = (new URL(document.location)).searchParams;
    let item = params.get("item");

    const [itemData,setItemData]=useState([{id:null,img:null,colors:[],label:null}])
    useEffect(()=>{
        fetch(`/singleItem/${item}`).then(
            res=>res.json()
        ).then(
            data=>setItemData(data)
        )
    },[])

    const conShare=useContext(contextShare);

    const [choices,setChoices]=useState({})
    useEffect(()=>{
        setChoices({number:1,color:itemData[0].colors[0],size:'M'})
    },itemData)
    
    const addNumber=()=>{
        setChoices(c=>{return{...c,number:c.number+1}})
    }
    const minusNumber=()=>{
        if(choices.number > 1)
            setChoices(c=>{return{...c,number:c.number-1}})
    }
    const setSize=(e)=>{
        setChoices(c=>{return{...c,size:e.target.value}})
    }
    /*useEffect(()=>{
        
        let radios=document.querySelectorAll("input[type='radio']")
        const fct=(e)=>{
                if(e.target.checked){
                    console.log(e.target.value);
                    setChoices(c=>{return{...c,color:e.target.value}})
                }
        }
        radios.forEach((radio)=>{
            radio.addEventListener('change',fct)
        })

        radios.forEach((radio)=>{
            return()=>{radio.removeEventListener('change',fct)}
        })
        
    },[])*/

    const fct=(e)=>{
        if(e.target.checked){
            console.log(e.target.value);
            setChoices(c=>{return{...c,color:e.target.value}})
        }
}

    const addToCart=()=>{
        const exists=(conShare.addedItems.filter((i)=>{
            return (i.id==item && i.color==choices.color && i.size==choices.size)
        }).length);
        const notExist=()=>{
            conShare.setAddedItems((a)=>{return [...a,{id,img,label,...choices}] })
        }
        const isExist=()=>{
            conShare.setAddedItems(conShare.addedItems.map((i)=>{if(i.id==item && i.color==choices.color && i.size==choices.size){ i.number=choices.number}; return i}))
        }
        const {id,img,label}=itemData[0];
        (exists===0)?notExist():isExist();
    }
  return (
    <section className='singleItem'>
        {
            itemData.id ===null?<h1>Loading...</h1>:(
                <>
        <div className='imCon'>
            <img src={itemData[0].img}></img>
        </div>
        <div className='infoCon'>
            <div className='writing'>
                <h1>{itemData[0].label}</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi quaerat, suscipit totam corrupti eius, exercitationem placeat delectus, amet sint laboriosam beatae? Vitae officia nostrum natus consectetur error. Consequuntur, ab quia.</p>
                <h2>200 $</h2>
            </div>
            <div className='choices'>
                <div className='choices-1'>
                    <p>Color</p>
                    {
                        itemData[0].colors.map(color => {
                            return(
                            <label style={{backgroundColor:color}}>
                                <input type='radio' name='color' value={color} id={color} onChange={fct}></input>
                                <span className='checkmark'></span>
                            </label>
                            )
                        })
                    }
                </div>
                <div className='choices-2'>
                    <label>Size</label>
                    <select id='sizeSel' onChange={setSize}>
                        <option value='xs'>XS</option>
                        <option value='s'>S</option>
                        <option value='m' selected>M</option>
                        <option value='l'>L</option>
                    </select>
                </div>
            </div>
            <div className='choices'>
                <p><span onClick={minusNumber}>-</span> <span id='numberCom'>{choices.number}</span> <span onClick={addNumber}>+</span></p>
                <button id='addToCartBtn' onClick={addToCart}>ADD TO CART</button>
            </div>
        </div>
        </>)
    }
    </section>
  )
}
