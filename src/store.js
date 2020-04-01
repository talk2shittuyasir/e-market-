import Vue from 'vue';

import Vuex from 'vuex';

Vue.use(Vuex)

const store = new Vuex.Store({

    state: {

        products: [{
                name: 'Home Theater samsung HT - J4500',
                price: '\u20A6 99,000',
                imageLink: require('@/assets/images/kitchen/home_samsung.jpg'),
                cateId: 1,
                proId: 1,
                detail: "ROCK Home THeater has five speakers and a sub woofer and center PAL & NTSC support. This is an incredible addition for your home and will help you have an unforgettable home theater experience",
                spec: `Design
                      Front & Rear Cabinet (Tray): Yes
                      Amplifier
                      CH: 5.1
                      In & Out
                      Front - Display: FLD
                      Front - USB: 1
                      Front - Mic - Mic In(φ6.3): 2
                      Front - Audio In - Portable In: Yes
                      R/Panel - Video Out - Composite: Yes
                      R/Panel - Audio Input - Audio L/R: Yes
                      R/Panel - HDMI - Out: 1
                      R/Panel - Radio Antenna - FM: Yes
                      R/Panel - Speaker Terminal - Composing of channel: 5.1
                      R/Panel - Speaker Terminal - Terminal Type: Push in (Spring)
                      `,
                thumbnails: [
                    require('@/assets/images/kitchen/sam1.jpg'),
                    require('@/assets/images/kitchen/sam2.jpg'),
                    require('@/assets/images/kitchen/sam3.jpeg')
                ]



            },
            {
                name: 'Kenwood Juice Extractor & Blender',
                price: '\u20A6 18,000',
                imageLink: require('@/assets/images/kitchen/kenwood_blender.jpg'),
                cateId: 1,
                proId: 2,
                detail: `The Kenwood Blender BL440 has a portable design that makes it fit on your kitchen counter easily .2L Goblet ( 1.5 litre working capacity, 3-speed and powered by a multi-speed 500W motor with a drive mechanism, pulse function, and a built-in circuit breaker. There is a removable steel blade for easy cleaning; all the parts can be washed manually or with a dishwasher.

                The Kenwood BL440 is an all-round family-sized blender that will save you a lot of time when used during food preparation in the kitchen. Get it on Jumia at the best price in Nigeria.`,
                spec: `SKU: KE824HL06UQRUNAFAMZ
                      Area of Use: Kitchen
                      Color: White
                      Model: BL440
                      Product Line: Vine's best price
                      Weight (kg): 2.5`,
                thumbnails: [
                    require('@/assets/images/kitchen/hen1.jpg'),
                    require('@/assets/images/kitchen/ken2.jpeg'),
                    require('@/assets/images/kitchen/ken3.jpg')
                ]



            },
            {
                name: 'Xiaomi Mi Note 10 Pro (redmi)',
                price: '\u20A6 110,000',
                imageLink: require('@/assets/images/phone/xiaomi.jpg'),
                cateId: 2,
                proId: 3,
                detail: `The phone is powered by Octa core (2.2 GHz, Dual core, Kryo 470 + 1.8 GHz, Hexa Core, Kryo 470) processor. It runs on the Qualcomm Snapdragon 730G Chipset. It has 8 GB RAM and 256 GB internal storage. Xiaomi Mi Note 10 Pro smartphone has a AMOLED display.`,
                spec: ` CPU ->  Snapdragon 439 Octa Core Processor
                        Screen ->   6.22 inch Water Drop  Display
                        OS ->   MIUI 10
                        RAM+ROM -> 6GB RAM+ 128GB ROM,
                        Camera ->   12MP Rear Camera,5MP Front camera
                        Battery -> 5000mAh(typ)
                        Attention ->  It is Global Version, Support Multi-Language, Google Play and OTA
                        Network ->  2 SIM Dual card dual standby
                        2G ->   GSM B2/3/5/8
                        3G ->    WCDMA B1/2/5/8
                        4G -> FDD LTE B1/2/3/4/5/7/8/20; TDD LTE B38/B40`,
                thumbnails: [
                    require('@/assets/images/phone/red1.jpg'),
                    require('@/assets/images/phone/red2.jpg'),
                    require('@/assets/images/phone/red3.jpg')
                ]



            },
            {
                name: 'Samsung Galaxy Tab E (Black)',
                price: '\u20A6 80, 000',
                imageLink: require('@/assets/images/phone/samTab.jpeg'),
                cateId: 2,
                proId: 4,
                detail: `The tablet comes with a 9.60-inch display with a resolution of 800x1280 pixels. Samsung Galaxy Tab E is powered by a 1.3GHz quad-core processor. It comes with 1.5GB of RAM. The Samsung Galaxy Tab E runs Android and is powered by a 5000mAh non-removable battery.`,
                spec: `Weight: 490g
                      Dimensions: 241.9 x 149.5 x 8.5mm
                      Screen size: 9.6-inch
                      Screen resolution: 1280 x 800
                      Chipset: 1.3Ghz quad-core
                      RAM: 1.5GB
                      Storage: 16GB
                      MicroSD: Yes
                      Rear camera: 5MP
                      Front camera: 2MP
                      Battery: 5,000mAh
                      Released: July 2015`,
                thumbnails: [
                    require('@/assets/images/phone/tab1.jpg'),
                    require('@/assets/images/phone/tab2.jpg'),
                    require('@/assets/images/phone/tab3.jpg')
                ]



            },
            {
                name: 'HP Pavilion 15 Laptop Core i5 ',
                price: '\u20A6 350,000',
                imageLink: require('@/assets/images/computers/csm_HP_Pavilion_15.jpg'),
                cateId: 3,
                proId: 5,
                detail: `10th Generation Intel® Core™ processor
                        Experience power and responsive performance to boost your productivity. Enjoy immersive entertainment and game, stream and create content with accelerated performance

                        A truly powerful audio experience
                        With dual HP speakers, HP Audio Boost, and custom tuning by the experts at B&O PLAY, you can experience rich, authentic audio. Let the sound move you.`,
                spec: `SKU: HP246CL1IBRAMNAFAMZ
                Color: Blue
                Model: Pavilion 15
                Product Line: Enirol Technology
                Weight (kg): 1.9 ....`,
                thumbnails: [require('@/assets/images/computers/lap1.jpg'),
                    require('@/assets/images/computers/lap2.png'),
                    require('@/assets/images/computers/csm_HP_Pavilion_15.jpg')
                ]



            },
            {
                name: 'Transcend 1TB Slim',
                price: '\u20A6 17,500.00',
                imageLink: require('@/assets/images/computers/transcend.jpg'),
                cateId: 3,
                proId: 6,
                detail: `Slim is an easy way to protect and share your digital life.
                         Ready to go with up to 1 TB of storage space for your most important files, it also features a sleek and protective metal finish available in classic black, silver, red or blue. Choose your flavour and join the millions of satisfied customers with one of Seagate’s most popular and trusted portable drives.Seagate 1TB external hard drive, ultra slim design at 9.6mm thin, massive capacity with zero compromise. 120mb/s, backup software included. Time matters, and every second counts thus delivers full-throttle performance at twice the speed of other portable hard drives on the market - transfer rates of up to 220 MB/s.The HDD External SEAGATE Expansion Portable (1 TB 2.5 USB 3.0) has a micro-format USB 3.0 connector that you'll get faster data transfer speed when using this HDD USB 3.0. The drive is powered directly by the USB port too, so there's no need for an extra power cable. It includes a 30 cm USB cable, which is fine for hooking up the drive to a laptop. Its hard drive offers an easy-to-use solution when you need to instantly add storage to your computer and take files on the go by Drag and drop file saving right out of the box, with good USB cable and also ensure Fast data transfer with USB 3.0 connectivity.`,
                spec: `SKU: SE955EL1AO1B9NAFAMZ
                      Color: Black
                      Main Material: Metal
                      Model: HDD
                      Product Line: T&T consult
                      Weight (kg): 0.2`,
                thumbnails: [require('@/assets/images/computers/transcend.jpg'),
                    require('@/assets/images/computers/hdd1.jpg'),
                    require('@/assets/images/computers/hdd2.jpg')
                ]



            },
            {
                name: 'HISENSE AC',
                price: '\u20A6 85,000',
                imageLink: require('@/assets/images/electronics/ac.jpg'),
                cateId: 4,
                proId: 7,
                detail: `The HISENSE Split Air conditioner is designed to create a cool and comfortable living environment. It can be used in residential as well as commercial properties. It has been integrated with an ionizer to ensure refreshing, natural and healthy air. The ionizer generates a high voltage ionization zone through which the air is converted into plasma. Inside the air most of the dust, smoke and pollen particles are captured by the electrostatic filter. With the new technology of Refrigerant Leak Detector (RLD) the air conditioner gives an indication when the outdoor unit detects refrigerant leakage. `,

                spec: `SKU: HI368HL08MFCUNAFAMZ
                    Area of Use: Home Office
                    Color: White
                    Main Material: Copper Condenser
                    Model: AS09TG
                    Production Country: China
                    Product Line: St Anthony Store
                    Size (L x W x H cm): N/A
                    Weight (kg): 30`,
                thumbnails: [require('@/assets/images/electronics/ac1.jpg'),
                    require('@/assets/images/electronics/ac2.jpg'),
                    require('@/assets/images/electronics/ac.jpg')
                ]


            },
            {
                name: 'Hisense Smart TV',
                price: '\u20A6 75,000.00',
                imageLink: require('@/assets/images/electronics/tv_hen.jpg'),
                cateId: 4,
                proId: 8,
                detail: `Immerse yourself in breath-taking 4K HDR detail.
                        See every detail in stunning 4K HDR with the Hisense B7100, offering 4x more pixels than Full HD. HDR technology, supporting HDR 10 and HLG formats to stream contents from the likes of BBC iPlayer, makes blacks darker, whites brighter and enhances contrast. With an intuitive VIDAA U 3.0 Smart TV OS it’s never been simpler to access entertainment from Netflix and Prime Video.

                        Maximising contrast and colour accuracy.
                        HDR dramatically enhances detail by maximising contrast and colour accuracy for more true-to-life colours and amazing levels of clarity. The detail in the darkest areas of a picture aren't lost. Equally, very bright areas of a picture don't blow out.
                        `,
                spec: `SKU: HI368EA0VU6WUNAFAMZ
                      Color: Black
                      Model: 50B7100
                      Product Line: Hisense
                      Weight (kg): 15
                      `,
                thumbnails: [require('@/assets/images/electronics/tv1.jpg'),
                    require('@/assets/images/electronics/tv2.jpg'),
                    require('@/assets/images/electronics/tv_hen.jpg')
                ]


            },
            {
                name: ' Vegetable Oil',
                price: ' \u20A6 1,500.00',
                imageLink: require('@/assets/images/grocery/oil.png'),
                cateId: 5,
                proId: 9,
                detail: `The right ingredients make the perfect flavor and with Wesson Canola Oil you can taste the food not the oil.it's easy to make Wesson Canola Oil your go-to choice because canola oil provides the best nutritional balance compared to other cooking oils.Use it for fresh vegetables and lean meats to make a delicious stir-fry or mix it with your favorite spices and herbs to make light and flavorful marinades.You can also use it as a substitute for melted butter, margarine or shortening when baking your favorite recipes.Wesson Canola Oil is light, delicate and is good for your heart.It has the same health benefits as olive oil without overpowering your dish and is a source for healthy, monounsaturated fat that is essential for a healthy diet.Wesson Canola Oil comes with USDA qualified health claim on its ability to reduce the risk of coronary heart disease.`,
                spec: `Wesson canola oil(4.73L)X4100% pure canola oilOmega-3Og trans fat per serving       Cholesterol free`,
                thumbnails: [require('@/assets/images/grocery/oil1.jpg'),
                    require('@/assets/images/grocery/oil2.jpg'),
                    require('@/assets/images/grocery/oil3.jpg')
                ]


            },
            {
                name: 'Indomie Instant Noodles,',
                price: '\u20A6 3,200.00',
                imageLink: require('@/assets/images/grocery/indomiebox.jpg'),
                cateId: 5,
                proId: 10,
                detail: `Indomie Super Pack - (120g)A bigger version of the Indomitables pack, Super Pack offers more of Indomie's choicest combination of ingredients ensuring a more fulfilling experience.Easy to cook.

                Why you should buy this product;
                Indomie is light and easy to cook. It is great to start your day with and also very yummy.

                Buy now on Jumia to enjoy best prices.`,
                spec: `40 satchets of 120gnoodles`,
                thumbnails: [
                    require('@/assets/images/grocery/in1.png'),
                    require('@/assets/images/grocery/in2.jpg'),
                    require('@/assets/images/grocery/indomiebox.jpg')
                ]


            }

        ],
        cates: [

            {
                id: 1,
                categories: 'Home and Kitchen',
            },
            {
                id: 2,
                categories: 'Phones and Tablets',
            },
            {
                id: 3,
                categories: 'Computer and Accessories',
            },
            {
                id: 4,
                categories: 'Electronics',
            },
            {
                id: 5,
                categories: 'Grocery',
            }
        ],
        selectedProduct: null
    },
    mutations: {
        setSelectedProduct(state, data) {
            state.selectedProduct = data;
        }
    }
});

export default store;