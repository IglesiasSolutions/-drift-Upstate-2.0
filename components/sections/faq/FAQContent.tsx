'use client'

import { useState } from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { faqs, faqCategories } from '@/data/faq'
import { cn } from '@/lib/utils'

export function FAQContent() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filtered = activeCategory === 'all'
    ? faqs
    : faqs.filter((f) => f.categorySlug === activeCategory)

  return (
    <div className="max-w-3xl mx-auto">
      {/* Category filter pills */}
      <div className="flex flex-wrap gap-2 mb-12 justify-center">
        {faqCategories.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => setActiveCategory(cat.slug)}
            className={cn(
              'font-montserrat text-xs tracking-widest uppercase px-4 py-2 border transition-all duration-200',
              activeCategory === cat.slug
                ? 'bg-drift-navy text-white border-drift-navy'
                : 'bg-transparent text-drift-navy/60 border-drift-navy/20 hover:border-drift-navy/50 hover:text-drift-navy'
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Active category label */}
      {activeCategory !== 'all' && (
        <div className="flex items-center gap-3 mb-8">
          <span className="block h-px w-8 bg-drift-gold" />
          <span className="font-montserrat text-xs tracking-widest uppercase text-drift-gold">
            {faqCategories.find((c) => c.slug === activeCategory)?.label}
          </span>
        </div>
      )}

      {/* Accordion */}
      <Accordion type="single" collapsible className="w-full">
        {filtered.map((faq) => (
          <AccordionItem key={faq.id} value={faq.id}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {filtered.length === 0 && (
        <p className="text-center font-inter text-drift-navy/50 py-12">
          No questions in this category yet.
        </p>
      )}
    </div>
  )
}
