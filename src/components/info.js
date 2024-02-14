import endangered from '../imgs/endangered.png'
import illucid from '../imgs/illucid.png'
import judi from '../imgs/judihollder.png'
import travel from '../imgs/travel.png'
import shopmart from '../imgs/shopmart.png'
import taco from '../imgs/taco.png'
import portfolio from '../imgs/portfolio.png'
import construction from '../imgs/construction.png'
import dwell from '../imgs/dwell.png'
import hiphop from '../imgs/hiphop.png'
import renovar from '../imgs/renovar.png'
import illucidvv2 from '../imgs/illucidvv2.png'
import hrhealthCare from '../imgs/hrhealthcare.png'
import cliniclean from '../imgs/clinicleanv.png'






const info = [
    {
        id:10,
        class:'illucid-v2',
        main:illucidvv2,
        name: 'Illucid beats V2',
        description:'Version 2 of Illucid Beats, A sound machine used to reduce stress, increase concentration or enable the ability to sleep better with ambient noises. Users can make a mix of ambient noises and listen to others creations',
        tools:' Vue, Vuex, MongoDB, CSS, HTML',
        deploy:'https://illucidbeats.netlify.app',
        gitLink: 'https://github.com/diana2341/vue-illucid'

    },
    {
        id:9,
        class:'dwell',
        main:dwell,
        name: 'Dwell wine',
        tools:' CSS, HTML, React',
        description:'Web application for a wine company',
        deploy:'https://www.wineclub.dwell.com/'

    },
    {
        id:11,
        class:'renovar',
        main:renovar,
        name: 'Renovar Wound Care',
        tools:' Wordpress, Elementor, Google analytics',
        description:' Designed and developed Web site for a pharmaceutical company. This product specializes in wound care products. Utilizing Elementor on WordPress, I crafted a user-friendly platform seamlessly integrating product information. Through the incorporation of Google Analytics, I provided valuable insights to the client',
        deploy:'https://renovarwoundcare.com/'

    },
    {
        id:12,
        class:'hrhealthCare',
        main:hrhealthCare,
        name: 'HR HealthCare',
        tools:' Wordpress, Elementor, Google analytics',
        description:" Designed and developed a healthcare website for a pharmaceutical company aiming to modernize its online presence in the healthcare sector. Utilizing Elementor and WordPress, I crafted a user-friendly platform that seamlessly integrated product information. Incorporating Google Analytics provided valuable insights into user engagement. The result exceeded the client's expectations, delivering a fresh and engaging showcase for their pharmaceutical offerings",
        deploy:'https://www.hrhealthcare.com/'

    },
    {
        id:13,
        class:'cliniclean',
        main:cliniclean,
        name: 'Cliniclean',
        tools:' Wordpress, Elementor, Google analytics',
        description:' Designed and developed a website for a pharmaceutical company focusing on antiseptic solution products. Leveraging Elementor on WordPress, I created a user-friendly platform that seamlessly integrates product information. Additionally, by incorporating Google Analytics, I offered valuable insights to the client',
        deploy:'https://cliniclean.com/'

    },
    {
        id:13,
        class:'JudiHoller',
        main:judi,
        name: 'Judi Holler',
        tools:' Wordpress, Elementor, Figma',
        description:" This is a vibrant website brought to life with Elementor and WordPress, serves as the digital home for motivational speaker Judi Holler. Translating Figma designs into reality, the site offers an immersive experience, showcasing Judi's expertise in fear management and empowering her audience with inspiration.",
        deploy:'https://judiholler.com/'

    },
    {
        id:6,
        class:'taco-Haven',
        main:taco,
        name: 'Taco-Haven',
        tools:'Boostrap, CSS, HTML, React',
        description:'This web application was made to show a layout of a Mexican Restaurant example site and to show my design skills and ideas',
        gitLink:'https://github.com/diana2341/tac-p',
        deploy:'https://taco-haven-restaurant.netlify.app/'

    },
    {
        id:8,
        class:'construction',
        main:construction,
        name: 'Construction company site',
        tools:'React.js, Bootstrap, CSS, HTML',
        // video:"https://www.youtube.com/embed/J1_E9mqnAM8",
        description:'This is a site used for a Masonry & carpentry company',
        gitLink:'https://github.com/diana2341/jos-co',
        // youtube:'https://www.youtube.com/watch?v=J1_E9mqnAM8&t=2s',
        deploy:'https://www.medardocontracting.com/'

    },
    {
        id:9,
        class:'hiphop',
        main:hiphop,
        name: 'Parcelle Wine and Hip Hop',
        tools:' CSS, HTML, React',
        description:'Web application for a wine company',
        deploy:'https://www.wineandhiphop.parcellewine.com/'

    },
    {
        id:5,
        class:'shopmart',
        main:shopmart,
        name: 'Shop-mart',
        tools:'Ruby Rails, CSS, HTML, React, Redux',
        description:' This Web Application was made to better understand my knowledge of redux. It is a ecommerce site for clothing, shoes, and accessories for women, men and children ',
        gitLink:'https://github.com/diana2341/shopMart-front',
        // deploy:'https://shop-mart-us.netlify.app/'

    },
    {
      id:1,
      main:endangered,
      class:'endangered',
      name: 'Endangered Lives',
      tools:'React.js, Ruby Rails API, CSS, HTML',
      libraries:'React slide-show-image, React Simple Maps',
      video:"https://www.youtube.com/embed/xTjHOjz2xGA",
      description:"An educational site  that raises awareness about several animal species endangered due to poaching. Reasons for poaching are explained to the user. They can also view recent news about the animal and are able to join a community to discuss  the topic with others",
    //   gitLink:'https://github.com/diana2341/why-poaching-front',
    //   youtube:'https://www.youtube.com/watch?v=xTjHOjz2xGA&t=13s',      
    },
    {
        id:4,
        class:'travel',
        main:travel,
        name: 'Travel Rails',
        tools:'Ruby Rails, CSS, HTML, Bulma.io',
        video:"https://streamable.com/e/ai4u1c",
        description:'A site for hosting homes for people on vacation and where homes, apartments, or rooms can be booked by people traveling. Users can become hosts and post their homes or find a home',
        // gitLink:'https://github.com/diana2341/My_Travel_rails',
        // youtube:'https://streamable.com/ai4u1c',
    },
    {
        id:2,
        class:'illucid',
        main:illucid,
        name: 'Illucid Beats (V1)',
        tools:'Vanilla Javascript, CSS, HTML, Ruby Rails API',
        video:"https://www.youtube.com/embed/pOq3eoo0Mjs",
        description:'A sound machine used to reduce stress, increase concentration or enable the ability to sleep better with ambient noises. Users can make a mix of ambient noises and listen to others creations',
        // gitLink:'https://github.com/diana2341/illucid-beats-front',
        // youtube:'https://www.youtube.com/watch?v=pOq3eoo0Mjs',
        // deploy:'https://illucid-beats.netlify.app/'
    },
    {
        id:7,
        class:'Portfolio',
        main:portfolio,
        name: 'First portfolio',
        tools:'React.js, Bootstrap, CSS, HTML',
        // video:"https://www.youtube.com/embed/J1_E9mqnAM8",
        description:'My First portfolio site',
        // gitLink:'https://github.com/diana2341/portfolio',
        // youtube:'https://www.youtube.com/watch?v=J1_E9mqnAM8&t=2s',
        // deploy:'https://dianaponcedev.netlify.app'

    },
    // {
    //     id:3,
    //     class:'sugar',
    //     main:cupcake,
    //     name: 'Sugar Lips',
    //     tools:'React.js, Ruby Rails API, CSS,HTML',
    //     video:"https://www.youtube.com/embed/J1_E9mqnAM8",
    //     description:'An ecommerce site for a bakery that sells cupcakes, where  users can order any amount of these treats to be delivered to their homes',
    //     // gitLink:'https://github.com/diana2341/mod4-sugarlips_cupcakes-client',
    //     youtube:'https://www.youtube.com/watch?v=J1_E9mqnAM8&t=2s',
    // }

  ];
  
  export default info;