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
    arr=Array.from(Array(4),()=>{return Math.round(Math.random()*20)});
    alert(arr);
    let arr1 = arr.filter(x => x > 0 && x <10);
    console.log(arr1);
    let summa = arr1.reduce(function(sum, elem) {
        return sum + elem;
    }, 0);
    alert(summa);
}
