import React,{useContext} from 'react'
import contextShare from '../Fonction/contextShare'

export const SingleItem = () => {
    const conShare=useContext(contextShare);
    /*const addNumber=()=>{
        conShare.setAddedItems(conShare.addedItems.map((a)=>{if(a)}))
    }
    const minusNumber=()=>{

    }*/

  return (
    <section className='singleItem'>
        <div className='imCon'>
            <img src="https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png"></img>
        </div>
        <div className='infoCon'>
            <div className='writing'>
                <h1>Denim Jean</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi quaerat, suscipit totam corrupti eius, exercitationem placeat delectus, amet sint laboriosam beatae? Vitae officia nostrum natus consectetur error. Consequuntur, ab quia.</p>
                <h2>200 $</h2>
            </div>
            <div className='choices'>
                <div className='choices-1'>
                    <p>Color</p>
                    <label style={{backgroundColor:'red'}}>
                        <input type='radio' name='color' value='red'></input>
                    </label>
                    <label style={{backgroundColor:'blue'}}>
                        <input type='radio' name='color' value='blue'></input>
                    </label>
                    <label style={{backgroundColor:'green'}}>
                        <input type='radio' name='color' value='green'></input>
                    </label>
                </div>
                <div className='choices-2'>
                    <label>Size</label>
                    <select id='sizeSel'>
                        <option value='xs'>XS</option>
                        <option value='s'>S</option>
                        <option value='m'defaultChecked>M</option>
                        <option value='l'>L</option>
                    </select>
                </div>
            </div>
            <div className='choices'>
                <p><span /*onClick={addNumber}*/>-</span> <span id='numberCom'>1</span> <span /*onClick={minusNumber}*/>+</span></p>
                <button id='addToCartBtn'>ADD TO CART</button>
            </div>
        </div>
    </section>
  )
}
