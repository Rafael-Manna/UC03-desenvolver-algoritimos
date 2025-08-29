import promptSync from 'prompt-sync'
const prompt = promptSync()
 let salario = 510;
   let percentual = 0;
   console.clear();
   console.log(`Ano 2010 - R$ 510.00`);
   for (let i=1;i<=15;i++){
    percentual = percentual + 0.015;
      salario = salario + (salario * percentual);
     
       console.log(`Ano ${2010 + i} - R$ ${salario.toFixed(2)} - | ${percentual.toFixed(3)*100}% > ${2009 + i} `);
   }
