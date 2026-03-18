"use client";

import { useState } from "react";
import Image from "next/image";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
  id: string;
  client_name: string;
  client_title: string;
  client_company: string;
  client_avatar?: string;
  content: string;
  rating: number;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  if (testimonials.length === 0) return null;
  
  const currentTestimonial = testimonials[currentIndex];
  
  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section className="border-t border-(--border) px-6 py-14 sm:px-10 sm:py-16 lg:px-12 lg:py-20">
      <div className="mx-auto w-full max-w-[1200px]">
        {/* Header */}
        <div className="text-center mb-12 md:mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-(--text-primary) mb-4">
            What Our Clients Say
          </h2>
          <p className="text-(--text-secondary) max-w-xl mx-auto">
            Trusted by forward-thinking teams to deliver calm, precise, and durable digital experiences.
          </p>
        </div>
        
        {/* Testimonial Card */}
        <div className="relative bg-(--surface) border border-(--border) rounded-[var(--radiusMd)] shadow-[var(--shadowSm)] p-8 md:p-12 max-w-4xl mx-auto">
          {/* Quote Icon */}
          <div className="absolute top-8 left-8 text-(--text-muted) opacity-20">
            <Quote className="w-12 h-12" />
          </div>
          
          {/* Content */}
          <div className="relative z-10">
            {/* Rating */}
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < currentTestimonial.rating
                      ? "fill-amber-400 text-amber-400"
                      : "text-(--text-muted)"
                  }`}
                />
              ))}
            </div>
            
            {/* Quote */}
            <blockquote className="text-xl md:text-2xl text-(--text-primary) leading-relaxed mb-8">
              &ldquo;{currentTestimonial.content}&rdquo;
            </blockquote>
            
            {/* Author */}
            <div className="flex items-center gap-4">
              {currentTestimonial.client_avatar ? (
                <Image
                  src={currentTestimonial.client_avatar}
                  alt={currentTestimonial.client_name}
                  width={56}
                  height={56}
                  className="rounded-full object-cover"
                />
              ) : (
                <div className="w-14 h-14 rounded-full bg-(--background) border-2 border-(--border) flex items-center justify-center text-lg font-medium text-(--text-muted)">
                  {currentTestimonial.client_name.charAt(0)}
                </div>
              )}
              <div>
                <p className="font-medium text-(--text-primary)">
                  {currentTestimonial.client_name}
                </p>
                <p className="text-sm text-(--text-muted)">
                  {currentTestimonial.client_title}
                  {currentTestimonial.client_company && (
                    <>, {currentTestimonial.client_company}</>
                  )}
                </p>
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          {testimonials.length > 1 && (
            <div className="flex items-center gap-4 mt-8 pt-8 border-t border-(--border)">
              <button
                onClick={prev}
                className="p-2 rounded-full border border-(--border) hover:bg-(--background) transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-(--text-muted)" />
              </button>
              
              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentIndex
                        ? "bg-(--text-primary)"
                        : "bg-(--text-muted) opacity-30"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={next}
                className="p-2 rounded-full border border-(--border) hover:bg-(--background) transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-(--text-muted)" />
              </button>
              
              <span className="ml-auto text-sm text-(--text-muted)">
                {currentIndex + 1} / {testimonials.length}
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
