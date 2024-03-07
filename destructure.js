// 1.array destructuring
    const numbers = [44,55];
     // const x = numbers[0]
      // const y = numbers[1]

    // directly
      // const [x,y] = [44,55];

    // by variable
      const [x,y] = numbers;

    // by function
     function boxify (num , num1){
        const number = [num , num1]
        return number ;
     };
     const [fst , sec] = boxify(44,55);

    // by object
    const Masud = {
        name: 'masuidda',
        age: 24,
        wifes: ['bristi','tuli', 'botki', 'mithila', ],
        son : "kallo"
    }
    // const [fstWife ,secWife] = ['bristi','tuli']
    const [fstWife ,secWife] = Masud.wifes;
    // console.log(fstWife,secWife);


// object destructuring
     const employee ={
         name : 'musud' ,
         age : 20 ,
         status : 'married',
         wife : 'bristi' ,
         skill : {
            language : ['html','css','c++','java'],
            
         },
         specification : {
            spoke : ['english','arabic','spanish'],
            designation : "developer" ,
            watch : {
                color : 'black ',
                price : 3000 ,
            }
         }

     };
    //  basic
    const {name , wife} = employee
    // pacapaci
    const {designation } = employee.specification
    const {color ,price} = employee.specification.watch
    console.log(color,price);