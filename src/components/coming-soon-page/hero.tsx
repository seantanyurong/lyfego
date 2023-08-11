import Balancer from "react-wrap-balancer";
import TennisImage from "public/images/tennis-court-2.png";
import Logo from "public/images/Logo.png";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex h-screen bg-orange-500">
      <div className="hidden flex-1 lg:block">
        <Image
          src={TennisImage}
          alt="tennis court"
          className="mx-auto h-screen"
          style={{ objectFit: "cover" }}
          priority={true}
          loading="eager"
          placeholder="blur"
        />
      </div>
      <div className="mx-auto max-w-6xl flex-1 px-4 sm:px-8">
        <div>
          <Image
            src={Logo}
            alt="logo"
            className="mx-auto mt-8 w-40"
            style={{ objectFit: "cover" }}
            placeholder="blur"
          />
        </div>
        <div className="flex h-[85%] flex-col items-center justify-center text-center">
          <h1
            className="mb-6 block text-4xl font-bold leading-none text-white md:text-[3em]"
            data-aos="zoom-y-out"
          >
            <Balancer>Our Website is Undergoing Maintenance.</Balancer>
          </h1>
          <div className="mx-auto max-w-3xl">
            <p
              className=" mb-8 text-2xl text-white md:text-2xl"
              data-aos="zoom-y-out"
              data-aos-delay="150"
            >
              <Balancer>
                Learn all the sports you&apos;ve always wanted to with just a
                LyfeGo Pass!
              </Balancer>
            </p>

            <div>
              <a
                className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white p-1 text-orange-500 transition duration-150 ease-in-out hover:bg-[#191919]"
                href="https://wa.me/98225900"
                target="_blank"
                aria-label="whatsapp"
              >
                <svg className="h-12 w-12 fill-current" viewBox="0 0 32 32">
                  <path
                    d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z"
                    fill-rule="evenodd"
                  ></path>
                </svg>
                {/* <svg
                  className="h-10 w-10 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22.968 10.276a.338.338 0 0 0-.232-.253 1.192 1.192 0 0 0-.63.045s-14.019 5.038-14.82 5.596c-.172.121-.23.19-.259.272-.138.4.293.573.293.573l3.613 1.177a.388.388 0 0 0 .183-.011c.822-.519 8.27-5.222 8.7-5.38.068-.02.118 0 .1.049-.172.6-6.606 6.319-6.64 6.354a.138.138 0 0 0-.05.118l-.337 3.528s-.142 1.1.956 0a30.66 30.66 0 0 1 1.9-1.738c1.242.858 2.58 1.806 3.156 2.3a1 1 0 0 0 .732.283.825.825 0 0 0 .7-.622s2.561-10.275 2.646-11.658c.008-.135.021-.217.021-.317a1.177 1.177 0 0 0-.032-.316Z" />
                </svg> */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
