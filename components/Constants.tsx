type CategoryItems = {
  categoryName: string;
  subCategories: subCategory[];
};

type subCategory = {
  subCategoryTitle: string;
  elements: elements[];
};

type elements = {
  text?: string;
  link: string;
  image?: string;
};

export const categoryItems: CategoryItems[] = [
  {
    categoryName: "Dropuri",
    subCategories: [],
  },
  {
    categoryName: "Haine",
    subCategories: [
      {
        subCategoryTitle: "COMANDĂ ÎN FUNCȚIE DE CATEGORII",
        elements: [
          { text: "Descoperă tot", link: "#" },
          { text: "Fuste", link: "#" },
          { text: "Rochii", link: "#" },
          { text: "Pulovere & Haine tricotate", link: "#" },
          { text: "Tricouri & topuri", link: "#" },
          { text: "Modă de plajă", link: "#" },
          { text: "Blugi", link: "#" },
          { text: "Salopete", link: "#" },
          { text: "Pantaloni", link: "#" },
          { text: "Sacouri", link: "#" },
          { text: "Geci", link: "#" },
          { text: "Sweat", link: "#" },
          { text: "Bluze & tunici", link: "#" },
          { text: "Paltoane", link: "#" },
          { text: "Lenjerie", link: "#" },
        ],
      },
      {
        subCategoryTitle: "CUMPĂRĂ ÎN FUNCȚIE DE FIT",
        elements: [
          { text: "Modă pentru femei însărcinate", link: "#" },
          { text: "Mărimi mari", link: "#" },
          { text: "Petite", link: "#" },
          { text: "Înaltă", link: "#" },
        ],
      },
      {
        subCategoryTitle: "PIESE CHEIE",
        elements: [
          { text: "Noutăți", link: "#" },
          { text: "Trending", link: "#" },
          { text: "Sustenabilitate", link: "#" },
          { text: "Exclusiv", link: "#" },
          { text: "Premium", link: "#" },
          { text: "Haine de ocazie", link: "#" },
          { text: "Reciclare", link: "#" },
        ],
      },
      {
        subCategoryTitle: "BRANDURI DE TOP",
        elements: [
          {
            text: "Only",
            image:
              "https://1000logos.net/wp-content/uploads/2021/05/Only-logo.png",
            link: "#",
          },
          {
            text: "Nike",
            image:
              "https://logos-world.net/wp-content/uploads/2020/04/Nike-Logo.png",
            link: "#",
          },
          {
            text: "Adidas",
            image:
              "https://clipart-library.com/image_gallery2/Adidas-Logo-Transparent.png",
            link: "#",
          },
          {
            text: "Bershka",
            image:
              "https://logos-world.net/wp-content/uploads/2023/05/Bershka-Logo-New.png",
            link: "#",
          },
        ],
      },
    ],
  },
  {
    categoryName: "Pantofi",
    subCategories: [
      {
        subCategoryTitle: "COMANDĂ ÎN FUNCȚIE DE CATEGORII",
        elements: [
          { text: "Descoperă tot", link: "#" },
          { text: "Saboți", link: "#" },
          { text: "Sneakers", link: "#" },
          { text: "Balerini", link: "#" },
          { text: "Sandale", link: "#" },
          { text: "Pantofi sport", link: "#" },
          { text: "Pumps & pantofi cu toc", link: "#" },
          { text: "Cizme", link: "#" },
          { text: "Pantofi", link: "#" },
          { text: "Papuci de casă", link: "#" },
          { text: "Botine", link: "#" },
        ],
      },
      {
        subCategoryTitle: "PIESE CHEIE",
        elements: [
          { text: "Noutăți", link: "#" },
          { text: "Trending", link: "#" },
          { text: "Sustenabilitate", link: "#" },
          { text: "Exclusiv", link: "#" },
        ],
      },
      {
        subCategoryTitle: "BRANDURI DE TOP",
        elements: [
          {
            text: "ADIDAS ORIGINALS",
            image:
              "https://clipart-library.com/image_gallery2/Adidas-Logo-Transparent.png",
            link: "#",
          },
          {
            text: "Nike Sportswear",
            image:
              "https://logos-world.net/wp-content/uploads/2020/04/Nike-Logo.png",
            link: "#",
          },
          {
            text: "CONVERSE",
            image: "https://loodibee.com/wp-content/uploads/Converse-Logo.png",
            link: "#",
          },
          {
            text: "new balance",
            image:
              "https://1000logos.net/wp-content/uploads/2018/05/New-Balance-Logo-1972.png",
            link: "#",
          },
          {
            text: "PUMA",
            image:
              "https://seeklogo.com/images/P/puma-se-logo-ACC0F72575-seeklogo.com.png",
            link: "#",
          },
          {
            text: "TAMARIS",
            image:
              "https://impactiva.com/wp-content/uploads/2021/07/Tamaris-logo.png",
            link: "#",
          },
          {
            text: "GUESS",
            image:
              "https://logolook.net/wp-content/uploads/2023/04/Guess-Emblem.png",
            link: "#",
          },
          {
            text: "TOMMY HILFIGER",
            image:
              "https://seeklogo.com/images/T/tommy-hilfiger-logo-3C7109A491-seeklogo.com.png",
            link: "#",
          },
        ],
      },
    ],
  },
  {
    categoryName: "Sport",
    subCategories: [
      {
        subCategoryTitle: "COMANDĂ ÎN FUNCȚIE DE CATEGORII",
        elements: [
          { text: "Descoperă tot", link: "#" },
          { text: "Rucsacuri și genți de sport", link: "#" },
          { text: "Accesorii sport", link: "#" },
        ],
      },
      {
        subCategoryTitle: "ÎMBRĂCĂMINTE SPORT",
        elements: [
          { text: "Descoperă tot", link: "#" },
          { text: "Pantaloni sport", link: "#" },
          { text: "Tricouri sport", link: "#" },
          { text: "Lenjerie sport", link: "#" },
          { text: "Pulovere sport", link: "#" },
          { text: "Îmbrăcăminte de înot & surf", link: "#" },
        ],
      },
      {
        subCategoryTitle: "PANTOFI SPORT",
        elements: [
          { text: "Descoperă tot", link: "#" },
          { text: "Pantofi sport de alergat", link: "#" },
          { text: "Încălțăminte outdoor", link: "#" },
          { text: "Pantofi sport", link: "#" },
          { text: "Șlapi", link: "#" },
          { text: "Pantofi sport de interior", link: "#" },
          { text: "Ghete de fotbal", link: "#" },
        ],
      },
      {
        subCategoryTitle: "BRANDURI DE TOP",
        elements: [
          {
            text: "NIKE",
            image:
              "https://1000logos.net/wp-content/uploads/2017/03/Nike-Logo-1971-now.png",
            link: "#",
          },
          {
            text: "ADIDAS SPORTSWEAR",
            image: "https://cdn-icons-png.flaticon.com/512/731/731962.png",
            link: "#",
          },
          {
            text: "ADIDAS PERFORMANCE",
            image: "https://cdn-icons-png.flaticon.com/512/731/731962.png",
            link: "#",
          },
          {
            text: "UNDER ARMOUR",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Under_armour_logo.svg/1200px-Under_armour_logo.svg.png",
            link: "#",
          },
        ],
      },
    ],
  },
  {
    categoryName: "Accesorii",
    subCategories: [
      {
        subCategoryTitle: "COMANDĂ ÎN FUNCȚIE DE CATEGORII",
        elements: [
          { text: "Descoperă tot", link: "#" },
          { text: "Genți și rucsacuri", link: "#" },
          { text: "Bijuterii", link: "#" },
          { text: "Ochelari de soare", link: "#" },
          { text: "Pălării & căciuli", link: "#" },
          { text: "Portofele & etui", link: "#" },
          { text: "Fulare & eșarfe", link: "#" },
          { text: "Curele", link: "#" },
          { text: "Ceasuri", link: "#" },
          { text: "Accesorii de păr", link: "#" },
          { text: "Mănuși", link: "#" },
          { text: "Huse de smartphoneuri", link: "#" },
          { text: "Accesorii de locuit", link: "#" },
        ],
      },
      {
        subCategoryTitle: "PIESE CHEIE",
        elements: [
          { text: "Noutăți", link: "#" },
          { text: "Trending", link: "#" },
          { text: "Sustenabilitate", link: "#" },
          { text: "Exclusiv", link: "#" },
        ],
      },
      {
        subCategoryTitle: "BRANDURI DE TOP",
        elements: [
          {
            text: "GUESS",
            image:
              "https://logolook.net/wp-content/uploads/2023/04/Guess-Emblem.png",
            link: "#",
          },
          {
            text: "TOMMY HILFIGER",
            image:
              "https://seeklogo.com/images/T/tommy-hilfiger-logo-3C7109A491-seeklogo.com.png",
            link: "#",
          },
          {
            text: "MICHAEL Michael Kors",
            image:
              "https://1000logos.net/wp-content/uploads/2017/08/Michael-Kors-Logo.png",
            link: "#",
          },
          {
            text: "FURLA",
            image:
              "https://1000logos.net/wp-content/uploads/2022/07/Furla-logo.png",
            link: "#",
          },
          {
            text: "VALENTINO",
            image:
              "https://nofakesallowed.com/image/cache/catalog/branduri/Logo%20Branduri-15-600x315w.png",
            link: "#",
          },
          {
            text: "DESIGUAL",
            image:
              "https://marcas-logos.net/wp-content/uploads/2019/11/Desigual-Logo.png",
            link: "#",
          },
          {
            text: "Calvin Klein",
            image:
              "https://1000logos.net/wp-content/uploads/2021/11/Calvin-Klein-logo.png",
            link: "#",
          },
          {
            text: "Calvin Klein Jeans",
            image:
              "https://1000logos.net/wp-content/uploads/2021/11/Calvin-Klein-logo.png",
            link: "#",
          },
        ],
      },
    ],
  },
  {
    categoryName: "Premium",
    subCategories: [
      {
        subCategoryTitle: "COMANDĂ ÎN FUNCȚIE DE CATEGORII",
        elements: [
          { text: "Descoperă tot", link: "#" },
          { text: "Lenjerie & modă de plajă", link: "#" },
          { text: "Noutăți", link: "#" },
          { text: "Fuste", link: "#" },
          { text: "Rochii", link: "#" },
          { text: "Haine tricotate", link: "#" },
          { text: "Tricouri & topuri", link: "#" },
          { text: "Sweat", link: "#" },
          { text: "Jeans", link: "#" },
          { text: "Jumpsuits & Overalls", link: "#" },
          { text: "Pantaloni", link: "#" },
          { text: "Pantofi", link: "#" },
          { text: "Geci & paltoane", link: "#" },
          { text: "Accesorii", link: "#" },
          { text: "Bluze & tunici", link: "#" },
        ],
      },
      {
        subCategoryTitle: "BRANDURI DE TOP",
        elements: [
          {
            text: "Hugo",
            image:
              "https://i0.wp.com/luviabeauty.co.ke/wp-content/uploads/2021/02/ExternalLink_Hugo-Boss-Logo-500x209.png?fit=500%2C209&ssl=1",
            link: "#",
          },
          {
            text: "Lauren Ralph Lauren",
            image:
              "https://logolook.net/wp-content/uploads/2022/12/Ralph-Lauren-Logo.png",
            link: "#",
          },
          {
            text: "MICHAEL Michael Kors",
            image:
              "https://1000logos.net/wp-content/uploads/2017/08/Michael-Kors-Logo.png",
            link: "#",
          },
          {
            text: "Polo Ralph Lauren",
            image:
              "https://www.vectorkhazana.com/assets/images/products/Polo_Ralph_Lauren_letter_2.png",
            link: "#",
          },
        ],
      },
    ],
  },
  {
    categoryName: "SALE",
    subCategories: [
      {
        subCategoryTitle: "COMANDĂ ÎN FUNCȚIE DE CATEGORII",
        elements: [
          { text: "Descoperă tot", link: "#" },
          { text: "Tricouri & topuri", link: "#" },
          { text: "Lenjerie", link: "#" },
          { text: "Geci", link: "#" },
          { text: "Bluze & tunici", link: "#" },
          { text: "Modă de plajă", link: "#" },
          { text: "Pulovere & Haine tricotate", link: "#" },
          { text: "Sweat", link: "#" },
          { text: "Salopete", link: "#" },
          { text: "Jeans", link: "#" },
          { text: "Fuste", link: "#" },
          { text: "Pantofi", link: "#" },
          { text: "Rochii", link: "#" },
          { text: "Blazere", link: "#" },
          { text: "Accesorii", link: "#" },
          { text: "Paltoane", link: "#" },
          { text: "Mărimi mari", link: "#" },
          { text: "Premium", link: "#" },
          { text: "Pantaloni", link: "#" },
          { text: "Modă pentru femei însărcinate", link: "#" },
          { text: "Sport", link: "#" },
        ],
      },
    ],
  },
  {
    categoryName: "Top 100",
    subCategories: [],
  },
  {
    categoryName: "Branduri",
    subCategories: [
      {
        subCategoryTitle: "BRANDURI DE TOP",
        elements: [
          {
            text: "ADIDAS ORIGINALS",
            image:
              "https://clipart-library.com/image_gallery2/Adidas-Logo-Transparent.png",
            link: "#",
          },
          {
            text: "Nike Sportswear",
            image:
              "https://logos-world.net/wp-content/uploads/2020/04/Nike-Logo.png",
            link: "#",
          },
          {
            text: "Bershka",
            image:
              "https://logos-world.net/wp-content/uploads/2023/05/Bershka-Logo-New.png",
            link: "#",
          },
          {
            text: "ONLY",
            image:
              "https://1000logos.net/wp-content/uploads/2021/05/Only-logo.png",
            link: "#",
          },
          {
            text: "NIKE",
            image:
              "https://1000logos.net/wp-content/uploads/2017/03/Nike-Logo-1971-now.png",
            link: "#",
          },
          {
            text: "GUESS",
            image:
              "https://logolook.net/wp-content/uploads/2023/04/Guess-Emblem.png",
            link: "#",
          },
          {
            text: "ADIDAS SPORTSWEAR",
            image: "https://cdn-icons-png.flaticon.com/512/731/731962.png",
            link: "#",
          },
          {
            text: "CONVERSE",
            image: "https://loodibee.com/wp-content/uploads/Converse-Logo.png",
            link: "#",
          },
        ],
      },
      {
        subCategoryTitle: "BRANDURI ÎN TENDINȚE",
        elements: [
          {
            text: "Kazar",
            image:
              "https://www.newsweek.pl/kupony-rabatowe/static/shop/18997/logo/kazar_kod_rabatowy__1_.png",
            link: "#",
          },
          {
            text: "DreiMaster Vintage",
            image:
              "https://m.media-amazon.com/images/S/stores-image-uploads-eu-prod/2/AmazonStores/A1PA6795UKMFR9/b7e61d9c2ed5b7e1281ea75309fc3489.w4167.h1478.png",
            link: "#",
          },
          {
            text: "Moschino Jeans",
            image:
              "https://1000logos.net/wp-content/uploads/2021/05/Moschino-logo.png",
            link: "#",
          },
          {
            text: "Bogner Fire+Ice",
            image:
              "https://www.skistar.com/shop/globalassets/nya-skistarshop.com/varumarkessida/logotyper/bogner_fireice-200x200.png",
            link: "#",
          },
          {
            text: "Miss Sixty",
            image:
              "https://1000logos.net/wp-content/uploads/2020/09/Miss-Sixty-Logo.png",
            link: "#",
          },
          {
            text: "PRINCESS GOES HOLLYWOOD",
            image:
              "https://www.ehag.at/wp-content/uploads/2023/06/princess-quadratisch-transparent.png",
            link: "#",
          },
          {
            text: "Blauer.USA",
            image: "https://iconape.com/wp-content/png_logo_vector/blauer.png",
            link: "#",
          },
          {
            text: "Colmar",
            image:
              "https://sportofino.com/media/wysiwyg/Logotypy-marki/colmar.png",
            link: "#",
          },
        ],
      },
      {
        subCategoryTitle: "BRANDURI EXCLUSIVE",
        elements: [
          {
            text: "LeGer by Lena Gercke",
            image:
              "https://images.prismic.io/moodja/4779433f-ffde-43ae-ae07-f8d570931be6_leger-logo.png?auto=compress%2Cformat&rect=0%2C501%2C2501%2C1500&w=3840&fit=max",
            link: "#",
          },
          {
            text: "Guido Maria Kretschmer Curvy",
            image:
              "https://corporate.aboutyou.de/app/uploads/2023/09/GMK-Logo-RGB-Women_black.png",
            link: "#",
          },
          {
            text: "Guido Maria Kretschmer Women",
            image:
              "https://corporate.aboutyou.de/app/uploads/2023/09/GMK-Logo-RGB-Women_black.png",
            link: "#",
          },
          {
            text: "RÆRE by Lorena Rae",
            image:
              "https://corporate.aboutyou.de/app/uploads/2023/09/RAERE-Logo-ohne-subline-black_AY-Logo.png",
            link: "#",
          },
          {
            text: "ABOUT YOU",
            image:
              "https://s3-eu-west-1.amazonaws.com/tpd/logos/60104bc00cab430001671605/0x0.png",
            link: "#",
          },
          {
            text: "Hoermanseder x About You",
            image:
              "https://marinahoermanseder.com/cdn/shop/collections/HOERMANSEDER_LOGO_BLACK.png?v=1635850432",
            link: "#",
          },
          {
            text: "ALIGNE",
            image:
              "https://assets-global.website-files.com/63c02f6a62a8a9ed3f9108d9/653bc60cbfa9142eb0b33c34_Aligne_Aligne%20Logo.png",
            link: "#",
          },
          {
            text: "SHYX",
            image:
              "https://cdn.aboutstatic.com/file/bb9b2eb17fb317be0a3066a2b1871f68.png?quality=75&transparent=1&trim=1&height=480&width=360",
            link: "#",
          },
        ],
      },
    ],
  },
  {
    categoryName: "Inspirație",
    subCategories: [],
  },
];
