import { MetadataRoute } from 'next';
import { services } from '@/data/services';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nivdent.com';

  // Static routes
  const staticRoutes = [
    '',
    '/about-us',
    '/about-us/contracted-institutions',
    '/corporate',
    '/corporate/contracted-institutions',
    '/services',
    '/our-doctors',
    '/virtual-tour',
    '/blog',
    '/contact',
    '/faq'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic services routes
  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Doctors routes
  const doctorSlugs = [
    'hacer-katkici-dursun',
    'betul-nazli-mustu',
    'simge-durmuslar',
    'beril-sagir',
    'mucahit-guner',
    'berk-atahan-ekinci',
    'ayse-melike-muftuoglu',
    'akif-arslan',
    'senanur-atmaca',
    'oguzhan-sadic',
    'melih-yasin-gokce',
    'aleyna-duru'
  ];

  const doctorRoutes = doctorSlugs.map((slug) => ({
    url: `${baseUrl}/our-doctors/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...doctorRoutes,
  ];
}
