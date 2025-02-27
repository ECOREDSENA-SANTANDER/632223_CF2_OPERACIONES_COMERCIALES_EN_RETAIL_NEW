<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-secundario
      .titulo-principal__numero
        span 1
      h1 Almacenamiento
    
    .row.justify-content-center.align-items-end.mb-4
      .col-lg-4.col-md-7.col-7.mb-3
        img.img-a.img-t(src='@/assets/curso/tema1/img1.png', alt='tema1')
      .col-lg-8.col-md-12.col-12.mb-3
        p.mb-4 Actualmente, las empresas desean tener un #[em stock] mínimo funcional en los almacenes y esto va marcado por las tendencias de producción. Al considerar las limitaciones que puede tener el espacio de almacenamiento, el costo que representan estas instalaciones, el movimiento de los productos, entre otras variables, se han ido incorporando nuevas tecnologías para garantizar un #[em stock] funcional, en óptimas condiciones y que sea dinámico en su movilidad para evitar elementos obsoletos en el mismo.
        .cajon.color-secundario.p-4
          p.mb-0 Un almacén bien gestionado requiere un buen registro y gestión de las existencias de los productos que en él se depositan. Es necesario fijar un volumen mínimo de productos existentes, conocer la cantidad de productos que rotan y cuándo se debe solicitar, así como los costos que se generan por la realización del pedido y del almacenamiento.
          
    .row.justify-content-center(data-aos="zoom-in-left")
      .col-lg-12.col-md-12.col-12
        .titulo-sexto.color-secundario
          h5 Figura 1. 
          | Almacenamiento
    
    .row.justify-content-center.mb-5(data-aos="zoom-in-left")
      .col-lg-12
        .bg1.p-1
          img.img-a.img-t(src='@/assets/curso/tema1/img2.svg', alt='La figura dispone a manera de infografía el proceso de almacenamiento. Indica que, una bodega o almacén es un espacio planificado para ubicar, mantener y manipular mercancías y materiales. Destacan dos funciones dominantes en este proceso: el almacenamiento y el manejo de materiales. Se presentan además, las actividades físicas desarrolladas durante el proceso de almacenamiento: recepción, almacenaje, preparación de pedidos y expedición.')
        
    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-0.bg-img-blue
        h3.col.px-2.mb-0.mx-5.text-white(data-aos="zoom-in-left") Tipos
        img.icon(src='@/assets/curso/tema1/icon.svg') 

    p.mb-4 Un #[em retail], es una infraestructura para el acopio de productos dentro de la cadena de suministro, en tal sentido, son espacios físicos que cubren el periodo entre los flujos de entrada y de salida. Se podría afirmar, que los progresos tecnológicos han organizado una necesaria clasificación de los tipos de almacenamiento a los que se pueden identificar en función de los materiales y sus características. 
    p.mb-4 Los siguientes tipos de almacenamiento son los más acostumbrados: 
    
    .row.fondo1.align-items-center.p-3.mb-5
      .col-lg-12.col-md-12.col-12.px-lg-5.px-4
        .row.justify-content-center.mb-4(data-aos="fade-down")
        
        .tarjetaf.p-3.mb-4
          SlyderA(tipo="b").slider-a-custom(data-aos="zoom-in-left")
            .row.justify-content-center.align-items-center.p-4
              .col-lg-7
                h4.mb-4 Almacenamiento de materias primas
                p.mb-4 Hace referencia a los materiales en estado puro, o que no han sido empleados antes en ningún otro proceso. En el proceso de almacenamiento, las empresas procuran que se ubiquen las materias primas lo más cerca posible a la planta de producción.
              .col-lg-4.col-md-9.col-12  
                img(alt="" src="@/assets/curso/tema1/img3.png")

            .row.justify-content-center.align-items-center.p-4
              .col-lg-7
                h4.mb-4 Almacenamiento de productos intermedios
                p.mb-4 También denominados productos semielaborados, son aquellos que han sufrido modificaciones o usos anteriores, aún se encuentran en una etapa media de la producción y sirven como enlace entre los niveles iniciales de la misma y los posteriores. Deben estar disponibles de forma inmediata y las empresas los almacenan en la misma fábrica.
              .col-lg-4.col-md-9.col-12
                img(alt="" src="@/assets/curso/tema1/img4.png")

            .row.justify-content-center.align-items-center.p-4
              .col-lg-7
                h4.mb-4 Almacenamiento de accesorios
                p.mb-4 Se trata de productos que complementan la producción o sirven de material auxiliar.
              .col-lg-4.col-md-9.col-12
                img(alt="" src="@/assets/curso/tema1/img5.png")

            .row.justify-content-center.align-items-center.p-4
              .col-lg-7
                h4.mb-4 Almacenamiento de productos terminados
                p.mb-4 Las características de cada producto permiten definir en qué condiciones y ciclos deben almacenarse, qué cantidad de luz, la temperatura, etc. Además, la empresa debe tener en cuenta la demanda de los consumidores o clientes. El almacén debe garantizar disponibilidad constante y alta rotación del inventario.
              .col-lg-4.col-md-9.col-12
                img(alt="" src="@/assets/curso/tema1/img6.png")

            .row.justify-content-center.align-items-center.p-4
              .col-lg-7
                h4.mb-4 Almacenamiento de refacciones
                p.mb-4 Son los artículos destinados a corregir o reparar las unidades que ya han estado en manos de los consumidores. Si bien las incidencias de este tipo son mínimas, los retail siempre deben disponer de material en almacén para las peticiones y necesidades de último momento.
              .col-lg-4.col-md-9.col-12
                img(alt="" src="@/assets/curso/tema1/img7.png")
    
    .row.justify-content-center.mb-4(data-aos="zoom-in-left")
      .col-lg-8.col-md-12.col-12
        .cajon.color-acento-contenido.p-4
          p.mb-0 El  
            strong.ro almacenamiento    
            | es una función que va mucho más allá de la labor de acopio en un #[em retail], detrás, hay un estudio detallado de las características de cada producto y de las condiciones propias de su proceso de almacenamiento. 
  
    
    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-0.bg-img-blue
        h3.col.mb-0.mx-5.text-white.px-2(data-aos="zoom-in-left") Zonas 
        img.icon(src='@/assets/curso/tema1/icon.svg')

    p.mb-4 La zona de almacenamiento es el eje fundamental y se debe determinar el efecto en el número y tipos de muebles, estanterías, medios de manipulación, ubicación y la colocación de  los productos, para lograr el máximo rendimiento.
    p.mb-4 Esta zona debe cumplir dos condiciones de funcionamiento: 

    .cont_5_1.mt-4
      .row.justify-content-center
        .col-lg-6.mb-4.mb-lg-0.col-md-10
          .crd_hover_txt
            .crd_hover_txt--img
              figure
                img(src='@/assets/curso/tema1/img8.png' alt="")
            .crd_hover_txt--body.colt
              h5.mb-3.text-center Capacidad de almacenamiento
              p.mt-4.text-white.mb-0.text-center Se entiende al espacio o superficie total del #[em retail] en metros cuadrados. Este dato se obtiene al adquirir la edificación, ahora bien, hay que restar los espacios no dedicados al almacenaje de mercancías: como son los baños, vestuarios, oficinas, entre otros. 
              p.mt-4.text-white.mb-0.text-center En cuanto a la altura máxima de la edificación, esta se obtiene restando elementos, como los sistemas de ventilación, iluminación u otros, a la altura del techo de la bodega.
        .col-lg-6.mb-lg-0.col-md-10(data-aos="zoom-in")
          .crd_hover_txt
            .crd_hover_txt--img
              figure
                img(src='@/assets/curso/tema1/img9.png' alt="")
            .crd_hover_txt--body.colt
              h5.mb-3.text-center Facilidad para el #[em picking] 
              p.mt-4.text-white.mb-0.text-center El #[em picking] es la actividad de preparación de pedidos, donde los productos almacenados se seleccionan y preparan para su despacho al #[em retail]. 
              p.mt-4.text-white.mb-0.text-center Esta área debe estar organizada de manera eficiente para permitir un acceso rápido y fácil a los productos, optimizando así el tiempo y los recursos empleados en la preparación de los pedidos, garantizando la rapidez y precisión en la distribución.
    
    separador
    #t_1_1.titulo-segundo.color-secundario
      h2 1.1 Recibo

    .row.justify-content-center.align-items-end
      .col-lg-8.col-md-12.col-12.mb-4
        p.mb-4 Este es un proceso recurrente que involucra a todos los actores del proceso de almacenamiento y distribución, en el cual se requiere mantener una comunicación y coordinación efectiva las partes para garantizar el éxito en su ejecución.
        p.mb-0 Las actividades involucradas en el proceso de recibo demandan el cumplimiento de protocolos de seguridad para garantizar la preservación de los productos, y cumplir con las expectativas de los usuarios finales. Este proceso comienza con una orden de compra, que es una solicitud formal, legal y contable en la que se especifican al fabricante o proveedor las características del producto solicitado, la cantidad requerida y los términos y condiciones bajo los cuales se lleva a cabo este proceso. 
      .col-lg-4.col-md-9.col-9.mb-4
        img.img-a.img-t(src='@/assets/curso/tema1/img10.svg', alt='tema1')
      
    
    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-0.bg-img-blue
        h3.col.px-2.mb-0.mx-5.text-white(data-aos="zoom-in-left") Procedimiento
        img.icon(src='@/assets/curso/tema1/icon.svg')

    p.mb-5 La principal función del proceso de recepción de mercancía es la de garantizar al #[em retail], la correcta y eficiente entrada de productos para atender las necesidades de los clientes internos y externos. A continuación, se identifican los siguientes tipos de productos: 

    .row.justify-content-center.mb-5(data-aos="fade-down") 
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.col1.mh-375
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              .col-auto 
                img.img-a.img-t.mb-4(src='@/assets/curso/tema1/img14.svg', alt='tema1')
              h2.text-center.text-white.mb-4 Materias primas e insumos
              p.text-center.text-white Proveniente de uno o varios proveedores. En esta categoría también se deben incluir insumos como: papelería, productos de aseo y consumo para las oficinas, dotaciones para los empleados, entre otros.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img11.svg')})`}")
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.col1.mh-375(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              .col-auto 
                img.img-a.img-t.mb-4(src='@/assets/curso/tema1/img15.svg', alt='tema1')
              h2.text-center.text-white.mb-4 Producto en proceso
              p.text-center.text-white Proveniente de una o varias plantas de producción. 
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img12.svg')})`}")
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.col1.mh-375
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              .col-auto 
                img.img-a.img-t.mb-4(src='@/assets/curso/tema1/img16.svg', alt='tema1')
              h2.text-center.text-white.mb-4 Producto terminado
              p.text-center.text-white Proveniente de una planta de producción o de un proveedor.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img13.svg')})`}")

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-0.bg-img-blue
        h3.col.px-2.mb-0.mx-5.text-white(data-aos="zoom-in-left") Formatos
        img.icon(src='@/assets/curso/tema1/icon.svg')
    
    p.mb-4 Son los documentos que permiten realizar el reconocimiento de las operaciones en el recibo de los productos, de tal manera que se pueda conocer en cualquier momento el valor del inventario en la sala de ventas, el costo de lo vendido y la utilidad o la pérdida bruta. A continuación, se presentan algunos ejemplos: 
    
    
    TabsB.color-acento-botones
      .py-4.py-md-5.p-4(titulo="Factura de venta" :icono="require('@/assets/curso/tema1/img17.svg')")
        .row.justify-content-center.align-items-start
          .col-lg-4.col-md-12.col-12
            .titulo-sexto.color-secundario.mb-4
              h5 Figura 2. 
              | Factura de venta 
          .col-lg-8.col-md-12.col-12
            .row.justify-content.align-items-start
              .col-lg-8.col-md-12.col-12
                img.mb-4(src='@/assets/curso/tema1/factura.png', alt='La figura presenta un ejemplo del formato de una factura de venta con sus respectivos campos para el diligenciamiento.')
  
      .py-4.py-md-5.p-4(titulo="Formato para la entrada y salida de materiales" :icono="require('@/assets/curso/tema1/img18.svg')")
        .row
          .col-lg-12
            .titulo-sexto.color-secundario.mb-4
              h5 Figura 3. 
              | Formato para la entrada y salida de materiales
          .row.justify-content-center.align-items-start
            .col-lg-8
              img.mb-4(src='@/assets/curso/tema1/fig3.png', alt='La figura presenta un ejemplo del formato para la entrada y salida de materiales con sus respectivos campos para el diligenciamiento.')

      .py-4.py-md-5.p-4(titulo="Factura de nota de remisión" :icono="require('@/assets/curso/tema1/img19.svg')")
        .row.justify-content-center.align-items-start
          .col-lg-4.col-md-12.col-12
            .titulo-sexto.color-secundario.mb-4
              h5 Figura 4. 
              | Factura de nota de remisión 
          .col-lg-8.col-md-12.col-12
            .row.justify-content.align-items-start
              .col-lg-8.col-md-12.col-12
                img.mb-4(src='@/assets/curso/tema1/fig4.png', alt='La figura presenta un ejemplo del formato de nota de remisión con sus respectivos campos para el diligenciamiento.')
            
      .py-4.py-md-5.p-4(titulo="Ficha técnica de producto" :icono="require('@/assets/curso/tema1/img20.svg')")
        .row.justify-content-center.align-items-start
          .col-lg-4.col-md-12.col-12
            .titulo-sexto.color-secundario.mb-4
              h5 Figura 5. 
              | Ficha técnica de producto 
          .col-lg-8.col-md-12.col-12
            .row.justify-content.align-items-start
              .col-lg-8.col-md-12.col-12
                img.mb-4(src='@/assets/curso/tema1/fig5.png', alt='La figura presenta un ejemplo de la ficha técnica de producto de un “confite de azúcar” o “arequipe” con sus respectivos apartados.')
      
      .py-4.py-md-5.p-4(titulo="Información nutricional" :icono="require('@/assets/curso/tema1/img21.svg')")
        .row.justify-content-center.align-items-start
          .col-lg-4.col-md-12.col-12
            .titulo-sexto.color-secundario.mb-4
              h5 Figura 6. 
              | Información nutricional 
          .col-lg-8.col-md-12.col-12
            .row.justify-content.align-items-start
              .col-lg-8.col-md-12.col-12
                img.mb-4(src='@/assets/curso/tema1/fig6.png', alt='La figura presenta un ejemplo de la información nutricional de un producto.')


    separador
    #t_1_2.titulo-segundo.color-secundario
      h2 1.2 Despacho 
    
    p.mb-4 En logística, el despacho representa el proceso de último contacto que tiene producto con el almacén, antes de ser entregado al cliente o distribuidor. Este proceso es gestionado por parte del responsable de bodega quien supervisa la entrada y salida de productos del #[em retail], y tiene como función principal el control de inventarios y recepción de mercancías. 

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-0.bg-img-blue
        h3.col.px-2.mb-0.mx-5.text-white(data-aos="zoom-in-left") Procedimiento
        img.icon(src='@/assets/curso/tema1/icon.svg')
    
    p.mb-4 El responsable del proceso coordina con el proveedor la asignación del día, la hora y la fecha de entrega de los productos, a su vez, el jefe de recibos se encarga de organizar la logística para cada tipo de producto, asegurando una recepción eficiente y ordenada. 
    
    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-0.bg-img-blue
        h3.col.px-2.mb-0.mx-5.text-white(data-aos="zoom-in-left") Preparación y despacho del pedido
        img.icon(src='@/assets/curso/tema1/icon.svg')
    
    p.mb-4 A continuación, se describen los pasos para realizar la preparación y despacho en sus diferentes momentos :
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.col-md-12.col-12
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row.col-xl-11.m-auto(titulo="Al iniciar")
            ul.lista-ul.ps-2
              li.d-flex.mb-0
                i.fas.fa-circle-check
                p.mb-0 Recibo del pedido.
              li.d-flex.mb-0
                i.fas.fa-circle-check
                p.mb-0 Verificación del cupo de crédito.
              li.d-flex.mb-0
                i.fas.fa-circle-check
                p.mb-0 Verificación de condiciones comerciales.
              li.d-flex.mb-0
                i.fas.fa-circle-check
                p.mb-0 Poder garantizar (proveedor) que el cliente tiene las certificaciones para productos de uso controlado.
            p.mb-0 #[b Nota:] en el caso de productos de uso controlado, es importante que la orden de compra se genere por separado de los productos no controlados con el fin de facilitar el control de entes reguladores.
          .row.col-xl-11.m-auto(titulo="Siguientes pasos")
            ul.lista-ul.ps-2
              li.d-flex.mb-0
                i.fas.fa-circle-check
                p.mb-0 Reserva de la mercancía.
              li.d-flex.mb-0
                i.fas.fa-circle-check
                p.mb-0 Generación de la lista de #[em picking] con el visto bueno de la persona encargada de asegurar la calidad del despacho al cliente.
              li.d-flex.mb-0
                i.fas.fa-circle-check
                p.mb-0 En el caso de operadores logísticos, el proveedor debe enviar las instrucciones de despacho.
              li.d-flex.mb-0
                i.fas.fa-circle-check
                p.mb-0 Preparación del pedido por parte del proveedor u operador logístico utilizando los mecanismos de seguridad acordados previamente, con el fin de garantizar el despacho de lo solicitado, en la calidad acordada y la facturación de cantidades iguales a las físicamente entregadas.
          .row.col-xl-11.m-auto(titulo="Preparación para el despacho")
            ul.lista-ul.ps-2
              li.d-flex.mb-0
                i.fas.fa-circle-check
                p.mb-0 En el caso de despacho de cajas mixtas, estibas mixtas, arrume de mercancía, la lista de empaque estará contenida en el “aviso de despacho”.
              li.d-flex.mb-0
                i.fas.fa-circle-check
                p.mb-0 Generación y envío del “aviso de despacho” hacia al cliente. Si no se tiene la capacidad de generar un aviso de despacho, el proveedor al pedir la cita debe especificar la cantidad y tipo de camiones que serán despachados para entregar la mercancía solicitada por el cliente.
              li.d-flex.mb-0
                i.fas.fa-circle-check
                p.mb-0 En los despachos de paqueteo, el proveedor debe incluir en la etiqueta de despacho (rótulo) el número de localización del punto de entrega simbolizado en código de barras. También aplica para las entregas en #[em cross docking] predistribuido.
          .row.col-xl-11.m-auto(titulo="Para finalizar")
            ul.lista-ul.ps-2
              li.d-flex.mb-0
                i.fas.fa-circle-check
                p.mb-0 Facturación registrando el número del sello de seguridad que lleve el vehículo, al igual que el número de estibas, cajas o recipientes. Se debe tener en cuenta la posibilidad de un carrusel de sellos para entregas parciales en varios almacenes. Nota: estos datos deben incluirse en el aviso de despacho cuando se aplica.
              li.d-flex.mb-0
                i.fas.fa-circle-check
                p.mb-0 Asegurar la calidad en la entrega, tanto de procesos como de productos en los cuales los industriales deben hacer uso de normas pertinentes.
              li.d-flex.mb-0
                i.fas.fa-circle-check
                p.mb-0 Cargue del vehículo y colocación de los sellos de seguridad o su equivalente.
      .col-lg-4(data-aos="fade-left" data-aos-delay="500")
        figure.m-auto.col-7.col-md-6.col-lg-12
          img(src="@/assets/curso/tema1/img22.png")  

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-0.bg-img-blue
        h3.col.px-2.mb-0.mx-5.text-white(data-aos="zoom-in-left") Transporte de la mercancía
        img.icon(src='@/assets/curso/tema1/icon.svg')
    
    p.mb-3 En lo que respecta al transporte de la mercancía, se deben considerar los pasos que a continuación se presentan:

    .row.justify-content-center.align-items-center
      .col-lg-4.col-md-7.col-7.mb-4
        img(src="@/assets/curso/tema1/img23.png")  
      .col-lg-8.col-md-12.col-12
        LineaTiempoD.color-acento-contenido
          .row(numero="1" titulo= "Al iniciar")
            .col-md-12.mb-2.mb-md-0.mx-0
              ul.lista-ul.ps-0
                li.d-flex.mb-1
                  i.fas.fa-circle-check
                  p.mb-0 Debe recibir las instrucciones de transporte del generador de la carga.
                li.d-flex.mb-1
                  i.fas.fa-circle-check
                  p.mb-0 Envía la confirmación de la reserva e indica los datos del vehículo, del funcionario, y la cantidad y tipos de vehículos a utilizar en el despacho.
                li.d-flex.mb-1
                  i.fas.fa-circle-check
                  p.mb-0 El vehículo llega al lugar y hora pactada para recoger la mercancía.
          .row(numero="2" titulo="Siguientes pasos")
            .col-md-12.mb-4.mb-md-0
              ul.lista-ul.ps-0
                li.d-flex.mb-1
                  i.fas.fa-circle-check
                  p.mb-0 Se hace el conteo del número de empaques y se verifica la calidad de los embalajes.
                li.d-flex.mb-1
                  i.fas.fa-circle-check
                  p.mb-0 En el caso del transporte masivo y semimasivo se colocan los sellos de seguridad teniendo en cuenta lo acordado con el cliente.
                li.d-flex.mb-1
                  i.fas.fa-circle-check
                  p.mb-0 Se recibe copia del aviso de despacho generado por el proveedor.
                li.d-flex.mb-1
                  i.fas.fa-circle-check
                  p.mb-0 Se tramitan los documentos de transporte: remesas, entre otros.
          
          .row(numero="3" titulo= "Preparación para el despacho")
            .col-md-12.mb-2.mb-md-0.mx-0
              ul.lista-ul.ps-0
                li.d-flex.mb-1
                  i.fas.fa-circle-check
                  p.mb-0 En los casos en los que la mercancía no es despachada directamente hacia los puntos de entrega, se valida el descargue y/o cargue del camión con los avisos del despacho, haciendo lectura de los códigos de barras en la mercancía transportada. En los casos de despacho por paqueteo, el código de barras de la etiqueta de despacho (rótulo) incluye el número de localización del punto de entrega.
                li.d-flex.mb-1
                  i.fas.fa-circle-check
                  p.mb-0 Entrega las mercancías en los puntos de despacho de acuerdo con las fechas y horas pactadas.

          .row(numero="4" titulo= "Para finalizar")
            .col-md-12.mb-2.mb-md-0.mx-0
              ul.lista-ul.ps-0
                li.d-flex.mb-1
                  i.fas.fa-circle-check
                  p.mb-0 Entrega las mercancías en los puntos de despacho de acuerdo con las fechas y horas pactadas.
                li.d-flex.mb-1
                  i.fas.fa-circle-check
                  p.mb-0 Recibe los documentos firmados de la entrega y, cuando aplique, el material de intercambio (activos retornables: estibas, canastillas, etc.) y las devoluciones.
                li.d-flex.mb-1
                  i.fas.fa-circle-check
                  p.mb-0 Recibe copia del aviso de recibo del cliente, y la solicitud de acciones correctivas, si es el caso.
                li.d-flex.mb-1
                  i.fas.fa-circle-check
                  p.mb-0 Envía la factura de los servicios prestados al generador de carga.
    
    .row.justify-content-center(data-aos="fade-down")
      .col-md-6.col-lg-6.mb-3
        .tarjeta-avatar
          img.my-5(src='@/assets/curso/tema1/img24.svg' alt='')
          .tarjeta.bg2
            .p-5
              h5.text-center.my-5.mb-4 Formatos
              p.text-center El formato principal es la orden de despacho, que se conforma por tres documentos: resumen de mercancía, planilla de entrega y la factura de venta, las cuales se consiguen al descargar y visualizar después de crear la orden de despacho en el sistema.
      .col-md-6.col-lg-6.mb-3
        .tarjeta-avatar
          img.my-5(src='@/assets/curso/tema1/img25.svg' alt='')
          .tarjeta.bg3
            .p-5
              h5.text-center.my-5.mb-4 Fichas técnicas
              p.text-center Son documentos que representan las particularidades principales, la estructura y las aplicaciones de un producto, aportando información detallada sobre los aspectos de este.
    
    separador
    #t_1_3.titulo-segundo.color-secundario
      h2 1.3 Datos 
    
    p.mb-4 #[em Big Data] se refiere a la capacidad de capturar y almacenar grandes volúmenes de datos, tanto estructurados como no estructurados. Más importante que el tamaño de estos datos es cómo la industria del #[em retail] puede utilizarlos para mejorar sus operaciones.
    p.mb-4 Las empresas han implementado sistemas de gestión de datos para atender las necesidades y requisitos operativos, garantizando un manejo ético y responsable de la información de los clientes.
    
    .row.justify-content-center.align-items-center.mb-3(data-aos="fade-down")
      .col-md-12.col-lg-8.mb-4
        .mb-4.d-flex
          .d-flex.flex-wrap.align-items-center.pe-0.bg-img-blue
            h3.col.px-2.mb-0.mx-5.text-white(data-aos="zoom-in-left") Importancia y manejo responsable  
            img.icon(src='@/assets/curso/tema1/icon.svg')
        p.mb-4 El proceso de almacenamiento exige una gestión responsable de la información, no solo para asegurar el proceso en sí mismo, sino también para manejar datos precisos que permitan responder a cada requerimiento. Esto hace necesario contar con un sistema de control eficiente.
        p.mb-4 En los centros de distribución se utilizan diversos elementos para el control adecuado de mercancías, como códigos de barras, GPS y RFID. Además, se emplea el EDI (Intercambio Electrónico de Datos), que permite una estructuración normada de datos con altos parámetros de calidad, facilitando un intercambio de información comercial sin ambigüedades.
        p.mb-2 El internet ha sido un medio propicio para las transacciones de negocios, pero esto ha requerido procesos internos más efectivos para responder a la creciente demanda. Esto ha llevado a manejar grandes cantidades de información de forma simultánea, garantizando la efectividad del proceso y permitiendo una toma de decisiones asertiva para lograr una operación eficiente, rápida y oportuna.
      .col-md-7.col-7.col-lg-4.mb-4
        img(src='@/assets/curso/tema1/img26.png' alt='')

    .row.justify-content-center(data-aos="fade-left")
      .col-lg-8.col-md-12.col-12
        .cajon.color-acento-contenido.p-4
          p.mb-0 El análisis de datos es fundamental en el #[em retail], ya que cada día, a cada hora y minuto, innumerables productos entran y salen de la sala de ventas. Con datos incorrectos, un #[em retail] que hace una suposición errónea puede perjudicar el control de su inventario. Para aprovechar mejor el poder de los datos, las empresas de #[em retail] necesitan emplear un equipo interno con tecnología avanzada en gestión de datos.




</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
