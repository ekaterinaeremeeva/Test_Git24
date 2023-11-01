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

function task3()
{
    arr=Array.from(Array(4),()=>{return Math.round(Math.random()*10)});
    alert(arr);
    function isTrue(number) {
        return number % 2 === 0;
    }
    alert(arr.every(isTrue))
}

function task4()
{
    arr=Array.from(Array(10),()=>{return Math.round(Math.random()*30)});
    alert(arr);
    let flt=arr.filter(function(elem){
        return(elem % 5)==0 
    });
    alert(flt);
}

function task5()
{
    arr=Array.from(Array(4),()=>{return Math.round(Math.random()*10)});
    alert(arr); 
    let sum=0;
    arr.forEach(x => {
        sum += x;
    });
    let sredn = (+sum / +arr.length);
    alert(sredn.toFixed(1));
}

function task6()
{
    array=Array.from(Array(10),()=>{return Math.round(Math.random()*10)});
    alert(array); 
    let firstElement = array.shift();
    console.log(firstElement);
    console.log(array);
    array.push(firstElement);
    alert (array);
}

function task7()
{
    let arr=Array.from(Array(10),()=>{return Math.round(Math.random()*20)});
    alert (arr);
    console.log(arr.toString()); 
    let summaChetn=arr.reduce((sum,elem,index)=>{
        if (index%2==0) sum=sum+elem;
        return sum;
    },0);
    console.log(summaChetn);
    let summaNechetn=arr.reduce((sum,elem,index)=>{
        if (index%2!=0) sum=sum+elem;
        return sum;
    },0);
    console.log(summaNechetn);
    alert(summaChetn/summaNechetn);
}

function task8()
{
    let num=prompt ("Введите число");
    if (isNaN(num) || num<0 || num>=9)
        alert("Error");
    else{
    let arr=num.split('').map(elem=>+elem +1);
    alert(`Ваше число ${num}, новое число ${arr.join('')}`);
    }
}

function task9()
{
    let arr = ['http://123', 'www.example', 'http://example', '123http://123', '36', 'close'];
    alert (arr);
    const result = arr.filter((word) => word.startsWith('http://'));
    alert (result);
}