function task1()
{
    let arr=[4,16,36,25];
    let summa=arr.reduce(function(sum,elem){
        if (elem%2==0) sum+=Math.sqrt(elem)
        return sum;
    },0);
    alert(summa);
}

function task2()
{
    arr=Array.from(Array(4),()=>{return Math.round(Math.random()*4)});
    alert(arr);
    for (let elem of arr) {
    if (elem > 0 && elem <= 10) {
    console.log(elem);
    }
    }
    let summa = arr.reduce((sum, elem) => sum+elem, 0);
    alert(summa);
}

function task3()
{
    arr=Array.from(Array(4),()=>{return Math.round(Math.random()*10)});
    alert(arr);
    function isTrue(number) {
        return number % 2 === 0;
    }
    alert(arr.every(isTrue))
}



