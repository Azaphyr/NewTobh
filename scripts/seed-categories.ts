import { PrismaClient } from '../src/app/generated/prisma'

const prisma = new PrismaClient()

async function main() {
  const categories = [
    // Tabletop Games
    { id: 'clg1a2b3c4d5e6f7g8h9i0j1', slug: 'tabletop-games', nameEn: 'Tabletop Games', nameFr: 'Jeux de Société' },
    { id: 'clg2a3b4c5d6e7f8g9h0i1j2', slug: 'board-games', nameEn: 'Board Games', nameFr: 'Jeux de Plateau' },
    { id: 'clg3a4b5c6d7e8f9g0h1i2j3', slug: 'card-games', nameEn: 'Card Games', nameFr: 'Jeux de Cartes' },
    { id: 'clg4a5b6c7d8e9f0g1h2i3j4', slug: 'role-playing-games', nameEn: 'Role-Playing Games', nameFr: 'Jeux de Rôle' },
    { id: 'clg5a6b7c8d9e0f1g2h3i4j5', slug: 'war-games', nameEn: 'War Games', nameFr: 'Jeux de Guerre' },
    { id: 'clg6a7b8c9d0e1f2g3h4i5j6', slug: 'strategy-games', nameEn: 'Strategy Games', nameFr: 'Jeux de Stratégie' },
    { id: 'clg7a8b9c0d1e2f3g4h5i6j7', slug: 'party-games', nameEn: 'Party Games', nameFr: 'Jeux d\'Ambiance' },
    { id: 'clg8a9b0c1d2e3f4g5h6i7j8', slug: 'classic-games', nameEn: 'Classic Games', nameFr: 'Jeux Classiques' },
    { id: 'clg9a0b1c2d3e4f5g6h7i8j9', slug: 'cooperative-games', nameEn: 'Cooperative Games', nameFr: 'Jeux Coopératifs' },
    { id: 'clg0a1b2c3d4e5f6g7h8i9j0', slug: 'deck-building-games', nameEn: 'Deck Building Games', nameFr: 'Jeux de Construction de Deck' },

    // Miniature Painting & Modeling
    { id: 'clh1a2b3c4d5e6f7g8h9i0j1', slug: 'miniature-painting', nameEn: 'Miniature Painting & Modeling', nameFr: 'Peinture et Modélisme de Figurines' },
    { id: 'clh2a3b4c5d6e7f8g9h0i1j2', slug: 'fantasy-miniatures', nameEn: 'Fantasy Miniatures', nameFr: 'Figurines Fantastiques' },
    { id: 'clh3a4b5c6d7e8f9g0h1i2j3', slug: 'sci-fi-miniatures', nameEn: 'Sci-Fi Miniatures', nameFr: 'Figurines Science-Fiction' },
    { id: 'clh4a5b6c7d8e9f0g1h2i3j4', slug: 'historical-miniatures', nameEn: 'Historical Miniatures', nameFr: 'Figurines Historiques' },
    { id: 'clh5a6b7c8d9e0f1g2h3i4j5', slug: 'terrain-building', nameEn: 'Terrain Building', nameFr: 'Construction de Terrain' },
    { id: 'clh6a7b8c9d0e1f2g3h4i5j6', slug: 'dioramas', nameEn: 'Dioramas', nameFr: 'Dioramas' },
    { id: 'clh7a8b9c0d1e2f3g4h5i6j7', slug: 'scale-models', nameEn: 'Scale Models', nameFr: 'Maquettes' },
    { id: 'clh8a9b0c1d2e3f4g5h6i7j8', slug: 'warhammer', nameEn: 'Warhammer', nameFr: 'Warhammer' },
    { id: 'clh9a0b1c2d3e4f5g6h7i8j9', slug: 'dnd-miniatures', nameEn: 'D&D Miniatures', nameFr: 'Figurines D&D' },
    { id: 'clh0a1b2c3d4e5f6g7h8i9j0', slug: 'painting-techniques', nameEn: 'Painting Techniques', nameFr: 'Techniques de Peinture' },

    // Storytelling & Narrative
    { id: 'cli1a2b3c4d5e6f7g8h9i0j1', slug: 'storytelling', nameEn: 'Storytelling & Narrative', nameFr: 'Narration et Récit' },
    { id: 'cli2a3b4c5d6e7f8g9h0i1j2', slug: 'campaign-settings', nameEn: 'Campaign Settings', nameFr: 'Univers de Campagne' },
    { id: 'cli3a4b5c6d7e8f9g0h1i2j3', slug: 'character-creation', nameEn: 'Character Creation', nameFr: 'Création de Personnages' },
    { id: 'cli4a5b6c7d8e9f0g1h2i3j4', slug: 'world-building', nameEn: 'World Building', nameFr: 'Création d\'Univers' },
    { id: 'cli5a6b7c8d9e0f1g2h3i4j5', slug: 'adventure-modules', nameEn: 'Adventure Modules', nameFr: 'Modules d\'Aventure' },
    { id: 'cli6a7b8c9d0e1f2g3h4i5j6', slug: 'lore-development', nameEn: 'Lore Development', nameFr: 'Développement de l\'Univers' },
    { id: 'cli7a8b9c0d1e2f3g4h5i6j7', slug: 'narrative-techniques', nameEn: 'Narrative Techniques', nameFr: 'Techniques Narratives' },
    { id: 'cli8a9b0c1d2e3f4g5h6i7j8', slug: 'game-master-tips', nameEn: 'Game Master Tips', nameFr: 'Conseils pour Maîtres de Jeu' },
    { id: 'cli9a0b1c2d3e4f5g6h7i8j9', slug: 'player-guides', nameEn: 'Player Guides', nameFr: 'Guides du Joueur' },
    { id: 'cli0a1b2c3d4e5f6g7h8i9j0', slug: 'story-arcs', nameEn: 'Story Arcs', nameFr: 'Arcs Narratifs' },

    // Game Reviews
    { id: 'clj1a2b3c4d5e6f7g8h9i0j1', slug: 'game-reviews', nameEn: 'Game Reviews', nameFr: 'Critiques de Jeux' },
    { id: 'clj2a3b4c5d6e7f8g9h0i1j2', slug: 'board-game-reviews', nameEn: 'Board Game Reviews', nameFr: 'Critiques de Jeux de Plateau' },
    { id: 'clj3a4b5c6d7e8f9g0h1i2j3', slug: 'card-game-reviews', nameEn: 'Card Game Reviews', nameFr: 'Critiques de Jeux de Cartes' },
    { id: 'clj4a5b6c7d8e9f0g1h2i3j4', slug: 'rpg-reviews', nameEn: 'RPG Reviews', nameFr: 'Critiques de JDR' },
    { id: 'clj5a6b7c8d9e0f1g2h3i4j5', slug: 'miniature-game-reviews', nameEn: 'Miniature Game Reviews', nameFr: 'Critiques de Jeux de Figurines' },
    { id: 'clj6a7b8c9d0e1f2g3h4i5j6', slug: 'new-releases', nameEn: 'New Releases', nameFr: 'Nouvelles Sorties' },
    { id: 'clj7a8b9c0d1e2f3g4h5i6j7', slug: 'classic-reviews', nameEn: 'Classic Reviews', nameFr: 'Critiques de Classiques' },
    { id: 'clj8a9b0c1d2e3f4g5h6i7j8', slug: 'comparison-reviews', nameEn: 'Comparison Reviews', nameFr: 'Comparaisons de Jeux' },
    { id: 'clj9a0b1c2d3e4f5g6h7i8j9', slug: 'component-reviews', nameEn: 'Component Reviews', nameFr: 'Critiques de Composants' },
    { id: 'clj0a1b2c3d4e5f6g7h8i9j0', slug: 'kickstarter-reviews', nameEn: 'Kickstarter Reviews', nameFr: 'Critiques de Projets Kickstarter' },

    // Community & Events
    { id: 'clk1a2b3c4d5e6f7g8h9i0j1', slug: 'community-events', nameEn: 'Community & Events', nameFr: 'Communauté et Événements' },
    { id: 'clk2a3b4c5d6e7f8g9h0i1j2', slug: 'tournaments', nameEn: 'Tournaments', nameFr: 'Tournois' },
    { id: 'clk3a4b5c6d7e8f9g0h1i2j3', slug: 'conventions', nameEn: 'Conventions', nameFr: 'Conventions' },
    { id: 'clk4a5b6c7d8e9f0g1h2i3j4', slug: 'local-events', nameEn: 'Local Events', nameFr: 'Événements Locaux' },
    { id: 'clk5a6b7c8d9e0f1g2h3i4j5', slug: 'online-events', nameEn: 'Online Events', nameFr: 'Événements en Ligne' },
    { id: 'clk6a7b8c9d0e1f2g3h4i5j6', slug: 'community-projects', nameEn: 'Community Projects', nameFr: 'Projets Communautaires' },
    { id: 'clk7a8b9c0d1e2f3g4h5i6j7', slug: 'player-spotlights', nameEn: 'Player Spotlights', nameFr: 'Mise en Avant des Joueurs' },
    { id: 'clk8a9b0c1d2e3f4g5h6i7j8', slug: 'artist-spotlights', nameEn: 'Artist Spotlights', nameFr: 'Mise en Avant des Artistes' },
    { id: 'clk9a0b1c2d3e4f5g6h7i8j9', slug: 'designer-interviews', nameEn: 'Designer Interviews', nameFr: 'Interviews de Créateurs' },
    { id: 'clk0a1b2c3d4e5f6g7h8i9j0', slug: 'workshop-reports', nameEn: 'Workshop Reports', nameFr: 'Comptes-Rendus d\'Ateliers' },

    // Resources & Guides
    { id: 'cll1a2b3c4d5e6f7g8h9i0j1', slug: 'resources-guides', nameEn: 'Resources & Guides', nameFr: 'Ressources et Guides' },
    { id: 'cll2a3b4c5d6e7f8g9h0i1j2', slug: 'rules-mechanics', nameEn: 'Rules & Mechanics', nameFr: 'Règles et Mécaniques' },
    { id: 'cll3a4b5c6d7e8f9g0h1i2j3', slug: 'strategy-guides', nameEn: 'Strategy Guides', nameFr: 'Guides Stratégiques' },
    { id: 'cll4a5b6c7d8e9f0g1h2i3j4', slug: 'painting-tutorials', nameEn: 'Painting Tutorials', nameFr: 'Tutoriels de Peinture' },
    { id: 'cll5a6b7c8d9e0f1g2h3i4j5', slug: 'diy-projects', nameEn: 'DIY Projects', nameFr: 'Projets DIY' },
    { id: 'cll6a7b8c9d0e1f2g3h4i5j6', slug: 'storage-solutions', nameEn: 'Storage Solutions', nameFr: 'Solutions de Stockage' },
    { id: 'cll7a8b9c0d1e2f3g4h5i6j7', slug: 'organization-tips', nameEn: 'Organization Tips', nameFr: 'Conseils d\'Organisation' },
    { id: 'cll8a9b0c1d2e3f4g5h6i7j8', slug: 'game-modifications', nameEn: 'Game Modifications', nameFr: 'Modifications de Jeux' },
    { id: 'cll9a0b1c2d3e4f5g6h7i8j9', slug: 'print-play', nameEn: 'Print & Play', nameFr: 'Print & Play' },
    { id: 'cll0a1b2c3d4e5f6g7h8i9j0', slug: 'digital-tools', nameEn: 'Digital Tools', nameFr: 'Outils Numériques' },

    // Industry News
    { id: 'clm1a2b3c4d5e6f7g8h9i0j1', slug: 'industry-news', nameEn: 'Industry News', nameFr: 'Actualités de l\'Industrie' },
    { id: 'clm2a3b4c5d6e7f8g9h0i1j2', slug: 'company-news', nameEn: 'Company News', nameFr: 'Actualités des Entreprises' },
    { id: 'clm3a4b5c6d7e8f9g0h1i2j3', slug: 'kickstarter-updates', nameEn: 'Kickstarter Updates', nameFr: 'Actualités Kickstarter' },
    { id: 'clm4a5b6c7d8e9f0g1h2i3j4', slug: 'new-releases', nameEn: 'New Releases', nameFr: 'Nouvelles Sorties' },
    { id: 'clm5a6b7c8d9e0f1g2h3i4j5', slug: 'industry-trends', nameEn: 'Industry Trends', nameFr: 'Tendances de l\'Industrie' },
    { id: 'clm6a7b8c9d0e1f2g3h4i5j6', slug: 'designer-interviews', nameEn: 'Designer Interviews', nameFr: 'Interviews de Créateurs' },
    { id: 'clm7a8b9c0d1e2f3g4h5i6j7', slug: 'publisher-news', nameEn: 'Publisher News', nameFr: 'Actualités des Éditeurs' },
    { id: 'clm8a9b0c1d2e3f4g5h6i7j8', slug: 'retail-updates', nameEn: 'Retail Updates', nameFr: 'Actualités du Commerce' },
    { id: 'clm9a0b1c2d3e4f5g6h7i8j9', slug: 'digital-integration', nameEn: 'Digital Integration', nameFr: 'Intégration Numérique' },
    { id: 'clm0a1b2c3d4e5f6g7h8i9j0', slug: 'market-analysis', nameEn: 'Market Analysis', nameFr: 'Analyse du Marché' },
  ]

  console.log('Starting to seed categories...')
  
  for (const category of categories) {
    try {
      await prisma.category.upsert({
        where: { slug: category.slug },
        update: {
          nameEn: category.nameEn,
          nameFr: category.nameFr,
        },
        create: category,
      })
      console.log(`Successfully upserted category: ${category.slug}`)
    } catch (error) {
      console.error(`Error upserting category ${category.slug}:`, error)
    }
  }

  console.log('Finished seeding categories!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 