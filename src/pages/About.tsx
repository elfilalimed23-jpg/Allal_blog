import React from 'react';
import { Heart, BookOpen, Users, Clock, Target, Award } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="flex justify-center mb-6">
          <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full">
            <Heart className="h-8 w-8 text-blue-600 dark:text-blue-400" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          À propos de Blog Mémoires
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
          Un espace dédié à la préservation et au partage des souvenirs précieux 
          qui façonnent notre histoire commune et personnelle.
        </p>
      </div>

      {/* Mission Statement */}
      <section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm mb-12">
        <div className="flex items-center mb-6">
          <Target className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Notre mission</h2>
        </div>
        <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300" style={{ fontSize: '19px', lineHeight: '1.8', maxWidth: '70ch' }}>
          <p>
            Blog Mémoires est né de la conviction que chaque souvenir, chaque histoire personnelle, 
            chaque témoignage contribue à tisser la riche tapisserie de notre humanité commune. 
            Dans un monde où tout s'accélère, nous croyons en l'importance de prendre le temps 
            de préserver ces moments précieux qui risquent de s'effacer.
          </p>
          <p>
            Notre plateforme offre un espace bienveillant où les mémoires individuelles 
            deviennent des trésors partagés. Que ce soit les souvenirs d'enfance dans un village, 
            les recettes secrètes d'une grand-mère, ou les lettres d'amour qui ont traversé 
            les épreuves de l'histoire, chaque récit trouve ici sa place et sa valeur.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Nos valeurs fondamentales
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
            <div className="flex items-center mb-4">
              <BookOpen className="h-6 w-6 text-green-600 dark:text-green-400 mr-3" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Authenticité</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              Nous privilégions les récits authentiques et sincères, sans artifice ni embellissement. 
              Chaque histoire, quelle que soit sa simplicité, porte en elle une vérité humaine précieuse.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
            <div className="flex items-center mb-4">
              <Users className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Partage intergénérationnel</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              Nous créons des ponts entre les générations, permettant aux plus jeunes 
              de découvrir l'histoire de leurs aînés et aux plus âgés de transmettre leur sagesse.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
            <div className="flex items-center mb-4">
              <Heart className="h-6 w-6 text-red-500 dark:text-red-400 mr-3" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Bienveillance</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              Nous cultivons un environnement respectueux où chaque personne se sent 
              en sécurité pour partager ses souvenirs les plus intimes et personnels.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
            <div className="flex items-center mb-4">
              <Clock className="h-6 w-6 text-orange-500 dark:text-orange-400 mr-3" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Préservation</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              Nous nous engageons à préserver durablement ces témoignages pour les générations 
              futures, créant une bibliothèque vivante de la mémoire collective.
            </p>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 rounded-xl p-8 text-white mb-12">
        <div className="flex items-center mb-6">
          <Award className="h-6 w-6 mr-3" />
          <h2 className="text-2xl font-bold">Notre approche</h2>
        </div>
        <div className="prose prose-lg max-w-none text-blue-100" style={{ fontSize: '19px', lineHeight: '1.8', maxWidth: '70ch' }}>
          <p>
            Nous avons conçu ce blog avec une attention particulière à l'accessibilité 
            et au confort de lecture. La typographie généreuse, l'interligne aéré, 
            et les contrastes soignés garantissent une expérience de lecture agréable 
            pour tous, y compris nos lecteurs seniors.
          </p>
          <p>
            Le mode sombre automatique s'adapte aux préférences de chacun, 
            et la navigation intuitive permet de découvrir facilement les récits 
            par catégorie, par époque, ou grâce à notre fonction de recherche avancée.
          </p>
        </div>
      </section>

      {/* Team/Contact */}
      <section className="text-center bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Une aventure collaborative
        </h2>
        <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300 mx-auto" style={{ fontSize: '19px', lineHeight: '1.8', maxWidth: '70ch' }}>
          <p>
            Blog Mémoires est plus qu'un simple site web : c'est une communauté 
            de personnes qui croient en la valeur des souvenirs partagés. 
            Chaque contributeur, chaque lecteur, chaque personne qui partage 
            un récit participe à cette belle aventure humaine.
          </p>
          <p>
            Si vous souhaitez contribuer en partageant vos propres souvenirs, 
            ou si vous avez des questions sur notre démarche, 
            n'hésitez pas à nous contacter. Nous serons ravis d'échanger avec vous.
          </p>
        </div>
        <div className="mt-8">
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            <Heart className="h-5 w-5 mr-2" />
            Nous contacter
          </a>
        </div>
      </section>
    </div>
  );
};