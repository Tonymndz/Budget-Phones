export interface IPhoneData {
  priceHeading: boolean,
  price: string;
  phone: string;
  imageLink: string;
  screenInches: string;
  screenPixels: string;
  RAM: string;
  CPU: string;
  CPUCore: string;
  batteryLife: string;
  cameraPixels: string;
  ebayLink:string;
  storage: string;
  comparison: boolean;
  ebayPrice: string;
  comparisonLink: string;
  oponnentPhone: string;
  param2nd?: string,
  comparisonsFromSiteText?: string,
  comparisonButtonText?: string,
} 

export let phoneData: IPhoneData[] = [
  {
    priceHeading: true,
    price: "Under $60",
    phone: "Motorola Moto Z Droid",
    imageLink: "https://fdn2.gsmarena.com/vv/pics/motorola/motorola-moto-z-force-1.jpg",
    screenInches: "5.5\"",
    screenPixels: "1440x2560", 
    RAM: "4GB",
    CPU: "2.15Ghz",
    CPUCore: "Quad-Core",
    batteryLife: "21",
    cameraPixels: "13",
    ebayLink: "https://rover.ebay.com/rover/1/711-53200-19255-0/1?mpre=https%3A%2F%2Fwww.ebay.com%2Fitm%2FMotorola-XT1650M-Moto-Z-Force-Droid-Factory-Unlocked-4G-LTE-32GB-Smartphone%2F362564303308%3Fepid%3D223418446%26hash%3Ditem546a8439cc%3Ag%3AMX4AAOSwtGlZN~T5&campid=5338742506&toolid=10001&customid=Motorola Moto Z Droid",
    storage: "32GB",
    comparison: false,
    ebayPrice: "$59.99",
    comparisonLink: "https://www.phonemore.com/compare/phones/lg-g7-thinq-g710ulm-vs-motorola-moto-z-droid-xt1650-32gb/13428987",
    oponnentPhone: "LG G5"
  },
  {
    priceHeading: false,
    price: "Under $60",
    phone: "LG G5",
    imageLink: "https://images-na.ssl-images-amazon.com/images/I/51TDgjRxE8L.jpg",
    screenInches: "5.3\"",
    screenPixels: "1440x2560", 
    RAM: "4GB",
    CPU: "2.15Ghz",
    CPUCore: "Quad-Core",
    batteryLife: "20",
    cameraPixels: "16",
    ebayLink: "https://rover.ebay.com/rover/1/711-53200-19255-0/1?mpre=https%3A%2F%2Fwww.ebay.com%2Fitm%2FLG-G5-VS987-32GB-Silver-Verizon-Smartphone-BUNDLE%2F293745312466%3Fepid%3D220957006%26_trkparms%3Dispr%253D1%26hash%3Ditem446495c2d2%3Ag%3AsSgAAOSws~pfZ6VL%26enc%3DAQAFAAACYBaobrjLl8XobRIiIML1V4Imu%252Fn%252BzU5L90Z278x5ickkvjzWOStkxwnlDuxSI1PVVkgxlShiciYeXhnzrdPXvGSWv0M3i0t%252FSSTI2LtlWzutuRj9SYV2F9LuJMpAv7%252B%252FJeYGFJzyfoP%252Bs77IJd%252BWolMAbHsiZplc%252Frwr5k72kcxYqFJzp%252FVBcr2YFkYRG2INd8MFuv%252FGe1yJCEv8R1DCTYBuykonupgl%252BDhDOPnef1cUGVxKuSLJUiPRg43sdUKCVWy5FNb%252FspeMMHMlivhcYH2q5uXxgzHL%252BbmOPhBXo1hLVZQ9GyYkWxJoxoAeloavcQcOqrVTz9p11vt9bIWkQNCvPfiUqomJv0TUk0DGGHAMP7fAMwkEOEraiCHLdfFp%252BasljsHey4%252FMgZtNzKfP39ALMAIfYiw2oFLHT2%252FlZlTtJRNoA9Idnu6xH%252BzAyJYM6cFnVAStypxvheYz8rOYhl0xottd1aKgHq2P2fyXvdCKcMvKDI5Easpu%252FYRlLt5D4UVc8e2MdAqC8Qjz2Y%252Bd2XcywCUlc5j2EAWSkTXznT0nELl9NEUwJuhez5R%252FZUZGBeGJdOmX8S4IZWFqOBhD9eFiP5O%252FCW3aUI0ZZ1QnkOJf64AvgaH0zpMIV0PCjs4CYSdX9YiTcB9d5pbCfFa3g4598Wrfw%252BEst3kV5TfxWdqeZsB4%252ByoT52Aj0uN4uZnLioRsoBX%252FKMeRVaCRQVQdlkimYC60pBy3QOFJ83tvyWjbgZgJH7LBd59%252FHXwR3NETnJR8zK6%252FAJiwru5ITtlDy8RwO%252F7vBgLNU58M2XdpCNPk%26checksum%3D2937453124664d5435e534a44efe9cab09f34e65d807&campid=5338742506&toolid=10001&customid=LG G5",
    storage: "32GB",
    comparison: true,
    ebayPrice: "$61.99",
    comparisonLink: "https://www.phonemore.com/compare/phones/lg-g5-h840-vs-motorola-moto-z-droid-xt1650-32gb/3611255",
    oponnentPhone: "Motorola Moto Z Droid"
  },
  {
    priceHeading: true,
    price: "Under $80",
    phone: "LG G6",
    imageLink: "https://i.ebayimg.com/images/g/zrEAAOSwY0teTeS5/s-l640.png",
    screenInches: "5.7\"",
    screenPixels: "1440x2880", 
    RAM: "4GB",
    CPU: "2.35Ghz",
    CPUCore: "Quad-Core",
    batteryLife: "23",
    cameraPixels: "13",
    ebayLink: "https://rover.ebay.com/rover/1/711-53200-19255-0/1?mpre=https%3A%2F%2Fwww.ebay.com%2Fitm%2FLG-G6-32GB-Ice-Platinum-T-Mobile-Smartphone%2F224084275737%3Fepid%3D237193192%26hash%3Ditem342c76b219%3Ag%3AEzwAAOSwmgteTka1&campid=5338742506&toolid=10001&customid=LG G6",
    storage: "32GB",
    comparison: true,
    ebayPrice: "$69.99",
    comparisonLink: "https://www.phonemore.com/specs/lg/g6/",
    param2nd: "In-Depth",
    comparisonsFromSiteText: "from Phonemore.com",
    oponnentPhone: "Specs Review",
    comparisonButtonText: "LG G6 Full Phone Specs",
  },
  {
    priceHeading: true,
    price: "Under $100",
    phone: "Google Pixel XL",
    imageLink: "https://www.mobilepriceinbangladesh.com/wp-content/uploads/2017/02/google-pixel-xl.jpg",
    screenInches: "5.5\"",
    screenPixels: "1440x2560", 
    RAM: "4GB",
    CPU: "2.15Ghz",
    CPUCore: "Quad-Core",
    batteryLife: "32",
    cameraPixels: "12.3",
    ebayPrice: "$99.99",
    ebayLink: "https://rover.ebay.com/rover/1/711-53200-19255-0/1?mpre=https%3A%2F%2Fwww.ebay.com%2Fitm%2FGoogle-Pixel-XL-32GB-Black-Fully-Unlocked-Smartphone%2F124302613603%3Fepid%3D229403262%26hash%3Ditem1cf1035c63%3Ag%3A-40AAOSw6KhfOuhH&campid=5338742506&toolid=10001&customid=Google Pixel XL",
    storage: "32GB",
    comparison: false,
    comparisonLink: "https://www.phonemore.com/compare/phones/samsung-galaxy-note-4-sm-n910t-vs-google-pixel-xl-32gb/3993580",
    oponnentPhone: "Samsung Galaxy Note 4"
  },
  {
    priceHeading: false,
    price: "Under $100",
    phone: "Samsung Galaxy Note 4",
    imageLink: "https://images-na.ssl-images-amazon.com/images/I/71kRAnLYANL._AC_SX679_.jpg",
    screenInches: "5.7\"",
    screenPixels: "1440x2560", 
    RAM: "3GB",
    CPU: "2.7Ghz",
    CPUCore: "Quad-Core",
    batteryLife: "20",
    cameraPixels: "16",
    ebayPrice: "$89.97",
    ebayLink: "https://rover.ebay.com/rover/1/711-53200-19255-0/1?mpre=https%3A%2F%2Fwww.ebay.com%2Fitm%2FDual-SIM-Samsung-Galaxy-Note-4-Duos-N9100-5-7-16MP-4G-LTE-Android-Smartphone%2F264845250956%3Fepid%3D1062873907%26hash%3Ditem3daa01d18c%3Ag%3AlN8AAOSwZqZaDFES&campid=5338742506&toolid=10001&customid=Samsung Galaxy Note 4",
    storage: "32GB",
    comparison: true,
    comparisonLink: "https://www.phonemore.com/compare/phones/samsung-galaxy-note-4-sm-n910t-vs-google-pixel-xl-32gb/3993580",
    oponnentPhone: "Google Pixel XL"
  },
  {
    priceHeading: true,
    price: "Under $120",
    phone: "Google Pixel 2",
    imageLink: "https://images-na.ssl-images-amazon.com/images/I/61TchY6s7ZL._AC_SL1200_.jpg",
    screenInches: "5\"",
    screenPixels: "1080x1920", 
    RAM: "4GB",
    CPU: "2.35Ghz",
    CPUCore: "Quad-Core",
    batteryLife: "20",
    cameraPixels: "12.2",
    ebayPrice: "$114.95",
    ebayLink: "https://rover.ebay.com/rover/1/711-53200-19255-0/1?mpre=https%3A%2F%2Fwww.ebay.com%2Fitm%2FGoogle-Pixel-2-XL-64GB-Verizon-Unlocked-GSM-Smartphone-Cell-Phone-AT-T-T-Mobile%2F362860885397%3Fhash%3Ditem547c31b595%3Ag%3AVcIAAOSw0vJcFALT&campid=5338742506&toolid=10001&customid=Google Pixel 2",
    storage: "128GB",
    comparison: false,
    comparisonLink: "",
    oponnentPhone: ""
  },
  {
    priceHeading: false,
    price: "Under $120",
    phone: "Samsung Galaxy Note 5",
    imageLink: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-note5-5.jpg",
    screenInches: "5.7\"",
    screenPixels: "1440x2560", 
    RAM: "4GB",
    CPU: "2.1Ghz",
    CPUCore: "Quad-Core",
    batteryLife: "22",
    cameraPixels: "16",
    ebayLink: "https://rover.ebay.com/rover/1/711-53200-19255-0/1?mpre=https%3A%2F%2Fwww.ebay.com%2Fitm%2FSamsung-Galaxy-Note-5-Sm-n920a-32gb-Black-blue-At-t-Unlocked-Smartphone-W-Extras%2F264861589610%3Fhash%3Ditem3daafb206a%3Ag%3AaCQAAOSwqJJfWyWX&campid=5338742506&toolid=10001&customid=Samsung Galaxy Note 5",
    storage: "32GB",
    comparison: true,
    ebayPrice: "$120.00",
    comparisonLink: "https://www.phonemore.com/compare/phones/google-pixel-2-128gb-vs-samsung-galaxy-note-5-sm-n920p/6607269",
    oponnentPhone: "Google Pixel 2"
  },
]