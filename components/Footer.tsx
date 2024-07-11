import React from "react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 w-full">
        <div className="flex flex-row justify-center w-full space-x-8"> {/* Added space-x-8 for gap */}
          <div
            data-testid="contactsSection"
            className="bg-white py-8 flex flex-col justify-center items-center"
          >
            <div data-testid="logoSection" className="scale-150 w-18 h-auto">
              <a
                href="https://www.aboutyou.ro/"
                className="text-gray-800"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://corporate.aboutyou.de/app/uploads/2016/09/AY_Logo.png"
                  alt="About You"
                  className=" w-14 h-auto scale-150 object-center"
                />
              </a>
            </div>
            <div data-testid="contactLinks" className="mt-8 text-center">
              <div
                data-testid="horizontalList"
                className="inline-flex space-x-4"
              >
                <div data-testid="socialLinks" className="flex space-x-2">
                  <a
                    href="https://www.facebook.com/aboutyouro"
                    className="text-gray-600 hover:text-gray-900"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://cdn.aboutstatic.com/file/d473bb55bdf6bd6430eeff7ed35fa4ca.png?quality=75&amp;height=480&amp;width=360"
                      alt="Facebook"
                      className="w-6 h-6"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/aboutyou_ro"
                    className="text-gray-600 hover:text-gray-900"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://cdn.aboutstatic.com/file/6a522d45a858eea2ccf7e71c2aa419fb.png?quality=75&amp;height=480&amp;width=360"
                      alt="Facebook"
                      className="w-6 h-6"
                    />
                  </a>
                  <a
                    href="https://twitter.com/aboutyou_com"
                    className="text-gray-600 hover:text-gray-900"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://cdn.aboutstatic.com/file/75356ec63103aca8bf43a3071ed2a242.png?quality=75&amp;height=480&amp;width=360"
                      alt="Facebook"
                      className="w-6 h-6"
                    />
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCBXVazjXMJjPqvj1RPi-9Rg"
                    className="text-gray-600 hover:text-gray-900"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://cdn.aboutstatic.com/file/cb7acd67a9173da747cbcfa4b23299e9.png?quality=75&amp;height=480&amp;width=360"
                      alt="Facebook"
                      className="w-6 h-6"
                    />
                  </a>
                  <a
                    href="https://www.pinterest.com/aboutyoude"
                    className="text-gray-600 hover:text-gray-900"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://cdn.aboutstatic.com/file/038d85b41d415a8db37f742dd4223992.png?quality=75&amp;height=480&amp;width=360"
                      alt="Facebook"
                      className="w-6 h-6"
                    />
                  </a>
                  <a
                    href="https://www.tiktok.com/@aboutyou?_t=8UldfClwTLS&amp;_r=1"
                    className="text-gray-600 hover:text-gray-900"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://cdn.aboutstatic.com/file/15e8a563a8cfccf205c74bab55a57e70.png?quality=75&amp;height=480&amp;width=360"
                      alt="Facebook"
                      className="w-6 h-6"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div data-testid="customerCareLinks" className=" p-4">
            <span className="text-gray-800 font-semibold">
              Relații cu clienții
            </span>
            <a
              data-testid="link"
              href="/"
              className="block mt-2 text-gray-600 hover:text-gray-900 font-sans"
            >
              <span className="text-sm">Ajutor și contact</span>
            </a>
            <a
              data-testid="link"
              href="/"
              className="block mt-2 text-gray-600 hover:text-gray-900 font-sans"
            >
              <span className="text-sm">Colecții cu creatori de conținut</span>
            </a>
            <a
              data-testid="link"
              href="/"
              className="block mt-2 text-gray-600 hover:text-gray-900 font-sans"
            >
              <span className="text-sm">Zonă de livrare</span>
            </a>
            <a
              href="https://anpc.ro"
              data-testid="link"
              className="block mt-2 text-gray-600 hover:text-gray-900 font-sans"
              target="_blank"
              rel="noreferrer"
            >
              <span className="text-sm">Protecția consumatorului</span>
            </a>
          </div>
          <div data-testid="secureShoppingCertificates" className=" p-4">
            <span className="text-gray-800 font-semibold">
              Cumpărături sigure
            </span>
            <a
              href="https://www.rapidssl.com/"
              data-testid="link"
              className="block mt-2 text-gray-600 hover:text-gray-900"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex mt-2">
                <img
                  src="https://cdn.aboutstatic.com/file/5ce2a7bafca21687b5f8f0636de7dc80?quality=75&height=480&width=360"
                  alt="RapidSSL"
                  className="w-auto h-8"
                />
                <span className="text-sm block mt-2 font-sans">
                  Datele tale sunt în siguranță la noi
                </span>
              </div>
            </a>
          </div>
        </div>
        <div>
          <div className="font-light">
            <span className="text-gray-400 block">
              <span className="font-semibold">*</span> Livrare gratuită pentru
              comenzi începând cu 79,90 lei, altfel livrarea costă 9,90 lei.
            </span>
            <span className="text-gray-400 block">
              <span className="font-semibold">**</span> Cel mai mic preț total
              din ultimele 30 de zile înainte de reducerea de preț.
            </span>
            <span className="text-gray-400 block">
              <span className="font-semibold">***</span> Dacă găsești un articol
              identic la un preț mai mic într-un magazin eligibil, poți solicita
              rambursarea diferenței de preț în termen de 30 de zile de la
              confirmarea comenzii
            </span>
            <span className="text-gray-400 block">
              <span className="font-semibold">****</span> Apel gratuit din toate
              rețelele. Apelurile din străinătate pot fi taxate.
            </span>
            <span className="text-gray-400 block">
              <span className="font-semibold">******</span> Toate prețurile
              includ TVA.
            </span>
          </div>
        </div>
      </nav>
      <div className="bg-gray-100 p-4 font-bold" data-testid="legalLinks">
        <nav className="flex flex-wrap justify-center">
          <a
            href="https://corporate.aboutyou.de/en/"
            data-testid="link"
            className="text-gray-800 hover:underline mr-4 "
            target="_blank"
            rel="noreferrer"
          >
            Despre noi
          </a>
          <a
            href="https://corporate.aboutyou.de/en/newsroom/press-releases"
            data-testid="link"
            className="text-gray-800 hover:underline mr-4"
            target="_blank"
            rel="noreferrer"
          >
            Presă
          </a>
          <a
            href="https://corporate.aboutyou.de/en/our-jobs"
            data-testid="link"
            className="text-gray-800 hover:underline mr-4"
            target="_blank"
            rel="noreferrer"
          >
            Joburi
          </a>
          <a
            href="https://ir.aboutyou.de/websites/about-you/English/0/investor-relations.html"
            data-testid="link"
            className="text-gray-800 hover:underline mr-4"
            target="_blank"
            rel="noreferrer"
          >
            Relații cu investitorii
          </a>
          <a
            data-testid="link"
            className="text-gray-800 hover:underline mr-4"
            href="https://www.aboutyou.ro/politica-de-confidentialitate"
          >
            Politica de confidențialitate
          </a>
          <a
            data-testid="link"
            className="text-gray-800 hover:underline mr-4"
            href="/"
          >
            Manager preferințe (Manager permisiuni)
          </a>
          <a
            data-testid="link"
            className="text-gray-800 hover:underline mr-4"
            href="https://www.aboutyou.ro/termeni-si-conditii"
          >
            Termeni și condiții
          </a>
          <a
            data-testid="link"
            className="text-gray-800 hover:underline"
            href="https://www.aboutyou.ro/date-juridice"
          >
            Date juridice
          </a>
        </nav>
        <div className="inline-block text-center text-gray-400 w-full font-normal">
          <span >
            ©{" "}
          </span>{" "}
          {currentYear} <span>ABOUT YOU SE &amp; Co. KG</span>
        </div>
      </div>
    </footer>
  );
};
