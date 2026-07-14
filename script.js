
const text=`My beautiful Laxmi,\n\nHappy Birthday, my love.\n\nWe're not a perfect couple.\n\nWe argue.\nWe get angry.\nSometimes we misunderstand each other.\n\nBut that's never been the end of our story.\n\nNo matter how much we fight...\nNo matter how life tries to pull us apart...\n\nOur hearts always find their way back to each other.\n\nWe heal every crack with something movies can never truly show...\n\nReal love.\n\nA love that stays.\nA love that forgives.\nA love that grows stronger after every storm.\n\nI don't want just beautiful moments with you.\nI want ordinary mornings...\nSilly evenings...\nLittle arguments...\nBig dreams...\nAnd a lifetime of choosing each other.\n\nOne day we'll grow old.\n\nMaybe we'll walk slowly.\n\nMaybe we'll need each other's support.\n\nAnd I'll still be there...\nHolding your hand...\nSmiling at you like I do today.\n\nBecause my heart already knows...\n\nYou are the love of my life.\n\nI love you, Laxmi.\n\nMore than words could ever explain.\n\nHappy Birthday, My Puku.\n\nForever Yours,\nAshutosh ❤️`;
function next1(){scene1.classList.add('hidden');scene2.classList.remove('hidden');hearts();}
function next2(){scene2.classList.add('hidden');scene3.classList.remove('hidden');type();}
function next3(){
scene3.classList.add('hidden');
scene4.classList.remove('hidden');
cycle();
hearts();
}
function type(){
let i=0;
let t=document.getElementById('type');
let inter=setInterval(()=>{t.innerHTML=text.substring(0,i).replace(/\n/g,"<br>");i++;if(i>text.length)clearInterval(inter);},25);
}
const arr=[
"💖 You're beautiful.",
"🌸 You're a cutie.",
"🔥 You're my hottie.",
"🕊️ You're innocent.",
"💪 You're strong.",
"❤️ Baby... you're the love of my life. 😘"];
function cycle(){
let i=0;
let m=document.getElementById('msgs');
m.innerHTML=arr[0];
setInterval(()=>{i=(i+1)%arr.length;m.innerHTML=arr[i];},2200);
}
function hearts(){
setInterval(()=>{
let h=document.createElement('div');
h.className='heart';
h.innerHTML=Math.random()>0.5?'❤️':'🌸';
h.style.left=Math.random()*100+'vw';
document.body.appendChild(h);
setTimeout(()=>h.remove(),6000);
},180);
}
