'use client';

import Image from 'next/image';

export function BuildingMaterials() {
  return (
    <div className="w-full bg-background">
      {/* Hero Section */}
      <div className="relative w-full h-64 md:h-96 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: 'url(/images/image.png)',
          }}
        />
        <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-blue-500 opacity-85" />

        <div className="relative h-full flex flex-col items-center justify-center px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Building Construction</h1>
          <h2 className="text-2xl md:text-4xl font-bold text-white">Material Division</h2>
          <p className="mt-6 text-sm md:text-base text-gray-100 italic max-w-2xl">
            Building Stronger Foundations, Securing Future Success
          </p>
        </div>
      </div>

      {/* Brand Section */}
      <div className="bg-gray-800 px-6 py-8">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-8 md:gap-16 items-center">
          <div className="text-white font-bold text-lg">INDEX</div>
          <div className="text-white font-bold text-lg">NuliFire</div>
          <div className="text-white font-bold text-lg">CONCRETE CANVAS</div>
        </div>
      </div>

      {/* Introduction */}
      <section className="px-6 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-8">
            At the forefront of the construction materials industry, our Building Construction
            Material Division has built a legacy of excellence spanning over three decades. Our
            commitment to delivering top-quality construction materials has established us as
            leading authorities in the field. We specialize in the distribution of high-quality
            construction materials and focus on the key areas.
          </p>
        </div>
      </section>

      {/* Anchoring System Section */}
      <section className="px-6 py-12 md:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6">
                Anchoring System
              </h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
                Our expertise encompasses a wide range of fastening solutions, including mechanical
                and chemical anchors, threaded anchors, and plastic anchors. We have established
                ourselves as a trusted partner through strategic partnerships. Our previous
                collaboration as HILTS esteemed Channel Partner in Bangladesh enabled us to
                strengthen our position in the industry and carve out a significant market share in
                the realm of fastening solutions.
              </p>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Furthering our journey, we formed a strategic alliance with leading global
                manufacturers, positioning ourselves at the forefront of cutting-edge fixing
                systems. INDEX&apos;s products stand as a testament to our engineering and
                unparalleled quality. Our partnership with INDEX has not only expanded our offerings
                but has also fortified our position and reliability of INDEX&apos;s fasteners has
                consistently yielded positive results and satisfaction from our clients. Our track
                record of successful supply to numerous prestigious projects speaks volumes about
                our dedication to excellence.
              </p>
            </div>
            <div className="relative h-64 md:h-80">
              <Image
                src="/building-materials/index.png"
                alt="Anchoring System Products"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Passive Firestop Section */}
      <section className="px-6 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-64 md:h-80">
              <Image
                src="/building-materials/pipe.png"
                alt="Passive Firestop System"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6">
                Passive Firestop System
              </h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
                Safety is paramount, and our commitment to safeguarding both people and buildings
                from the risks of fires is unwavering. Representing NUL-FIRE&apos;s expertise in
                smart passive fire protection systems, we provide a comprehensive range of
                intumescent coatings, sealants, firestop boards, and other fire-stopping products.
                Our engineers are equipped to offer engineering support, specification guidance,
                product development, pre-construction consultation, and on-site assistance. Our
                partnership with NULLIFIRE has contributed significantly to advancing fire safety in
                major projects across Bangladesh and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Concrete Canvas Section */}
      <section className="px-6 py-12 md:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6">Concrete Canvas</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
                Innovation drives progress, and our exclusive representation of Concrete Canvas
                embodies our commitment to revolutionary construction solutions. Concrete Canvas is
                a geosynthetic fabric that offers groundbreaking applications in slope protection,
                canal lining, and water body infrastructure in construction zones where water body
                infrastructure is pivotal to development, our promotion of Concrete Canvas aims to
                transform traditional construction methods.
              </p>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                By offering a durable and cost-effective alternative to conventional construction
                practices, this innovative product has the potential to reshape the water body
                landscape in Bangladesh.
              </p>
            </div>
            <div className="relative h-64 md:h-80">
              <Image
                src="/building-materials/constact.png"
                alt="Concrete Canvas"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="px-6 py-12 bg-blue-600">
        <div className="max-w-6xl mx-auto">
          <p className="text-white text-sm md:text-base leading-relaxed text-center">
            We are dedicated to prioritizing our clients&apos; needs and project specifications with
            professional and expertise. From initial specification to developing
            applications—operational challenges and providing concrete support, we ensure a seamless
            experience for clients throughout the project lifecycle. Our commitment to quality is
            demonstrated by our long-standing partnerships with industry leaders and our unwavering
            dedication to customer satisfaction and success.
          </p>
        </div>
      </section>

      {/* Final Section */}
      <section className="px-6 py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            Our Building Construction Material Division stands as a beacon of excellence,
            continuously striving to provide innovative solutions that build stronger foundations
            for a successful future. Through our strategic partnerships, unwavering commitment to
            quality, and deep expertise, we remain at the forefront of the construction materials
            industry in Bangladesh and beyond.
          </p>
        </div>
      </section>
    </div>
  );
}
