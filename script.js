

// Run the main function
const words = [

    {       

        word: "addition",

        hint: "The process of adding numbers"

    },

    {

        word: "meeting",

        hint: "Event in which people come together"

    },

    {

        word: "number",

        hint: "Math symbol used for counting"

    },

    {

        word: "exchange",

        hint: "The act of trading"

    },

    {

        word: "canvas",

        hint: "Piece of fabric for oil painting"

    },

    {

        word: "garden",

        hint: "Space for planting flower and plant"

    },

    {

        word: "pocket",

        hint: "A bag for carrying small items"

    },

    {

            word: "needle",

            hint: "A thin and sharp metal pin"

    },

    {

            word: "expert",

            hint: "A person with extensive knowledge"

    },

    {

            word: "statement",

            hint: "A declaration of something"

    },

    {

            word: "second",

            hint: "one-sixtieth of a minute"

    },

    {

            word: "library",

            hint: "Place containing collection of books"

    },

    {

                word: "friend",

            hint: "Person other than a family member"

    },

    {

        word: "field",

        hint: "Area of land for farming activities"

    },

    {

        word: "store",

        hint: "Large shop where goods are traded"

    },

    {

        word: "taste",

        hint: "Ability of a tongue to detect flavour"

    },

    {       

            word: "group",

            hint: "A number of objects or persons"

    },

    {

            word: "country",

            hint: "A politically identified region"

    },

    {

            word: "expansion",

            hint: "The process of increase or grow"

    },

    {

            word: "tongue",

            hint: "The muscular organ of mouth"

    },

    {

                word: "comfort",

                hint: "A pleasant feeling of relaxation"

    },

    {

            word: "feather",

            hint: "Hair like outer covering of bird"

    },{

            word: "position",

            hint: "Location of someone or something"

    },

]
const text=document.querySelector(".word");
const hintext=document.querySelector(".hint span");
const ref=document.querySelector(".play");
const ch=document.querySelector(".plate");
const timetext=document.querySelector(".time");
const inp=document.querySelector(".lama input");
let correct;
let timer;

const inittimer=maxtime => {
    clearInterval(timer);
    timer=setInterval(() => {
        if(maxtime>0)
        {
            maxtime--;
            return timetext.innerText=`${maxtime}s`;


        }
        clearInterval(timer);
        alert(`Timer's over! "${correct}" was the correct word`);
        initgame();


    },1000);

}
const initgame = () => {
    inittimer(30);
    let obj=words[Math.floor(Math.random()*words.length)];
    let arr=obj.word.split("");
    for(let i=arr.length-1;i>0;i--)
    {
        let j=Math.floor(Math.random()*(i+1));
        [arr[i],arr[j]]=[arr[j],arr[i]];
        
    }
    text.innerText=arr.join("");
    hintext.innerText=obj.hint;
    correct=obj.word;

 
}
initgame();
const checkword = () => {
    let userword = inp.value;
    if (!userword) return alert("Please enter a valid word.");

    if (userword !== correct) return alert(`Oops! ${userword} is not the right word.`);
    
    alert(`Congrats! ${userword} is a correct word`);
    initgame();
}

ref.addEventListener("click", initgame);
ch.addEventListener("click", checkword);