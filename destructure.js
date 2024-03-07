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


