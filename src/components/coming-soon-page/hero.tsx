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
            className="mx-auto w-28 pt-8"
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
                Lyfego is a multisports subscription that allows you to learn
                all the sports you want for $150/month.
              </Balancer>
            </p>

            <div>
              <a
                className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-white text-orange-500 transition duration-150 ease-in-out hover:bg-[#191919]"
                href="https://t.me/lyfegosg"
                target="_blank"
                aria-label="Telegram"
              >
                <svg
                  className="h-10 w-10 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22.968 10.276a.338.338 0 0 0-.232-.253 1.192 1.192 0 0 0-.63.045s-14.019 5.038-14.82 5.596c-.172.121-.23.19-.259.272-.138.4.293.573.293.573l3.613 1.177a.388.388 0 0 0 .183-.011c.822-.519 8.27-5.222 8.7-5.38.068-.02.118 0 .1.049-.172.6-6.606 6.319-6.64 6.354a.138.138 0 0 0-.05.118l-.337 3.528s-.142 1.1.956 0a30.66 30.66 0 0 1 1.9-1.738c1.242.858 2.58 1.806 3.156 2.3a1 1 0 0 0 .732.283.825.825 0 0 0 .7-.622s2.561-10.275 2.646-11.658c.008-.135.021-.217.021-.317a1.177 1.177 0 0 0-.032-.316Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
