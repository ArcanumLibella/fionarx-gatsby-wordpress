import React from "react";
import { Separator } from "../components/atoms/Separator";
import { Text } from "../components/atoms/Text";
import { PageLayout } from "../components/layouts/PageLayout";
// import { StackItems } from "../components/molecules/StackItems";
// import { CardsService } from "../components/organisms/CardsService";

const AboutPage = () => {
  return (
    <PageLayout title="À propos" className="overflow-y-auto xl:pb-48">
      <Text type="title" className="text-white">
        <strong>Fiona Roux</strong>, votre Consultante Tech & Stratégie Digitale vous accompagne à toutes les étapes de votre projet.
      </Text>
      <Separator />
      <Text type="paragraph" className="mb-8 text-white">
        Depuis 2018, j'ai acquis une expérience riche et diversifiée au sein d'agences, de start-ups et de grands groupes.
        Aujourd'hui, en tant qu’indépendante, je mets à votre disposition mon savoir-faire pour vous accompagner dans la création ou la refonte de votre site internet à chaque étape de votre projet :
      </Text>
      <Separator />
      <Text type="paragraph" className="mb-8 lg:mb-12 text-white">
        Avec une approche holistique, je travaille en collaboration avec vous pour comprendre vos <strong>besoins spécifiques</strong> et développer des <strong>solutions sur-mesure</strong> qui mettent en valeur votre activité et suscitent l'engagement de votre public cible.
      </Text>
      <Text type="paragraph" className="mb-8 lg:mb-12 text-white">
        Pour cela, je m'engage à respecter les <strong>meilleures pratiques</strong> de design et de développement, en suivant les dernières tendances et les principes de l'<strong>atomic design</strong>, du responsive design, de l'accessibilité et du référencement naturel.
      </Text>
    </PageLayout>
  );
};

export default AboutPage;

export const Head = () => (
  <>
    <title>À propos</title>
    <meta description="Une page à propos de Fiona Roux, son parcours et ses méthodes de travail"></meta>
  </>
);
