import React, {useState} from 'react'; 
import { SliderData } from './SliderData';
import { Link } from 'react-router-dom';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import useStyles from './styles';

const Intro = ({ slides }) => { 
const [current, setCurrent ] = useState(0)
const length = slides.length;

const nextSlide = () => { 
    setCurrent(current === length - 1 ? 0 : current + 1);
};

const prevSlide = () => { 
    setCurrent(current === 0 ? length - 1 : current - 1);
};

console.log(current)

if(!Array.isArray(slides) || slides.length <= 0 ) {
    return null; 
}
// const classes = useStyles();

    return (
        <section className="slider">
            <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
            <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
                {SliderData.map((slide, index) => {
                    return (
                    
                    <div className={index === current ? 'slide active' : 'slide '} key=
                    {index}
                    >
                    {index === current && (
                        <img src={slide.image} alt="intro" component={ Link } to="/" className='image' />

                    )} 

                    <h2>{slide.description}</h2>

                    </div>
                )
            })}
        </section>
    )
    /*return ( 
        <div> 
            <h2>HomePage</h2>
            <img src="/images/Shining-Top.JPG" alt="Shining-Top" />
                <p>WARNING ⚠️ Manifestation is very real and using oils heightens those intentions and manifestation. If you are going about use with open intentions for example Jezebel oil for attraction , this can be used to heighten your vibrations and increase the intentions on a specific target 🎯 or just open of opportunity for old flames  and new if no target so don’t be surprised if you get a call 📞 or text from someone in your past </p>
                <p>Before using your oils I suggest holding it in your hands and imagine your hands as energy that’s cleansing  the bottle(s) think about what uses and outcome your going to have come to fruition and set intentions .</p>
                
            <h1> Manifestation Oils </h1>
                
                <h2>Attraction Oil ( Jezebel) </h2>
                <img src="/images/Jezebel.jpeg" alt="Jezebel" />
                <p>You can add this oil to your body (wrist , chests , neck , hands , hair) or your spiritual baths 🛀, candles 🕯, I sometimes put some on my petitions or written manifestation. </p>


                <p> Rubbing on your lover while saying affirmations or before a date ( before sex ) will increase energy of sexual attraction , lust , desire , while for singles can be used before a night out or again for self love ❤️ work and Intentions to attract a new passionate lover , or bringing you to a place where those who might not seen your energy sparkle as bright as it will now .</p>
                <p>
                Rubbing some on your hands and just saying a prayer on what type of love , energy , person your wanting to meet . I suggest seeking a divine counterpart that will bring energy that can bring growtth into your life while allowing you to embrace the true responsibility of self love and respect . Hibiscus , rose ,coconut and vitamin e oil , vanilla, red clover , vervain , rose quartz, Clear quartz , brown sugar , honey 🍯. </p>

                <h2> Lucky 🍀 777’s Oil </h2>
                <img src="/images/Luck.jpeg" alt="Luck" />
                    <p>
                        This oil can be added to baths 🛀 , candles , rub some on your wallet , money, work space , if your a writer put  some on your pencil , pen , laptop , camera whatever your desired income for money or work space .
                    </p>
                    <p>
                        Writing your intentions and manifestations on paper in blue ink or marker and adding a few drops of the oil on top or lighting a tea light candle 🕯 with a few drops of oil and adding your manifestation later underneath or burning it in a safe fire proof place .
                    </p>
                    <p>
                        3,6,9 method is really good or just writing out your desires and what ways you wanna achieve them . Bay leaf , lemon , orange , chamomile, mint , cinnamon, ginger, patchouli, adaventrine , jasmine , rose hip , cintrine 
                    </p>

                    <button type="button" class="collapsible">Open Collapsible</button>
                    <div class="content">
                    <p>Lorem ipsum...</p>
                    </div>


                <h2>Protection Oil 🧿🧿🧿</h2>
                <img src="/images/ProtectionOil.JPG" alt="ProtectionOil" />
                    <p>
                        Can be added the same way suggested above , add to mop water or when you might wash your walls , candles , wax burners , petitions to release any negative energy being sent to you or being attracted your way.
                    </p>
                    <p>
                        Use to cleanse tools ,items , crystals , I rubbed some in my car even . A good way to keep any left energy around you or your environment .  Olive oil , nettles , vervain , rosemary , thyme ,sage , black salt , garnet , eucalyptus, mugwort 
                    </p>

                <h2>Rose 🌹 Water 💦✨ </h2>
                <img src="/images/Rosewater.JPG" alt="Rosewater" />
                <p>
                    That’s been charged and has rose quartz chips included to bring an extra feeling of self love 💕 and peace ☮️  and to cleanse space or at to baths and candles .
                </p>
                <p>
                    They leave a refreshing smell 👃 but also rose water can be used to cleanse ones face and even clean up makeup 💄 better than the average toner !
                </p>
                <p>
                    All natural ingredients in this and all the following products. Rose petals , aloe Vera , rose quartz , clear Quartz’s , purified moon water ! Ultimate blend is mixed with lavender and rosemary ! 
                </p>

            <h1>Body Scrubs</h1>

                <h2>Yuki's Delight</h2>
                        <p>This is  chocolate 🍫 obsession in a jar , with this natural mixture of coffee and brown sugar !</p>
                        <p>It leaves a lasting impression and give you just another reason to step back in the shower ! The lasting effects will leave your skin looking and feeling rich and living in luxury! </p>
                        <p>Coffee us know reduces inflammation while improving blood circulation. This leaves 
                            your skin with a youthful and radiant look !
                        </p>

                <h2>Goddess Divine Aphrodisiac Scrub </h2>

                        <p> A lightly scented Rose and Hibiscus 🌺 infused body and face scrub . It’s all natural with moisturizing oils to keep your  skin nourished and rejuvenate after use ! </p>
                        <p>While taking the dead skin off your body and face it’ll leave a sense of inner femininity and confidence renewed each use !</p>
                
        </div>
     );*/

}

 
export default Intro;