import React from 'react';
import { Scale, Shield, Mail, Phone } from 'lucide-react';

export const LegalNotice: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-6">
          <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full">
            <Scale className="h-8 w-8 text-blue-600 dark:text-blue-400" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Mentions légales
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
          Informations légales concernant le site Blog Mémoires
        </p>
      </div>

      <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300" style={{ fontSize: '19px', lineHeight: '1.8' }}>
        {/* Identification */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm mb-8">
          <div className="flex items-center mb-6">
            <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Identification du site</h2>
          </div>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Éditeur du site</h3>
              <p>
                <strong>Nom :</strong> Blog Mémoires<br />
                <strong>Adresse :</strong> 123 Rue des Souvenirs, 75001 Paris, France<br />
                <strong>Email :</strong> contact@blog-memoires.fr<br />
                <strong>Téléphone :</strong> 01 23 45 67 89
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Directeur de publication</h3>
              <p>Marie Dubois</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Hébergeur</h3>
              <p>
                <strong>Nom :</strong> OVH SAS<br />
                <strong>Adresse :</strong> 2 rue Kellermann, 59100 Roubaix, France<br />
                <strong>Téléphone :</strong> 09 72 10 10 07
              </p>
            </div>
          </div>
        </section>

        {/* Propriété intellectuelle */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm mb-8">
          <div className="flex items-center mb-6">
            <Shield className="h-6 w-6 text-green-600 dark:text-green-400 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Propriété intellectuelle</h2>
          </div>
          
          <div className="space-y-4">
            <p>
              L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. 
              Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
            </p>

            <p>
              La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite 
              sauf autorisation expresse du directeur de la publication.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Contenus des utilisateurs</h3>
            <p>
              Les témoignages et récits partagés sur ce site restent la propriété intellectuelle de leurs auteurs respectifs. 
              En soumettant un contenu, l'auteur accorde au site Blog Mémoires une licence non exclusive pour publier, 
              reproduire et diffuser ce contenu dans le cadre de la mission du site.
            </p>
          </div>
        </section>

        {/* Protection des données */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Protection des données personnelles</h2>
          
          <div className="space-y-4">
            <p>
              Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi "Informatique et Libertés" 
              du 6 janvier 1978, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition 
              aux données personnelles vous concernant.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Collecte des données</h3>
            <p>
              Les données personnelles collectées sur ce site sont uniquement celles que vous nous transmettez volontairement 
              via les formulaires de contact. Ces données ne sont utilisées que pour répondre à vos demandes 
              et ne sont jamais transmises à des tiers.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Cookies</h3>
            <p>
              Ce site utilise uniquement des cookies techniques nécessaires à son bon fonctionnement et à la sauvegarde 
              de vos préférences (mode sombre, etc.). Aucun cookie de tracking ou publicitaire n'est utilisé.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Exercer vos droits</h3>
            <p>
              Pour exercer vos droits concernant vos données personnelles, vous pouvez nous contacter à l'adresse suivante : 
              <a href="mailto:privacy@blog-memoires.fr" className="text-blue-600 dark:text-blue-400 hover:underline">
                privacy@blog-memoires.fr
              </a>
            </p>
          </div>
        </section>

        {/* Responsabilité */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Responsabilité</h2>
          
          <div className="space-y-4">
            <p>
              Les informations contenues sur ce site sont aussi précises que possible et le site remis à jour à différentes périodes de l'année, 
              mais peut toutefois contenir des inexactitudes ou des omissions.
            </p>

            <p>
              Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien vouloir le signaler par email 
              en décrivant le problème de la manière la plus précise possible.
            </p>

            <p>
              Blog Mémoires ne pourra être tenu responsable de dommages matériels liés à l'utilisation du site. 
              De plus, l'utilisateur du site s'engage à accéder au site en utilisant un matériel récent, 
              ne contenant pas de virus et avec un navigateur de dernière génération mis-à-jour.
            </p>
          </div>
        </section>

        {/* Liens hypertextes */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Liens hypertextes</h2>
          
          <div className="space-y-4">
            <p>
              Les liens hypertextes mis en place dans le cadre du présent site web en direction d'autres ressources 
              présentes sur le réseau Internet ne sauraient engager la responsabilité de Blog Mémoires.
            </p>

            <p>
              De même, Blog Mémoires ne peut être tenu responsable du contenu des sites qui auraient un lien vers le présent site.
            </p>

            <p>
              La création de liens vers nos pages est libre, sous réserve de ne pas porter atteinte à l'image du site 
              et de mentionner clairement la source.
            </p>
          </div>
        </section>

        {/* Droit applicable */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Droit applicable et attribution de juridiction</h2>
          
          <div className="space-y-4">
            <p>
              Tout litige en relation avec l'utilisation du site Blog Mémoires est soumis au droit français. 
              Il est fait attribution exclusive de juridiction aux tribunaux compétents de Paris.
            </p>

            <p className="text-sm text-gray-500 dark:text-gray-400">
              <strong>Dernière mise à jour :</strong> 15 janvier 2024
            </p>
          </div>
        </section>

        {/* Contact */}
        <div className="text-center mt-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Une question sur nos mentions légales ?</h2>
          <p className="text-xl text-blue-100 mb-6">
            N'hésitez pas à nous contacter pour toute clarification.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-white text-blue-600 text-lg font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            <Phone className="h-5 w-5 mr-2" />
            Nous contacter
          </a>
        </div>
      </div>
    </div>
  );
};