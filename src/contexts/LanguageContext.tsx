import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ru' | 'es';

interface Translations {
  [key: string]: {
    en: string;
    ru: string;
    es: string;
  };
}

const translations: Translations = {
  // Navigation
  'nav.solutions': {
    en: 'Solutions',
    ru: 'Решения',
    es: 'Soluciones',
  },
  'nav.technology': {
    en: 'Technology',
    ru: 'Технологии',
    es: 'Tecnología',
  },
  'nav.academy': {
    en: 'Academy',
    ru: 'Академия',
    es: 'Academia',
  },
  'nav.access': {
    en: 'Institutional Access',
    ru: 'Доступ для институтов',
    es: 'Acceso Institucional',
  },

  // Hero
  'hero.badge': {
    en: 'Institutional Grade Infrastructure',
    ru: 'Инфраструктура институционального уровня',
    es: 'Infraestructura de Grado Institucional',
  },
  'hero.title1': {
    en: 'Dominating Digital Markets through',
    ru: 'Доминирование на цифровых рынках через',
    es: 'Dominando los Mercados Digitales con',
  },
  'hero.title2': {
    en: 'Algorithmic Intelligence',
    ru: 'Алгоритмический интеллект',
    es: 'Inteligencia Algorítmica',
  },
  'hero.subtitle': {
    en: 'Institutional liquidity management and HFT strategies powered by our proprietary',
    ru: 'Институциональное управление ликвидностью и HFT-стратегии на основе нашего проприетарного',
    es: 'Gestión de liquidez institucional y estrategias HFT impulsadas por nuestro',
  },
  'hero.engine': {
    en: 'AI Analyze Trading Engine',
    ru: 'AI Analyze Trading Engine',
    es: 'Motor de Trading AI Analyze',
  },
  'hero.cta': {
    en: 'Request Access',
    ru: 'Запросить доступ',
    es: 'Solicitar Acceso',
  },
  'hero.docs': {
    en: 'View Documentation',
    ru: 'Документация',
    es: 'Ver Documentación',
  },
  'hero.stat1': {
    en: 'Assets Under Management',
    ru: 'Активы под управлением',
    es: 'Activos Bajo Gestión',
  },
  'hero.stat2': {
    en: 'Average Latency',
    ru: 'Средняя задержка',
    es: 'Latencia Promedio',
  },
  'hero.stat3': {
    en: 'System Uptime',
    ru: 'Время работы системы',
    es: 'Tiempo de Actividad',
  },
  'hero.stat4': {
    en: 'Institutional Partners',
    ru: 'Институциональные партнёры',
    es: 'Socios Institucionales',
  },

  // Services
  'services.badge': {
    en: 'Institutional Solutions',
    ru: 'Институциональные решения',
    es: 'Soluciones Institucionales',
  },
  'services.title': {
    en: 'What We Do',
    ru: 'Что мы делаем',
    es: 'Lo Que Hacemos',
  },
  'services.subtitle': {
    en: 'Enterprise-grade infrastructure designed for capital efficiency and systematic alpha generation.',
    ru: 'Инфраструктура корпоративного уровня для эффективного использования капитала и систематической генерации альфы.',
    es: 'Infraestructura de nivel empresarial diseñada para la eficiencia del capital y la generación sistemática de alfa.',
  },
  'services.hft.title': {
    en: 'High-Frequency Execution',
    ru: 'Высокочастотное исполнение',
    es: 'Ejecución de Alta Frecuencia',
  },
  'services.hft.desc': {
    en: 'Microsecond latency infrastructure for global crypto-exchange arbitrage and liquidity capture.',
    ru: 'Инфраструктура с микросекундной задержкой для глобального арбитража и захвата ликвидности.',
    es: 'Infraestructura de latencia en microsegundos para arbitraje global y captura de liquidez.',
  },
  'services.hft.stat': {
    en: 'Avg. Latency',
    ru: 'Сред. задержка',
    es: 'Latencia Prom.',
  },
  'services.ai.title': {
    en: 'Market Emulation & Prediction',
    ru: 'Эмуляция и прогнозирование рынка',
    es: 'Emulación y Predicción del Mercado',
  },
  'services.ai.desc': {
    en: 'Our core engine simulates 10,000+ individual trader behaviors simultaneously to forecast volatility and stress-test strategies in real-time.',
    ru: 'Наш движок одновременно моделирует поведение 10 000+ трейдеров для прогнозирования волатильности и стресс-тестирования стратегий.',
    es: 'Nuestro motor simula más de 10,000 comportamientos de traders para pronosticar la volatilidad en tiempo real.',
  },
  'services.ai.stat': {
    en: 'Simulations/sec',
    ru: 'Симуляций/сек',
    es: 'Simulaciones/seg',
  },
  'services.defi.title': {
    en: 'Yield Architecture',
    ru: 'Архитектура доходности',
    es: 'Arquitectura de Rendimiento',
  },
  'services.defi.desc': {
    en: 'Sophisticated liquidity provisioning and yield farming automation across Tier-1 decentralized protocols.',
    ru: 'Сложное предоставление ликвидности и автоматизация фарминга на протоколах первого уровня.',
    es: 'Provisión de liquidez sofisticada y automatización de yield farming en protocolos Tier-1.',
  },
  'services.defi.stat': {
    en: 'Avg. APY',
    ru: 'Сред. APY',
    es: 'APY Prom.',
  },

  // Technology
  'tech.badge': {
    en: 'Core Technology',
    ru: 'Ключевые технологии',
    es: 'Tecnología Central',
  },
  'tech.title': {
    en: 'AI Analyze Engine',
    ru: 'AI Analyze Engine',
    es: 'Motor AI Analyze',
  },
  'tech.subtitle': {
    en: 'Real-time performance visualization of our proprietary market emulation system.',
    ru: 'Визуализация производительности нашей проприетарной системы эмуляции рынка в реальном времени.',
    es: 'Visualización en tiempo real de nuestro sistema propietario de emulación de mercado.',
  },
  'tech.simulation': {
    en: 'Performance Simulation',
    ru: 'Симуляция производительности',
    es: 'Simulación de Rendimiento',
  },
  'tech.processing': {
    en: 'Processing data clusters...',
    ru: 'Обработка кластеров данных...',
    es: 'Procesando clusters de datos...',
  },
  'tech.paused': {
    en: 'Simulation paused',
    ru: 'Симуляция приостановлена',
    es: 'Simulación pausada',
  },
  'tech.pause': {
    en: 'Pause',
    ru: 'Пауза',
    es: 'Pausar',
  },
  'tech.resume': {
    en: 'Resume',
    ru: 'Продолжить',
    es: 'Reanudar',
  },
  'tech.processed': {
    en: 'Processed',
    ru: 'Обработано',
    es: 'Procesado',
  },
  'tech.throughput': {
    en: 'Throughput',
    ru: 'Пропускная способность',
    es: 'Rendimiento',
  },
  'tech.accuracy': {
    en: 'Accuracy',
    ru: 'Точность',
    es: 'Precisión',
  },

  // Academy
  'academy.badge': {
    en: 'The Academy',
    ru: 'Академия',
    es: 'La Academia',
  },
  'academy.title': {
    en: 'Knowledge Transfer',
    ru: 'Передача знаний',
    es: 'Transferencia de Conocimiento',
  },
  'academy.subtitle': {
    en: 'Executive programs designed for institutional professionals seeking systematic trading expertise.',
    ru: 'Программы для институциональных специалистов, стремящихся к экспертизе в систематической торговле.',
    es: 'Programas ejecutivos para profesionales institucionales que buscan experiencia en trading sistemático.',
  },
  'academy.viewAll': {
    en: 'View All Programs',
    ru: 'Все программы',
    es: 'Ver Todos los Programas',
  },
  'academy.foundation': {
    en: 'Foundation',
    ru: 'Базовый',
    es: 'Fundación',
  },
  'academy.advanced': {
    en: 'Advanced',
    ru: 'Продвинутый',
    es: 'Avanzado',
  },
  'academy.executive': {
    en: 'Executive',
    ru: 'Исполнительный',
    es: 'Ejecutivo',
  },
  'academy.course1.title': {
    en: 'Algorithmic Trading Fundamentals',
    ru: 'Основы алгоритмической торговли',
    es: 'Fundamentos del Trading Algorítmico',
  },
  'academy.course1.desc': {
    en: 'Core concepts of systematic trading, market microstructure, and quantitative analysis.',
    ru: 'Ключевые концепции систематической торговли, микроструктуры рынка и количественного анализа.',
    es: 'Conceptos fundamentales de trading sistemático, microestructura del mercado y análisis cuantitativo.',
  },
  'academy.course2.title': {
    en: 'Machine Learning for Markets',
    ru: 'Машинное обучение для рынков',
    es: 'Machine Learning para Mercados',
  },
  'academy.course2.desc': {
    en: 'Deep learning architectures, feature engineering, and model deployment for alpha generation.',
    ru: 'Архитектуры глубокого обучения, инжиниринг признаков и развёртывание моделей для генерации альфы.',
    es: 'Arquitecturas de deep learning, ingeniería de características y despliegue de modelos.',
  },
  'academy.course3.title': {
    en: 'Institutional Strategy Design',
    ru: 'Институциональный дизайн стратегий',
    es: 'Diseño de Estrategias Institucionales',
  },
  'academy.course3.desc': {
    en: 'Enterprise-grade strategy development, regulatory compliance, and institutional operations.',
    ru: 'Разработка стратегий корпоративного уровня, соответствие регуляторам и институциональные операции.',
    es: 'Desarrollo de estrategias empresariales, cumplimiento regulatorio y operaciones institucionales.',
  },
  'academy.weeks': {
    en: 'Weeks',
    ru: 'Недель',
    es: 'Semanas',
  },
  'academy.participants': {
    en: 'Participants',
    ru: 'Участников',
    es: 'Participantes',
  },
  'academy.keyModules': {
    en: 'Key Modules',
    ru: 'Ключевые модули',
    es: 'Módulos Clave',
  },
  'academy.syllabus': {
    en: 'Request Syllabus',
    ru: 'Запросить программу',
    es: 'Solicitar Programa',
  },
  'academy.module.microstructure': {
    en: 'Market Microstructure',
    ru: 'Микроструктура рынка',
    es: 'Microestructura del Mercado',
  },
  'academy.module.arbitrage': {
    en: 'Statistical Arbitrage',
    ru: 'Статистический арбитраж',
    es: 'Arbitraje Estadístico',
  },
  'academy.module.risk': {
    en: 'Risk Management',
    ru: 'Управление рисками',
    es: 'Gestión de Riesgos',
  },
  'academy.module.neural': {
    en: 'Neural Networks',
    ru: 'Нейронные сети',
    es: 'Redes Neuronales',
  },
  'academy.module.timeseries': {
    en: 'Time Series Analysis',
    ru: 'Анализ временных рядов',
    es: 'Análisis de Series Temporales',
  },
  'academy.module.portfolio': {
    en: 'Portfolio Optimization',
    ru: 'Оптимизация портфеля',
    es: 'Optimización de Portafolio',
  },
  'academy.module.compliance': {
    en: 'Compliance Frameworks',
    ru: 'Системы комплаенса',
    es: 'Marcos de Cumplimiento',
  },
  'academy.module.capital': {
    en: 'Capital Allocation',
    ru: 'Распределение капитала',
    es: 'Asignación de Capital',
  },
  'academy.module.prime': {
    en: 'Prime Brokerage',
    ru: 'Прайм-брокеридж',
    es: 'Prime Brokerage',
  },

  // Ticker
  'ticker.cluster': {
    en: 'Primary Cluster',
    ru: 'Основной кластер',
    es: 'Clúster Primario',
  },
  'ticker.network': {
    en: 'Network Status',
    ru: 'Статус сети',
    es: 'Estado de Red',
  },
  'ticker.security': {
    en: 'Security Layer',
    ru: 'Уровень безопасности',
    es: 'Capa de Seguridad',
  },
  'ticker.engine': {
    en: 'Trading Engine',
    ru: 'Торговый движок',
    es: 'Motor de Trading',
  },
  'ticker.backup': {
    en: 'Backup Systems',
    ru: 'Резервные системы',
    es: 'Sistemas de Respaldo',
  },
  'ticker.cdn': {
    en: 'Global CDN',
    ru: 'Глобальный CDN',
    es: 'CDN Global',
  },
  'ticker.operational': {
    en: 'Operational',
    ru: 'Работает',
    es: 'Operacional',
  },
  'ticker.optimal': {
    en: 'Optimal',
    ru: 'Оптимально',
    es: 'Óptimo',
  },
  'ticker.active': {
    en: 'Active',
    ru: 'Активно',
    es: 'Activo',
  },
  'ticker.online': {
    en: 'Online',
    ru: 'Онлайн',
    es: 'En Línea',
  },
  'ticker.standby': {
    en: 'Standby',
    ru: 'Ожидание',
    es: 'En Espera',
  },
  'ticker.ready': {
    en: 'Ready',
    ru: 'Готово',
    es: 'Listo',
  },
  'ticker.nodes': {
    en: 'Nodes',
    ru: 'Узлов',
    es: 'Nodos',
  },

  // Footer
  'footer.description': {
    en: 'Institutional-grade algorithmic trading infrastructure for the digital asset ecosystem.',
    ru: 'Инфраструктура алгоритмической торговли институционального уровня для экосистемы цифровых активов.',
    es: 'Infraestructura de trading algorítmico de grado institucional para el ecosistema de activos digitales.',
  },
  'footer.solutions': {
    en: 'Solutions',
    ru: 'Решения',
    es: 'Soluciones',
  },
  'footer.company': {
    en: 'Company',
    ru: 'Компания',
    es: 'Empresa',
  },
  'footer.resources': {
    en: 'Resources',
    ru: 'Ресурсы',
    es: 'Recursos',
  },
  'footer.legal': {
    en: 'Legal',
    ru: 'Юридическое',
    es: 'Legal',
  },
  'footer.hft': {
    en: 'HFT Infrastructure',
    ru: 'HFT-инфраструктура',
    es: 'Infraestructura HFT',
  },
  'footer.aiEngine': {
    en: 'AI Engine',
    ru: 'AI-движок',
    es: 'Motor AI',
  },
  'footer.defi': {
    en: 'DeFi Protocols',
    ru: 'Протоколы DeFi',
    es: 'Protocolos DeFi',
  },
  'footer.riskMgmt': {
    en: 'Risk Management',
    ru: 'Управление рисками',
    es: 'Gestión de Riesgos',
  },
  'footer.about': {
    en: 'About',
    ru: 'О нас',
    es: 'Acerca de',
  },
  'footer.careers': {
    en: 'Careers',
    ru: 'Карьера',
    es: 'Carreras',
  },
  'footer.press': {
    en: 'Press',
    ru: 'Пресса',
    es: 'Prensa',
  },
  'footer.contact': {
    en: 'Contact',
    ru: 'Контакты',
    es: 'Contacto',
  },
  'footer.docs': {
    en: 'Documentation',
    ru: 'Документация',
    es: 'Documentación',
  },
  'footer.api': {
    en: 'API Reference',
    ru: 'API-справочник',
    es: 'Referencia API',
  },
  'footer.security': {
    en: 'Security',
    ru: 'Безопасность',
    es: 'Seguridad',
  },
  'footer.compliance': {
    en: 'Compliance',
    ru: 'Комплаенс',
    es: 'Cumplimiento',
  },
  'footer.privacy': {
    en: 'Privacy Policy',
    ru: 'Политика конфиденциальности',
    es: 'Política de Privacidad',
  },
  'footer.terms': {
    en: 'Terms of Service',
    ru: 'Условия использования',
    es: 'Términos de Servicio',
  },
  'footer.cookies': {
    en: 'Cookie Policy',
    ru: 'Политика cookie',
    es: 'Política de Cookies',
  },
  'footer.disclosures': {
    en: 'Disclosures',
    ru: 'Раскрытие информации',
    es: 'Divulgaciones',
  },
  'footer.rights': {
    en: 'All rights reserved.',
    ru: 'Все права защищены.',
    es: 'Todos los derechos reservados.',
  },
  'footer.regulated': {
    en: 'Regulated by the Financial Conduct Authority (FCA) • CRD IV Compliant',
    ru: 'Регулируется Управлением финансового надзора (FCA) • Соответствует CRD IV',
    es: 'Regulado por la FCA • Cumple con CRD IV',
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) {
      console.warn(`Translation missing for key: ${key}`);
      return key;
    }
    return translation[language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const languages: { code: Language; label: string; flag: string }[] = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'ru', label: 'Русский', flag: '🇷🇺' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
];
