import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profile from "../../public/images/profile/dev1.JPG";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";

export default function About() {
  return (
    <>
      <Head>
        <title>DianAtobe Dev | About Page</title>
        <meta name="description" content="Diana Atobe, Full Stack Developer." />
      </Head>
      <TransitionEffect />
      <main
        className={`flex  w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="a little about me:"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div
              className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 
              md:col-span-8"
            >
              <p className="font-medium">
                Hi, I&apos;m <strong>Diana</strong>, I am a Full Stack Web
                Developer and a Computer Systems Analysis student. Previously, I
                was studying medicine at the University of Buenos Aires, but I
                realized that it wasn&apos;t for me. Luckily I discovered the
                world of programming that I am really passionate about and
                motivates me to continue to develop and grow my professional
                skills and knowledge as a professional.
              </p>
              <p className="font-medium my-4">
                I&apos;m currently learning React Native and I offer experience
                with react, next, node js, sql databases, understanding of REST
                API&apos;s, and more. I bring a positive attitude, autonomy, I
                like it and I find it easy to work in a team, and I learn
                quickly. I am a proactive, organized and results-oriented
                person.
              </p>
              <p className="font-medium">
                Whether I&apos;m working on a website, mobile app, or other
                digital product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>
            <div
              className="relative col-span-3 h-max rounded-2xl border-2 border-solid border-dark 
            bg-light p-8 dark:border-light dark:bg-dark
            xl:col-span-4 md:col-span-8 md:order-1
            "
            >
              <div
                className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%]  rounded-[2rem] rounded-br-3xl 
                bg-dark
        dark:bg-light  "
              />
              <Image
                className="h-auto w-full rounded-2xl"
                src={profile}
                alt="devpic"
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                priority
              />
            </div>
            <div
              className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row 
            xl:items-center md:order-3"
            >
              <div className="flex flex-col items-end justify-center xl:items-center lg:hidden">
                <span className="inline-block text-5xl font-bold md:text-4xl sm:text-3xl xs:text-2xl">
                  Front End
                </span>
                <h2
                  className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                xl:text-center md:text-lg sm:text-base xs:text-sm"
                >
                  react, next and more
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center lg:hidden">
                <span className="inline-block text-5xl font-bold md:text-4xl sm:text-3xl xs:text-2xl">
                  Back End
                </span>
                <h2
                  className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                xl:text-center md:text-lg sm:text-base xs:text-sm"
                >
                  node js
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center lg:hidden">
                <span className="inline-block text-5xl font-bold md:text-4xl sm:text-3xl xs:text-2xl">
                  Databases
                </span>
                <h2
                  className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                xl:text-center md:text-lg sm:text-base xs:text-sm"
                >
                  mongo, SQL
                </h2>
              </div>
            </div>
          </div>

          <Skills />
          <Education />
        </Layout>
      </main>
    </>
  );
}
