import {SAVE_HISTORY, SHOWHISTORY, UPDATEPLACES} from '../Actions/ActionTypes';

const initialState = {
  data: [
    // Historical Sites
    {
      id: 1,
      name: 'Taj Mahal',
      location: 'Agra, Uttar Pradesh',
      built: '1632-1653',
      description:
        'A UNESCO World Heritage Site and a symbol of love, built by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal.',
      briefDescription: 'Iconic white marble mausoleum.',
      type: 'Mausoleum',
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIMq0Utl9O-TUtLMs4xn6n1q0jyqAYN0YB3w&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUA16WV6FYZnRE410srpp_OiiKqgTgir_hcA&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdnStzjceOlWvEiYrdEmaFBDxIZvGx7oGOPQ&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqzOxNBZfxkepdwskGgK0UdptpDN6Qh7E0Fw&s',
      ],
      isVisited: true,
      latitude: 27.1751448,
      longitude: 78.0421422,
      ratings: 4.8,
    },
    {
      id: 2,
      name: 'Qutub Minar',
      location: 'Delhi',
      built: '1193',
      description:
        'The tallest brick minaret in the world, part of the Qutub complex, which is a UNESCO World Heritage Site.',
      briefDescription: 'Majestic tower with intricate carvings.',
      type: 'Minaret',
      images: [
        'https://dwq3yv87q1b43.cloudfront.net/public/blogs/fit-in/1200x675/Blog_202106229e16f10bfe4cb820982f7dbcbe9c4e12.png',
        'https://thrillingtravel.in/wp-content/uploads/2019/10/Delhi-Qutub-Minar-1024x683.jpg',
        'https://cdn-ijnhp.nitrocdn.com/pywIAllcUPgoWDXtkiXtBgvTOSromKIg/assets/images/optimized/rev-5794eaa/www.jaypeehotels.com/blog/wp-content/uploads/2023/11/Blog-5.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPktVEB6jCo4e3-RE0PsWj6L94AghQ6Ij34CL7m-gl5bpg-c_JPDMZ2TMSBM_C3NzsWZQ&usqp=CAU',
      ],
      isVisited: true,
      latitude: 28.5244946,
      longitude: 77.18551769999999,
      ratings: 4.6,
    },
    {
      id: 3,
      name: 'Hampi',
      location: 'Karnataka',
      built: '14th century',
      description:
        'A UNESCO World Heritage Site known for its ancient temples, ruins, and stunning landscape.',
      briefDescription: 'Ruins of a once-flourishing city.',
      type: 'Ruins',
      images: [
        'https://beyonder.travel/wp-content/uploads/2020/05/Stone-Chariot-Vittala-Temple-Hampi.jpg',
        'https://savetoursandtravels.com/wp-content/uploads/2022/09/Hampi.jpg',
        'https://backpackersunited.in/_next/image?url=https%3A%2F%2Fbpu-images-v1.s3.eu-north-1.amazonaws.com%2Fuploads%2F1721033522385_istockphoto-1270774245-1024x1024-transformed.jpeg&w=3840&q=100',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQep2cnI5FQAcFeQnbI0p1Xsu2tAyutjrGIXQ&s',
      ],
      isVisited: false,
      latitude: 15.3350132,
      longitude: 76.46002399999999,
      ratings: 4.7,
    },
    // More Historical Sites
    {
      id: 4,
      name: 'Jaipur City',
      location: 'Rajasthan',
      built: '1727',
      description:
        'Known as the Pink City, famous for its historic forts, palaces, and vibrant markets.',
      briefDescription: 'Colorful city with royal heritage.',
      type: 'City',
      images: [
        'https://www.travelstart.co.za/blog/wp-content/uploads/2019/08/Jaipur-47.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtkCdgqheEixdXNvksTkAPtOJoMoGET2t0hQ&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8YkiupiTIs0rzSxu776w6JRT43FQLA4_UpTyIz0yfVqXx5b1ftSiHREqNr1OH0g-htNM&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR34mw0DDpa0PWY3dvLZ779R6v7gTd9lphnlA&s',
      ],
      isVisited: true,
      latitude: 26.9124336,
      longitude: 75.7872709,
      ratings: 4.5,
    },
    {
      id: 5,
      name: 'Red Fort',
      location: 'Delhi',
      built: '1638-1648',
      description:
        "A UNESCO World Heritage Site and a symbol of India's rich history, built by Mughal Emperor Shah Jahan.",
      briefDescription: 'Historic fort with beautiful architecture.',
      type: 'Fort',
      images: [
        'https://cdn.britannica.com/20/189820-050-D650A54D/Red-Fort-Old-Delhi-India.jpg',
        'https://mapacademy.io/wp-content/uploads/2024/05/red-fort-ILFbyAP-1thumbnail.jpg',
        'https://himalayanoutback.com/wp-content/uploads/2022/02/Interesting-Facts-About-The-Red-Fort-in-Delhi.png',
        'https://upload.wikimedia.org/wikipedia/commons/4/47/Red_Fort_01.jpg',
      ],
      isVisited: false,
      latitude: 28.6561592,
      longitude: 77.2410203,
      ratings: 4.4,
    },
    {
      id: 6,
      name: 'Mysore Palace',
      location: 'Mysuru, Karnataka',
      built: '1912',
      description:
        'A stunning example of Indo-Saracenic architecture, it is the residence of the Wadiyar dynasty.',
      briefDescription: 'Grand palace with opulent interiors.',
      type: 'Palace',
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLyADkHVmysdaYefNY8J3KecQDfgvhkdlyqg&s',
        'https://remotetraveler.com/wp-content/uploads/2014/10/Mysore-Palace2.jpg',
        'https://cdn.britannica.com/27/242227-050-48358A10/Mysore-Palace-Mysuru-Karnataka-India.jpg',
        'https://media.istockphoto.com/id/172124032/photo/mysore-palace-at-dusk.jpg?s=612x612&w=0&k=20&c=paO74C_dVsY14IbK0RNqs0TD-lSteQy-AW5CnQFEb_4=',
      ],
      isVisited: true,
      latitude: 12.305163,
      longitude: 76.65517489999999,
      ratings: 4.8,
    },
    {
      id: 7,
      name: 'Gateway of India',
      location: 'Mumbai, Maharashtra',
      built: '1924',
      description:
        'An iconic arch monument built to commemorate the visit of King George V and Queen Mary to India.',
      briefDescription: 'Symbolic arch overlooking the sea.',
      type: 'Monument',
      images: [
        'https://www.holidayrider.com/wp-content/uploads/2019/01/optimized-rkff-1200x740.jpg',
        'https://img.veenaworld.com/wp-content/uploads/2021/03/Gateway-of-India-Mumbai-History-and-Heritage.jpeg',
        'https://media1.thrillophilia.com/filestore/a6xfgd96rla05y092cy5emcpi9pu_1574833817_shutterstock_566137291.jpg?w=400&dpr=2',
        'https://pohcdn.com/guide/sites/default/files/styles/paragraph__hero_banner__hb_image__1880bp/public/hero_banner/Gateway-to-India_0.jpg',
      ],
      isVisited: false,
      latitude: 18.9219841,
      longitude: 72.8346543,
      ratings: 4.3,
    },
    {
      id: 8,
      name: 'Konark Sun Temple',
      location: 'Odisha',
      built: '1250',
      description:
        'A UNESCO World Heritage Site, known for its exquisite stone carvings and the iconic chariot design.',
      briefDescription: 'Temple dedicated to the sun god.',
      type: 'Temple',
      images: [
        'https://media.istockphoto.com/id/96668487/photo/ancient-hindu-sun-temple-at-konark.jpg?s=612x612&w=0&k=20&c=tfjyAU_J1jmhxXTIu31E-6WcH3vcedUOhN-a2Z-YtCY=',
        'https://i.pinimg.com/originals/ee/1b/b8/ee1bb848a170dec57797b67cc620e4f4.jpg',
        'https://images.unsplash.com/photo-1677211352662-30e7775c7ce8?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8a29uYXJrJTIwc3VuJTIwdGVtcGxlfGVufDB8fDB8fHww',
        'https://media.istockphoto.com/id/1149896146/photo/ancient-hindu-sun-temple-and-chariot-wheel-intricate-carvings-on-the-walls-in-konark-orissa.jpg?s=612x612&w=0&k=20&c=CZBTqAKcjtJ9k1Q01bwHlF9I2rFG7y6zdEi_z_NaOiA=',
      ],
      isVisited: false,
      latitude: 19.8875953,
      longitude: 86.0945364,
      ratings: 4.7,
    },
    {
      id: 9,
      name: 'Khajuraho Temples',
      location: 'Madhya Pradesh',
      built: '950-1050',
      description:
        'Famous for their intricate sculptures and erotic carvings, these temples are a UNESCO World Heritage Site.',
      briefDescription: 'Temples known for erotic art.',
      type: 'Temple Complex',
      images: [
        'https://indiatravel.com/wp-content/uploads/2022/03/khajuraho-slider-imggg-3.jpg',
        'https://static.toiimg.com/photo/64665528.cms',
        'https://media.gettyimages.com/id/541388432/photo/erotic-figures-carved-in-sandstone-at-the-lakshmana-temple.jpg?s=612x612&w=gi&k=20&c=qjiR4YEj9LR2osTLnC3tJ1hweabEOpXmZpoEsvmyiKo=',
        'https://www.swantour.com/blogs/wp-content/uploads/2018/03/Temples-of-Khajuraho-1.jpg',
      ],
      isVisited: true,
      latitude: 24.8530687,
      longitude: 79.9217353,
      ratings: 4.5,
    },
    {
      id: 10,
      name: 'Ajanta Caves',
      location: 'Maharashtra',
      built: '2nd century BCE - 6th century CE',
      description:
        'A UNESCO World Heritage Site, renowned for its rock-cut Buddhist caves and stunning murals.',
      briefDescription: 'Caves with ancient Buddhist art.',
      type: 'Caves',
      images: [
        'https://cdn.shopify.com/s/files/1/0613/8675/2155/files/screenshot-2024-04-17-at-5.08.58-pm.png?v=1713353994',
        'https://aurangabadtourism.in/images/places-to-visit/header/ajanta-caves-aurangabad-tourism-entry-fee-timings-holidays-reviews-header.jpg',
        'https://travel-blog.happyeasygo.com/wp-content/uploads/2020/06/Ajanta-Caves-Monument.jpg',
        'https://server.ourglobaltrek.com/wp-content/uploads/2015/05/ajanta-cave-no-1-ajanta-india.jpg',
      ],
      isVisited: false,
      latitude: 20.5513286,
      longitude: 75.7069356,
      ratings: 4.8,
    },
    // Forests
    {
      id: 11,
      name: 'Sundarbans National Park',
      location: 'West Bengal',
      built: '1984',
      description:
        'A UNESCO World Heritage Site, this mangrove forest is known for its diverse wildlife, including the Bengal tiger.',
      briefDescription: 'Home to the Bengal tiger.',
      type: 'Forest',
      images: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Sundarban_Tiger.jpg/1200px-Sundarban_Tiger.jpg',
        'https://i0.wp.com/kaziranganationalparkassam.in/wp-content/uploads/2021/06/pexels-photo-2689436.jpeg?ssl=1',
        'https://www.alightindia.com/cdn/uploads/postimages/ORIGINAL/Tiger%20sunderbans%20Alliance--8a9161.jpg',
        'https://www.outdoorkeeda.com/jungle-safari/images/outdoorkeeda-sundarban-national-park-2.jpg',
      ],
      isVisited: false,
      latitude: 21.8842354,
      longitude: 88.88537649999999,
      ratings: 4.6,
    },
    {
      id: 12,
      name: 'Jim Corbett National Park',
      location: 'Uttarakhand',
      built: '1936',
      description:
        'The oldest national park in India, known for its rich biodiversity and population of Bengal tigers.',
      briefDescription: 'Famous for tiger sightings.',
      type: 'Forest',
      images: [
        'https://majesticjourney.in/wp-content/uploads/2020/06/corbett_gate.jpg',
        'https://wandersky.in/wp-content/uploads/2024/03/jim-corbett-national-park.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCJn-gtXpcL2unR4E0SdHYz-Ub44Xy4NPR7Q&s',
        'https://www.tarangiresort.com/assets/img/blog/TheCalloftheWild.jpg',
      ],
      isVisited: true,
      latitude: 29.5521551,
      longitude: 78.88321069999999,
      ratings: 4.7,
    },
    {
      id: 13,
      name: 'Bandhavgarh National Park',
      location: 'Madhya Pradesh',
      built: '1968',
      description:
        'Known for its tiger population, this park has a rich variety of flora and fauna.',
      briefDescription: 'Popular for wildlife safaris.',
      type: 'Forest',
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ5kXVILYugt5LUHekgLwVoN_k6zS5vhb3Cw&s',
        'https://www.bandhavgarh-national-park.com/images/safaribanner.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSv_evPCc-YUUdEKLQ14JKsEJCThpWWAv7ow&s',
        'https://vajiram-prod.s3.ap-south-1.amazonaws.com/Bandhavgarh_National_Park_97129d0357.jpg',
      ],
      isVisited: false,
      latitude: 23.721515,
      longitude: 81.01987840000001,
      ratings: 4.5,
    },
    // Beaches
    {
      id: 14,
      name: 'Goa Beaches',
      location: 'Goa',
      built: 'N/A',
      description:
        "Famous for their stunning beauty and vibrant nightlife, Goa's beaches are a popular destination for tourists.",
      briefDescription: 'Lively beaches with vibrant nightlife.',
      type: 'Beach',
      images: [
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/fc/f0/goa.jpg?w=1400&h=1400&s=1',
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/3e/36/95/baga-sea-beach.jpg?w=600&h=-1&s=1',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPKttrI6_exgGXfDd6SfoIefbL4trFjZ_nuw&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuxtLqBiJbAGolqYuy1ta_QiQNbRCHVydaGQ&s',
      ],
      isVisited: true,
      latitude: 15.3555072,
      longitude: 73.8835486,
      ratings: 4.7,
    },
    {
      id: 15,
      name: 'Varkala Beach',
      location: 'Kerala',
      built: 'N/A',
      description:
        'Known for its cliffs and beautiful sunsets, Varkala is a tranquil beach destination.',
      briefDescription: 'Peaceful beach with stunning views.',
      type: 'Beach',
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLd5g-PhnMdpqZYiLgB6dtnjtgPYiswBNu3Q&s',
        'https://s3.india.com/wp-content/uploads/2024/07/varkala.jpg##image/jpg',
        'https://i0.wp.com/varkalakayak.com/wp-content/uploads/2022/10/varkala.jpg?resize=1140%2C502&ssl=1',
        'https://mediaim.expedia.com/destination/1/f0fe68eca8ce050afd37a4456f3ccc3e.jpg',
      ],
      isVisited: false,
      latitude: 8.7355515,
      longitude: 76.7031667,
      ratings: 4.4,
    },
    {
      id: 16,
      name: 'Marari Beach',
      location: 'Kerala',
      built: 'N/A',
      description:
        'A serene and less crowded beach, known for its beauty and tranquility.',
      briefDescription: 'Quiet beach perfect for relaxation.',
      type: 'Beach',
      images: [
        'https://www.cghearth.com/uploads/DestinationImages/20170602073240AMDestImgmararibeach-beachviewfrompool.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNQOw458g1a1lzqqoDyIePQluLhEcSbHWsZg&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBLcJgKz88cauvjtaVxjhu63p28jv9h-usog&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsWSSX5IXGHxBOIZ8nnfS2DVO3prQK50vW5w&s',
      ],
      isVisited: false,
      latitude: 9.600750599999998,
      longitude: 76.2982585,
      ratings: 4.5,
    },
    // Cities
    {
      id: 17,
      name: 'Udaipur City',
      location: 'Rajasthan',
      built: '1559',
      description:
        'Known as the City of Lakes, Udaipur is famous for its picturesque palaces and serene water bodies.',
      briefDescription: 'Romantic city with beautiful lakes.',
      type: 'City',
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFSYAulL0tS6p2FZw725ZXyP58WvzhDxZolQ&s',
        'https://www.andbeyond.com/wp-content/uploads/sites/5/udaipur.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRugzV6PHMZ81Qc4j7ul5UNMNML4QNxtzNMVw&s',
        'https://udaipurtourism.co.in/images/places-to-visit/headers/udaipur-city-tour-packages-with-price-and-itinerary-sightseeing-places-tourism-entry-fee-timings-holidays-reviews-header.jpg',
      ],
      isVisited: true,
      latitude: 24.585445,
      longitude: 73.712479,
      ratings: 4.6,
    },
    {
      id: 18,
      name: 'Varanasi',
      location: 'Uttar Pradesh',
      built: 'N/A',
      description:
        'One of the oldest living cities in the world, known for its ghats along the Ganges River.',
      briefDescription: 'Spiritual city with vibrant culture.',
      type: 'City',
      images: [
        'https://kashi.gov.in/cmsadmin/getApiFile/CMS/657e54ae8c37f1702778030~jpg',
        'https://cdn.britannica.com/00/189800-050-FCC9D047/Ghats-Varanasi-Ganges-River-India-Uttar-Pradesh.jpg',
        'https://cdn.britannica.com/08/153508-050-2A9EAD76/Ganges-River-Varanasi-Uttar-Pradesh-India.jpg',
        'https://www.micato.com/wp-content/uploads/2018/09/varanasi-9.jpg',
      ],
      isVisited: false,
      latitude: 25.3176452,
      longitude: 82.9739144,
      ratings: 4.5,
    },
    {
      id: 19,
      name: 'Hyderabad',
      location: 'Telangana',
      built: '1591',
      description:
        'Famous for its historic sites, including the Charminar and Golconda Fort.',
      briefDescription: 'Cultural city known for its heritage.',
      type: 'City',
      images: [
        'https://i.ytimg.com/vi/EGdQ5QsHlcA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCoO-FC3OSBPg96jZ4bSFvIg6NLlg',
        'https://static.toiimg.com/photo/104444312.cms',
        'https://upload.wikimedia.org/wikipedia/commons/3/35/Hyderabad_from_Char_Minar.jpg',
        'https://newsmeter.in/h-upload/2023/12/21/360664-whatsapp-image-2023-12-21-at-94400-am.webp',
      ],
      isVisited: false,
      latitude: 17.406498,
      longitude: 78.47724389999999,
      ratings: 4.4,
    },
    // Deserts
    {
      id: 20,
      name: 'Thar Desert',
      location: 'Rajasthan',
      built: 'N/A',
      description:
        'One of the largest deserts in the world, known for its vast sandy landscapes and cultural heritage.',
      briefDescription: 'Expansive desert with unique culture.',
      type: 'Desert',
      images: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Thar_desert_Rajasthan_India.jpg/800px-Thar_desert_Rajasthan_India.jpg',
        'https://static.toiimg.com/thumb/68427211.cms?resizemode=75&width=1200&height=900',
        'https://cdn.britannica.com/44/162744-050-ADEB53F2/Thar-Desert-India-Rajasthan.jpg',
        'https://img.veenaworld.com/wp-content/uploads/2018/06/1-cover-shutterstock_782705764-Camel-ride-on-the-sand-dunes-of-Thar-desert-Jaisalmer.jpg',
      ],
      isVisited: false,
      latitude: 27.4694892,
      longitude: 70.6216794,
      ratings: 4.3,
    },
    {
      id: 21,
      name: 'Rann of Kutch',
      location: 'Gujarat',
      built: 'N/A',
      description:
        'A salt desert known for its stunning landscapes and the Rann Utsav festival.',
      briefDescription: 'Famous for its white salt flats.',
      type: 'Desert',
      images: [
        'https://i.ytimg.com/vi/ZiRLz9s669I/maxresdefault.jpg',
        'https://cdn.britannica.com/36/233936-050-3E37A6B4/Rann-of-Kachchh-salt-flat.jpg',
        'https://www.gujarattourism.com/content/dam/gujrattourism/images/weekend-get-aways/great-rann-of-kutch/gallery/Great%20Rann%20Of%20Kutch%20(14).jpg',
        'https://utsav.gov.in/public/uploads/event_cover_image/event_13/1649078511645355156.jpg',
      ],
      isVisited: true,
      latitude: 24.0454286,
      longitude: 70.1455805,
      ratings: 4.5,
    },
    {
      id: 22,
      name: 'Kutch Desert Wildlife Sanctuary',
      location: 'Gujarat',
      built: 'N/A',
      description:
        'Home to diverse wildlife, including flamingos and wild asses, this sanctuary is a unique desert ecosystem.',
      briefDescription: 'Sanctuary with rich biodiversity.',
      type: 'Desert',
      images: [
        'https://www.gujarattourism.com/content/dam/gujrattourism/images/flora--fauna/kutch-desert-sanctuary/Kutch-Desert-Sanctuary-Thumbnail.jpg',
        'https://www.gujarattourism.com/content/dam/gujrattourism/images/flora--fauna/kutch-desert-sanctuary/Kutch-Desert-Sanctuary-Banner.jpg',
        'https://www.gujaratpackage.com/wp-content/uploads/2019/07/sasangir-head-344.jpeg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGtxbs_9Q67L3XM2TZX1WCzWj3Kn22UbZScQ&s',
      ],
      isVisited: false,
      latitude: 23.1443682,
      longitude: 71.210117,
      ratings: 4.4,
    },
  ],
  categories: [
    {
      id: 1,
      type: 'Mausoleum',
      icon: require('../../assets/mausoleum.png'),
    },
    {
      id: 2,
      type: 'Minaret',
      icon: require('../../assets/minar.png'),
    },
    {
      id: 3,
      type: 'Ruins',
      icon: require('../../assets/ruins.png'),
    },
    {
      id: 4,
      type: 'City',
      icon: require('../../assets/city.png'),
    },
    {
      id: 5,
      type: 'Fort',
      icon: require('../../assets/fort.png'),
    },
    {
      id: 6,
      type: 'Palace',
      icon: require('../../assets/palace.png'),
    },
    {
      id: 7,
      type: 'Monument',
      icon: require('../../assets/monument.png'),
    },
    {
      id: 8,
      type: 'Temple',
      icon: require('../../assets/temple.png'),
    },
    {
      id: 9,
      type: 'Temple Complex',
      icon: require('../../assets/temple.png'),
    },
    {
      id: 10,
      type: 'Caves',
      icon: require('../../assets/caves.png'),
    },
    {
      id: 11,
      type: 'Forest',
      icon: require('../../assets/forest.png'),
    },
    {
      id: 12,
      type: 'Beach',
      icon: require('../../assets/beach.png'),
    },
    {
      id: 13,
      type: 'Desert',
      icon: require('../../assets/dessert.png'),
    },
  ],
  history: [],
  showHistoryModal: false,
};

const CommonReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATEPLACES: {
      return {
        ...state,
        data: action.payload,
      };
    }
    case SAVE_HISTORY: {
      return {
        ...state,
        history: [...state.history, ...action.payload],
      };
    }
    case SHOWHISTORY: {
      return {
        ...state,
        showHistoryModal: action.payload,
      };
    }
    default:
      return state;
  }
};

export default CommonReducer;
