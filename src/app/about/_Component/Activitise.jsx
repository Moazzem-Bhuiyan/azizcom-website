import Animatetext from '@/Component/shared/AnimatedText/AnimatedText';
import Image from 'next/image';

const divisions = [
  {
    title: 'HVAC Division',
    subtitle:
      'DESIGN, SUPPLY, INSTALLATION, COMMISSIONING, TESTING AND BALANCING OF CENTRAL AIR CONDITIONING SYSTEM (HVAC) FOR INDUSTRIAL AND COMMERCIAL SECTOR',
    points: [
      {
        items: [
          'CHILLERS, AHU, FCU, COOLING TOWERS, PUMPS, PRECISION MACHINE, PIPES, INSULATION, CONTROL PANEL, CABLING, BML DUCTING, VALVES, HEAT EXCHANGER, HUMIDIFIER AND SO ON',
          'OPERATION AND MAINTENANCE',
          'AFTER SALES SERVICE',
        ],
      },
    ],
    logos: [{ name: 'YORK', src: '/service/york.png' }],
  },
  {
    title: 'Elevator and Parking Division',
    subtitle: '',
    points: [
      {
        title: 'ELEVATORS & ESCALATOR',
        items: [
          'SUPPLY, INSTALLATION, COMMISSIONING OF ELEVATORS AND ESCALATORS FOR COMMERCIAL AND INDUSTRIAL SECTOR',
          'OPERATION AND MAINTENANCE',
          'AFTER SALES SERVICE',
        ],
      },
      {
        title: 'MECHANICAL PARKING SOLUTION',
        items: [
          'DESIGN, SUPPLY, INSTALLATION, COMMISSIONING OF BI-DIRECTIONAL PARKING SYSTEM, VEHICLE LIFTS ETC.',
          'OPERATION AND MAINTENANCE',
          'AFTER SALES SERVICE',
        ],
      },
    ],
    logos: [
      { name: 'SANBI', src: '/service/service2.png' },
      { name: 'OMEGA', src: '/service/omega.png' },
      { name: 'TRAVIS', src: '/service/service3.png' },
      { name: 'AUTORS', src: '/service/service1.png' },
    ],
  },
  {
    title: 'Building Material Division',
    subtitle: '',
    points: [
      {
        title: 'LOCAL PARTNER OF INDEX',
        items: ['SUPPLY OF MECHANICAL & CHEMICAL ANCHORS, ETC', 'ENGINEERING SUPPORT'],
      },
      {
        title: 'LOCAL PARTNER OF NULLFIRE',
        items: ['SUPPLY/INSTALLATION OF PASSIVE FIRESTOP SYSTEM'],
      },
      {
        title: '',
        items: [
          'DESIGN SUPPLY & INSTALLATION OF GEOSYNTHETIC CEMENTIOUS COMPOSITE MATS (CONCRETE ON A ROLL)',
        ],
      },
      {
        title: 'LOCAL PARTNER OF LUMKANI',
        items: ['PROTECTING AGAINST FIRE /FIRE/HEAT DETECTION SYSTEM FOR INFORMAL SETTLEMENTS'],
      },
    ],
    logos: [
      { name: 'INDEX', src: '/service/service16.png' },
      { name: 'NULLFIRE', src: '/service/service6.png' },
      { name: 'CONCRETE CANVAS', src: '/service/service7.png' },
      { name: 'LUMKANI', src: '/service/service17.png' },
      { name: 'HYDRO PARC', src: '/service/service4.png' },
      { name: 'MUTRADE', src: '/service/service5.png' },
    ],
  },
  {
    title: 'Locomotive Division',
    subtitle: 'SUPPLY OF RAILWAYS, LOCOMOTIVES AND SPARE PARTS',
    points: [],
    logos: [{ name: 'WABTEC', src: '/service/service11.png' }],
  },
];

export default function ActivitiesSection() {
  return (
    <div className="min-h-screen bg-linear-to-b from-pink-50 via-white to-orange-50 p-8 md:p-12 relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-100/40 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-100/40 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        {/* Main Title */}
        <Animatetext duration={1} x={0} y={50}>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-16 text-balance">
            Our Activities in Terms of Business
          </h1>
        </Animatetext>

        {/* Divisions */}
        <div className="space-y-16">
          {divisions.map((division, index) => (
            <div key={index} className="grid md:grid-cols-3 gap-8 items-start">
              {/* Left Content */}
              <div className="md:col-span-2 space-y-4">
                <Animatetext duration={1} x={-50} y={0}>
                  {' '}
                  <h2 className="text-2xl font-bold text-blue-700">{division.title}</h2>
                </Animatetext>

                {division.subtitle && (
                  <p className="text-sm font-semibold uppercase text-gray-700 leading-relaxed">
                    {division.subtitle}
                  </p>
                )}

                {division.points.length > 0 && (
                  <div className="space-y-4">
                    {division.points.map((pointGroup, groupIdx) => (
                      <div key={groupIdx} className="space-y-2">
                        {pointGroup.title && (
                          <h3 className="text-xs font-bold uppercase text-gray-800">
                            {pointGroup.title}
                          </h3>
                        )}
                        <ul className="space-y-2 text-xs text-gray-700">
                          {pointGroup.items.map((item, itemIdx) => (
                            <li key={itemIdx} className="flex gap-2 items-center">
                              <span className="text-blue-600 font-bold text-2xl shrink-0">•</span>
                              <span className="uppercase leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Right Logos */}
              <div className="bg-white/60 backdrop-blur rounded-lg p-6 h-full flex flex-col justify-center">
                <div className="grid grid-cols-1 gap-4">
                  {division.logos.map((logo, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-center p-3 bg-gray-50 rounded border border-gray-200 hover:border-gray-300 transition-colors"
                    >
                      <Image
                        src={logo.src || '/placeholder.svg'}
                        alt={logo.name}
                        width={120}
                        height={60}
                        className="w-50 h-20 object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
