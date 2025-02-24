export default {
  global: {
    Name: 'Logística comercial',
    Description:
      'Este componente formativo aborda la logística en operaciones comerciales en <em>retail</em>, enfocándose en conocimientos relacionados con la gestión de almacenes, incluyendo recibo, despacho y manejo de datos, así como el tratamiento el tratamiento del envase, empaque y embalaje en <em>picking</em> y <em>packing</em>, carga y sus conceptos asociados, además su relación con las Buenas Prácticas de Manufactura (BPM) y la normativa técnica de SST .',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Almacenamiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Recibo',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Despacho',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Datos',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: '<em>Picking</em> y <em>Packing</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Envase',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Empaque',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Embalaje',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Carga',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Unitarización',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Desunitarización',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Rotulación',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Cubicaje',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Buenas Prácticas de Manufactura (BPM)',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Normativa técnica en seguridad y salud en el trabajo',
            hash: 't_3_6',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CF2_632223_DU.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Sistemas de Almacenaje y <em>Picking</em>',
      referencia:
        'Mauleón, M. (2003). Sistemas de Almacenaje y <em>Picking</em>.',
      tipo: 'Libro',
      link:
        'https://gc.scalahed.com/recursos/files/r161r/w25735w/LIBROAlmacen.pdf',
    },
    {
      tema:
        'Gestión logística en centros de distribución y almacenes y bodegas',
      referencia:
        'Mundial, a. d. c., & garcia, i. l. a. m. gestion logistica en centros de distribucion y almacenes y bodegas.',
      tipo: 'Libro',
      link:
        'https://d1wqtxts1xzle7.cloudfront.net/31679329/anibal-libre.pdf?1392309220=&response-content-disposition=inline%3B+filename%3DAnibal.pdf&Expires=1740000591&Signature=BA2cSRH3vgv1b1wrIME0CCcvDNOV6eGtIeYwtmRHkTyGDQZySrikZ7ykQUQD-8lGRlbdPuoke9IlyDGhhCruI1tH3yJEcTOMsdJawXFoc4QaCIX6QuNU82A2YjUvBA8-zaulxgsVbR0Xu-teHMQpYXrNfhcWoKJryi9wqrBYp-~-blJbOZwq3BkemYQR8DFFbc4G9HvTWoH2DXt-ZdG7zi-V3dMOiU4ghZE8Nqwu4Nhcxil6ZpeYbY9Mt7eejXJoPfKTXRJKCncW2H-Rf7m26KTqHnAupt047rHyxv0am34br34vOTMb5ta9ilHJNBJaWNE1VpWPBNyoD9qILuu-aw__&Key-Pair-Id=APKAJLOHF5GGSLRBV4ZA',
    },
    {
      tema: 'Cubicaje',
      referencia: 'Soluciones Logísticas y Aduaneras E & S (2020).',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=-3pEFK6hp2A',
    },
  ],
  glosario: [
    {
      termino: 'Canal de distribución',
      significado:
        'Medio a través del cual se transportan productos desde su producción, hasta el consumidor final.',
    },
    {
      termino: 'Flete',
      significado:
        'Costes o tarifas propias del servicio de traslado de mercancías, calculado a través de diferentes variables y características propias de la carga.',
    },
    {
      termino: 'Gestión de almacén',
      significado:
        'Es el proceso que unifica todas las acciones a realizar en un almacén y que están orientadas al flujo de los artículos en la misma y a la preparación y despacho de pedidos.',
    },
    {
      termino: 'Gestión de <em>stock</em>',
      significado:
        'Es el proceso de gestionar las existencias de producto y su valor.',
    },
    {
      termino: 'Gestión logística',
      significado:
        'Abarca los procesos desde la planificación, almacenamiento y distribución de productos o materiales, así como el manejo de datos inherentes al proceso.',
    },
    {
      termino: 'Logística de abastecimiento',
      significado:
        'Unifica las funciones de diferentes departamentos que permitan una continua comunicación y alineación con los factores involucrados en el proceso.',
    },
    {
      termino: 'Logística de distribución',
      significado:
        'Comprende las actividades de expedición y distribución de los productos terminados a los distintos mercados, constituyendo un nexo entre las funciones de producción y de comercialización.',
    },
    {
      termino: '<em>Pallet</em>',
      significado:
        'Plataforma reutilizable que permite el aprovechamiento del espacio, para la organización de diferentes elementos facilitando almacenamiento y transporte. Pueden ser de diferentes medidas y materiales.',
    },
    {
      termino: '<em>Stock</em>',
      significado:
        'Producto en existencia, disponible para el proceso de comercialización, distribución y entrega.',
    },
    {
      termino: 'Transitorio',
      significado:
        'Empresa especializada en la organización y gestión, por encargo del usuario (cargador), de la cadena de transporte de mercancías (o de parte de ella) en cualquiera de sus modos (aéreo, carretera, ferrocarril y marítimo).',
    },
    {
      termino: 'Zona de <em>picking</em>',
      significado: 'Lugar de preparación de pedidos y embalaje de producto.',
    },
    {
      termino: 'Zona de <em>pallets</em>',
      significado:
        'Lugar de almacenamiento de bloques de <em>pallets</em> para su reorganización a través del <em>picking</em> o para una nueva distribución',
    },
    {
      termino: 'Zona de pesaje',
      significado:
        'Zona para validar el peso y dimensiones de producto para tenerlo en cuenta para el medio de entrega o recepción.',
    },
    {
      termino: 'Zona franca',
      significado:
        'Lugar territorial, con delimitaciones, donde hay facilidades comerciales a través de exenciones arancelarias, de impuestos y especiales exoneraciones para la comercialización o consumo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Preparación de pedidos: definición, etapas, métodos y sistemas. (n.d.).',
      link: 'https://www.beetrack.com/es/blog/preparacion-de-pedidos',
    },
    {
      referencia:
        'Castellanos Ramírez, A. (n.d.). Logística y distribución de mercancías.',
      link:
        'https://www.ecoeediciones.com/wp-content/uploads/2015/07/Logistica-Comercial-Internacional.pdf?srsltid=AfmBOoqDiiUgOhJ3-ayEoZ-RvzEuf4WJC_Jgn29o_LU9FoB4V8eZvODz',
    },
    {
      referencia:
        'Martín-Andino, R. (2006). Cadena de suministro (SCM). Madrid: EOI Escuela de Negocios.',
      link:
        'https://www.eoi.es/sites/default/files/savia/documents/componente45144.pdf',
    },
    {
      referencia:
        'anyflip.com. (2021, May 8). Gomez Aparicio Juan Miguel - Gestión Logística Y Comercial - Páginas de Flipbook 201-216 | AnyFlip.',
      link: 'https://anyflip.com/nzfse/blag/basic/201-216',
    },
    {
      referencia:
        '(7) Zarate, P. (2023, 8 junio). ¿Qué es unidad de carga y cómo se integra cada tipo? Nasa Pack.',
      link: 'https://www.nasapack.com/que-es-unidad-de-carga/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Lizeth Maritza Rodríguez Beltrán',
          cargo: 'Instructora Técnica',
          centro:
            'Centro de Manufactura en Textil y Cuero - Regional Distrito Capital',
        },
        {
          nombre: 'Natalia Andrea Bueno Pizarro',
          cargo: 'Diseñadora y Evaluadora Instruccional',
          centro:
            'Centro para La Industria de la Comunicación Gráfica - Distrito Capital',
        },
        {
          nombre: 'Julia Isabel Roberto',
          cargo: 'Diseñadora y Evaluadora Instruccional',
          centro:
            'Centro para La Industria de la Comunicación Gráfica - Distrito Capital',
        },
        {
          nombre: 'Carolina Jiménez Suescún',
          cargo: 'Evaluador Instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yazmin Rocio Figueroa Pacheco',
          cargo: 'Diseñadora de Contenidos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Pedro Alonso Bolivar Gonzalez',
          cargo: 'Desarrollador <em>Fullstack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animador y Productor Multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Andrea Ardila Chaparro',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
