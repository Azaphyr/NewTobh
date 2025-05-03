import { cache } from "react"
import type { Locale } from "@/lib/i18n/locales"
import { defaultLocale } from "@/lib/i18n/locales"

export { defaultLocale, type Locale }

export type Dictionary = {
  common: {
    home: string
    about: string
    events: string
    membership: string
    blog: string
    contact: string
    joinUs: string
    languageSelection: string
    selectLanguage: string
    continue: string
    cookieMessage: string
    learnMore: string
    accept: string
    decline: string
    privacyPolicy: string
    termsOfService: string
    accessibility: string
    blogDescription: string
    searchArticles: string
    all: string
    gameMastering: string
    characterBuilding: string
    miniaturePainting: string
    storytelling: string
    community: string
    featuredArticle: string
    minRead: string
    readArticle: string
    latestArticles: string
    readMore: string
    noBlogPosts: string
    blogPost: string
  }
  admin: {
    dashboard: string
    events: string
    blog: string
    members: string
    contacts: string
    settings: string
    logout: string
  }
}

export const getDictionary = cache(async (locale: Locale): Promise<Dictionary> => {
  const dictionaries: Record<Locale, Dictionary> = {
    en: {
      common: {
        home: "Home",
        about: "About",
        events: "Events",
        membership: "Membership",
        blog: "Blog",
        contact: "Contact",
        joinUs: "Join Us",
        languageSelection: "Language Selection",
        selectLanguage: "Please select your preferred language",
        continue: "Continue",
        cookieMessage: "We use cookies to enhance your experience...",
        learnMore: "Learn more",
        accept: "Accept",
        decline: "Decline",
        privacyPolicy: "Privacy Policy",
        termsOfService: "Terms of Service",
        accessibility: "Accessibility",
        blogDescription: "Tips, stories, and insights from our community.",
        searchArticles: "Search articles...",
        all: "All",
        gameMastering: "Game Mastering",
        characterBuilding: "Character Building",
        miniaturePainting: "Miniature Painting",
        storytelling: "Storytelling",
        community: "Community",
        featuredArticle: "Featured Article",
        minRead: "min read",
        readArticle: "Read Article",
        latestArticles: "Latest Articles",
        readMore: "Read More",
        noBlogPosts: "No blog posts found.",
        blogPost: "Blog Post",
      },
      admin: {
        dashboard: "Dashboard",
        events: "Events",
        blog: "Blog Posts",
        members: "Members",
        contacts: "Contact Submissions",
        settings: "Settings",
        logout: "Log Out",
      },
    },
    fr: {
      common: {
        home: "Accueil",
        about: "À propos",
        events: "Événements",
        membership: "Adhésion",
        blog: "Blog",
        contact: "Contact",
        joinUs: "Rejoignez-nous",
        languageSelection: "Sélection de la langue",
        selectLanguage: "Veuillez sélectionner votre langue préférée",
        continue: "Continuer",
        cookieMessage: "Nous utilisons des cookies pour améliorer votre expérience...",
        learnMore: "En savoir plus",
        accept: "Accepter",
        decline: "Refuser",
        privacyPolicy: "Politique de confidentialité",
        termsOfService: "Conditions d'utilisation",
        accessibility: "Accessibilité",
        blogDescription: "Conseils, histoires et idées de notre communauté.",
        searchArticles: "Rechercher des articles...",
        all: "Tous",
        gameMastering: "Maîtrise du jeu",
        characterBuilding: "Création de personnages",
        miniaturePainting: "Peinture de figurines",
        storytelling: "Narration",
        community: "Communauté",
        featuredArticle: "Article à la une",
        minRead: "min de lecture",
        readArticle: "Lire l'article",
        latestArticles: "Derniers articles",
        readMore: "Lire la suite",
        noBlogPosts: "Aucun article trouvé.",
        blogPost: "Article de blog",
      },
      admin: {
        dashboard: "Tableau de bord",
        events: "Événements",
        blog: "Articles de blog",
        members: "Membres",
        contacts: "Soumissions de contact",
        settings: "Paramètres",
        logout: "Déconnexion",
      },
    },
  }

  return dictionaries[locale]
})
