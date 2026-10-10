
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import EditorialBlock from '../components/EditorialBlock';

export default function EnergyHealing() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (
    <div className="energy-healing-page">
      {/* Page Hero */}
      <PageHero
        category="REFLECTION & CONTEMPLATIVE SPACES"
        routeNum="04"
        title="Energy & Reflection"
        subtitle="Ancient patterns, quiet spaces, and the practice of contemplation"
        leadText="At Soans Farm, a series of distinctive structures draws on traditions associated with sacred geometry, meditation, and the relationship between people and place. Inspired by patterns found across different cultures, these spaces offer visitors an opportunity to slow down, walk mindfully, and experience the landscape from a different perspective."
        metaTags={[
          {
            key: 'CENTRAL EXPERIENCE',
            value: 'MINDFUL WALKING & REFLECTION',
          },
          {
            key: 'INFLUENCES',
            value: 'TRADITIONAL PATTERNS & SACRED GEOMETRY',
          },
        ]}
      />

      {/* 01. INTRODUCTION */}
      <section id="overview" className="section">
        <div className="container">
          <SectionHeading
            number="01. OVERVIEW"
            title="Spaces for Stillness"
            subtitle="Exploring the relationship between pattern, place, and contemplation"
          />

          <EditorialBlock
            title="A Different Way to Experience the Landscape"
            lead="Beyond its agricultural and botanical collections, Soans Farm contains structures inspired by traditional approaches to meditation, spatial patterns, and contemplative practice."
            body={[
              "These structures include labyrinths, a Medicine Wheel, a pyramid form, and a spiral pattern. Their designs draw from traditions associated with different parts of the world and reflect an interest in how constructed spaces can shape an individual's experience of a place.",
              "Visitors can explore these spaces at their own pace, using the pathways and patterns as settings for quiet walking, observation, or personal reflection. Their significance lies in the traditions and interpretations associated with them, as well as in the opportunity they provide to pause within the wider farm landscape.",
            ]}
            imageTitle="Patterns in the Landscape"
            imageCaption="Distinctive structures that invite observation and reflection."
          />
        </div>
      </section>

      {/* 02. THE LABYRINTHS */}
      <section id="labyrinths" className="section section-surface">
        <div className="container">
          <SectionHeading
            number="02. THE LABYRINTHS"
            title="The Path Inward"
            subtitle="A continuous journey through a winding path"
          />

          <EditorialBlock
            number="01 — MINDFUL WALKING"
            title="The Labyrinth"
            lead="Unlike a maze, a labyrinth follows a continuous pathway that winds towards a central point and returns outward, without the dead ends and choices associated with a puzzle."
            body={[
              "Soans Farm features two labyrinth designs inspired by historic patterns: the Cretan labyrinth, associated with the ancient Mediterranean island of Crete, and a design based on the labyrinth of Chartres Cathedral in France.",
              "Across different traditions, labyrinth walking has been used as a form of pilgrimage, meditation, and contemplative practice. The gradual movement along a single path encourages an unhurried pace and offers space for thought, attention, and personal reflection.",
              "At the farm, the labyrinths can be approached as places to step away from everyday distractions, become more attentive to the immediate surroundings, and experience the simple rhythm of walking. Ideas of renewal, balance, and healing form part of the traditions associated with labyrinths, although specific medical benefits have not been established.",
            ]}
            imageTitle="The Labyrinth at Soans Farm"
            imageCaption="A winding path designed around a central point."
            reverse={true}
          />
        </div>
      </section>

      {/* 03. THE MEDICINE WHEEL */}
      <section id="medicine-wheel" className="section">
        <div className="container">
          <SectionHeading
            number="03. THE MEDICINE WHEEL"
            title="A Pattern of Connection"
            subtitle="A circular form inspired by traditional sacred patterns"
          />

          <EditorialBlock
            title="The Medicine Wheel"
            lead="The Medicine Wheel at Soans Farm draws inspiration from circular patterns associated with Indigenous North American traditions and their varied cultural interpretations."
            body={[
              "Medicine Wheels are not a single, universal design. Their meanings differ among Indigenous peoples, and some have cultural or spiritual significance that should be understood within their specific traditions.",
              "The structure at Soans Farm reflects an interest in these traditional forms and in the use of circular patterns to create a defined space for contemplation. Its presence forms part of the estate's broader collection of structures inspired by historical and cultural ideas about place.",
              "Visitors can experience the space quietly and respectfully, taking time to observe its form and consider the many ways people across cultures have given meaning to the landscapes and places around them.",
            ]}
            imageTitle="The Medicine Wheel"
            imageCaption="A circular ground pattern inspired by traditional forms."
          />
        </div>
      </section>

      {/* 04. PYRAMID */}
      <section id="pyramid" className="section section-surface">
        <div className="container">
          <SectionHeading
            number="04. PYRAMID FORM"
            title="Geometry & Proportion"
            subtitle="An architectural form with a long cultural history"
          />

          <EditorialBlock
            title="The Pyramid Structure"
            lead="The pyramid at Soans Farm draws on one of the most recognisable architectural forms in the history of human civilisation."
            body={[
              "Pyramidal structures have appeared in several cultures, most famously in ancient Egypt, where monumental pyramids served specific historical and funerary purposes. Their geometry has also inspired later interpretations involving symbolism, proportion, and contemplative space.",
              "At Soans Farm, the pyramid forms part of a group of structures created from an interest in these historical ideas and their interpretations. The space may be experienced as a setting for quiet sitting and reflection.",
              "Claims that pyramid shapes generate therapeutic energies or cure illness are not supported by reliable scientific evidence. The structure is best understood through its form, cultural associations, and role within the farm's distinctive landscape.",
            ]}
            imageTitle="The Pyramid"
            imageCaption="A geometric form inspired by historic architectural traditions."
            reverse={true}
          />
        </div>
      </section>

      {/* 05. THE SPIRAL */}
      <section id="spiral" className="section">
        <div className="container">
          <SectionHeading
            number="05. THE SPIRAL"
            title="Movement in a Continuous Form"
            subtitle="A recurring pattern found throughout nature and design"
          />

          <EditorialBlock
            title="The Spiral Pattern"
            lead="The spiral is a recurring form found in natural growth, from unfurling leaves and shells to the larger structures of plants and galaxies."
            body={[
              "At Soans Farm, the spiral pattern belongs to a wider collection of structures inspired by geometric forms and interpretations of energy in the landscape.",
              "Its winding shape offers a visual and spatial experience that can be explored slowly, drawing attention to direction, movement, and the relationship between a pattern and the ground on which it is formed.",
              "Although the historical material associates spiral patterns with particular energy concepts, claims of specific healing effects remain unverified. The pattern can nevertheless provide an opportunity for observation, stillness, and personal contemplation.",
            ]}
            imageTitle="The Spiral Pattern"
            imageCaption="A continuous geometric form integrated into the landscape."
          />
        </div>
      </section>

      {/* 06. REFLECTION */}
      <section id="reflection" className="section section-surface">
        <div className="container">
          <SectionHeading
            number="06. REFLECTION"
            title="An Invitation to Pause"
            subtitle="Experience these spaces with curiosity and respect"
          />

          <EditorialBlock
            title="Time, Attention, and Place"
            lead="Each structure offers a different way to engage with the farm beyond its cultivated fields and botanical collections."
            body={[
              "A labyrinth can be experienced through the rhythm of walking. A circular pattern invites observation of its form, while a geometric structure can prompt curiosity about the history and ideas that inspired its design.",
              "There is no single interpretation that visitors need to adopt. These spaces can be approached as cultural expressions, architectural forms, or settings for quiet reflection within the agricultural landscape.",
              "The traditions associated with energy healing are part of the historical context of these structures, rather than a substitute for evidence-based medical care. Visitors should continue to seek qualified medical advice and treatment for health concerns.",
            ]}
            imageTitle="A Quiet Space at the Farm"
            imageCaption="Time for observation and reflection within the estate."
            reverse={true}
          />
        </div>
      </section>
    </div>
  );
}
