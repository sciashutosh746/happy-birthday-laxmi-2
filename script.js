
const text=`My beautiful Laxmi,

Happy Birthday, my love. ❤️

Today is the day the world received the most hehe krne wali soul😁😁 bich m tokne wali soul itna sara ek sath bolne wali s ladki😁😁, and I feel incredibly lucky that life brought you into mine.

There are so many things I want to tell you that words never seem enough. But I'll try.

If someone asked me what the most beautiful thing in my life is, I wouldn't point at anything else or anyone 

I'd simply smile...

...because it's you.

You walked into my life so naturally first like a friend now my evrything that I never realized when you became my safest place.

I just love your smile like nothing in my life😊😊

It makes my worst days feel lighter.

Your voice calms me everytime it takes away all the worries inside my head

Your happiness is the gift I ask from god everyday because it gives my heart peace 

Thank you for every smile.

Every silly conversation.

Every memory.

Every moment you've unknowingly made my life brighter.

And now I want to tell you something straight from my heart...

You know...

We're not a perfect couple.

We argue.

We get angry.

Sometimes we misunderstand each other.

Sometimes our egos become louder than our hearts.

There are moments when it feels like we're being pulled in different directions.

But do you know what I love the most about us?

No matter how much we fight...

And no matter how much everything tries to pull us apart...

Our hearts always find their way back to each other.

They heal every damage with our precious real love.

Not like in the movies...

But a real-life love that grows together, lives together, and grows old together.

I don't want a perfect love story.

I want OUR love story.

A story where we choose each other every single day.

I'll love you the same when we're old.

Even when we're unable to walk.

We'll still be supporting each other.

We'll still be laughing together.

We'll still be holding each other's hands.

We'll still be loving each other exactly the same. some times things will not go the way we want but we'll be with each other we'll never let anyone else come between us

Because every part of our hearts already knows...

We love each other.

And we're together in this long journey.

I don't want a love that lasts for a season.

I want a love that grows with us...

Laughs with us...

Cries with us...

And grows old with us.

If life gives me one wish...

It wouldn't be money.

It wouldn't be success.

It would simply be...

A beautiful peaceful life with my happy small sweet family our kids aur parents uske alawa no one's allowed😄😄

Thank you for being with me supporting me in the times when I loose confidence on myself.

Thank you for being my peace.

Thank you for being my happiness.

I love you, Laxmi.

So much more than words could ever explain. 🧡

Happy Birthday, Meri Puku. 🧡😘

Your Love

Ashutosh 

"No matter how many birthdays come and go...

I'll always choose you...

Every single time."

♾️ Forever & Always ♾️`;
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
