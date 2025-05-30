-- Main Categories
INSERT INTO "Category" (id, slug, nameEn, nameFr, createdAt, updatedAt) VALUES
-- Tabletop Games
('clg1a2b3c4d5e6f7g8h9i0j1', 'tabletop-games', 'Tabletop Games', 'Jeux de Société', NOW(), NOW()),
('clg2a3b4c5d6e7f8g9h0i1j2', 'board-games', 'Board Games', 'Jeux de Plateau', NOW(), NOW()),
('clg3a4b5c6d7e8f9g0h1i2j3', 'card-games', 'Card Games', 'Jeux de Cartes', NOW(), NOW()),
('clg4a5b6c7d8e9f0g1h2i3j4', 'role-playing-games', 'Role-Playing Games', 'Jeux de Rôle', NOW(), NOW()),
('clg5a6b7c8d9e0f1g2h3i4j5', 'war-games', 'War Games', 'Jeux de Guerre', NOW(), NOW()),
('clg6a7b8c9d0e1f2g3h4i5j6', 'strategy-games', 'Strategy Games', 'Jeux de Stratégie', NOW(), NOW()),
('clg7a8b9c0d1e2f3g4h5i6j7', 'party-games', 'Party Games', 'Jeux d''Ambiance', NOW(), NOW()),
('clg8a9b0c1d2e3f4g5h6i7j8', 'classic-games', 'Classic Games', 'Jeux Classiques', NOW(), NOW()),
('clg9a0b1c2d3e4f5g6h7i8j9', 'cooperative-games', 'Cooperative Games', 'Jeux Coopératifs', NOW(), NOW()),
('clg0a1b2c3d4e5f6g7h8i9j0', 'deck-building-games', 'Deck Building Games', 'Jeux de Construction de Deck', NOW(), NOW()),

-- Miniature Painting & Modeling
('clh1a2b3c4d5e6f7g8h9i0j1', 'miniature-painting', 'Miniature Painting & Modeling', 'Peinture et Modélisme de Figurines', NOW(), NOW()),
('clh2a3b4c5d6e7f8g9h0i1j2', 'fantasy-miniatures', 'Fantasy Miniatures', 'Figurines Fantastiques', NOW(), NOW()),
('clh3a4b5c6d7e8f9g0h1i2j3', 'sci-fi-miniatures', 'Sci-Fi Miniatures', 'Figurines Science-Fiction', NOW(), NOW()),
('clh4a5b6c7d8e9f0g1h2i3j4', 'historical-miniatures', 'Historical Miniatures', 'Figurines Historiques', NOW(), NOW()),
('clh5a6b7c8d9e0f1g2h3i4j5', 'terrain-building', 'Terrain Building', 'Construction de Terrain', NOW(), NOW()),
('clh6a7b8c9d0e1f2g3h4i5j6', 'dioramas', 'Dioramas', 'Dioramas', NOW(), NOW()),
('clh7a8b9c0d1e2f3g4h5i6j7', 'scale-models', 'Scale Models', 'Maquettes', NOW(), NOW()),
('clh8a9b0c1d2e3f4g5h6i7j8', 'warhammer', 'Warhammer', 'Warhammer', NOW(), NOW()),
('clh9a0b1c2d3e4f5g6h7i8j9', 'dnd-miniatures', 'D&D Miniatures', 'Figurines D&D', NOW(), NOW()),
('clh0a1b2c3d4e5f6g7h8i9j0', 'painting-techniques', 'Painting Techniques', 'Techniques de Peinture', NOW(), NOW()),

