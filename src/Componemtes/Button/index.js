import './Button.css'



export default function ({escorpo,rotulo,Adicionar}){
        
    return(
        <button className={rotulo} onClick={()=>Adicionar(escorpo,rotulo)} >
            {escorpo}
        </button>
    )
}