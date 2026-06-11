class CalculadoraController{
    constructor(view,model){
        this.model=model
        this.view=view
        this.botoes=document.querySelectorAll('.btn')

        this.inicializar()
    }
    inicializar(){
        this.botoes.forEach(button =>{
            button.addEventListener('click', ()=>{
                const valorBotao = button.textContent
               console.log(valorBotao)
               
                if(!isNaN(valorBotao)){
                    this.model.criarNumero(valorBotao)
                    this.view.updateDisplay(this.model.valoratual)
                }else if(valorBotao==='C'){
                    this.model.limpar()
                    this.view.clearDisplay()
                } else if(valorBotao ==='='){
                   
                    this.model.calcularNumero(valorBotao)
                    this.view.updateDisplay(this.model.valoratual)
                }
                else if(valorBotao==='delet'){
                    this.view.delet(valorBotao)
                }
                else{
                    this.model.defenirOperador(valorBotao)
                }
                })
            })
        }
    }
    document.addEventListener('DOMContentLoaded', () => {
        const model = new CalculadoraModel()
        const view = new CalculadoraView()
        new CalculadoraController(view, model)
    })