-- Storytelling & Narrative
('cli1a2b3c4d5e6f7g8h9i0j1', 'storytelling', 'Storytelling & Narrative', 'Narration et Récit', NOW(), NOW()),
('cli2a3b4c5d6e7f8g9h0i1j2', 'campaign-settings', 'Campaign Settings', 'Univers de Campagne', NOW(), NOW()),
('cli3a4b5c6d7e8f9g0h1i2j3', 'character-creation', 'Character Creation', 'Création de Personnages', NOW(), NOW()),
('cli4a5b6c7d8e9f0g1h2i3j4', 'world-building', 'World Building', 'Création d''Univers', NOW(), NOW()),
('cli5a6b7c8d9e0f1g2h3i4j5', 'adventure-modules', 'Adventure Modules', 'Modules d''Aventure', NOW(), NOW()),
('cli6a7b8c9d0e1f2g3h4i5j6', 'lore-development', 'Lore Development', 'Développement de l''Univers', NOW(), NOW()),
('cli7a8b9c0d1e2f3g4h5i6j7', 'narrative-techniques', 'Narrative Techniques', 'Techniques Narratives', NOW(), NOW()),
('cli8a9b0c1d2e3f4g5h6i7j8', 'game-master-tips', 'Game Master Tips', 'Conseils pour Maîtres de Jeu', NOW(), NOW()),
('cli9a0b1c2d3e4f5g6h7i8j9', 'player-guides', 'Player Guides', 'Guides du Joueur', NOW(), NOW()),
('cli0a1b2c3d4e5f6g7h8i9j0', 'story-arcs', 'Story Arcs', 'Arcs Narratifs', NOW(), NOW()),

-- Game Reviews
('clj1a2b3c4d5e6f7g8h9i0j1', 'game-reviews', 'Game Reviews', 'Critiques de Jeux', NOW(), NOW()),
('clj2a3b4c5d6e7f8g9h0i1j2', 'board-game-reviews', 'Board Game Reviews', 'Critiques de Jeux de Plateau', NOW(), NOW()),
('clj3a4b5c6d7e8f9g0h1i2j3', 'card-game-reviews', 'Card Game Reviews', 'Critiques de Jeux de Cartes', NOW(), NOW()),
('clj4a5b6c7d8e9f0g1h2i3j4', 'rpg-reviews', 'RPG Reviews', 'Critiques de JDR', NOW(), NOW()),
('clj5a6b7c8d9e0f1g2h3i4j5', 'miniature-game-reviews', 'Miniature Game Reviews', 'Critiques de Jeux de Figurines', NOW(), NOW()),
('clj6a7b8c9d0e1f2g3h4i5j6', 'new-releases', 'New Releases', 'Nouvelles Sorties', NOW(), NOW()),
('clj7a8b9c0d1e2f3g4h5i6j7', 'classic-reviews', 'Classic Reviews', 'Critiques de Classiques', NOW(), NOW()),
('clj8a9b0c1d2e3f4g5h6i7j8', 'comparison-reviews', 'Comparison Reviews', 'Comparaisons de Jeux', NOW(), NOW()),
('clj9a0b1c2d3e4f5g6h7i8j9', 'component-reviews', 'Component Reviews', 'Critiques de Composants', NOW(), NOW()),
('clj0a1b2c3d4e5f6g7h8i9j0', 'kickstarter-reviews', 'Kickstarter Reviews', 'Critiques de Projets Kickstarter', NOW(), NOW()),

-- Community & Events
('clk1a2b3c4d5e6f7g8h9i0j1', 'community-events', 'Community & Events', 'Communauté et Événements', NOW(), NOW()),
('clk2a3b4c5d6e7f8g9h0i1j2', 'tournaments', 'Tournaments', 'Tournois', NOW(), NOW()),
('clk3a4b5c6d7e8f9g0h1i2j3', 'conventions', 'Conventions', 'Conventions', NOW(), NOW()),
('clk4a5b6c7d8e9f0g1h2i3j4', 'local-events', 'Local Events', 'Événements Locaux', NOW(), NOW()),
('clk5a6b7c8d9e0f1g2h3i4j5', 'online-events', 'Online Events', 'Événements en Ligne', NOW(), NOW()),
('clk6a7b8c9d0e1f2g3h4i5j6', 'community-projects', 'Community Projects', 'Projets Communautaires', NOW(), NOW()),
('clk7a8b9c0d1e2f3g4h5i6j7', 'player-spotlights', 'Player Spotlights', 'Mise en Avant des Joueurs', NOW(), NOW()),
('clk8a9b0c1d2e3f4g5h6i7j8', 'artist-spotlights', 'Artist Spotlights', 'Mise en Avant des Artistes', NOW(), NOW()),
('clk9a0b1c2d3e4f5g6h7i8j9', 'designer-interviews', 'Designer Interviews', 'Interviews de Créateurs', NOW(), NOW()),
('clk0a1b2c3d4e5f6g7h8i9j0', 'workshop-reports', 'Workshop Reports', 'Comptes-Rendus d''Ateliers', NOW(), NOW()),

