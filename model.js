class CalculadoraModel{
    constructor(){
        this.valoratual = ''
        this.operador =""
        this.resultado=0
    }

    criarNumero(num){
        this.valoratual += num
    }

    defenirOperador(operador){
        if(this.valoratual==='') return
        this.operador= operador
        this.resultado=parseFloat(this.valoratual)
        this.valoratual=''

    }

    calcularNumero(){
        let vlaor2= parseFloat(this.valoratual)
        if(isNaN(vlaor2)) return  

        switch(this.operador){
        case '+':
            this.resultado+=vlaor2
            break
        case '-':
            this.resultado-=vlaor2
            break
        case '*':
            this.resultado*=vlaor2
            break
        case '/':
            if(vlaor2== 0){
                this.resultado='ERROR'
            }else{
                this.resultado/=vlaor2
            }
            
            break
        default:
            return
        }
        this.valoratual= this.resultado.toString()
        this.operador=''
    }
   limpar(){
        this.valoratual = ""
        this.operador =''
        this.resultado=0
    }
}






