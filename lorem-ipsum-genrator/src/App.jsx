import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const paragraphData = [
  {
    id: 1,
    text: "Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie sweet apple pie tiramisu carrot cake. Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon drops bear claw gummies. Jelly bear claw gummi bears lollipop cotton candy gummi bears chocolate bar cake cookie. Cupcake muffin danish muffin cookie gummies. Jelly beans tiramisu pudding. Toffee soufflé chocolate cake pastry brownie. Oat cake halvah sweet roll cotton candy croissant lollipop. Macaroon tiramisu chocolate bar candy candy carrot cake jelly sweet. Gummies croissant macaroon dessert. Chocolate cake dragée pie. The quick brown fox jumps over the lazy dog. This sentence is often used to demonstrate fonts, as it includes every letter of the alphabet."
  },
  {
    id: 2,
    text: "Next level tbh everyday carry, blog copper mug forage kitsch roof party pickled hammock kale chips tofu. Etsy shoreditch 8-bit microdosing, XOXO viral butcher banh mi humblebrag listicle woke bicycle rights brunch before they sold out ramps. Twee shabby chic taiyaki flannel, enamel pin venmo vape four loko. Hexagon kale chips typewriter kitsch 8-bit organic plaid small batch keffiyeh ethical banh mi narwhal echo park cronut. In a world where technology evolves at an unprecedented rate, staying up-to-date is essential for personal and professional growth."
  },
  {
    id: 3,
    text: "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead. A journey of a thousand miles begins with a single step. Every large goal requires small actions to eventually be achieved."
  },
  {
    id: 4,
    text: "Cat gets stuck in tree firefighters try to get cat down firefighters get stuck in tree cat eats firefighters' slippers kitty power ignore the squirrels, you'll never catch them anyway for what a cat-ass-trophy! or purr as loud as possible, be the most annoying cat that you can, and, knock everything off the table. Pretend you want to go out but then don't bite off human's toes, yet disappear for four days and return home with an expensive injury; bite the vet so catch eat throw up catch eat throw up bad birds. The seasons change as a reminder that nothing lasts forever, and each period of life has its own beauty and lessons."
  },
  {
    id: 5,
    text: "This opera's as lousy as it is brilliant! Your lyrics lack subtlety. You can't just have your characters announce how they feel. That makes me feel angry! Anyhoo, your net-suits will allow you to experience Fry's worm infested bowels as if you were actually wriggling through them. I just told you! You've killed me! Fry! Quit doing the right thing, you jerk! Michelle, I don't regret this, but I both rue and lament it. Morbo can't understand his teleprompter because he forgot how you say that letter that's shaped like a man wearing a hat. Creativity thrives in environments that allow freedom of thought. When restrictions are lifted, the mind can explore endless possibilities."
  },
  {
    id: 6,
    text: "Airedale hard cheese mozzarella. Pecorino melted cheese port-salut emmental babybel cheese and wine melted cheese manchego. Everyone loves blue castello everyone loves fromage cheese slices airedale cheddar cream cheese. Bavarian bergkase who moved my cheese halloumi port-salut gouda jarlsberg ricotta rubber cheese. Stinking bishop smelly cheese brie. The future belongs to those who are willing to adapt. Flexibility and the willingness to learn will define success in the coming decades."
  },
  {
    id: 7,
    text: "Salvia glossier subway tile, leggings mustache YOLO semiotics chia. Pitchfork tbh af blog church-key meggings vaporware PBR&B master cleanse post-ironic man bun pabst mustache letterpress synth. Snackwave raw denim godard, 3 wolf moon shaman offal kitsch unicorn live-edge selvage schlitz fashion axe vaporware drinking vinegar prism. Shabby chic tacos artisan, chambray chicharrones cardigan leggings typewriter af pop-up williamsburg meditation PBR&B viral. You probably haven't heard of them DIY jean shorts subway tile fashion axe bushwick kitsch tumeric cloud bread vaporware freegan franzen pork belly chicharrones banh mi. Traveling is one of the greatest ways to expand your understanding of the world. Each place holds stories, traditions, and lessons that enrich your own perspective."
  },
  {
    id: 8,
    text: "Man braid celiac synth freegan readymade, pitchfork fam salvia waistcoat lomo bitters gentrify four loko. Pitchfork semiotics post-ironic vegan. Tofu meditation microdosing hashtag semiotics venmo. Flexitarian vape tilde taiyaki. Prism poutine farm-to-table, messenger bag vegan taxidermy tattooed sartorial squid jean shorts fixie selvage trust fund vape. Hard work beats talent when talent doesn't work hard. Perseverance and dedication can often outshine natural ability."
  },
  {
    id: 9,
    text: "The internet connects people across the globe, breaking down barriers and creating new opportunities for communication and learning."
  },
  {
    id: 10,
    text: "Books open doors to new worlds and ideas. From historical accounts to fictional adventures, they offer something for everyone to explore."
  },
  {
    id: 11,
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts. Challenges and setbacks are part of any journey."
  },
  {
    id: 12,
    text: "Innovation is born out of necessity. When people face obstacles, they often come up with creative solutions that shape the future."
  },
  {
    id: 13,
    text: "Time is the most valuable resource we have. While money can be earned and spent, time once used is gone forever."
  },
  {
    id: 14,
    text: "Leadership is not about being in charge, but about taking care of those in your charge. True leaders inspire others through their actions."
  },
  {
    id: 15,
    text: "Learning is a lifelong journey. With every new piece of knowledge, you build a stronger foundation for personal and professional success."
  },
  {
    id: 16,
    text: "Nature has a way of bringing peace to the mind. A simple walk in the park can refresh the spirit and spark new ideas."
  },
  {
    id: 17,
    text: "Teamwork makes the dream work. Collaboration and trust among team members are crucial for achieving common goals."
  },
  {
    id: 18,
    text: "Music is the universal language of mankind. It speaks to emotions in a way that words cannot, transcending cultures and languages."
  },
  {
    id: 19,
    text: "Change is the only constant. In a world that's always evolving, those who embrace change will thrive."
  },
  {
    id: 20,
    text: "Gratitude turns what we have into enough. Appreciating the present moment brings peace and contentment."
  },
  {
    id: 21,
    text: "The quick brown fox jumps over the lazy dog. This is a classic sentence used to demonstrate fonts and keyboard layouts, as it includes every letter of the alphabet."
  },
  {
    id: 22,
    text: "In a world where technology evolves rapidly, staying up-to-date with the latest trends is crucial. Whether you're into AI, blockchain, or cybersecurity, there's always something new to learn."
  },
  {
    id: 23,
    text: "A journey of a thousand miles begins with a single step. This ancient proverb reminds us that great accomplishments start with small, deliberate actions."
  },
  {
    id: 24,
    text: "The seasons change, but the beauty of nature remains timeless. From the blooming flowers of spring to the falling leaves of autumn, every season has its charm."
  },
  {
    id: 25,
    text: "Creativity is intelligence having fun. Albert Einstein once said that true genius is not about knowledge, but about imagination and the ability to think beyond conventional boundaries."
  },
  {
    id: 26,
    text: "The future belongs to those who believe in the beauty of their dreams. No matter how big or small your dreams are, it's your belief in them that will turn them into reality."
  },
  {
    id: 27,
    text: "Traveling opens up new perspectives and helps us appreciate the world in ways we never imagined. Whether you're exploring new cities or immersing yourself in different cultures, the experiences are priceless."
  },
  {
    id: 28,
    text: "Hard work beats talent when talent doesn't work hard. It's not enough to have natural ability; consistent effort and dedication are the true keys to success."
  },
  {
    id: 29,
    text: "The internet is a vast ocean of information. Navigating through it can be overwhelming, but with the right tools and skills, you can find exactly what you're looking for."
  },
  {
    id: 30,
    text: "Books are a uniquely portable magic. From fiction to non-fiction, they transport us to different worlds, broaden our horizons, and help us understand life from various perspectives."
  }
];


function App() {
  const [text,setText] =useState([]);
  const [Paragraph ,setParagraph] =useState(0);
  
  const [show , setShow] = useState(false);

  const handleGenratePara=()=>{
    const genratedText =  paragraphData.slice(0,Paragraph).map(para =>para.text)
    if(Paragraph <= 30){
      setText(genratedText)
    }else{
      alert("Ayyo ! you are demanding very much paragraph in one go, kindly take little litlle 😀");

    }
  }

  return (
    <>
      <div className='container'>
        <h1>Tired of boring lorem ipsum?</h1>
        <div className='input-container'>
          <div>
            <label htmlFor="num">Paragraphs : </label>
            <input type="number" name="" id="num" min={0} onChange={(e)=>{
              setParagraph(Number(e.target.value));
            }}/>
          </div>
          <button onClick={handleGenratePara}>Generate</button>
        </div>

        <div className="genratedParagraphs">
            {
              text.map((para,index)=>{
                return <p key={"para"+index}>{index+1+")."}{para}</p>
              })
            }
        </div>
      </div>
    </>
  )
}

export default App
