import { PrismaClient } from "@prisma/client"
import { hash } from "bcryptjs"

const prisma = new PrismaClient()

async function main() {
  console.log("Starting seed...")

  // Create admin user
  const adminEmail = process.env.ADMIN_EMAIL || "admin@talesofbrusshell.org"
  const adminPassword = process.env.ADMIN_PASSWORD || "password123"

  const existingAdmin = await prisma.adminUser.findUnique({
    where: { email: adminEmail },
  })

  if (!existingAdmin) {
    const hashedPassword = await hash(adminPassword, 10)
    await prisma.adminUser.create({
      data: {
        email: adminEmail,
        passwordHash: hashedPassword,
        name: "Admin User",
      },
    })
    console.log(`Created admin user: ${adminEmail}`)
  } else {
    console.log("Admin user already exists")
  }

  // Ensure language exist
  const language = [
    { code: "en", name: "English", isDefault: true },
    { code: "fr", name: "Français", isDefault: false },
  ]

  for (const lang of language) {
    await prisma.language.upsert({
      where: { code: lang.code },
      update: {},
      create: lang,
    })
  }
  console.log("language set up")

  // Create event
  const events = [
    {
      slug: "beginners-dnd-night",
      imageUrl: "/placeholder.svg",
      eventDate: new Date("2025-05-15T19:00:00Z"),
      eventEndDate: new Date("2025-05-15T22:00:00Z"),
      location: "Community Center",
      address: "123 Main Street, Brussels, Belgium",
      capacity: 12,
      spotsLeft: 8,
      price: 15.0,
      priceMembers: 10.0,
      eventType: "one-shot",
      translations: [
        {
          languageCode : "en",
          title: "Beginner's D&D Night",
          description: "Perfect for first-time players",
          longDescription:
            "Join us for a beginner-friendly Dungeons & Dragons session where we'll guide you through character creation and your first adventure. All materials provided.",
          requirements: "No experience necessary. Just bring your imagination!",
          additionalInfo: "Snacks and drinks will be available for purchase.",
          instructorName: "Marc Dubois",
          instructorBio:
            "Marc has been running D&D games for over 10 years and specializes in introducing new players to the hobby.",
        },
        {
          languageCode : "fr",
          title: "Soirée D&D pour Débutants",
          description: "Parfait pour les joueurs débutants",
          longDescription:
            "Rejoignez-nous pour une session de Donjons et Dragons adaptée aux débutants où nous vous guiderons à travers la création de personnages et votre première aventure. Tout le matériel est fourni.",
          requirements: "Aucune expérience nécessaire. Apportez simplement votre imagination!",
          additionalInfo: "Des collations et des boissons seront disponibles à l'achat.",
          instructorName: "Marc Dubois",
          instructorBio:
            "Marc organise des jeux D&D depuis plus de 10 ans et est spécialisé dans l'introduction de nouveaux joueurs au hobby.",
        },
      ],
    },
    {
      slug: "miniature-painting-workshop",
      imageUrl: "/placeholder.svg",
      eventDate: new Date("2025-05-22T14:00:00Z"),
      eventEndDate: new Date("2025-05-22T17:00:00Z"),
      location: "Art Studio",
      address: "45 Rue de l'Art, Brussels, Belgium",
      capacity: 8,
      spotsLeft: 5,
      price: 25.0,
      priceMembers: 18.0,
      eventType: "workshop",
      translations: [
        {
          languageCode : "en",
          title: "Miniature Painting Workshop",
          description: "Learn basic techniques and take home your creation",
          longDescription:
            "This workshop covers the fundamentals of miniature painting, from priming to highlighting. You'll learn various techniques and leave with your own painted miniature.",
          requirements: "No experience needed. All materials provided.",
          additionalInfo: "Wear clothes that can get paint on them.",
          instructorName: "Sophie Laurent",
          instructorBio: "Sophie is an award-winning miniature painter with a passion for teaching beginners.",
        },
        {
          languageCode : "fr",
          title: "Atelier de Peinture de Figurines",
          description: "Apprenez les techniques de base et repartez avec votre création",
          longDescription:
            "Cet atelier couvre les fondamentaux de la peinture de figurines, de l'apprêt aux reflets. Vous apprendrez diverses techniques et repartirez avec votre propre figurine peinte.",
          requirements: "Aucune expérience nécessaire. Tout le matériel est fourni.",
          additionalInfo: "Portez des vêtements qui peuvent être tachés de peinture.",
          instructorName: "Sophie Laurent",
          instructorBio:
            "Sophie est une peintre de figurines primée avec une passion pour l'enseignement aux débutants.",
        },
      ],
    },
    {
      slug: "forgotten-realms-campaign",
      imageUrl: "/placeholder.svg",
      eventDate: new Date("2025-06-01T18:30:00Z"),
      eventEndDate: new Date("2025-06-01T22:30:00Z"),
      location: "Game Store",
      address: "78 Gaming Street, Brussels, Belgium",
      capacity: 6,
      spotsLeft: 2,
      price: 20.0,
      priceMembers: 12.0,
      eventType: "campaign",
      translations: [
        {
          languageCode : "en",
          title: "Campaign Launch: Tales of Bruss'hell",
          description: "Join our new 6-month campaign",
          longDescription:
            "Embark on an epic adventure through the magical realm of Bruss'hell. This campaign will run for 6 months with bi-weekly sessions. Perfect for players with some D&D experience.",
          requirements: "Basic understanding of D&D 5e rules. Character sheets will be created in session zero.",
          additionalInfo: "Campaign book available for purchase at 15% discount for participants.",
          instructorName: "Thomas Janssens",
          instructorBio: "Thomas has been a DM for 15 years and has run over 20 successful campaigns.",
        },
        {
          languageCode : "fr",
          title: "Lancement de Campagne: Contes de Bruss'hell",
          description: "Rejoignez notre nouvelle campagne de 6 mois",
          longDescription:
            "Embarquez pour une aventure épique à travers le royaume magique de Bruss'hell. Cette campagne durera 6 mois avec des sessions bimensuelles. Parfait pour les joueurs ayant une certaine expérience de D&D.",
          requirements:
            "Compréhension de base des règles de D&D 5e. Les fiches de personnage seront créées lors de la session zéro.",
          additionalInfo: "Livre de campagne disponible à l'achat avec 15% de réduction pour les participants.",
          instructorName: "Thomas Janssens",
          instructorBio: "Thomas est MJ depuis 15 ans et a dirigé plus de 20 campagnes réussies.",
        },
      ],
    },
  ]

  for (const event of events) {
    const { translations, ...eventData } = event

    const existingEvent = await prisma.event.findUnique({
      where: { slug: event.slug },
    })

    if (!existingEvent) {
      const createdEvent = await prisma.event.create({
        data: {
          ...eventData,
          createdBy: {
            connect: {
              id: 1, // or the appropriate property for your AdminUser
            },
          },
        },
      })

      for (const translation of translations) {
        await prisma.eventTranslation.create({
          data: {
            ...translation,
            eventId : createdEvent.id,
          },
        })
      }

      console.log(`Created event: ${event.slug}`)
    } else {
      console.log(`Event ${event.slug} already exists`)
    }
  }

  // Create blog posts
  const blogPosts = [
    {
      slug: "tips-for-new-dungeon-masters",
      imageUrl: "/placeholder.svg",
      publishedAt: new Date("2025-04-28T10:00:00Z"),
      isPublished: true,
      readTime: 5,
      category: "guides",
      translations: [
        {
          languageCode : "en",
          title: "5 Tips for New Game Masters",
          description:
            "Starting your journey as a Game Master can be intimidating. Here are five essential tips to help you create memorable experiences for your players.",
          content: `
# 5 Tips for New Game Masters

Starting your journey as a Game Master can be intimidating. Here are five essential tips to help you create memorable experiences for your players.

## 1. Start Small

Don't try to create an entire world at once. Begin with a small village or town and expand as your campaign progresses. This allows you to focus on creating detailed, interesting locations and NPCs without feeling overwhelmed.

## 2. Embrace Improvisation

No matter how much you prepare, players will always do something unexpected. Learn to improvise and adapt to their choices. Remember, it's their story too!

## 3. Use Session Zero

Before starting your campaign, have a "Session Zero" where everyone discusses expectations, boundaries, and character concepts. This ensures everyone is on the same page and helps prevent conflicts later.

## 4. Steal Shamelessly

You don't need to create everything from scratch. Borrow ideas from books, movies, video games, and other campaigns. Just make sure to adapt them to fit your world and your players' interests.

## 5. Have Fun

The most important rule is to have fun. If you're enjoying yourself, your players probably are too. Don't stress about getting every rule right or creating the perfect story. Focus on creating an enjoyable experience for everyone at the table.
          `,
        },
        {
          languageCode : "fr",
          title: "5 Conseils pour les Nouveaux Maîtres du Jeu",
          description:
            "Débuter en tant que Maître du Jeu peut être intimidant. Voici cinq conseils essentiels pour vous aider à créer des expériences mémorables pour vos joueurs.",
          content: `
# 5 Conseils pour les Nouveaux Maîtres du Jeu

Débuter en tant que Maître du Jeu peut être intimidant. Voici cinq conseils essentiels pour vous aider à créer des expériences mémorables pour vos joueurs.

## 1. Commencez Petit

N'essayez pas de créer un monde entier d'un coup. Commencez par un petit village ou une ville et élargissez au fur et à mesure que votre campagne progresse. Cela vous permet de vous concentrer sur la création de lieux et de PNJ détaillés et intéressants sans vous sentir dépassé.

## 2. Adoptez l'Improvisation

Peu importe à quel point vous vous préparez, les joueurs feront toujours quelque chose d'inattendu. Apprenez à improviser et à vous adapter à leurs choix. Rappelez-vous, c'est aussi leur histoire !

## 3. Utilisez la Session Zéro

Avant de commencer votre campagne, organisez une "Session Zéro" où tout le monde discute des attentes, des limites et des concepts de personnages. Cela garantit que tout le monde est sur la même longueur d'onde et aide à prévenir les conflits ultérieurs.

## 4. Empruntez Sans Honte

Vous n'avez pas besoin de tout créer à partir de zéro. Empruntez des idées de livres, de films, de jeux vidéo et d'autres campagnes. Assurez-vous simplement de les adapter pour qu'elles correspondent à votre monde et aux intérêts de vos joueurs.

## 5. Amusez-vous

La règle la plus importante est de s'amuser. Si vous vous amusez, vos joueurs le font probablement aussi. Ne stressez pas pour appliquer chaque règle correctement ou créer l'histoire parfaite. Concentrez-vous sur la création d'une expérience agréable pour tous à la table.
          `,
        },
      ],
    },
    {
      slug: "choosing-first-miniature-painting-set",
      imageUrl: "/placeholder.svg",
      publishedAt: new Date("2025-04-15T14:30:00Z"),
      isPublished: true,
      readTime: 8,
      category: "hobbies",
      translations: [
        {
          languageCode : "en",
          title: "Miniature Painting: Choosing Your First Set",
          description:
            "With so many options available, selecting your first miniature painting set can be overwhelming. This guide will help you make informed choices.",
          content: `
# Miniature Painting: Choosing Your First Set

With so many options available, selecting your first miniature painting set can be overwhelming. This guide will help you make informed choices.

## Essential Supplies

### Paints

For beginners, I recommend starting with a basic set of acrylic paints specifically designed for miniatures. Brands like Vallejo, Citadel, and Army Painter offer starter sets with essential colors. Look for a set that includes:

- Black and white
- Primary colors (red, blue, yellow)
- A few earth tones (brown, tan)
- Metallic silver and gold

### Brushes

You'll need at least three brushes to start:
- A small detail brush (size 0 or 00)
- A standard brush (size 1 or 2)
- A larger brush for basecoating (size 4 or 6)

Synthetic brushes are more affordable and work well for beginners.

### Other Essentials

- Primer (gray or black)
- Palette (a ceramic tile works well)
- Water pot
- Paper towels
- Good lighting

## Optional but Helpful

- Wet palette (keeps paint from drying out)
- Magnifying lamp
- Brush soap for cleaning
- Mini holder or handle

## Where to Buy

Local game stores often carry painting supplies, but online retailers like Amazon or specialized hobby sites may offer better prices. Consider starting with an all-in-one beginner's kit if you're unsure.

## Final Advice

Don't feel pressured to buy everything at once. Start with the basics and add to your collection as you develop your skills and discover your preferred painting style.
          `,
        },
        {
          languageCode : "fr",
          title: "Peinture de Figurines: Choisir Votre Premier Set",
          description:
            "Avec tant d'options disponibles, sélectionner votre premier set de peinture pour figurines peut être accablant. Ce guide vous aidera à faire des choix éclairés.",
          content: `
# Peinture de Figurines: Choisir Votre Premier Set

Avec tant d'options disponibles, sélectionner votre premier set de peinture pour figurines peut être accablant. Ce guide vous aidera à faire des choix éclairés.

## Fournitures Essentielles

### Peintures

Pour les débutants, je recommande de commencer avec un set basique de peintures acryliques spécifiquement conçues pour les figurines. Des marques comme Vallejo, Citadel et Army Painter proposent des sets de démarrage avec des couleurs essentielles. Recherchez un set qui comprend:

- Noir et blanc
- Couleurs primaires (rouge, bleu, jaune)
- Quelques tons terreux (marron, beige)
- Métalliques argent et or

### Pinceaux

Vous aurez besoin d'au moins trois pinceaux pour commencer:
- Un pinceau à détails (taille 0 ou 00)
- Un pinceau standard (taille 1 ou 2)
- Un pinceau plus grand pour la sous-couche (taille 4 ou 6)

Les pinceaux synthétiques sont plus abordables et conviennent bien aux débutants.

### Autres Essentiels

- Apprêt (gris ou noir)
- Palette (une tuile en céramique fonctionne bien)
- Pot d'eau
- Essuie-tout
- Bon éclairage

## Optionnel mais Utile

- Palette humide (empêche la peinture de sécher)
- Lampe grossissante
- Savon pour pinceaux
- Support ou poignée pour figurines

## Où Acheter

Les magasins de jeux locaux proposent souvent des fournitures de peinture, mais les détaillants en ligne comme Amazon ou les sites spécialisés dans le hobby peuvent offrir de meilleurs prix. Envisagez de commencer avec un kit tout-en-un pour débutants si vous n'êtes pas sûr.

## Conseil Final

Ne vous sentez pas obligé d'acheter tout d'un coup. Commencez avec les bases et complétez votre collection au fur et à mesure que vous développez vos compétences et découvrez votre style de peinture préféré.
          `,
        },
      ],
    },
  ]

  for (const post of blogPosts) {
    const { translations, ...postData } = post

    const existingPost = await prisma.blogPost.findUnique({
      where: { slug: post.slug },
    })

    if (!existingPost) {
      const createdPost = await prisma.blogPost.create({
        data: {
          ...postData,
          authorId: 1, // Assuming the admin user has ID 1
        },
      })

      for (const translation of translations) {
        await prisma.blogPostTranslation.create({
          data: {
            ...translation,
            blogPostId: createdPost.id,
          },
        })
      }

      console.log(`Created blog post: ${post.slug}`)
    } else {
      console.log(`Blog post ${post.slug} already exists`)
    }
  }

  // Create website settings
  const settings = [
    { settingKey : "contact_email", settingValue: "info@talesofbrusshell.org" },
    { settingKey : "contact_phone", settingValue: "+32 123 456 789" },
    { settingKey : "contact_address", settingValue: "Community Center, 123 Main Street, Brussels, Belgium" },
    { settingKey : "facebook_url", settingValue: "https://facebook.com/talesofbrusshell" },
    { settingKey : "instagram_url", settingValue: "https://instagram.com/talesofbrusshell" },
    { settingKey : "twitter_url", settingValue: "https://twitter.com/talesofbrusshell" },
    { settingKey : "discord_url", settingValue: "https://discord.gg/talesofbrusshell" },
  ]

  for (const setting of settings) {
    await prisma.websiteSetting.upsert({
      where: { settingKey : setting.settingKey  },
      update: { settingValue: setting.settingValue },
      create: setting,
    })
  }
  console.log("Website settings created")

  console.log("Seed completed successfully!")
}

main()
  .catch((e) => {
    console.error("Error during seeding:", e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