-- Resources & Guides
('cll1a2b3c4d5e6f7g8h9i0j1', 'resources-guides', 'Resources & Guides', 'Ressources et Guides', NOW(), NOW()),
('cll2a3b4c5d6e7f8g9h0i1j2', 'rules-mechanics', 'Rules & Mechanics', 'Règles et Mécaniques', NOW(), NOW()),
('cll3a4b5c6d7e8f9g0h1i2j3', 'strategy-guides', 'Strategy Guides', 'Guides Stratégiques', NOW(), NOW()),
('cll4a5b6c7d8e9f0g1h2i3j4', 'painting-tutorials', 'Painting Tutorials', 'Tutoriels de Peinture', NOW(), NOW()),
('cll5a6b7c8d9e0f1g2h3i4j5', 'diy-projects', 'DIY Projects', 'Projets DIY', NOW(), NOW()),
('cll6a7b8c9d0e1f2g3h4i5j6', 'storage-solutions', 'Storage Solutions', 'Solutions de Stockage', NOW(), NOW()),
('cll7a8b9c0d1e2f3g4h5i6j7', 'organization-tips', 'Organization Tips', 'Conseils d''Organisation', NOW(), NOW()),
('cll8a9b0c1d2e3f4g5h6i7j8', 'game-modifications', 'Game Modifications', 'Modifications de Jeux', NOW(), NOW()),
('cll9a0b1c2d3e4f5g6h7i8j9', 'print-play', 'Print & Play', 'Print & Play', NOW(), NOW()),
('cll0a1b2c3d4e5f6g7h8i9j0', 'digital-tools', 'Digital Tools', 'Outils Numériques', NOW(), NOW()),

-- Industry News
('clm1a2b3c4d5e6f7g8h9i0j1', 'industry-news', 'Industry News', 'Actualités de l''Industrie', NOW(), NOW()),
('clm2a3b4c5d6e7f8g9h0i1j2', 'company-news', 'Company News', 'Actualités des Entreprises', NOW(), NOW()),
('clm3a4b5c6d7e8f9g0h1i2j3', 'kickstarter-updates', 'Kickstarter Updates', 'Actualités Kickstarter', NOW(), NOW()),
('clm4a5b6c7d8e9f0g1h2i3j4', 'new-releases', 'New Releases', 'Nouvelles Sorties', NOW(), NOW()),
('clm5a6b7c8d9e0f1g2h3i4j5', 'industry-trends', 'Industry Trends', 'Tendances de l''Industrie', NOW(), NOW()),
('clm6a7b8c9d0e1f2g3h4i5j6', 'designer-interviews', 'Designer Interviews', 'Interviews de Créateurs', NOW(), NOW()),
('clm7a8b9c0d1e2f3g4h5i6j7', 'publisher-news', 'Publisher News', 'Actualités des Éditeurs', NOW(), NOW()),
('clm8a9b0c1d2e3f4g5h6i7j8', 'retail-updates', 'Retail Updates', 'Actualités du Commerce', NOW(), NOW()),
('clm9a0b1c2d3e4f5g6h7i8j9', 'digital-integration', 'Digital Integration', 'Intégration Numérique', NOW(), NOW()),
('clm0a1b2c3d4e5f6g7h8i9j0', 'market-analysis', 'Market Analysis', 'Analyse du Marché', NOW(), NOW()); 