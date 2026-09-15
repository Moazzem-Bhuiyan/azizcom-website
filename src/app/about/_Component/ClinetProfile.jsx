'use client';

import Animatetext from '@/Component/shared/AnimatedText/AnimatedText';
import Image from 'next/image';

export default function ClientPortfolio() {
  const projects = [
    {
      id: 1,
      title: 'Swimming Pool Complex',
      image: '/image1.png',
    },
    {
      id: 2,
      title: 'Modern Office Building',
      image: '/office.png',
    },
    {
      id: 3,
      title: 'Residential Complex',
      image: '/image copy 3.png',
    },
    {
      id: 4,
      title: 'Corporate Office',
      image: '/image copy 4.png',
    },
    {
      id: 5,
      title: 'Shopping Mall',
      image: '/image copy.png',
    },
    {
      id: 6,
      title: 'Hotel Building',
      image: '/corporate.png',
    },
  ];

  const clients = [
    'Shimizu Corporation',
    'Obayashi Corporation',
    'Takenaka Construction Co Ltd.',
    'Hyundai Engineering',
    'Larsen & Toubro',
    'Samsung C&T',
    'Chevron',
    'Cairn',
    'Fcon Infrastructure Ltd.',
    'Kafco',
    'Laxmi & Tsubio',
    'Lafarge Holcim Bangladesh Ltd.',
    'Laminators',
    'Youngsone Corporation',
    'Hal Thai',
    'Indobuild System',
    'Menard',
    'Rainworld',
    'BHEL',
    'Siemens Bangladesh ltd.',
    'BAUER',
    'Bureau Veritas',
    'CCEC',
    'ESKOM',
    'Energosptmsntazh',
    'Sinochiya Corporation Ltd.',
    'INCON',
    'LGED',
    'RAJUK',
    'Rampal Power Station',
    'Palyra Power Plant',
    'Matarbari Coal Fired Power plant',
    'Metro Rail Line 6 Depot.',
    'Metro Rail Stations',
    'Kanchpur, Meghna & Gumti bridge',
    'Sundarbun water treatment plant',
    'Ladies Club',
    'BUET',
    'Bay Developments Ltd.',
    'Berger Paints Bangladesh Ltd.',
    'EchoTec Ltd.',
    'Elbatstone Ltd.',
    'Rupali Bank',
    'Delta Health Care Pvt. Ltd.',
    'Daffodil Homes Ltd.',
    'Border Guard Bangladesh BGB',
    'Bangladesh ARMY',
    'Department of Fisheries',
    'South Breeze Housing Ltd.',
    'Army Head Quarters',
    'SMC (Social Marketing Company )',
    'Bangladesh NAVY',
    'Dhaka Stock Exchange',
    'Square Toiletries Limited',
    'Spectra International Limited',
    'Eastern Housing Ltd.',
    'Bangladesh Police',
    'Navana Real Estate Ltd.',
    'Shanta Holdings Ltd.',
    'Max Infrastructures Limited',
    "Prime Minister's Office",
    'Bangladesh Bank',
    'Bangaladesh Indoor Stadium',
    'BRAC',
    'IDB Bhaban',
    'Embassy of United States of America',
    'Canadian Embassy',
    'Incepta Pharmaceutical Ltd.',
    'Square Hospital Ltd.',
    'North South University',
    'Beximco Pharmaceuticals',
    'National Archives of Bangladesh',
    'DBL Group',
    'Japan Garden City',
    'Gulshan Club',
    'Channel',
    'Grameen Bangla Housing Ltd.',
    'Shettech (Pvt) Ltd.',
    'Techland',
    'PWD',
    'SCF Pharmaceutical Ltd.',
    'Bangladesh Scouts',
    'Saham Group',
    'Acl Health Care Ltd.',
    'Sajeeb Medical Equipment Ground Stations',
    'Biman Balaka Bhaban',
    'Square Pharmaceuticals Ltd.',
    'Beacon Pharmaceuticals',
    'Marico Limited',
    'FiberHome Limited',
    'Bashundhara Group',
    'United Group',
    'DESCO',
    'Pnac Bangladesh',
    'Avcny Demoicial Bangladesh',
    'World Vision Bangladesh',
    'RSMMU',
    'Noman Group',
    'CNI Aviation',
    'BWDB',
  ];

  return (
    <section className="bg-linear-to-br from-blue-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with vertical text */}
        <div className="flex gap-8">
          {/* Left side - Vertical title */}
          <div className="flex items-center">
            <Animatetext duration={1} x={0} y={50}>
              <div
                className="text-blue-600 font-bold text-2xl sm:text-3xl lg:text-4xl"
                style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
              >
                CLIENT PORTFOLIO
              </div>
            </Animatetext>
          </div>

          {/* Right side - Content */}
          <div className="flex-1">
            {/* Project Images Grid */}
            <Animatetext duration={1} x={0} y={20}>
              <div className="mb-8">
                <div className="grid grid-cols-3 gap-4">
                  {projects.map((project) => (
                    <div
                      key={project.id}
                      className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow border-4 border-blue-200 bg-white"
                    >
                      <div className="relative w-full h-32 sm:h-40">
                        <Image
                          src={project.image || '/placeholder.svg'}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Animatetext>

            {/* Clients List */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="grid grid-cols-3 gap-6 text-sm">
                {/* Split clients into 3 columns */}
                {[0, 1, 2].map((colIndex) => (
                  <div key={colIndex} className="space-y-1">
                    {clients
                      .slice(
                        colIndex * Math.ceil(clients.length / 3),
                        (colIndex + 1) * Math.ceil(clients.length / 3)
                      )
                      .map((client, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="text-blue-600 font-bold shrink-0">•</span>
                          <span className="text-gray-700 leading-tight">{client}</span>
                        </div>
                      ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
