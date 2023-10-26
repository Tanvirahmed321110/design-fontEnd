// product quintity plus and minus 
// function quintity(plusOrMinus,id){
//   const input = document.getElementById('input-quintity')
//   let inputNum = parseInt(input.value)
//   const btn = document.getElementById(id);

//   if(plusOrMinus){
//     btn.addEventListener('click',function(){
//       inputNum++
//       input.value = inputNum
//       if(inputNum>=6){
//         input.value = 5
//       }
      
//       console.log(input.value)
//     })
//   }
//   else {
//     btn.addEventListener('click',function(){
//       inputNum--
//       input.value =inputNum
//     })
//   }
// }

// quintity(true,'btn-qutntity-plus')
// quintity(false,'btn-qutntity-minus')


 
document.getElementById('btn-qutntity-plus').addEventListener('click',function(){
    const input = document.getElementById('input-quintity')
    let inputNum = parseInt(input.value)
    
    if(inputNum>=5){
        input.value = 5
    }
    else{
        input.value = inputNum+1;
    }
})
 
document.getElementById('btn-qutntity-minus').addEventListener('click',function(){
    const input = document.getElementById('input-quintity')
    let inputNum = parseInt(input.value)
    if(inputNum<=1){
        input.value = 1
    }
    else{
        
    input.value = inputNum-1;
    }
})