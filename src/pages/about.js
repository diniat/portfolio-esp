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
        <title>DianAtobe Dev | Sobre Mi</title>
        <meta name="description" content="Diana Atobe, Full Stack Developer." />
      </Head>
      <TransitionEffect />
      <main
        className={`flex  w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="un poco sobre mi:"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div
              className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 
              md:col-span-8"
            >
              <p className="font-medium">
                Hola, soy <strong>Diana</strong>, soy desarrolladora web Full
                Stack y estudiante de análisis de sistemas informáticos.
                Anteriormente estudiaba medicina en la Universidad de Buenos
                Aires, pero me di cuenta de que no era para mí. Por suerte
                descubrí el mundo de la programación que realmente me apasiona y
                me motiva a seguir creciendo y mejorando omo profesional.
              </p>
              <p className="font-medium my-4">
                Actualmente estoy aprendiendo React Native y ofrezco experiencia
                con react, next, node js, bases de datos sql y mongo,
                comprensión de las API REST y más. Aporto una actitud positiva,
                autonomía, me gusta y me resulta fácil trabajar en equipo, y
                aprendo rápido. Soy una persona proactiva, organizada y
                orientada a resultados.
              </p>
              <p className="font-medium">
                Ya sea que esté trabajando en un sitio web, una aplicación móvil
                u otro producto digital, aporto mi compromiso con la excelencia
                en el diseño y el pensamiento centrado en el usuario a cada
                proyecto en el que trabajo. Espero con interés la oportunidad de
                aportar mis habilidades y pasión a su próximo proyecto.
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
                  react, next y más
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
                  Bases de Datos
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
