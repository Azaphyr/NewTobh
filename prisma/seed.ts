import { PrismaClient, Prisma } from '../src/app/generated/prisma'
import { hash } from "bcryptjs"

const prisma = new PrismaClient()

async function main() {
  console.log("Starting seed...")

  // Create admin user
  const adminPassword = process.env.ADMIN_PASSWORD || "admin123"
  const hashedPassword = await hash(adminPassword, 10)

  const admin = await prisma.adminUser.upsert({
    where: { email: process.env.ADMIN_EMAIL || "admin@talesofbrusshell.org" },
    update: {},
    create: {
      email: process.env.ADMIN_EMAIL || "admin@talesofbrusshell.org",
      name: "Admin User",
      passwordHash: hashedPassword,
    },
  })

  console.log(`Created admin user: ${admin.email}`)

  // Make sure languages exist
  await prisma.language.upsert({
    where: { code: "en" },
    update: { isDefault: true },
    create: { code: "en", name: "English", isDefault: true },
  })

  await prisma.language.upsert({
    where: { code: "fr" },
    update: { isDefault: false },
    create: { code: "fr", name: "Français", isDefault: false },
  })

  console.log("Languages set up")

  // Create sample events
  const events = [
    {
      slug: "beginners-dnd-night",
      imageUrl: "/placeholder.svg?height=500&width=1000",
      eventDate: new Date("2025-05-15T19:00:00"),
      eventEndDate: new Date("2025-05-15T22:00:00"),
      location: "Community Center",
      address: "123 Main Street, Brussels, Belgium",
      capacity: 12,
      spotsLeft: 5,
      price: 10,
      priceMembers: 8,
      eventType: "One-Shot",
      createdById: admin.id,
      translations: [
        {
          languageCode: "en",
          title: "Beginner's D&D Night",
          description: "Perfect for first-time players",
          longDescription:
            "Join us for a special evening designed for those new to Dungeons & Dragons. Our experienced Dungeon Masters will guide you through character creation, basic rules, and a fun introductory adventure. All materials will be provided, just bring your imagination and a willingness to learn!",
          requirements: "No experience necessary. All materials provided.",
          additionalInfo:
            "Light refreshments will be available. Please arrive 15 minutes early if you need help creating a character.",
          instructorName: "Sarah Johnson",
          instructorBio: "Experienced Dungeon Master with a passion for introducing new players to the game.",
        },
        {
          languageCode: "fr",
          title: "Soirée D&D pour Débutants",
          description: "Parfait pour les joueurs novices",
          longDescription:
            "Rejoignez-nous pour une soirée spéciale conçue pour les nouveaux joueurs de Donjons et Dragons. Nos Maîtres du Donjon expérimentés vous guideront à travers la création de personnages, les règles de base et une aventure d'introduction amusante. Tout le matériel sera fourni, apportez simplement votre imagination et votre volonté d'apprendre !",
          requirements: "Aucune expérience nécessaire. Tout le matériel est fourni.",
          additionalInfo:
            "Des rafraîchissements légers seront disponibles. Veuillez arriver 15 minutes à l'avance si vous avez besoin d'aide pour créer un personnage.",
          instructorName: "Sarah Johnson",
          instructorBio:
            "Maître du Donjon expérimentée avec une passion pour l'introduction de nouveaux joueurs au jeu.",
        },
      ],
    },
    {
      slug: "miniature-painting-workshop",
      imageUrl: "/placeholder.svg?height=500&width=1000",
      eventDate: new Date("2025-05-22T14:00:00"),
      eventEndDate: new Date("2025-05-22T17:00:00"),
      location: "Art Studio",
      address: "45 Creative Avenue, Brussels, Belgium",
      capacity: 15,
      spotsLeft: 8,
      price: 25,
      priceMembers: 20,
      eventType: "Workshop",
      createdById: admin.id,
      translations: [
        {
          languageCode: "en",
          title: "Miniature Painting Workshop",
          description: "Learn basic techniques and take home your creation",
          longDescription:
            "This workshop will cover the fundamentals of miniature painting, from priming and basecoating to highlighting and detailing. Each participant will receive a miniature to paint and take home, along with guidance from our experienced painters. This workshop is suitable for beginners and those looking to improve their skills.",
          requirements:
            "No experience necessary. All materials provided, but feel free to bring your own brushes if you have them.",
          additionalInfo: "Wear clothes that you don't mind getting paint on, just in case!",
          instructorName: "Elena Rodriguez",
          instructorBio: "Award-winning miniature painter with 10 years of experience teaching workshops.",
        },
        {
          languageCode: "fr",
          title: "Atelier de Peinture de Figurines",
          description: "Apprenez les techniques de base et repartez avec votre création",
          longDescription:
            "Cet atelier couvrira les fondamentaux de la peinture de figurines, de l'apprêt et de la couche de base à la mise en valeur et aux détails. Chaque participant recevra une figurine à peindre et à emporter, ainsi que les conseils de nos peintres expérimentés. Cet atelier convient aux débutants et à ceux qui souhaitent améliorer leurs compétences.",
          requirements:
            "Aucune expérience nécessaire. Tout le matériel est fourni, mais n'hésitez pas à apporter vos propres pinceaux si vous en avez.",
          additionalInfo: "Portez des vêtements qui ne craignent pas les taches de peinture, juste au cas où !",
          instructorName: "Elena Rodriguez",
          instructorBio: "Peintre de figurines primée avec 10 ans d'expérience dans l'enseignement d'ateliers.",
        },
      ],
    },
    {
      slug: "forgotten-realms-campaign",
      imageUrl: "/placeholder.svg?height=500&width=1000",
      eventDate: new Date("2025-06-01T18:30:00"),
      eventEndDate: new Date("2025-06-01T22:30:00"),
      location: "Game Store",
      address: "78 Gamer Street, Brussels, Belgium",
      capacity: 6,
      spotsLeft: 2,
      price: 15,
      priceMembers: 12,
      eventType: "Campaign",
      createdById: admin.id,
      translations: [
        {
          languageCode: "en",
          title: "Campaign Launch: The Forgotten Realms",
          description: "Join our new 6-month campaign",
          longDescription:
            "Embark on an epic adventure in the legendary Forgotten Realms setting. This campaign will run for approximately 6 months, with sessions every two weeks. Players will create 3rd-level characters and journey through a story of intrigue, danger, and discovery. Some D&D experience is recommended but not required.",
          requirements:
            "Basic understanding of D&D 5e recommended. Players should have their own dice and Player's Handbook if possible.",
          additionalInfo:
            "This is a commitment to a 6-month campaign. Please only register if you can attend most sessions.",
          instructorName: "Thomas Dubois",
          instructorBio: "Veteran DM with over 15 years of experience running campaigns in various settings.",
        },
        {
          languageCode: "fr",
          title: "Lancement de Campagne : Les Royaumes Oubliés",
          description: "Rejoignez notre nouvelle campagne de 6 mois",
          longDescription:
            "Embarquez pour une aventure épique dans le cadre légendaire des Royaumes Oubliés. Cette campagne durera environ 6 mois, avec des sessions toutes les deux semaines. Les joueurs créeront des personnages de niveau 3 et voyageront à travers une histoire d'intrigue, de danger et de découverte. Une certaine expérience de D&D est recommandée mais pas obligatoire.",
          requirements:
            "Compréhension de base de D&D 5e recommandée. Les joueurs devraient avoir leurs propres dés et Manuel du Joueur si possible.",
          additionalInfo:
            "Il s'agit d'un engagement pour une campagne de 6 mois. Veuillez ne vous inscrire que si vous pouvez assister à la plupart des sessions.",
          instructorName: "Thomas Dubois",
          instructorBio:
            "MJ vétéran avec plus de 15 ans d'expérience dans l'animation de campagnes dans divers univers.",
        },
      ],
    },
  ]

  for (const eventData of events) {
    const { translations, ...eventDetails } = eventData

    // Check if event already exists
    const existingEvent = await prisma.event.findUnique({
      where: { slug: eventData.slug },
    })

    if (existingEvent) {
      console.log(`Event ${eventData.slug} already exists, skipping...`)
      continue
    }

    const event = await prisma.event.create({
      data: {
        ...eventDetails,
        translations: {
          create: translations,
        },
      },
    })

    console.log(`Created event: ${event.slug}`)
  }

  // Create sample blog posts
  const blogPosts = [
    {
      slug: "tips-for-new-dungeon-masters",
      imageUrl: "/placeholder.svg?height=500&width=1000",
      isPublished: true,
      publishedAt: new Date("2025-04-28"),
      readTime: 5,
      category: "Dungeon Mastering",
      tags: ["D&D", "Tips", "Beginner", "DM Guide"],
      authorId: admin.id,
      translations: [
        {
          languageCode: "en",
          title: "5 Tips for New Dungeon Masters",
          description:
            "Starting your journey as a Dungeon Master can be intimidating. Here are five essential tips to help you create memorable experiences for your players.",
          content: `
            <p>So you've decided to take the plunge and become a Dungeon Master. Congratulations! Being a DM is one of the most rewarding experiences in tabletop gaming, but it can also feel overwhelming at first. Here are five essential tips to help you get started on the right foot.</p>
            
            <h2>1. Start Small</h2>
            <p>Many new DMs make the mistake of trying to create an entire world with complex political systems, religions, and histories before running their first game. While worldbuilding is fun, it's better to start with a small village or town and a simple adventure. This allows you to focus on mastering the basic rules and developing your storytelling skills without getting overwhelmed.</p>
            <p>Consider running a pre-written adventure for your first few sessions. These adventures are designed by experienced game designers and provide a solid structure to build upon.</p>
            
            <h2>2. Know the Rules, but Don't Be Ruled by Them</h2>
            <p>Understanding the basic rules of the game is important, but don't feel like you need to memorize the entire rulebook before your first session. Focus on the core mechanics: ability checks, combat, and saving throws. Keep a rulebook handy for reference, and don't be afraid to look things up during the game.</p>
            <p>Remember that the rules are guidelines, not strict laws. If a rule is slowing down the game or getting in the way of fun, it's okay to make a ruling on the spot and look up the official rule later.</p>
            
            <h2>3. Embrace Improvisation</h2>
            <p>No matter how much you prepare, your players will inevitably do something unexpected. This is part of the fun of D&D! Instead of trying to force players back onto your planned path, learn to adapt and improvise.</p>
            <p>Keep a list of random names, locations, and encounters that you can pull from when needed. Practice saying "Yes, and..." to player ideas, building upon their creativity rather than shutting it down.</p>
            
            <h2>4. Focus on Fun, Not Perfection</h2>
            <p>Many new DMs put immense pressure on themselves to create the perfect game. Remember that D&D is a collaborative storytelling experience, and everyone at the table contributes to the fun. Your job is to facilitate an enjoyable experience, not to perform flawlessly.</p>
            <p>After each session, ask your players what they enjoyed and what they'd like to see more of. This feedback will help you improve while reminding you that the goal is for everyone to have fun.</p>
            
            <h2>5. Take Care of Yourself</h2>
            <p>Being a DM requires mental and emotional energy. It's important to set boundaries and take care of yourself. Schedule breaks during long sessions, have water and snacks available, and don't be afraid to end a session early if you're feeling drained.</p>
            <p>Remember that it's okay to say no to player requests that would make you uncomfortable or that would disrupt the game. Your enjoyment matters too!</p>
            
            <h2>Conclusion</h2>
            <p>Becoming a skilled Dungeon Master takes time and practice. Be patient with yourself, learn from each session, and remember that the goal is for everyone—including you—to have fun. With these tips in mind, you're well on your way to creating memorable adventures for your players.</p>
            
            <p>Happy gaming!</p>
          `,
        },
        {
          languageCode: "fr",
          title: "5 Conseils pour les Nouveaux Maîtres du Donjon",
          description:
            "Débuter en tant que Maître du Donjon peut être intimidant. Voici cinq conseils essentiels pour vous aider à créer des expériences mémorables pour vos joueurs.",
          content: `
            <p>Vous avez décidé de vous lancer et de devenir Maître du Donjon. Félicitations ! Être MD est l'une des expériences les plus gratifiantes dans les jeux de rôle sur table, mais cela peut aussi sembler écrasant au début. Voici cinq conseils essentiels pour bien démarrer.</p>
            
            <h2>1. Commencez Petit</h2>
            <p>De nombreux nouveaux MD commettent l'erreur d'essayer de créer un monde entier avec des systèmes politiques complexes, des religions et des histoires avant de lancer leur première partie. Bien que la création de monde soit amusante, il est préférable de commencer avec un petit village ou une petite ville et une aventure simple. Cela vous permet de vous concentrer sur la maîtrise des règles de base et le développement de vos compétences de narration sans vous sentir dépassé.</p>
            <p>Envisagez de diriger une aventure préécrite pour vos premières sessions. Ces aventures sont conçues par des concepteurs de jeux expérimentés et fournissent une structure solide sur laquelle s'appuyer.</p>
            
            <h2>2. Connaissez les Règles, mais Ne Soyez Pas Gouverné par Elles</h2>
            <p>Comprendre les règles de base du jeu est important, mais ne vous sentez pas obligé de mémoriser tout le livre de règles avant votre première session. Concentrez-vous sur les mécaniques principales : les tests de compétence, le combat et les jets de sauvegarde. Gardez un livre de règles à portée de main pour référence, et n'hésitez pas à chercher des informations pendant le jeu.</p>
            <p>Rappelez-vous que les règles sont des lignes directrices, pas des lois strictes. Si une règle ralentit le jeu ou entrave le plaisir, il est acceptable de prendre une décision sur le moment et de consulter la règle officielle plus tard.</p>
            
            <h2>3. Embrassez l'Improvisation</h2>
            <p>Peu importe à quel point vous vous préparez, vos joueurs feront inévitablement quelque chose d'inattendu. C'est une partie du plaisir de D&D ! Au lieu d'essayer de forcer les joueurs à revenir sur votre chemin planifié, apprenez à vous adapter et à improviser.</p>
            <p>Gardez une liste de noms, de lieux et de rencontres aléatoires que vous pouvez utiliser en cas de besoin. Pratiquez le "Oui, et..." aux idées des joueurs, en construisant sur leur créativité plutôt que de la rejeter.</p>
            
            <h2>4. Concentrez-vous sur le Plaisir, Pas sur la Perfection</h2>
            <p>De nombreux nouveaux MD se mettent une pression immense pour créer le jeu parfait. Rappelez-vous que D&D est une expérience de narration collaborative, et tout le monde à la table contribue au plaisir. Votre travail est de faciliter une expérience agréable, pas de performer parfaitement.</p>
            <p>Après chaque session, demandez à vos joueurs ce qu'ils ont apprécié et ce qu'ils aimeraient voir davantage. Ces retours vous aideront à vous améliorer tout en vous rappelant que l'objectif est que tout le monde s'amuse.</p>
            
            <h2>5. Prenez Soin de Vous</h2>
            <p>Être MD demande de l'énergie mentale et émotionnelle. Il est important d'établir des limites et de prendre soin de vous. Prévoyez des pauses pendant les longues sessions, ayez de l'eau et des collations à disposition, et n'hésitez pas à terminer une session plus tôt si vous vous sentez épuisé.</p>
            <p>Rappelez-vous qu'il est acceptable de dire non aux demandes des joueurs qui vous mettraient mal à l'aise ou qui perturberaient le jeu. Votre plaisir compte aussi !</p>
            
            <h2>Conclusion</h2>
            <p>Devenir un Maître du Donjon compétent prend du temps et de la pratique. Soyez patient avec vous-même, apprenez de chaque session, et rappelez-vous que l'objectif est que tout le monde—y compris vous—s'amuse. Avec ces conseils à l'esprit, vous êtes sur la bonne voie pour créer des aventures mémorables pour vos joueurs.</p>
            
            <p>Bon jeu !</p>
          `,
        },
      ],
    },
    {
      slug: "choosing-first-miniature-painting-set",
      imageUrl: "/placeholder.svg?height=500&width=1000",
      isPublished: true,
      publishedAt: new Date("2025-04-15"),
      readTime: 8,
      category: "Miniature Painting",
      tags: ["Miniatures", "Painting", "Beginner", "Equipment"],
      authorId: admin.id,
      translations: [
        {
          languageCode: "en",
          title: "Miniature Painting: Choosing Your First Set",
          description:
            "With so many options available, selecting your first miniature painting set can be overwhelming. This guide will help you make informed choices.",
          content: `
            <p>Entering the world of miniature painting can be both exciting and overwhelming. With countless brands, types of paints, brushes, and tools available, it's easy to feel lost when putting together your first painting set. This guide aims to simplify the process and help you make informed choices.</p>
            
            <h2>Understanding Paint Types</h2>
            <p>There are three main types of paints used for miniatures:</p>
            
            <h3>Acrylic Paints</h3>
            <p>These are the most common and beginner-friendly option. They're water-based, dry quickly, and are easy to clean up. Brands like Citadel, Vallejo, Army Painter, and Reaper are popular choices among miniature painters.</p>
            
            <h3>Oil Paints</h3>
            <p>Oil paints have a longer drying time, which allows for more blending and working time. However, they require solvents for cleanup and are generally more advanced.</p>
            
            <h3>Enamel Paints</h3>
            <p>These are solvent-based and create a hard, durable finish. They're less common for miniature painting due to their strong odor and cleanup requirements.</p>
            
            <p>For beginners, we recommend starting with acrylic paints. They're forgiving, versatile, and there are many resources available for learning techniques with acrylics.</p>
            
            <h2>Essential Colors for Beginners</h2>
            <p>You don't need to buy every color under the sun to get started. Here's a basic palette that will allow you to paint most miniatures:</p>
            
            <ul>
              <li>White</li>
              <li>Black</li>
              <li>Red</li>
              <li>Blue</li>
              <li>Yellow</li>
              <li>Green</li>
              <li>Brown</li>
              <li>Metallic Silver</li>
              <li>Metallic Gold</li>
              <li>Flesh tone (if painting humanoid figures)</li>
            </ul>
            
            <p>Many companies offer starter sets that include these basic colors. As you gain experience, you can expand your collection to include more specialized colors.</p>
            
            <h2>Choosing the Right Brushes</h2>
            <p>Quality brushes make a significant difference in your painting experience. For miniature painting, you'll want brushes with good points that hold their shape. Here are the essential brushes for beginners:</p>
            
            <ul>
              <li>Detail brush (size 0 or 00) for fine details</li>
              <li>Standard brush (size 1 or 2) for general painting</li>
              <li>Larger brush (size 4 or 6) for basecoating and drybrushing</li>
            </ul>
            
            <p>Look for brushes made with natural hair (like kolinsky sable) or quality synthetic fibers. While natural hair brushes are typically more expensive, they often provide better performance and longevity if properly cared for.</p>
            
            <h2>Essential Tools and Accessories</h2>
            <p>Beyond paints and brushes, here are some tools that will make your painting experience more enjoyable:</p>
            
            <ul>
              <li>Palette or wet palette for mixing paints</li>
              <li>Primer (white, black, or gray)</li>
              <li>Varnish (matte, satin, or gloss) for protecting your finished work</li>
              <li>Hobby knife for removing mold lines</li>
              <li>Fine grit sandpaper or files</li>
              <li>Good lighting (a desk lamp with a daylight bulb is ideal)</li>
              <li>Magnifying glass or headband magnifier for detailed work</li>
              <li>Brush soap for cleaning and maintaining your brushes</li>
            </ul>
            
            <h2>Recommended Starter Sets</h2>
            <p>If you prefer to buy a complete starter set rather than individual items, here are some excellent options:</p>
            
            <ul>
              <li>Reaper Learn to Paint Kit: Includes paints, brushes, and detailed instructions</li>
              <li>Army Painter Starter Set: Offers a good selection of paints and washes</li>
              <li>Vallejo Basic Colors Set: High-quality paints in dropper bottles</li>
              <li>Citadel Essentials Set: Great if you're painting Games Workshop miniatures</li>
            </ul>
            
            <h2>Where to Buy Your Supplies</h2>
            <p>You can find miniature painting supplies at:</p>
            
            <ul>
              <li>Local hobby and game stores</li>
              <li>Art supply stores (though they may not have miniature-specific products)</li>
              <li>Online retailers specializing in miniature hobbies</li>
              <li>General online marketplaces</li>
            </ul>
            
            <p>Shopping at local stores allows you to see products in person and often provides the opportunity to get advice from experienced staff.</p>
            
            <h2>Conclusion</h2>
            <p>Remember that miniature painting is a hobby meant to be enjoyed. Don't feel pressured to buy the most expensive supplies right away. Start with the basics, learn techniques, and gradually expand your collection as your skills and interests develop.</p>
            
            <p>Happy painting!</p>
          `,
        },
        {
          languageCode: "fr",
          title: "Peinture de Figurines : Choisir Votre Premier Set",
          description:
            "Avec tant d'options disponibles, sélectionner votre premier set de peinture de figurines peut être accablant. Ce guide vous aidera à faire des choix éclairés.",
          content: `
            <p>Entrer dans le monde de la peinture de figurines peut être à la fois excitant et accablant. Avec d'innombrables marques, types de peintures, pinceaux et outils disponibles, il est facile de se sentir perdu lors de la composition de votre premier set de peinture. Ce guide vise à simplifier le processus et à vous aider à faire des choix éclairés.</p>
            
            <h2>Comprendre les Types de Peinture</h2>
            <p>Il existe trois principaux types de peintures utilisées pour les figurines :</p>
            
            <h3>Peintures Acryliques</h3>
            <p>Ce sont les options les plus courantes et les plus adaptées aux débutants. Elles sont à base d'eau, sèchent rapidement et sont faciles à nettoyer. Des marques comme Citadel, Vallejo, Army Painter et Reaper sont des choix populaires parmi les peintres de figurines.</p>
            
            <h3>Peintures à l'Huile</h3>
            <p>Les peintures à l'huile ont un temps de séchage plus long, ce qui permet plus de mélange et de temps de travail. Cependant, elles nécessitent des solvants pour le nettoyage et sont généralement plus avancées.</p>
            
            <h3>Peintures Émail</h3>
            <p>Elles sont à base de solvant et créent une finition dure et durable. Elles sont moins courantes pour la peinture de figurines en raison de leur forte odeur et des exigences de nettoyage.</p>
            
            <p>Pour les débutants, nous recommandons de commencer avec des peintures acryliques. Elles sont indulgentes, polyvalentes, et il existe de nombreuses ressources disponibles pour apprendre les techniques avec les acryliques.</p>
            
            <h2>Couleurs Essentielles pour les Débutants</h2>
            <p>Vous n'avez pas besoin d'acheter toutes les couleurs sous le soleil pour commencer. Voici une palette de base qui vous permettra de peindre la plupart des figurines :</p>
            
            <ul>
              <li>Blanc</li>
              <li>Noir</li>
              <li>Rouge</li>
              <li>Bleu</li>
              <li>Jaune</li>
              <li>Vert</li>
              <li>Marron</li>
              <li>Argent Métallique</li>
              <li>Or Métallique</li>
              <li>Ton chair (si vous peignez des figures humanoïdes)</li>
            </ul>
            
            <p>De nombreuses entreprises proposent des sets de démarrage qui incluent ces couleurs de base. Au fur et à mesure que vous gagnez en expérience, vous pouvez élargir votre collection pour inclure des couleurs plus spécialisées.</p>
            
            <h2>Choisir les Bons Pinceaux</h2>
            <p>Des pinceaux de qualité font une différence significative dans votre expérience de peinture. Pour la peinture de figurines, vous voudrez des pinceaux avec de bonnes pointes qui gardent leur forme. Voici les pinceaux essentiels pour les débutants :</p>
            
            <ul>
              <li>Pinceau de détail (taille 0 ou 00) pour les détails fins</li>
              <li>Pinceau standard (taille 1 ou 2) pour la peinture générale</li>
              <li>Pinceau plus grand (taille 4 ou 6) pour la sous-couche et le brossage à sec</li>
            </ul>
            
            <p>Recherchez des pinceaux fabriqués avec des poils naturels (comme la martre kolinsky) ou des fibres synthétiques de qualité. Bien que les pinceaux à poils naturels soient généralement plus chers, ils offrent souvent de meilleures performances et longévité s'ils sont correctement entretenus.</p>
            
            <h2>Outils et Accessoires Essentiels</h2>
            <p>Au-delà des peintures et des pinceaux, voici quelques outils qui rendront votre expérience de peinture plus agréable :</p>
            
            <ul>
              <li>Palette ou palette humide pour mélanger les peintures</li>
              <li>Apprêt (blanc, noir ou gris)</li>
              <li>Vernis (mat, satiné ou brillant) pour protéger votre travail fini</li>
              <li>Couteau de modélisme pour enlever les lignes de moulage</li>
              <li>Papier de verre à grain fin ou limes</li>
              <li>Bon éclairage (une lampe de bureau avec une ampoule lumière du jour est idéale)</li>
              <li>Loupe ou loupe frontale pour les travaux détaillés</li>
              <li>Savon pour pinceaux pour nettoyer et entretenir vos pinceaux</li>
            </ul>
            
            <h2>Sets de Démarrage Recommandés</h2>
            <p>Si vous préférez acheter un set de démarrage complet plutôt que des articles individuels, voici quelques excellentes options :</p>
            
            <ul>
              <li>Reaper Learn to Paint Kit : Inclut des peintures, des pinceaux et des instructions détaillées</li>
              <li>Army Painter Starter Set : Offre une bonne sélection de peintures et de lavis</li>
              <li>Vallejo Basic Colors Set : Peintures de haute qualité dans des flacons compte-gouttes</li>
              <li>Citadel Essentials Set : Idéal si vous peignez des figurines Games Workshop</li>
            </ul>
            
            <h2>Où Acheter Vos Fournitures</h2>
            <p>Vous pouvez trouver des fournitures de peinture de figurines chez :</p>
            
            <ul>
              <li>Magasins locaux de loisirs et de jeux</li>
              <li>Magasins de fournitures d'art (bien qu'ils n'aient pas toujours des produits spécifiques pour figurines)</li>
              <li>Détaillants en ligne spécialisés dans les loisirs de figurines</li>
              <li>Places de marché en ligne générales</li>
            </ul>
            
            <p>Acheter dans des magasins locaux vous permet de voir les produits en personne et offre souvent l'opportunité d'obtenir des conseils de personnel expérimenté.</p>
            
            <h2>Conclusion</h2>
            <p>Rappelez-vous que la peinture de figurines est un loisir destiné à être apprécié. Ne vous sentez pas obligé d'acheter les fournitures les plus chères tout de suite. Commencez avec les bases, apprenez les techniques, et élargissez progressivement votre collection à mesure que vos compétences et intérêts se développent.</p>
            
            <p>Bonne peinture !</p>
          `,
        },
      ],
    },
  ]

  for (const postData of blogPosts) {
    const { translations, ...postDetails } = postData

    // Check if post already exists
    const existingPost = await prisma.blogPost.findUnique({
      where: { slug: postData.slug },
    })

    if (existingPost) {
      console.log(`Blog post ${postData.slug} already exists, skipping...`)
      continue
    }

    const post = await prisma.blogPost.create({
      data: {
        ...postDetails,
        translations: {
          create: translations,
        },
      },
    })

    console.log(`Created blog post: ${post.slug}`)
  }

  // Create website settings
  const settings = [
    { key: "contact_email", value: "info@talesofbrusshell.org" },
    { key: "contact_phone", value: "+32 123 456 789" },
    { key: "contact_address", value: "Community Center, 123 Main Street, Brussels, Belgium" },
    { key: "facebook_url", value: "https://facebook.com/talesofbrusshell" },
    { key: "twitter_url", value: "https://twitter.com/talesofbrusshell" },
    { key: "instagram_url", value: "https://instagram.com/talesofbrusshell" },
    { key: "discord_url", value: "https://discord.gg/talesofbrusshell" },
  ]

  for (const { key, value } of settings) {
    await prisma.websiteSetting.upsert({
      where: { settingKey: key },
      update: { settingValue: value },
      create: { settingKey: key, settingValue: value },
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
