const body = document.querySelector('body');
const ol = document.getElementById('orderLst')
let lst_made=false;

const table = document.createElement('table');
const th1 = document.createElement('th');
const th2 = document.createElement('th');
const th3 = document.createElement('th');
const th4 = document.createElement('th');

const tr1 = document.createElement('tr');
const tr2 = document.createElement('tr')

table.setAttribute('border',3)
table.setAttribute('width','100%')
th1.textContent = "Name";
th2.textContent = "Symbol";
th3.textContent = "thumb";
th4.textContent = "Image";

tr1.append(th1,th2,th3,th4);

table.append(tr1,tr2);
body.append(table);


async function mydata(coin_name){
    const response = await fetch("https://api.coingecko.com/api/v3/search?query=shiba");
    
    const data = await response.json();

    if (lst_made==false){
        for (const coin of data.coins ){
            const li = document.createElement('li');
            li.textContent = coin.name;
            ol.append(li);
        }
        lst_made=true
    }
    else{
        const result = document.createElement('h2');
        result.textContent='Result not found';
        table.after(result);
    }

    for (const coin of data.coins){
        if (coin.name.toLowerCase()==coin_name.toLowerCase()){
            const td1 = document.createElement('td');
            const td2 = document.createElement('td');
            const td3 = document.createElement('td');
            const td4 = document.createElement('td');
            const img1 = document.createElement('img');
            const img2 = document.createElement('img');
            tr2.append(td1,td2,td3,td4);
            td3.append(img1);
            td4.append(img2);
            td1.textContent = coin.name;
            td2.textContent = coin.symbol;
            img1.src = coin.thumb;
            img2.src = coin.large;
            
        }
    }
}

mydata()

const button = document.getElementById('search');
const searchValue = document.getElementById('searchbox');

button.addEventListener('click',()=>{
    let coin_name = searchValue.value;
    mydata(coin_name)
})

