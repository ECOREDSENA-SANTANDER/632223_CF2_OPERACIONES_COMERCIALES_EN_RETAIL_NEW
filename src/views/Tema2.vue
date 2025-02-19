<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-secundario
      .titulo-principal__numero
        span 2
      h1 #[em Picking] y #[em packing] 
    
    .row.justify-content-center.align-items-center(data-aos="zoom-in-left")
      .col-lg-8.col-md-12.col-12
        .row.justify-content-center(data-aos="zoom-in-left")
          .col-lg-2.mb-3 
            img.img-a.img-t(src="@/assets/curso/tema2/img2.svg")
          .col-lg-10
            p.mb-4 El 
              strong.ro #[em picking]   
              |  es un proceso en el que el personal del almacén de una organización prepara los pedidos realizados por los clientes. El término proviene de la palabra inglesa "#[em to pick]", que significa seleccionar, y se refiere a un conjunto de acciones destinadas al acondicionamiento de un producto solicitado directamente según las especificaciones del cliente.
        .row.justify-content-center(data-aos="zoom-in-left")
          .col-lg-2.mb-3 
            img.img-a.img-t(src="@/assets/curso/tema2/img3.svg")
          .col-lg-10
            p.mb-4 El 
              strong.ro #[em packing]
              | , por otro lado, es una actividad que representa el embalaje. Consiste en preparar los productos recolectados durante la fase de #[em picking] para su envío. Esto implica llevar a cabo tareas de empaque, embalaje o envase, asegurando que los productos estén listos para su transporte y entrega. 
      .col-lg-4.col-md-7.col-7
        img(src="@/assets/curso/tema2/img1.png")
    
    separador
    #t_2_1.titulo-segundo.color-secundario
      h2 2.1 Envase
    
    p.mb-4 El envase es el recipiente que contiene el producto. Su elaboración puede utilizar diferentes materiales, siempre que cumplan con su función de contener, proteger, mantener, facilitar la manipulación y atraer a los clientes. Las funciones estéticas del envase son muy cuidadas, y también deben cumplir con la optimización del transporte, facilitando la conformación de unidades de carga con su diseño. El envase no se puede separar del producto y, en la mayoría de los casos, el consumo se realiza directamente desde él.
    
    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-0.bg-img-blue
        h3.col.px-2.mb-0.mx-5.text-white(data-aos="zoom-in-left") Características y tipos
        img.icon(src='@/assets/curso/tema1/icon.svg')

    p.mb-4 Existen muchos criterios para clasificar los envases. A continuación, se destacan dos: el tipo de cierre y el material de fabricación.
    p.mb-4 Por definición, los envases contienen y protegen productos, por lo que es fundamental que estén bien cerrados. Se identifican a continuación varios tipos de sistemas de cierre :

    TabsC.color-primario.mb-5(data-aos="zoom-in-left")
      .py-3.py-md-5(titulo="Tapones")
        .row.justify-content-center
          .col-lg-3.col-md-7.col-7.mb-4
            img.img-a.img-t(src='@/assets/curso/tema2/img4.png', alt='')
          .col-lg-8
            p.mb-5 Los tapones son el tipo de cierre por excelencia. Se encuentran en una amplia variedad de envases, como botellas, frascos, viales y tarros. Esta categoría es muy diversa y comprende numerosos tipos de cierres.
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-2.col-md-2
                img.img-a.img-t(src='@/assets/curso/tema2/img9.svg')
              .col-lg-10.col-md-10
                p #[b #[em Flip top:]] estos tapones presentan una bisagra que puede unirse al envase mediante rosca o a presión. Al abrirse, permiten la salida del producto a través de un orificio central. Son comunes en envases para alimentos, como aceites o salsas.
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-2.col-md-2
                img.img-a.img-t(src='@/assets/curso/tema2/img10.svg')
              .col-lg-10.col-md-10
                p #[b #[em Disc top]:] este tipo de tapón facilita el control de la cantidad de producto que se dispensa. Consiste en un disco que, al ser presionado hacia un lado, revela una abertura por la que sale el producto. Es habitual en productos cosméticos.
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-2.col-md-2
                img.img-a.img-t(src='@/assets/curso/tema2/img11.svg')
              .col-lg-10.col-md-10
                p #[b De seguridad:] estos tapones tienen sistemas de seguridad, como cierres especiales o sellados, que conservan el producto intacto y dificultan su apertura, especialmente para el cuidado de los niños. Son frecuentes en medicamentos.
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-2.col-md-2
                img.img-a.img-t(src='@/assets/curso/tema2/img12.svg')
              .col-lg-10.col-md-10
                p #[b Vasito dosificador:] muy común en la industria farmacéutica, este tapón sirve también como vasito para dosificar el producto.
      .py-3.py-md-4.bg26.px-3(titulo="Airless")
        .row.justify-content-center
          .col-lg-3.col-md-7.col-7.my-3
            img.img-a.img-t(src='@/assets/curso/tema2/img5.svg', alt='')
          .col-lg-8.my-3
            p.mb-5 Muy utilizado en envases de cosmética, su diseño permite dispensar el producto en la dosis deseada e impide la entrada de aire, manteniendo las condiciones del producto intactas.

      .py-3.py-md-4.bg26.px-3(titulo="Bombas")
        .row.justify-content-center
          .col-lg-3.col-md-7.col-7.my-3
            img.img-a.img-t(src='@/assets/curso/tema2/img6.svg', alt='')
          .col-lg-8.my-3
            p.mb-5 Los cierres y dispensadores tipo bomba son también muy comunes y se dividen en dos clases:
            .row.justify-content-center.mb-4
              .col-lg-2
                img.d-none.d-lg-block.img-a.img-t(src='@/assets/curso/tema2/img8.svg')
              .col-lg-10
                p.mb-3 #[b Dosificadoras:] liberan una cantidad determinada de producto al ser presionadas, siendo habituales en envases de productos de limpieza.
            .row.justify-content-center
              .col-lg-2
                img.d-none.d-lg-block.img-a.img-t(src='@/assets/curso/tema2/img7.svg')
              .col-lg-10
                p.mb-3 #[b Pulverizadoras:] estas bombas pulverizan una finísima capa de producto, lo que las hace muy adecuadas para la cosmética.   

    p.mb-4 El material en el que se fabrican los envases es otro criterio que permite clasificarlos fácilmente. Entre los más  comunes se encuentran:
    
    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-left")
      .col-lg-3.col-md-6.col-12.mb-4
        .bg4.p-4
          h4.mb-3.text-center Envases metálicos
          img.img-a.img-t(src='@/assets/curso/tema2/img13.svg', alt='').mb-4
          p.mb-4.text-center El aluminio es una elección usual, dada su ligereza.
      .col-lg-3.col-md-6.col-12.mb-4
        .bg5.p-4
          h4.mb-3.text-center Envases de vidrio
          img.img-a.img-t(src='@/assets/curso/tema2/img14.svg', alt='').mb-4
          p.mb-4.text-center Históricamente ha sido uno de los más utilizados debido a su rigidez.
      .col-lg-3.col-md-6.col-12.mb-4
        .bg4.p-4
          h4.mb-3.text-center Envases de plástico
          img.img-a.img-t(src='@/assets/curso/tema2/img15.svg', alt='').mb-4
          p.mb-4.text-center Por su versatilidad, los plásticos de todo tipo son el material más habitual en la actualidad.
      .col-lg-3.col-md-6.col-12.mb-4
        .bg5.p-4
          h4.mb-3.text-center Envases de otros materiales 
          img.img-a.img-t(src='@/assets/curso/tema2/img16.svg', alt='').mb-4
          p.mb-4.text-center Incluyen materiales híbridos o nuevos materiales como los bioplásticos. 
    
    .row.justify-content-center.mb-4(data-aos="zoom-in-left")
      .col-lg-8.col-md-12.col-12
        .cajon.color-secundario.p-4
          p.mb-0 Es posible clasificar los envases atendiendo a una infinidad de criterios: su reciclabilidad, su forma, su resistencia o rigidez, entre otros. 
    
    
    .row.fondo2.align-items-center.p-4.mb-0
      .col-lg-12.col-md-12.col-12.px-4
        .row.justify-content-center(data-aos="fade-down")

        .mb-4.d-flex
          .d-flex.flex-wrap.align-items-center.pe-0.bg-img-blue
            h3.col.px-2.mb-0.mx-5.text-white(data-aos="zoom-in-left") Funciones de los envases
            img.iconh(src='@/assets/curso/tema1/icon.svg')
        p.mb-4 Los envases tienen múltiples funciones, que pueden agruparse entre las principalmente utilitarias y las que aportan un valor añadido al producto.
          
        ul.lista-ul.ps-2.mb-2
          li.d-flex.mb-1
            i.fas.fa-car-side.camisaa
            p.mb-0 
              strong.ro Funciones utilitarias: 
              | estas funciones facilitan la interacción con el producto, por ejemplo:
        .row.justify-content-center.align-items-center.mb-4 
          .col-lg.col-md-6.col-6
            img.img-a.img-t(src='@/assets/curso/tema2/img17.svg', alt='').mb-3
            h4.mb-3.text-center Contener el producto.
          .col-lg.col-md-6.col-6
            img.img-a.img-t(src='@/assets/curso/tema2/img18.svg', alt='').mb-3
            h4.mb-3.text-center Albergar el producto.
          .col-lg.col-md-6.col-6
            img.img-a.img-t(src='@/assets/curso/tema2/img19.svg', alt='').mb-3
            h4.mb-3.text-center Proteger sus cualidades intactas.
          .col-lg.col-md-6.col-6
            img.img-a.img-t(src='@/assets/curso/tema2/img20.svg', alt='').mb-3
            h4.mb-3.text-center Conservar el producto durante más tiempo.
          .col-lg.col-md-6.col-6
            img.img-a.img-t(src='@/assets/curso/tema2/uli.svg', alt='').mb-3
            h4.mb-3.text-center Transportar más fácilmente el producto.
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-9.col-md-12.col-12
            ul.lista-ul.ps-0
              li.d-flex.mb-4
                i.fas.fa-car-side.camisaa
                p.mb-0 
                  strong.ro Funciones de valor añadido:
                  |  estas funciones van más allá del sentido práctico y aportan un valor extra, por ejemplo:
              li.d-flex.mb-1
                i.fas.fa-car-side.camisa
                p.mb-0 #[b Función estética:] hace que el envase resulte más atractivo para el consumidor y lo prefiera frente a otros productos similares.
              li.d-flex.mb-1
                i.fas.fa-car-side.camisa
                p.mb-0 #[b Función de #[em marketing:]] relacionada con cómo se vende o se publicita el producto.
              li.d-flex.mb-1
                i.fas.fa-car-side.camisa
                p.mb-0 #[b Etiquetado:] incluye información de gran utilidad sobre el producto y sus características.
              li.d-flex.mb-1
                i.fas.fa-car-side.camisa
                p.mb-0 #[b Información sobre la empresa:] proporciona datos de contacto y detalles sobre el fabricante.  
          .col-lg-3.col-md-7.col-7
            img.img-a.img-t.mb-4(src='@/assets/curso/tema2/img21.svg', alt='')

    separador
    #t_2_2.titulo-segundo.color-secundario
      h2 2.2 Empaque
      
    .row.justify-content-center.align-items-center.mb-4 
      .col-lg-4.col-md-9.col-9
        img.img-a.img-t(src='@/assets/curso/tema2/img22.png', alt='').mb-3
      .col-lg-8.col-md-12.col-12
        p.mb-4 El empaque es la acción de introducir los productos en los embalajes secundarios. Es importante saber elegir el empaque adecuado, aunque las empresas suelen tener definidos los tipos de embalajes a utilizar y disponen de una gran cantidad de ellos para estas tareas. El objetivo principal es asegurar la disposición del producto con una buena sujeción, protegido de golpes y vibraciones. Además, es fundamental optimizar el espacio, empacando el mayor número de productos posible en un mismo embalaje sin comprometer la protección. Las dimensiones del embalaje seleccionado deben ayudar a maximizar el espacio de la unidad de carga final. 
    
    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-0.bg-img-blue
        h3.col.px-2.mb-0.mx-5.text-white(data-aos="zoom-in-left") Características y tipos
        img.icon(src='@/assets/curso/tema1/icon.svg')
    
    p.mb-4 Un empaque ideal debe cumplir con cuatro  funciones básicas:

    .row
      .col-lg-12.mb-4.mb-lg-0(data-aos="fade-right")
        TabsA.color-primario
          .tarjeta.color-acento-botones.bg7.p-4(titulo="Contener")
            .row.justify-content-center.align-items-center
              .col-lg-4.col-md-10.col-10
                img.img-a.img-t(src='@/assets/curso/tema2/img23.svg', alt='').mb-3
              .col-lg-8.col-md-12.col-12
                p.mb-4 En ocasiones, un empaque puede llegar a transmitir aromas o microorganismos que contaminan las propiedades de un producto, a esto se le conoce como baja compatibilidad y puede llegar a afectar el sabor y/o consistencia del producto.
            
          .tarjeta.color-acento-botones.bg7.p-4(titulo="Compatibilidad")
            .row.justify-content-center.align-items-center
              .col-lg-4.col-md-10.col-10
                img.img-a.img-t(src='@/assets/curso/tema2/img24.svg', alt='').mb-3
              .col-lg-8.col-md-12.col-12
                p.mb-4 Esta es la función principal de un empaque. Usualmente, los costales y las cajas poseen indicadores de cuánto peso pueden soportar.
          
          .tarjeta.color-acento-botones.bg7.p-4(titulo="Retener")
            .row.justify-content-center.align-items-center
              .col-lg-4.col-md-10.col-10
                img.img-a.img-t(src='@/assets/curso/tema2/img25.png', alt='').mb-3
              .col-lg-8.col-md-12.col-12
                p.mb-4 El producto no debe de perder ninguno de sus atributos físicos.
          
          .tarjeta.color-acento-botones.bg7.p-4(titulo="Práctico")
            .row.justify-content-center.align-items-center
              .col-lg-4.col-md-10.col-10
                img.img-a.img-t(src='@/assets/curso/tema2/img26.png', alt='').mb-3
              .col-lg-8.col-md-12.col-12
                p.mb-4 El empaque perfecto debe ser práctico. En pocas palabras, es aquel que disminuye tiempo de empaquetado porque se arma, se llena y se cierra fácil.

    separador
    #t_2_3.titulo-segundo.color-secundario
      h2 2.3 Embalaje

    p.mb-4 El embalaje es todo aquello necesario en el transcurso de acondicionar los productos para protegerlos, y/o agruparlos de manera temporal pensando en su manipulación, transporte y almacenamiento. Finalmente, el embalaje es el envoltorio o protección de las mercancías. 
    
    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-0.bg-img-blue
        h3.col.px-2.mb-0.mx-5.text-white(data-aos="zoom-in-left") Características y tipos
        img.icon(src='@/assets/curso/tema1/icon.svg')
    

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      .col-lg-8.col-12
        .bloque-texto-g.color-acento-contenido.p-lg-5.p-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/BG.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-4.py-lg-6.pe-lg-2.p-3
            p.mb-0
            ul.lista-ul.ps-0
              li.d-flex.mb-4
                i.fas.fa-car-side.camisa1
                p.mb-0 Tipos de embalaje primario, secundario y terciario.
              li.d-flex.mb-4
                i.fas.fa-car-side.camisa1
                p.mb-0 Tipos de embalaje según su material. 
              li.d-flex.mb-0
                i.fas.fa-car-side.camisa1
                p.mb-0 Clases de embalaje según su función.
    
    
    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/tema2/iconot.svg', alt='')
        h3.mb-0.ms-2 Embalaje primario 

    p.mb-4 El embalaje primario es el que está en contacto directo con el producto. No solo cumple una función de contención, sino que también lo protege del exterior, convirtiéndose en la primera capa de protección. Este tipo de embalaje, también conocido como embalaje minorista o principal, cumple una función comercial importante al atraer y persuadir al consumidor.
    p.mb-4 El embalaje primario es la primera carta de presentación del producto, ayudando a impulsar la compra. Un embalaje atractivo puede ofrecer una ventaja competitiva al destacar frente a otros productos en el mercado.
    p.mb-4 A continuación, se presentan algunos ejemplos: 
    
    .row.justify-content-center.align-items-center(data-aos="fade-down").mb-4
      .col-md-6.col-lg-4.mb-3
        .tarjeta-avatar
          img.my-2(src='@/assets/curso/tema2/img27.svg' alt='')
          .tarjeta.bg35.p-4
            p.text-center.my-5 #[b El tarro de plástico de una crema hidratante.]
      .col-md-6.col-lg-4.mb-3
        .tarjeta-avatar
          img.my-2(src='@/assets/curso/tema2/img28.svg' alt='')
          .tarjeta.bg34.p-4
            p.text-center.my-5 #[b La lata de un refresco.]
      .col-md-6.col-lg-4.mb-3
        .tarjeta-avatar
          img.my-2(src='@/assets/curso/tema2/img29.svg' alt='')
          .tarjeta.bg34.p-4
            p.text-center.my-5 #[b La botella de vidrio que contiene un vino.]

        
    .row.justify-content-center.mb-5(data-aos="zoom-in-left")
      .col-lg-8.col-md-12.col-12
        .cajon.color-secundario.p-4
          p.mb-0 En definitiva, el embalaje primario podría definirse como el envoltorio pensado para constituir una unidad del punto de venta que va a adquirir un consumidor final. 
    
    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/tema2/iconot.svg', alt='')
        h3.mb-0.ms-2 Embalaje secundario 
    
    p.mb-0 El embalaje secundario cumple varios objetivos y funciones. 
    
    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-md-6.col-lg-6.mb-3
        .tarjeta-avatar
          img.my-5(src='@/assets/curso/tema2/img30.svg' alt='')
          .tarjeta.bg2
            .p-5
              h5.text-center.my-5.mb-4.mx-5 A nivel logístico
              p.text-center.mx-5 Facilita el almacenamiento y transporte de los productos. 
      .col-md-6.col-lg-6.mb-3
        .tarjeta-avatar
          img.my-5(src='@/assets/curso/tema2/img31.svg' alt='')
          .tarjeta.bg3
            .p-5
              h5.text-center.my-5.mb-4 A nivel comercial
              p.text-center Puede utilizarse con fines publicitarios y de exhibición en superficies como supermercados y tiendas minoristas. 
    
    p.mb-4 En ocasiones, el embalaje secundario se superpone con el embalaje primario e incluso con el terciario. Un ejemplo claro de este tipo de embalaje es la caja de cartón que mantiene juntas varias unidades de leche formando un paquete.
    
    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/tema2/iconot.svg', alt='')
        h3.mb-0.ms-2 Embalaje terciario
    
    .row.justify-content-center.align-items-center
      .col-lg-8.col-md-12.col-12.mb-4
        p.mb-4 El embalaje terciario agrupa productos que ya poseen embalaje primario y secundario. Permite consolidar cargas de productos de forma segura y facilita su manejo. Las empresas utilizan este tipo de embalaje en sus procesos de distribución y envíos, independientemente del tipo de producto. Un ejemplo común es la paletización, donde se organizan diferentes cajas de productos con separadores y plástico envolvente .
        .row.justify-content-center.mb-2
          .col-lg-12.col-md-12.col-12
            .cajon.color-secundario.p-4
              p.mb-0 Los tres tipos de embalaje guardan una estrecha relación entre ellos y con los distintos eslabones de la cadena de suministro. El embalaje primario está más relacionado con los consumidores finales, mientras que el secundario y el terciario se utilizan principalmente en los procesos de distribución entre fabricantes y distribuidores. 
      .col-lg-4.col-md-7.col-7
        img(src="@/assets/curso/tema2/img32.png")




</template>

<script>
export default {
  name: 'Tema2',
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
