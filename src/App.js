import { useState } from 'react';
import './App.css';
import Button from './Componemtes/Button';
import Input from './Componemtes/Input';

function App() {
  const[Resultado,setResult]=useState(false);
  const [valor,setValor]=useState("");
  const[valorA,setValorA]=useState(0);
  const[Oparador,setOperador]=useState("");
  
  function Adicionar(x,rotulo){
    console.log(valorA)
    if(Resultado==false){
        if(x!=""&&rotulo!="Operador"){
          setValor(valor+x)
        }else if(rotulo=="Operador"){
          Op(x)
    }}else{
      setValor("")
      setResult(false)
    }
  }

  function Op(op){
    if(valorA!=0){
      Result()
    }else{
    setValorA(parseInt(valor))
    setOperador(op)
    setValor("")}
  } 
  function limpar(){
    setResult(true)
    setValorA(0)
    setOperador("")
  }

  function Result(){
    if(valorA!=0&&Oparador!=""){
    const B=parseInt(valor)
    switch (Oparador) {
        case "+":
       
        setValor(valorA+B)
        limpar()
        break;
        case "-":
        
        setValor(valorA-B)
        limpar()
        break;
        case "X":
        
        setValor(valorA*B)
        limpar()
        break;
        case "/":
       
        B!=0?setValor(valorA/B):setValor("ExceptionDivisionByZero")
        limpar()
        break;
    
      default:
        break;}
    }
     
  }
  return (
    <div className="App">
      <header className="App-header">
          <div className='Calc'>
            <div className='SecoesImput'>
              <Input valor={valor} />
            </div>
            <div className='Secoes'>
              <Button escorpo="1" rotulo="Numeric" Adicionar={Adicionar}/>
              <Button escorpo="2" rotulo="Numeric"Adicionar={Adicionar}/>
              <Button escorpo="3" rotulo="Numeric"Adicionar={Adicionar}/>
              <Button escorpo="X" rotulo="Operador"Adicionar={Adicionar}/>
            </div>
            <div className='Secoes'>
              <Button escorpo="4" rotulo="Numeric"Adicionar={Adicionar}/>
              <Button escorpo="5" rotulo="Numeric"Adicionar={Adicionar}/>
              <Button escorpo="6" rotulo="Numeric"Adicionar={Adicionar}/>
              <Button escorpo="/" rotulo="Operador"Adicionar={Adicionar}/>
            </div>
            <div className='Secoes'>
              <Button escorpo="7" rotulo="Numeric"Adicionar={Adicionar}/>
              <Button escorpo="8" rotulo="Numeric"Adicionar={Adicionar}/>
              <Button escorpo="9" rotulo="Numeric"Adicionar={Adicionar}/>
              <Button escorpo="+" rotulo="Operador"Adicionar={Adicionar}/>
            </div>
            <div className='Secoes'>
              <Button escorpo="" rotulo="Numeric"Adicionar={Adicionar}/>
              <Button escorpo="0" rotulo="Numeric"Adicionar={Adicionar}/>
              <Button escorpo="" rotulo="Numeric"Adicionar={Adicionar}/>
              <Button escorpo="-" rotulo="Operador"Adicionar={Adicionar}/>
            </div>
            <div className='Secoes'>
              <Button escorpo="=" rotulo="Operador"Adicionar={Result}/>
            </div>
          </div>
      </header>
    </div>
  );
}

export default App;
