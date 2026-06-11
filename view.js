
class CalculadoraView{
    constructor(){
        this.display=document.getElementById("display")
    }
    updateDisplay(valor){
        this.display.value = valor
    }
    clearDisplay(){
        this.display.value=""
    }
    delet(){
        
    }
}
const viw= new CalculadoraView()
viw.updateDisplay("")
