import promptSync from 'prompt-sync'
const prompt = promptSync()
console.log('\nCardapio:\n [1]Burguer ------------ R$ 19.50\n [2]X-Burguer ----------- R$ 21.50\n [3]X-Salada ------------ R$ 23.50\n [4]X-Bacon ------------ R$ 24.50\n [5]X-Tudo ------------ R$ 25.50\n [6]Caipira ------------ R$ 22.50')
let valor = 0
let fechar = 1
let pedido 
console.log("Para fechar o pedido digite 0!")
let b = 0
let xb = 0
let xs = 0
let xba = 0
let xt = 0
let cai = 0
while(fechar == 1){
    console.log(`                                                                    [ Comanda: $$$ ] `)
    if (b!= 0){
        console.log(`                                                                  Burguer: R$ 19.50  x${b}`)
    }
    if (xb!= 0){
        console.log(`                                                                  X-Burguer: R$ 21.50  x${xb}`)
    }
    if (xs!= 0){
        console.log(`                                                                  X-Salada: R$ 23.50  x${xs}`)
    }
    if (xba!= 0){
        console.log(`                                                                  X-Bacon: R$ 24.50  x${xba}`)
    }
    if (xt!= 0){
        console.log(`                                                                  X-Tudo: R$ 25.50  x${xt}`)
    }
    if (cai!= 0){
        console.log(`                                                                  Caipira: R$ 22.50  x${cai}`)
    }
    console.log(`       Valor atual do Pedido: R$ ${valor}`)
    pedido = Number(prompt())
    
    switch(pedido){
        case 0:
        fechar = 0
        console.clear();
        console.log(`Pedido confirmado!\n Comanda: `)
        if (b!= 0){
            console.log(`Burguer: R$ 19.50  x${b}`)
        }
        if (xb!= 0){
            console.log(`X-Burguer: R$ 21.50  x${xb}`)
        }
        if (xs!= 0){
            console.log(`X-Salada: R$ 23.50  x${xs}`)
        }
        if (xba!= 0){
            console.log(`X-Bacon: R$ 24.50  x${xba}`)
        }
        if (xt!= 0){
            console.log(`X-Tudo: R$ 25.50  x${xt}`)
        }
        if (cai!= 0){
            console.log(`Caipira: R$ 22.50  x${cai}`)
        }
        console.log(`Valor Total do Pedido: R$ ${valor}`)
        break;
        case 1:
            b++
        valor = valor + 19.5
        console.clear();
        console.log('Cardapio:\n [1]Burguer ------------ R$ 19.50\n [2]X-Burguer ----------- R$ 21.50\n [3]X-Salada ------------ R$ 23.50\n [4]X-Bacon ------------ R$ 24.50\n [5]X-Tudo ------------ R$ 25.50\n [6]Caipira ------------ R$ 22.50')
    
        break;
        case 2:
            xb++
        valor = valor + 21.5
        console.clear();
        console.log('Cardapio:\n [1]Burguer ------------ R$ 19.50\n [2]X-Burguer ----------- R$ 21.50\n [3]X-Salada ------------ R$ 23.50\n [4]X-Bacon ------------ R$ 24.50\n [5]X-Tudo ------------ R$ 25.50\n [6]Caipira ------------ R$ 22.50')


        break;
        case 3:
            xs++
        valor = valor + 23.5
        console.clear();
        console.log('Cardapio:\n [1]Burguer ------------ R$ 19.50\n [2]X-Burguer ----------- R$ 21.50\n [3]X-Salada ------------ R$ 23.50\n [4]X-Bacon ------------ R$ 24.50\n [5]X-Tudo ------------ R$ 25.50\n [6]Caipira ------------ R$ 22.50')


        break;
        case 4:
            xba++
        valor = valor + 24.5
        console.clear();
        console.log('Cardapio:\n [1]Burguer ------------ R$ 19.50\n [2]X-Burguer ----------- R$ 21.50\n [3]X-Salada ------------ R$ 23.50\n [4]X-Bacon ------------ R$ 24.50\n [5]X-Tudo ------------ R$ 25.50\n [6]Caipira ------------ R$ 22.50')

       
        break;
        case 5:
            xt++
        valor = valor + 25.5
        console.clear();
        console.log('Cardapio:\n [1]Burguer ------------ R$ 19.50\n [2]X-Burguer ----------- R$ 21.50\n [3]X-Salada ------------ R$ 23.50\n [4]X-Bacon ------------ R$ 24.50\n [5]X-Tudo ------------ R$ 25.50\n [6]Caipira ------------ R$ 22.50')

        
        break;
        case 6:
            cai++
        valor = valor + 22.5
        console.clear();
        console.log('Cardapio:\n [1]Burguer ------------ R$ 19.50\n [2]X-Burguer ----------- R$ 21.50\n [3]X-Salada ------------ R$ 23.50\n [4]X-Bacon ------------ R$ 24.50\n [5]X-Tudo ------------ R$ 25.50\n [6]Caipira ------------ R$ 22.50')

        
        break;
        default:
            console.clear();
            console.log('Cardapio:\n [1]Burguer ------------ R$ 19.50\n [2]X-Burguer ----------- R$ 21.50\n [3]X-Salada ------------ R$ 23.50\n [4]X-Bacon ------------ R$ 24.50\n [5]X-Tudo ------------ R$ 25.50\n [6]Caipira ------------ R$ 22.50')

            break;
    }
 
}