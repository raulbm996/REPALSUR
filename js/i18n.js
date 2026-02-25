// ============================================================
// REPALSUR – Sistema de traducción ES/EN
// ============================================================

const translations = {

    // ── NAVEGACIÓN ──────────────────────────────────────────
    "nav.inicio": { es: "Inicio", en: "Home" },
    "nav.servicios": { es: "Servicios", en: "Services" },
    "nav.productos": { es: "Productos", en: "Products" },
    "nav.nosotros": { es: "Nosotros", en: "About Us" },
    "nav.contacto": { es: "Contacto", en: "Contact" },
    "nav.noticias": { es: "Noticias", en: "News" },

    // ── FOOTER ──────────────────────────────────────────────
    "footer.sobre": { es: "Sobre Nosotros", en: "About Us" },
    "footer.sobre.desc": {
        es: "Ofrecemos a nuestros clientes compra-venta de palets usados, fabricación de palets nuevos y servicio de reparación.",
        en: "We offer our customers buying and selling of used pallets, manufacturing of new pallets and repair services."
    },
    "footer.encuentranos": { es: "Encuéntranos en:", en: "Find us on:" },
    "footer.donde": { es: "Donde Estamos", en: "Where We Are" },
    "footer.contacto": { es: "Contacto", en: "Contact" },
    "footer.privacy": {
        es: 'He leído y acepto la <a href="aviso-legal.html">política de privacidad</a>',
        en: 'I have read and accept the <a href="aviso-legal.html">privacy policy</a>'
    },
    "footer.send": { es: "Enviar Mensaje", en: "Send Message" },
    "footer.copyright": {
        es: 'Copyright &copy; 2026 - REPALSUR | Todos los derechos reservados | <a href="aviso-legal.html">Aviso legal y Política de Privacidad</a> | <a href="politica-cookies.html">Política de Cookies</a>',
        en: 'Copyright &copy; 2026 - REPALSUR | All rights reserved | <a href="aviso-legal.html">Legal Notice and Privacy Policy</a> | <a href="politica-cookies.html">Cookie Policy</a>'
    },

    // ── COOKIES BANNER ──────────────────────────────────────
    "cookies.text": {
        es: 'Si continúas navegando por esta web, entendemos que aceptas <a href="politica-cookies.html">las cookies que usamos</a> para mejorar nuestros servicios.',
        en: 'If you continue browsing this website, we understand that you accept <a href="politica-cookies.html">the cookies we use</a> to improve our services.'
    },
    "cookies.necessary": { es: "Aceptar las obligatorias", en: "Accept required only" },
    "cookies.accept": { es: "Aceptar cookies", en: "Accept cookies" },

    // ── INDEX – HERO ────────────────────────────────────────
    "index.hero.title": {
        es: 'REPAL<span>SUR</span>: Más de tres décadas de experiencia, dedicados a la <span>excelencia</span> en palets de madera',
        en: 'REPAL<span>SUR</span>: Over three decades of experience, dedicated to <span>excellence</span> in wooden pallets'
    },
    "index.hero.subtitle": {
        es: "Compra-venta de palets usados, fabricación de palets nuevos y servicio integral de reparación para optimizar tu logística.",
        en: "Buying and selling used pallets, manufacturing new pallets and comprehensive repair service to optimize your logistics."
    },
    "index.hero.btn1": { es: "Ver más", en: "Learn more" },
    "index.hero.btn2": { es: "Conócenos", en: "About Us" },

    // ── INDEX – NOSOTROS ────────────────────────────────────
    "index.nosotros.title": { es: "Nosotros", en: "About Us" },
    "index.nosotros.p1": {
        es: "En Repalsur nos dedicamos a brindar soluciones completas dentro del sector de los palets, garantizando un alto estándar de calidad, eficiencia y responsabilidad ambiental en cada uno de nuestros servicios.",
        en: "At Repalsur we are dedicated to providing complete solutions within the pallet sector, guaranteeing a high standard of quality, efficiency and environmental responsibility in each of our services."
    },
    "index.nosotros.p2": {
        es: "Nuestra amplia experiencia nos ha posicionado como un referente en la compra-venta de palets usados, en la producción de palets nuevos y en el mantenimiento a través de un servicio integral de reparación.",
        en: "Our extensive experience has positioned us as a benchmark in the buying and selling of used pallets, in the production of new pallets and in maintenance through a comprehensive repair service."
    },
    "index.nosotros.btn": { es: "Saber más", en: "Learn more" },

    // ── INDEX – SERVICIOS ───────────────────────────────────
    "index.servicios.title": { es: "Servicios", en: "Services" },
    "index.serv.recuperacion": { es: "Recuperación", en: "Recovery" },
    "index.serv.recuperacion.desc": {
        es: "Recogida y recuperación de palets usados para darles una segunda vida.",
        en: "Collection and recovery of used pallets to give them a second life."
    },
    "index.serv.compraventa": { es: "Compraventa", en: "Buying & Selling" },
    "index.serv.compraventa.desc": {
        es: "Compra y venta de palets usados de alta calidad, inspeccionados.",
        en: "Buying and selling of high quality used pallets, inspected."
    },
    "index.serv.distribucion": { es: "Distribución", en: "Distribution" },
    "index.serv.distribucion.desc": {
        es: "Servicio de distribución y logística de palets adaptado a cada cliente.",
        en: "Pallet distribution and logistics service adapted to each customer."
    },

    // ── INDEX – PRODUCTOS ───────────────────────────────────
    "index.productos.title": { es: "Productos", en: "Products" },
    "index.prod.nuevos": { es: "Palets Nuevos", en: "New Pallets" },
    "index.prod.nuevos.desc": {
        es: "Fabricamos palets nuevos a medida, con materiales de primera calidad.",
        en: "We manufacture custom new pallets with top quality materials."
    },
    "index.prod.segundo": { es: "Palets de Segundo Uso", en: "Second-Hand Pallets" },
    "index.prod.segundo.desc": {
        es: "Palets usados reacondicionados y revisados, económicos y sostenibles.",
        en: "Refurbished and inspected used pallets, affordable and sustainable."
    },

    // ── INDEX – PRESUPUESTO ─────────────────────────────────
    "index.presupuesto.title": { es: "Solicítanos tu presupuesto", en: "Request a quote" },
    "index.presupuesto.desc": {
        es: "¿Necesitas palets para tu empresa? Cuéntanos lo que necesitas y te ofreceremos la mejor solución.",
        en: "Do you need pallets for your business? Tell us what you need and we will offer you the best solution."
    },
    "index.presupuesto.btn": { es: "Solicitar Presupuesto", en: "Request Quote" },

    // ── INDEX – NOTICIAS ────────────────────────────────────
    "index.noticias.title": { es: "Noticias", en: "News" },
    "index.not1.title": {
        es: "Guía completa sobre la compra-venta de palets usados",
        en: "Complete guide on buying and selling used pallets"
    },
    "index.not1.desc": {
        es: "La compra-venta de palets usados es una solución eficiente y sostenible para muchas empresas.",
        en: "Buying and selling used pallets is an efficient and sustainable solution for many companies."
    },
    "index.not2.title": {
        es: "Fabricación de palets nuevos: calidad y adaptabilidad",
        en: "New pallet manufacturing: quality and adaptability"
    },
    "index.not2.desc": {
        es: "Los palets nuevos son ideales para empresas que requieren fiabilidad y personalización en su logística.",
        en: "New pallets are ideal for companies that require reliability and customization in their logistics."
    },
    "index.not3.title": {
        es: "Reparación de palets: ahorro y sostenibilidad",
        en: "Pallet repair: savings and sustainability"
    },
    "index.not3.desc": {
        es: "Reparar palets es la mejor solución para ahorrar costes y cuidar el medio ambiente.",
        en: "Repairing pallets is the best solution to save costs and care for the environment."
    },
    "index.not4.title": {
        es: "Beneficios de usar palets de calidad en tu negocio",
        en: "Benefits of using quality pallets in your business"
    },
    "index.not4.desc": {
        es: "Utilizar palets de calidad es clave para garantizar una logística eficiente y segura.",
        en: "Using quality pallets is key to ensuring efficient and safe logistics."
    },
    "readmore": { es: 'Leer más <i class="fas fa-arrow-right"></i>', en: 'Read more <i class="fas fa-arrow-right"></i>' },

    // ── SERVICIOS PAGE ──────────────────────────────────────
    "serv.banner.title": { es: "Servicios", en: "Services" },
    "serv.banner.bread": { es: '<a href="index.html">INICIO</a> / SERVICIOS', en: '<a href="index.html">HOME</a> / SERVICES' },
    "serv.section.title": { es: "Nuestros Servicios", en: "Our Services" },
    "serv.section.desc": {
        es: "Ofrecemos soluciones integrales para el sector logístico con los más altos estándares de calidad y sostenibilidad.",
        en: "We offer comprehensive solutions for the logistics sector with the highest standards of quality and sustainability."
    },
    "serv.card.recuperacion": { es: "Recuperación", en: "Recovery" },
    "serv.card.recuperacion.desc": {
        es: "Recogida y recuperación de palets usados para darles una segunda vida, contribuyendo a la sostenibilidad.",
        en: "Collection and recovery of used pallets to give them a second life, contributing to sustainability."
    },
    "serv.card.compraventa": { es: "Compraventa", en: "Buying & Selling" },
    "serv.card.compraventa.desc": {
        es: "Compra y venta de palets usados de alta calidad, inspeccionados para garantizar funcionalidad.",
        en: "Buying and selling of high quality used pallets, inspected to ensure functionality."
    },
    "serv.card.distribucion": { es: "Distribución", en: "Distribution" },
    "serv.card.distribucion.desc": {
        es: "Servicio de distribución y logística de palets adaptado a las necesidades de cada cliente.",
        en: "Pallet distribution and logistics service adapted to each customer's needs."
    },
    // Detalle Recuperación
    "serv.det.recuperacion.title": { es: "Recuperación", en: "Recovery" },
    "serv.det.recuperacion.desc": {
        es: "Nuestro servicio de recuperación se centra en la recogida de palets usados en las instalaciones de nuestros clientes. Mediante un proceso de selección riguroso, clasificamos los palets según su estado y los destinamos a reparación, reciclaje o reutilización directa.",
        en: "Our recovery service focuses on collecting used pallets at our customers' facilities. Through a rigorous selection process, we classify pallets according to their condition and allocate them for repair, recycling or direct reuse."
    },
    "serv.det.recuperacion.f1": {
        es: "Contribuimos activamente a la economía circular y la reducción de residuos",
        en: "We actively contribute to the circular economy and waste reduction"
    },
    "serv.det.recuperacion.f2": {
        es: "Recogida rápida y programada según tus necesidades",
        en: "Fast and scheduled collection according to your needs"
    },
    "serv.det.recuperacion.f3": {
        es: "Servicio económico que optimiza tus costes logísticos",
        en: "Cost-effective service that optimizes your logistics costs"
    },
    // Detalle Compraventa
    "serv.det.compraventa.title": { es: "Compraventa", en: "Buying & Selling" },
    "serv.det.compraventa.desc": {
        es: "Compramos y vendemos palets usados en grandes cantidades. Cada palet es inspeccionado y clasificado para garantizar que cumple con los estándares de calidad necesarios para su reutilización en procesos logísticos exigentes.",
        en: "We buy and sell used pallets in large quantities. Each pallet is inspected and classified to ensure it meets the quality standards required for reuse in demanding logistics processes."
    },
    "serv.det.compraventa.f1": {
        es: "Inspección rigurosa de calidad en cada unidad",
        en: "Rigorous quality inspection of each unit"
    },
    "serv.det.compraventa.f2": {
        es: "Gran stock disponible de diversas medidas y tipos",
        en: "Large stock available in various sizes and types"
    },
    "serv.det.compraventa.f3": {
        es: "Precios competitivos y condiciones flexibles",
        en: "Competitive prices and flexible terms"
    },
    // Detalle Distribución
    "serv.det.distribucion.title": { es: "Distribución", en: "Distribution" },
    "serv.det.distribucion.desc": {
        es: "Contamos con una flota propia que nos permite realizar entregas rápidas y eficientes en toda la región. Nuestro servicio de distribución se adapta a los plazos y volúmenes que necesites, garantizando puntualidad y fiabilidad.",
        en: "We have our own fleet that allows us to make fast and efficient deliveries throughout the region. Our distribution service adapts to the deadlines and volumes you need, guaranteeing punctuality and reliability."
    },
    "serv.det.distribucion.f1": {
        es: "Entregas rápidas con flota propia",
        en: "Fast deliveries with own fleet"
    },
    "serv.det.distribucion.f2": {
        es: "Cobertura en toda Andalucía y zonas limítrofes",
        en: "Coverage throughout Andalusia and bordering areas"
    },
    "serv.det.distribucion.f3": {
        es: "Entregas programadas y bajo demanda",
        en: "Scheduled and on-demand deliveries"
    },
    "serv.presupuesto.title": { es: "Solicítanos tu presupuesto", en: "Request a quote" },
    "serv.presupuesto.desc": {
        es: "¿Necesitas alguno de nuestros servicios? Contacta con nosotros y te asesoraremos sin compromiso.",
        en: "Do you need any of our services? Contact us and we will advise you without obligation."
    },
    "serv.presupuesto.btn": { es: "Solicitar Presupuesto", en: "Request Quote" },

    // ── PRODUCTOS PAGE ──────────────────────────────────────
    "prod.banner.title": { es: "Productos", en: "Products" },
    "prod.banner.bread": { es: '<a href="index.html">INICIO</a> / PRODUCTOS', en: '<a href="index.html">HOME</a> / PRODUCTS' },
    "prod.section.title": { es: "Nuestros Productos", en: "Our Products" },
    "prod.section.desc": {
        es: "Ofrecemos palets nuevos a medida y palets de segundo uso reacondicionados, adaptados a las necesidades de cada cliente.",
        en: "We offer custom new pallets and refurbished second-hand pallets, adapted to each customer's needs."
    },
    "prod.card.nuevos": { es: "Palets Nuevos", en: "New Pallets" },
    "prod.card.nuevos.desc": {
        es: "Fabricación a medida con materiales de primera calidad.",
        en: "Custom manufacturing with top quality materials."
    },
    "prod.card.segundo": { es: "Palets de Segundo Uso", en: "Second-Hand Pallets" },
    "prod.card.segundo.desc": {
        es: "Palets reacondicionados económicos y sostenibles.",
        en: "Affordable and sustainable refurbished pallets."
    },
    // Detalle nuevos
    "prod.det.nuevos.title": { es: "Palets Nuevos", en: "New Pallets" },
    "prod.det.nuevos.p1": {
        es: "Los palets nuevos son ideales para empresas que requieren fiabilidad y personalización en su logística. Fabricamos palets adaptados a las necesidades específicas de cada cliente, utilizando materiales de primera calidad.",
        en: "New pallets are ideal for companies that require reliability and customization in their logistics. We manufacture pallets adapted to the specific needs of each customer, using top quality materials."
    },
    "prod.det.nuevos.p2": { es: "¿Por qué elegir palets nuevos?", en: "Why choose new pallets?" },
    "prod.det.nuevos.li1": {
        es: "<strong>Resistencia garantizada:</strong> Materiales de alta calidad y durabilidad.",
        en: "<strong>Guaranteed resistance:</strong> High quality and durable materials."
    },
    "prod.det.nuevos.li2": {
        es: "<strong>Personalización:</strong> Fabricamos palets a medida, según las dimensiones y necesidades.",
        en: "<strong>Customization:</strong> We manufacture custom pallets according to dimensions and needs."
    },
    "prod.det.nuevos.li3": {
        es: "<strong>Cumplimiento normativo:</strong> Tratamientos especiales como el estándar NIMF-15.",
        en: "<strong>Regulatory compliance:</strong> Special treatments such as the ISPM-15 standard."
    },
    "prod.det.nuevos.li4": {
        es: "<strong>Versatilidad:</strong> Palets para exportación, industria, alimentación y más.",
        en: "<strong>Versatility:</strong> Pallets for export, industry, food and more."
    },
    "prod.det.nuevos.btn": { es: "Solicitar información", en: "Request information" },
    // Detalle segundo uso
    "prod.det.segundo.title": { es: "Palets de Segundo Uso", en: "Second-Hand Pallets" },
    "prod.det.segundo.p1": {
        es: "Nuestros palets de segundo uso son una solución económica y sostenible. Cada palet es cuidadosamente seleccionado, revisado y reacondicionado para garantizar su funcionalidad y resistencia en procesos logísticos.",
        en: "Our second-hand pallets are an affordable and sustainable solution. Each pallet is carefully selected, inspected and refurbished to ensure its functionality and resistance in logistics processes."
    },
    "prod.det.segundo.p2": { es: "Ventajas de los palets de segundo uso:", en: "Advantages of second-hand pallets:" },
    "prod.det.segundo.li1": {
        es: "<strong>Ahorro económico:</strong> Obtienes palets de calidad a un precio reducido.",
        en: "<strong>Cost savings:</strong> Get quality pallets at a reduced price."
    },
    "prod.det.segundo.li2": {
        es: "<strong>Sostenibilidad:</strong> Reduces residuos y apoyas la economía circular.",
        en: "<strong>Sustainability:</strong> Reduce waste and support the circular economy."
    },
    "prod.det.segundo.li3": {
        es: "<strong>Inspección:</strong> Todos los palets pasan un control de calidad antes de su venta.",
        en: "<strong>Inspection:</strong> All pallets undergo quality control before sale."
    },
    "prod.det.segundo.li4": {
        es: "<strong>Disponibilidad:</strong> Amplio stock de diversas medidas y formatos.",
        en: "<strong>Availability:</strong> Large stock of various sizes and formats."
    },
    "prod.det.segundo.btn": { es: "Solicitar información", en: "Request information" },
    "prod.presupuesto.title": { es: "Solicítanos tu presupuesto", en: "Request a quote" },
    "prod.presupuesto.desc": {
        es: "¿Necesitas palets nuevos o de segundo uso? Contáctanos para recibir un presupuesto personalizado.",
        en: "Do you need new or second-hand pallets? Contact us for a personalized quote."
    },
    "prod.presupuesto.btn": { es: "Solicitar Presupuesto", en: "Request Quote" },

    // ── NOSOTROS PAGE ───────────────────────────────────────
    "nos.banner.title": { es: "Nosotros", en: "About Us" },
    "nos.banner.bread": { es: '<a href="index.html">INICIO</a> / NOSOTROS', en: '<a href="index.html">HOME</a> / ABOUT US' },
    "nos.quienes.title": { es: "Quiénes Somos", en: "Who We Are" },
    "nos.quienes.p1": {
        es: "En Repalsur nos dedicamos a ofrecer soluciones integrales en el sector de los palets, asegurando calidad, eficiencia y sostenibilidad en cada servicio. Con años de experiencia, nos hemos convertido en un referente en la compra-venta de palets usados, la fabricación de palets nuevos y un completo servicio de reparación para empresas que buscan optimizar su logística.",
        en: "At Repalsur we are dedicated to offering comprehensive solutions in the pallet sector, ensuring quality, efficiency and sustainability in every service. With years of experience, we have become a benchmark in buying and selling used pallets, manufacturing new pallets and a complete repair service for companies looking to optimize their logistics."
    },
    "nos.quienes.p2": { es: "¿Qué ofrecemos?", en: "What do we offer?" },
    "nos.quienes.li1": {
        es: "<strong>Compra-venta de palets usados:</strong> Apostamos por la reutilización, ofreciendo palets usados de alta calidad, inspeccionados y reacondicionados para asegurar su funcionalidad y resistencia.",
        en: "<strong>Buying and selling used pallets:</strong> We are committed to reuse, offering high quality used pallets, inspected and refurbished to ensure their functionality and resistance."
    },
    "nos.quienes.li2": {
        es: "<strong>Fabricación de palets nuevos:</strong> Diseñamos y fabricamos palets nuevos adaptados a las necesidades específicas de cada cliente, con materiales de primera calidad.",
        en: "<strong>New pallet manufacturing:</strong> We design and manufacture new pallets adapted to the specific needs of each customer, with top quality materials."
    },
    "nos.quienes.li3": {
        es: "<strong>Servicio de reparación:</strong> Reparamos y reacondicionamos palets dañados para alargar su vida útil, ayudando a reducir costes y contribuir a la economía circular.",
        en: "<strong>Repair service:</strong> We repair and refurbish damaged pallets to extend their useful life, helping to reduce costs and contribute to the circular economy."
    },
    "nos.quienes.compromiso": {
        es: "<strong>Nuestro compromiso:</strong> En Repalsur, trabajamos con un enfoque orientado al cliente, garantizando soluciones rápidas y personalizadas. Nos esforzamos por ofrecer productos duraderos y un servicio de confianza, siempre con la mirada puesta en la sostenibilidad.",
        en: "<strong>Our commitment:</strong> At Repalsur, we work with a customer-oriented approach, guaranteeing fast and personalized solutions. We strive to offer durable products and a reliable service, always focused on sustainability."
    },
    "nos.historia.title": { es: "Nuestra Historia", en: "Our History" },
    "nos.historia.p1": {
        es: "Con más de 30 años de trayectoria, en Repalsur hemos dedicado toda una vida al reciclaje de palets de madera, así como a su fabricación, tratamiento y distribución para la logística de las empresas.",
        en: "With over 30 years of experience, at Repalsur we have dedicated a lifetime to recycling wooden pallets, as well as their manufacturing, treatment and distribution for business logistics."
    },
    "nos.historia.p2": {
        es: "Nuestros comienzos se forjaron en un entorno marcado por la necesidad de soluciones eficientes y sostenibles en el mundo del embalaje y el transporte, y desde entonces no hemos dejado de crecer ni de adaptar nuestros servicios a las cambiantes demandas del mercado.",
        en: "Our beginnings were forged in an environment marked by the need for efficient and sustainable solutions in the world of packaging and transport, and since then we have not stopped growing or adapting our services to the changing demands of the market."
    },
    "nos.historia.p3": {
        es: "A lo largo de estas tres décadas, nos hemos consolidado como profesionales en constante evolución. Entendemos que cada cliente requiere una atención personalizada y unas soluciones diseñadas a medida.",
        en: "Throughout these three decades, we have established ourselves as professionals in constant evolution. We understand that each client requires personalized attention and tailor-made solutions."
    },
    "nos.historia.p4": {
        es: "En Repalsur sabemos lo importante que es para las empresas contar con un servicio que no solo cumpla con sus necesidades logísticas, sino que también contribuya al cuidado del medio ambiente. Asumimos la responsabilidad de aplicar prácticas sostenibles, fomentando la economía circular y reduciendo el impacto ecológico.",
        en: "At Repalsur we know how important it is for companies to have a service that not only meets their logistics needs, but also contributes to caring for the environment. We take responsibility for applying sustainable practices, promoting the circular economy and reducing ecological impact."
    },
    "nos.presupuesto.title": { es: "Solicítanos tu presupuesto", en: "Request a quote" },
    "nos.presupuesto.desc": {
        es: "¿Necesitas palets para tu empresa? Cuéntanos lo que necesitas y te ofreceremos la mejor solución.",
        en: "Do you need pallets for your business? Tell us what you need and we will offer you the best solution."
    },
    "nos.presupuesto.btn": { es: "Solicitar Presupuesto", en: "Request Quote" },

    // ── CONTACTO PAGE ───────────────────────────────────────
    "cont.banner.title": { es: "Contacto", en: "Contact" },
    "cont.banner.bread": { es: '<a href="index.html">INICIO</a> / CONTACTO', en: '<a href="index.html">HOME</a> / CONTACT' },
    "cont.section.title": { es: "Ponte en Contacto", en: "Get in Touch" },
    "cont.section.desc": {
        es: "Estamos a tu disposición para resolver cualquier duda o solicitud. No dudes en contactarnos.",
        en: "We are at your disposal to resolve any doubt or request. Do not hesitate to contact us."
    },
    "cont.phone.title": { es: "Teléfono", en: "Phone" },
    "cont.email.title": { es: "Email", en: "Email" },
    "cont.address.title": { es: "Dirección", en: "Address" },
    "cont.form.title": { es: "Envíanos un Mensaje", en: "Send Us a Message" },
    "cont.form.desc": {
        es: "Rellena el formulario y nos pondremos en contacto contigo lo antes posible.",
        en: "Fill in the form and we will contact you as soon as possible."
    },
    "cont.form.nombre": { es: "Nombre *", en: "Name *" },
    "cont.form.email": { es: "Email *", en: "Email *" },
    "cont.form.telefono": { es: "Teléfono", en: "Phone" },
    "cont.form.asunto": { es: "Asunto", en: "Subject" },
    "cont.form.mensaje": { es: "Mensaje *", en: "Message *" },
    "cont.form.nombre.ph": { es: "Tu nombre", en: "Your name" },
    "cont.form.email.ph": { es: "Tu email", en: "Your email" },
    "cont.form.telefono.ph": { es: "Tu teléfono", en: "Your phone" },
    "cont.form.asunto.ph": { es: "Asunto del mensaje", en: "Message subject" },
    "cont.form.mensaje.ph": { es: "Escribe tu mensaje...", en: "Write your message..." },
    "cont.form.privacy": {
        es: 'He leído y acepto la <a href="aviso-legal.html">política de privacidad</a>',
        en: 'I have read and accept the <a href="aviso-legal.html">privacy policy</a>'
    },
    "cont.form.btn": { es: 'Enviar Mensaje <i class="fas fa-paper-plane"></i>', en: 'Send Message <i class="fas fa-paper-plane"></i>' },
    "cont.presupuesto.title": { es: "¿Necesitas un presupuesto?", en: "Need a quote?" },
    "cont.presupuesto.desc": {
        es: "Llámanos directamente o utiliza el formulario. Te respondemos en menos de 24 horas.",
        en: "Call us directly or use the form. We respond in less than 24 hours."
    },
    "cont.presupuesto.btn": { es: '<i class="fas fa-phone-alt"></i> 674 708 456', en: '<i class="fas fa-phone-alt"></i> 674 708 456' },

    // ── NOTICIAS PAGE ───────────────────────────────────────
    "not.banner.title": { es: "Noticias", en: "News" },
    "not.banner.bread": { es: '<a href="index.html">INICIO</a> / NOTICIAS', en: '<a href="index.html">HOME</a> / NEWS' },
    "not.section.title": { es: "Últimas Noticias", en: "Latest News" },
    "not.section.desc": {
        es: "Mantente informado con nuestras últimas novedades sobre el sector de palets, logística y sostenibilidad.",
        en: "Stay informed with our latest news about the pallet sector, logistics and sustainability."
    },
    "not.art1.title": {
        es: "Guía completa sobre la compra-venta de palets usados",
        en: "Complete guide on buying and selling used pallets"
    },
    "not.art1.desc": {
        es: "Descubre todo lo que necesitas saber sobre la compra y venta de palets de segunda mano. Te explicamos cómo seleccionar los mejores palets usados, qué criterios de calidad aplicar y cómo este mercado contribuye a la economía circular.",
        en: "Discover everything you need to know about buying and selling second-hand pallets. We explain how to select the best used pallets, what quality criteria to apply and how this market contributes to the circular economy."
    },
    "not.art2.title": {
        es: "El proceso de fabricación de palets nuevos a medida",
        en: "The custom new pallet manufacturing process"
    },
    "not.art2.desc": {
        es: "Te mostramos el proceso completo de fabricación de palets nuevos, desde la selección de la madera hasta el tratamiento fitosanitario. Conoce las ventajas de los palets fabricados a medida para tu empresa.",
        en: "We show you the complete new pallet manufacturing process, from wood selection to phytosanitary treatment. Learn about the advantages of custom-made pallets for your business."
    },
    "not.art3.title": {
        es: "La importancia de la reparación de palets en la cadena logística",
        en: "The importance of pallet repair in the logistics chain"
    },
    "not.art3.desc": {
        es: "Reparar palets no solo ahorra costes, sino que reduce el impacto ambiental. Descubre cómo nuestro servicio de reparación alarga la vida útil de tus palets y optimiza los recursos de tu empresa.",
        en: "Repairing pallets not only saves costs, but also reduces environmental impact. Discover how our repair service extends the useful life of your pallets and optimizes your company's resources."
    },
    "not.art4.title": {
        es: "Los beneficios de utilizar palets de calidad en tu empresa",
        en: "The benefits of using quality pallets in your business"
    },
    "not.art4.desc": {
        es: "Invertir en palets de calidad supone un ahorro a largo plazo. Te contamos los beneficios que aportan a la seguridad, eficiencia logística y cumplimiento normativo de tu negocio.",
        en: "Investing in quality pallets means long-term savings. We tell you about the benefits they bring to safety, logistics efficiency and regulatory compliance of your business."
    },
    "not.readmore": { es: 'Leer más <i class="fas fa-arrow-right"></i>', en: 'Read more <i class="fas fa-arrow-right"></i>' },
    "not.readless": { es: 'Leer menos <i class="fas fa-arrow-up"></i>', en: 'Read less <i class="fas fa-arrow-up"></i>' },

    "not.art1.full": {
        es: '<p>La compra-venta de palets usados se ha consolidado como una práctica esencial en el sector logístico. Las empresas que optan por esta solución no solo ahorran costes significativos, sino que también contribuyen activamente a la sostenibilidad medioambiental.</p><p><strong>¿Cómo seleccionar los mejores palets usados?</strong></p><p>A la hora de adquirir palets de segunda mano, es fundamental prestar atención a varios factores: el estado general de la madera, la ausencia de grietas profundas, la integridad de los tacos y la capacidad de carga. En Repalsur, cada palet pasa un riguroso control de calidad antes de ser puesto a la venta.</p><p><strong>Criterios de calidad</strong></p><p>Los palets se clasifican según su estado en diferentes categorías. Los de primera categoría presentan mínimas señales de uso y conservan toda su capacidad de carga original. Los de segunda categoría pueden tener pequeñas marcas pero siguen siendo perfectamente funcionales para la mayoría de aplicaciones logísticas.</p><p><strong>Contribución a la economía circular</strong></p><p>Reutilizar palets reduce la tala de árboles, disminuye los residuos en vertederos y minimiza la huella de carbono del sector logístico. Se estima que cada palet reutilizado evita la emisión de aproximadamente 20 kg de CO2 en comparación con la fabricación de uno nuevo.</p>',
        en: '<p>The buying and selling of used pallets has become an essential practice in the logistics sector. Companies that choose this solution not only save significant costs, but also actively contribute to environmental sustainability.</p><p><strong>How to select the best used pallets?</strong></p><p>When purchasing second-hand pallets, it is essential to pay attention to several factors: the general condition of the wood, the absence of deep cracks, the integrity of the blocks and the load capacity. At Repalsur, each pallet undergoes a rigorous quality control before being put up for sale.</p><p><strong>Quality criteria</strong></p><p>Pallets are classified according to their condition into different categories. First category pallets show minimal signs of use and retain their full original load capacity. Second category pallets may have small marks but remain perfectly functional for most logistics applications.</p><p><strong>Contribution to the circular economy</strong></p><p>Reusing pallets reduces logging, decreases landfill waste and minimizes the carbon footprint of the logistics sector. It is estimated that each reused pallet prevents the emission of approximately 20 kg of CO2 compared to manufacturing a new one.</p>'
    },
    "not.art2.full": {
        es: '<p>La fabricación de palets nuevos a medida es un proceso que combina tradición artesanal con tecnología moderna. En Repalsur, cada palet se diseña pensando en las necesidades específicas del cliente.</p><p><strong>Selección de la madera</strong></p><p>Todo comienza con la elección de la materia prima. Utilizamos madera de pino procedente de bosques gestionados de forma sostenible. La madera se inspecciona para verificar que cumple con los requisitos de humedad, densidad y resistencia necesarios.</p><p><strong>Proceso de fabricación</strong></p><p>Las tablas se cortan a las dimensiones exactas requeridas por el cliente. Posteriormente, se ensamblan mediante clavado neumático de alta precisión, garantizando una estructura sólida y duradera. Cada palet se fabrica según las medidas estándar europeas o según especificaciones personalizadas.</p><p><strong>Tratamiento fitosanitario (NIMF-15)</strong></p><p>Para palets destinados a exportación, aplicamos el tratamiento térmico según la norma internacional NIMF-15. Este proceso elimina plagas y organismos nocivos, permitiendo que los palets crucen fronteras sin restricciones fitosanitarias.</p><p><strong>Control de calidad final</strong></p><p>Antes de la entrega, cada lote pasa un control de calidad donde se verifican dimensiones, resistencia y acabado. Solo los palets que cumplen nuestros estándares llegan al cliente.</p>',
        en: '<p>Custom new pallet manufacturing is a process that combines traditional craftsmanship with modern technology. At Repalsur, each pallet is designed with the specific needs of the customer in mind.</p><p><strong>Wood selection</strong></p><p>Everything begins with choosing the raw material. We use pine wood from sustainably managed forests. The wood is inspected to verify that it meets the necessary requirements for moisture, density and strength.</p><p><strong>Manufacturing process</strong></p><p>The boards are cut to the exact dimensions required by the customer. They are then assembled using high-precision pneumatic nailing, ensuring a solid and durable structure. Each pallet is manufactured according to European standard dimensions or custom specifications.</p><p><strong>Phytosanitary treatment (ISPM-15)</strong></p><p>For pallets intended for export, we apply heat treatment according to the international standard ISPM-15. This process eliminates pests and harmful organisms, allowing pallets to cross borders without phytosanitary restrictions.</p><p><strong>Final quality control</strong></p><p>Before delivery, each batch undergoes quality control where dimensions, strength and finish are verified. Only pallets that meet our standards reach the customer.</p>'
    },
    "not.art3.full": {
        es: '<p>El servicio de reparación de palets es una de las soluciones más inteligentes para las empresas que buscan optimizar sus recursos logísticos. En lugar de desechar palets dañados, la reparación permite prolongar su vida útil de forma significativa.</p><p><strong>¿Qué tipo de daños se pueden reparar?</strong></p><p>Los daños más comunes en los palets incluyen tablas rotas, tacos desprendidos, clavos salientes y deformaciones por sobrecarga. En Repalsur contamos con un equipo especializado que evalúa cada palet y determina la reparación más adecuada.</p><p><strong>Proceso de reparación</strong></p><p>Nuestro proceso incluye la inspección visual y funcional del palet, la sustitución de piezas dañadas por otras en perfecto estado, el reclavado de elementos sueltos y una verificación final de resistencia. Todo ello se realiza con maquinaria profesional y materiales de calidad.</p><p><strong>Ahorro económico</strong></p><p>Reparar un palet puede costar hasta un 60% menos que adquirir uno nuevo. Para empresas que manejan grandes volúmenes, este ahorro se traduce en miles de euros al año.</p><p><strong>Impacto medioambiental positivo</strong></p><p>Cada palet reparado es un palet que no acaba en el vertedero. Además, se evita el consumo de nueva madera y la energía asociada a la fabricación. Es una apuesta clara por la sostenibilidad y la responsabilidad ambiental.</p>',
        en: '<p>The pallet repair service is one of the smartest solutions for companies looking to optimize their logistics resources. Instead of discarding damaged pallets, repair allows their useful life to be significantly extended.</p><p><strong>What types of damage can be repaired?</strong></p><p>The most common pallet damages include broken boards, detached blocks, protruding nails and deformations from overloading. At Repalsur we have a specialized team that evaluates each pallet and determines the most appropriate repair.</p><p><strong>Repair process</strong></p><p>Our process includes visual and functional inspection of the pallet, replacement of damaged parts with ones in perfect condition, re-nailing of loose elements and a final strength verification. All of this is done with professional machinery and quality materials.</p><p><strong>Economic savings</strong></p><p>Repairing a pallet can cost up to 60% less than purchasing a new one. For companies handling large volumes, this saving translates into thousands of euros per year.</p><p><strong>Positive environmental impact</strong></p><p>Every repaired pallet is a pallet that does not end up in landfill. In addition, the consumption of new wood and the energy associated with manufacturing is avoided. It is a clear commitment to sustainability and environmental responsibility.</p>'
    },
    "not.art4.full": {
        es: '<p>La calidad de los palets que utilizas en tu empresa tiene un impacto directo en la eficiencia de toda tu cadena logística. Optar por palets de calidad no es un gasto, sino una inversión con retorno garantizado.</p><p><strong>Seguridad en el transporte</strong></p><p>Los palets de calidad soportan las cargas especificadas sin deformarse ni romperse. Esto reduce el riesgo de accidentes durante el almacenamiento y el transporte, protegiendo tanto a los trabajadores como a la mercancía.</p><p><strong>Eficiencia logística</strong></p><p>Un palet en buen estado se manipula más rápido con carretillas y transpaletas. Las dimensiones precisas facilitan el apilamiento y el aprovechamiento del espacio en almacenes y camiones. Todo esto se traduce en operaciones más ágiles y menos tiempos muertos.</p><p><strong>Cumplimiento normativo</strong></p><p>Muchos sectores, como la alimentación o la farmacia, exigen que los palets cumplan normativas específicas de higiene y seguridad. Trabajar con proveedores de confianza como Repalsur garantiza que tus palets cumplen con todas las regulaciones aplicables.</p><p><strong>Ahorro a largo plazo</strong></p><p>Aunque un palet de calidad pueda tener un coste inicial ligeramente superior, su durabilidad hace que el coste por uso sea significativamente menor. Menos roturas, menos reemplazos y menos interrupciones en la cadena de suministro.</p>',
        en: '<p>The quality of the pallets you use in your business has a direct impact on the efficiency of your entire logistics chain. Choosing quality pallets is not an expense, but an investment with a guaranteed return.</p><p><strong>Transport safety</strong></p><p>Quality pallets support the specified loads without deforming or breaking. This reduces the risk of accidents during storage and transport, protecting both workers and goods.</p><p><strong>Logistics efficiency</strong></p><p>A pallet in good condition is handled faster with forklifts and pallet trucks. Precise dimensions facilitate stacking and space utilization in warehouses and trucks. All this translates into more agile operations and less downtime.</p><p><strong>Regulatory compliance</strong></p><p>Many sectors, such as food or pharmaceuticals, require pallets to comply with specific hygiene and safety regulations. Working with trusted suppliers like Repalsur guarantees that your pallets meet all applicable regulations.</p><p><strong>Long-term savings</strong></p><p>Although a quality pallet may have a slightly higher initial cost, its durability means that the cost per use is significantly lower. Fewer breakages, fewer replacements and fewer interruptions in the supply chain.</p>'
    },

    "not.presupuesto.title": { es: "Solicítanos tu presupuesto", en: "Request a quote" },
    "not.presupuesto.desc": {
        es: "¿Necesitas palets para tu empresa? Contáctanos y te ofrecemos la mejor solución.",
        en: "Do you need pallets for your business? Contact us and we will offer you the best solution."
    },
    "not.presupuesto.btn": { es: "Solicitar Presupuesto", en: "Request Quote" },


    // ── LEGAL Y COOKIES PAGES ───────────────────────────────
    "legal.banner.title": { es: "Aviso Legal y Política de Privacidad", en: "Legal Notice and Privacy Policy" },
    "legal.banner.bread": { es: '<a href="index.html">INICIO</a> / AVISO LEGAL', en: '<a href="index.html">HOME</a> / LEGAL NOTICE' },
    "cookies.banner.title": { es: "Política de Cookies", en: "Cookie Policy" },
    "cookies.banner.bread": { es: '<a href="index.html">INICIO</a> / POLÍTICA DE COOKIES', en: '<a href="index.html">HOME</a> / COOKIE POLICY' },

    "legal.content": {
        es: `<h2>1. Datos Identificativos</h2>
                <p>En cumplimiento del deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de
                    julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), a
                    continuación se reflejan los datos identificativos del titular:</p>
                <ul>
                    <li><strong>Denominación social:</strong> REPALSUR</li>
                    <li><strong>Domicilio:</strong> Polígono Industrial Santa Isabel, C. Pintores, 11, 41520 El Viso del
                        Alcor, Sevilla</li>
                    <li><strong>Teléfono:</strong> 674 708 456 / 955 946 460</li>
                    <li><strong>Email:</strong> info@repalsur.com</li>
                </ul>

                <h2>2. Objeto</h2>
                <p>El presente Aviso Legal regula el uso de la página web <strong>repalsur.com</strong> (en adelante,
                    "el sitio web"). El acceso al sitio web atribuye la condición de usuario del mismo e implica la
                    aceptación plena de todas las condiciones incluidas en este Aviso Legal. El usuario se compromete a
                    leer atentamente el presente Aviso Legal en cada una de las ocasiones en que acceda al sitio web.
                </p>

                <h2>3. Propiedad Intelectual e Industrial</h2>
                <p>Todos los contenidos del sitio web, incluyendo textos, fotografías, gráficos, imágenes, iconos,
                    tecnología, software, enlaces y demás contenidos audiovisuales o sonoros, así como su diseño gráfico
                    y códigos fuente, son propiedad intelectual de REPALSUR o de terceros, sin que puedan entenderse
                    cedidos al usuario ninguno de los derechos de explotación reconocidos por la normativa vigente en
                    materia de propiedad intelectual.</p>
                <p>Las marcas, nombres comerciales o signos distintivos son titularidad de REPALSUR o de terceros, sin
                    que pueda entenderse que el acceso al sitio web atribuya ningún derecho sobre los mismos.</p>

                <h2>4. Condiciones de Uso</h2>
                <p>El usuario se compromete a:</p>
                <ul>
                    <li>Hacer un uso adecuado y lícito del sitio web y de los contenidos y servicios, de conformidad con
                        la legislación aplicable.</li>
                    <li>No realizar actividades ilícitas o contrarias a la buena fe y al orden público.</li>
                    <li>No provocar daños en los sistemas físicos y lógicos del sitio web o de terceros.</li>
                    <li>No introducir o difundir virus informáticos o cualesquiera otros sistemas que sean susceptibles
                        de provocar daños.</li>
                </ul>

                <h2>5. Exclusión de Responsabilidad</h2>
                <p>REPALSUR no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza
                    que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de
                    disponibilidad del sitio web o la transmisión de virus o programas maliciosos en los contenidos, a
                    pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.</p>

                <h2>6. Enlaces</h2>
                <p>En el caso de que en el sitio web se dispusiesen enlaces o hipervínculos hacia otros sitios de
                    Internet, REPALSUR no ejercerá ningún tipo de control sobre dichos sitios y contenidos. En ningún
                    caso asumirá responsabilidad alguna por los contenidos de algún enlace perteneciente a un sitio web
                    ajeno.</p>

                <hr>

                <h2>Política de Privacidad</h2>

                <h3>1. Responsable del Tratamiento</h3>
                <ul>
                    <li><strong>Responsable:</strong> REPALSUR</li>
                    <li><strong>Dirección:</strong> Polígono Industrial Santa Isabel, C. Pintores, 11, 41520 El Viso del
                        Alcor, Sevilla</li>
                    <li><strong>Email:</strong> info@repalsur.com</li>
                    <li><strong>Teléfono:</strong> 674 708 456</li>
                </ul>

                <h3>2. Finalidad del Tratamiento</h3>
                <p>Los datos personales recogidos a través de los formularios de contacto del sitio web serán tratados
                    con las siguientes finalidades:</p>
                <ul>
                    <li>Responder a las consultas y solicitudes de información realizadas por los usuarios.</li>
                    <li>Gestionar presupuestos y solicitudes de servicio.</li>
                    <li>Mantener la comunicación comercial con los clientes, cuando hayan dado su consentimiento.</li>
                </ul>

                <h3>3. Legitimación</h3>
                <p>La base legal para el tratamiento de sus datos es:</p>
                <ul>
                    <li>El consentimiento del usuario al enviar el formulario de contacto.</li>
                    <li>El interés legítimo del responsable para gestionar las relaciones comerciales.</li>
                    <li>La ejecución de un contrato o relación precontractual.</li>
                </ul>

                <h3>4. Conservación de los Datos</h3>
                <p>Los datos personales proporcionados se conservarán mientras se mantenga la relación comercial o
                    durante los años necesarios para cumplir con las obligaciones legales. Cuando ya no sean necesarios,
                    se suprimirán con las medidas de seguridad adecuadas.</p>

                <h3>5. Destinatarios</h3>
                <p>Los datos no serán cedidos a terceros salvo obligación legal. No se realizan transferencias
                    internacionales de datos.</p>

                <h3>6. Derechos del Usuario</h3>
                <p>El usuario puede ejercer los siguientes derechos:</p>
                <ul>
                    <li><strong>Acceso:</strong> conocer qué datos personales estamos tratando.</li>
                    <li><strong>Rectificación:</strong> solicitar la corrección de datos inexactos.</li>
                    <li><strong>Supresión:</strong> solicitar la eliminación de sus datos.</li>
                    <li><strong>Oposición:</strong> oponerse al tratamiento de sus datos.</li>
                    <li><strong>Limitación del tratamiento:</strong> solicitar la limitación del uso de sus datos.</li>
                    <li><strong>Portabilidad:</strong> recibir sus datos en un formato estructurado.</li>
                </ul>
                <p>Para ejercer estos derechos, puede enviar un correo electrónico a <a
                        href="mailto:info@repalsur.com">info@repalsur.com</a> indicando el derecho que desea ejercer y
                    adjuntando copia de su DNI o documento identificativo.</p>
                <p>También tiene derecho a presentar una reclamación ante la <strong>Agencia Española de Protección de
                        Datos</strong> (<a href="https://www.aepd.es" target="_blank" rel="noopener">www.aepd.es</a>).
                </p>

                <h3>7. Medidas de Seguridad</h3>
                <p>REPALSUR ha adoptado las medidas técnicas y organizativas necesarias para garantizar la seguridad e
                    integridad de los datos de carácter personal, así como para evitar su alteración, pérdida,
                    tratamiento o acceso no autorizado.</p>

                <h3>8. Modificaciones</h3>
                <p>REPALSUR se reserva el derecho de modificar la presente Política de Privacidad para adaptarla a
                    novedades legislativas o jurisprudenciales, así como a prácticas de la industria. En dichos
                    supuestos, anunciará en esta página los cambios introducidos con razonable antelación a su puesta en
                    práctica.</p>

                <p><em>Última actualización: febrero de 2026</em></p>`,
        en: `
<h2>1. Identifying Data</h2>
<p>In compliance with the information duty contained in article 10 of Law 34/2002, of July 11, on Services of the Information Society and Electronic Commerce (LSSI-CE), the identifying data of the owner are provided below:</p>
<ul>
    <li><strong>Corporate Name:</strong> REPALSUR</li>
    <li><strong>Address:</strong> Polígono Industrial Santa Isabel, C. Pintores, 11, 41520 El Viso del Alcor, Sevilla</li>
    <li><strong>Phone:</strong> 674 708 456 / 955 946 460</li>
    <li><strong>Email:</strong> info@repalsur.com</li>
</ul>

<h2>2. Purpose</h2>
<p>This Legal Notice regulates the use of the website <strong>repalsur.com</strong> (hereinafter, "the website"). Accessing the website attributes the condition of user and implies full acceptance of all terms included in this Legal Notice. The user undertakes to carefully read this Legal Notice each time they access the website.</p>

<h2>3. Intellectual and Industrial Property</h2>
<p>All website contents, including texts, photographs, graphics, images, icons, technology, software, links and other audiovisual or audio contents, as well as its graphic design and source codes, are the intellectual property of REPALSUR or third parties. None of the exploitation rights recognized by current legislation on intellectual property can be considered transferred to the user.</p>
<p>Trademarks, trade names, or distinctive signs are the property of REPALSUR or third parties, and access to the website does not attribute any right over them.</p>

<h2>4. Terms of Use</h2>
<p>The user agrees to:</p>
<ul>
    <li>Make appropriate and lawful use of the website and its contents and services, in accordance with applicable legislation.</li>
    <li>Not engage in unlawful activities or those contrary to good faith and public order.</li>
    <li>Not cause damage to the physical and logical systems of the website or third parties.</li>
    <li>Not introduce or spread computer viruses or any other systems susceptible to causing damage.</li>
</ul>

<h2>5. Exclusion of Liability</h2>
<p>REPALSUR shall not be held liable, under any circumstances, for damages of any nature that may occur, including but not limited to: errors or omissions in content, lack of availability of the website or the transmission of viruses or malicious programs in content, despite having taken all necessary technological measures to prevent it.</p>

<h2>6. Links</h2>
<p>If the website features links or hyperlinks to other Internet sites, REPALSUR will not exercise any control over such sites and contents. In no case will it assume any liability for the contents of any link belonging to a third-party website.</p>

<hr>

<h2>Privacy Policy</h2>

<h3>1. Data Controller</h3>
<ul>
    <li><strong>Controller:</strong> REPALSUR</li>
    <li><strong>Address:</strong> Polígono Industrial Santa Isabel, C. Pintores, 11, 41520 El Viso del Alcor, Sevilla</li>
    <li><strong>Email:</strong> info@repalsur.com</li>
    <li><strong>Phone:</strong> 674 708 456</li>
</ul>

<h3>2. Purpose of Processing</h3>
<p>The personal data collected through the contact forms on the website will be processed for the following purposes:</p>
<ul>
    <li>To respond to queries and information requests made by users.</li>
    <li>To manage quotes and service requests.</li>
    <li>To maintain commercial communication with customers, provided they have given their consent.</li>
</ul>

<h3>3. Legitimacy</h3>
<p>The legal basis for processing your data is:</p>
<ul>
    <li>User consent when submitting the contact form.</li>
    <li>The legitimate interest of the controller in managing commercial relationships.</li>
    <li>The performance of a contract or pre-contractual relationship.</li>
</ul>

<h3>4. Data Retention</h3>
<p>Personal data provided will be retained as long as the commercial relationship is maintained or for the years necessary to comply with legal obligations. When no longer necessary, data will be deleted with appropriate security measures.</p>

<h3>5. Recipients</h3>
<p>Data will not be disclosed to third parties unless required by law. There are no international data transfers.</p>

<h3>6. User Rights</h3>
<p>The user may exercise the following rights:</p>
<ul>
    <li><strong>Access:</strong> know what personal data we are processing.</li>
    <li><strong>Rectification:</strong> request the correction of inaccurate data.</li>
    <li><strong>Erasure:</strong> request the deletion of your data.</li>
    <li><strong>Objection:</strong> object to the processing of your data.</li>
    <li><strong>Restriction of processing:</strong> request limitation on the use of your data.</li>
    <li><strong>Portability:</strong> receive your data in a structured format.</li>
</ul>
<p>To exercise these rights, you may send an email to <a href="mailto:info@repalsur.com">info@repalsur.com</a> indicating the right you wish to exercise and attaching a copy of your ID card or identification document.</p>
<p>You also have the right to file a claim with the <strong>Spanish Data Protection Agency</strong> (<a href="https://www.aepd.es" target="_blank" rel="noopener">www.aepd.es</a>).</p>

<h3>7. Security Measures</h3>
<p>REPALSUR has adopted the necessary technical and organizational measures to ensure the security and integrity of personal data, as well as to prevent its alteration, loss, unauthorized processing, or access.</p>

<h3>8. Modifications</h3>
<p>REPALSUR reserves the right to modify this Privacy Policy to adapt it to new legislation or case law, as well as industry practices. In such cases, the changes introduced will be announced on this page reasonably in advance of their implementation.</p>

<p><em>Last updated: February 2026</em></p>
`
    },
    "cookies.content": {
        es: `<h2>1. ¿Qué son las cookies?</h2>
                <p>Las cookies son pequeños archivos de texto que se almacenan en el dispositivo del usuario al visitar
                    una página web. Permiten al sitio web recordar sus acciones y preferencias (como el idioma o el
                    tamaño de letra) durante un periodo de tiempo, de modo que el usuario no tiene que volver a
                    configurarlos cada vez que regresa al sitio o navega de una página a otra.</p>

                <h2>2. ¿Qué tipos de cookies utilizamos?</h2>

                <h3>Cookies técnicas (obligatorias)</h3>
                <p>Son necesarias para el funcionamiento básico del sitio web. Permiten la navegación y el uso de
                    funciones esenciales.</p>
                <table class="cookies-table">
                    <thead>
                        <tr>
                            <th>Cookie</th>
                            <th>Finalidad</th>
                            <th>Duración</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>cookiesAccepted</td>
                            <td>Almacena la aceptación del aviso de cookies por parte del usuario</td>
                            <td>Persistente</td>
                        </tr>
                        <tr>
                            <td>lang</td>
                            <td>Almacena la preferencia de idioma del usuario (es/en)</td>
                            <td>Persistente</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Cookies de terceros</h3>
                <p>Nuestro sitio web puede incluir contenido de terceros (como Google Maps en la página de contacto).
                    Estos servicios pueden establecer sus propias cookies.</p>
                <table class="cookies-table">
                    <thead>
                        <tr>
                            <th>Proveedor</th>
                            <th>Finalidad</th>
                            <th>Más información</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Google Maps</td>
                            <td>Visualización del mapa de ubicación integrado</td>
                            <td><a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Política de
                                    privacidad de Google</a></td>
                        </tr>
                        <tr>
                            <td>Google Fonts</td>
                            <td>Carga de tipografías para el diseño del sitio</td>
                            <td><a href="https://developers.google.com/fonts/faq/privacy" target="_blank"
                                    rel="noopener">Privacidad de Google Fonts</a></td>
                        </tr>
                    </tbody>
                </table>

                <h2>3. ¿Cómo gestionar las cookies?</h2>
                <p>Al acceder a nuestro sitio web por primera vez, se muestra un banner informativo sobre el uso de
                    cookies donde el usuario puede:</p>
                <ul>
                    <li><strong>Aceptar las obligatorias:</strong> solo se instalarán las cookies técnicas necesarias
                        para el funcionamiento del sitio.</li>
                    <li><strong>Aceptar cookies:</strong> se aceptan todas las cookies, incluidas las de terceros.</li>
                </ul>

                <p>Además, el usuario puede configurar su navegador para bloquear o eliminar cookies. A continuación se
                    indican los enlaces de configuración de los navegadores más comunes:</p>
                <ul>
                    <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener">Google
                            Chrome</a></li>
                    <li><a href="https://support.mozilla.org/es/kb/cookies-informacion-que-los-sitios-web-guardan-en-"
                            target="_blank" rel="noopener">Mozilla Firefox</a></li>
                    <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank"
                            rel="noopener">Safari</a></li>
                    <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                            target="_blank" rel="noopener">Microsoft Edge</a></li>
                </ul>
                <p><strong>Nota:</strong> Si el usuario desactiva o bloquea las cookies, es posible que algunas
                    funcionalidades del sitio web no estén disponibles o no funcionen correctamente.</p>

                <h2>4. Actualizaciones de esta política</h2>
                <p>REPALSUR se reserva el derecho de modificar esta Política de Cookies en cualquier momento para
                    adaptarla a novedades legislativas o cambios en el sitio web. Se recomienda revisar esta política
                    periódicamente.</p>

                <p><em>Última actualización: febrero de 2026</em></p>`,
        en: `
<h2>1. What are cookies?</h2>
<p>Cookies are small text files that are stored on the user's device when visiting a website. They allow the website to remember your actions and preferences (such as language or font size) over a period of time, so you don't have to re-enter them whenever you come back to the site or browse from one page to another.</p>

<h2>2. What types of cookies do we use?</h2>

<h3>Technical cookies (mandatory)</h3>
<p>These are necessary for the basic functioning of the website. They allow navigation and the use of essential features.</p>
<table class="cookies-table">
    <thead>
        <tr>
            <th>Cookie</th>
            <th>Purpose</th>
            <th>Duration</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>cookiesAccepted</td>
            <td>Stores the user's acceptance of the cookie notice</td>
            <td>Persistent</td>
        </tr>
        <tr>
            <td>lang</td>
            <td>Stores the user's language preference (es/en)</td>
            <td>Persistent</td>
        </tr>
    </tbody>
</table>

<h3>Third-party cookies</h3>
<p>Our website may include third-party content (such as Google Maps on the contact page). These services may set their own cookies.</p>
<table class="cookies-table">
    <thead>
        <tr>
            <th>Provider</th>
            <th>Purpose</th>
            <th>More information</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Google Maps</td>
            <td>Display of the integrated location map</td>
            <td><a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Google Privacy Policy</a></td>
        </tr>
        <tr>
            <td>Google Fonts</td>
            <td>Loading fonts for site design</td>
            <td><a href="https://developers.google.com/fonts/faq/privacy" target="_blank" rel="noopener">Google Fonts Privacy</a></td>
        </tr>
    </tbody>
</table>

<h2>3. How to manage cookies?</h2>
<p>When accessing our website for the first time, an informative banner about the use of cookies is displayed where the user can:</p>
<ul>
    <li><strong>Accept required only:</strong> only the technical cookies necessary for the operation of the site will be installed.</li>
    <li><strong>Accept cookies:</strong> all cookies are accepted, including third-party cookies.</li>
</ul>

<p>In addition, the user can configure their browser to block or delete cookies. Below are the configuration links for the most common browsers:</p>
<ul>
    <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener">Google Chrome</a></li>
    <li><a href="https://support.mozilla.org/es/kb/cookies-informacion-que-los-sitios-web-guardan-en-" target="_blank" rel="noopener">Mozilla Firefox</a></li>
    <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener">Safari</a></li>
    <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener">Microsoft Edge</a></li>
</ul>
<p><strong>Note:</strong> If the user disables or blocks cookies, some website features may not be available or may not function properly.</p>

<h2>4. Updates to this policy</h2>
<p>REPALSUR reserves the right to modify this Cookie Policy at any time to adapt it to new legislation or changes to the website. We recommend reviewing this policy periodically.</p>

<p><em>Last updated: February 2026</em></p>
`
    },

    // ── PLACEHOLDERS FOOTER FORM ────────────────────────────
    "ph.nombre": { es: "Nombre *", en: "Name *" },
    "ph.email": { es: "Email *", en: "Email *" },
    "ph.telefono": { es: "Teléfono", en: "Phone" },
    "ph.mensaje": { es: "Mensaje *", en: "Message *" },
};

// ── Estado actual del idioma ────────────────────────────────
let currentLang = localStorage.getItem('lang') || 'es';

// ── Función principal de traducción ─────────────────────────
function applyTranslations(lang) {
    // Texto de elementos con data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[key] && translations[key][lang]) {
            el.innerHTML = translations[key][lang];
        }
    });

    // Placeholders de inputs/textarea con data-i18n-ph
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
        const key = el.getAttribute('data-i18n-ph');
        if (translations[key] && translations[key][lang]) {
            el.placeholder = translations[key][lang];
        }
    });

    // Botones toggle de noticias (Leer más / Leer menos)
    document.querySelectorAll('[data-i18n-toggle]').forEach(el => {
        const card = el.closest('.noticia-card');
        const isExpanded = card && card.classList.contains('expanded');
        const key = isExpanded ? 'not.readless' : el.getAttribute('data-i18n-toggle');
        if (translations[key] && translations[key][lang]) {
            el.innerHTML = translations[key][lang];
        }
    });

    // Actualizar atributo lang del documento
    document.documentElement.lang = lang === 'en' ? 'en' : 'es';

    // Actualizar botones de idioma
    document.querySelectorAll('.lang-switch a').forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('data-lang') === lang) {
            a.classList.add('active');
        }
    });
}

// ── Cambiar idioma ──────────────────────────────────────────
function switchLang(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    applyTranslations(lang);
}

// ── Aplicar idioma guardado al cargar la página ─────────────
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('lang') || 'es';
    if (savedLang !== 'es') {
        applyTranslations(savedLang);
    }
    // Asegurar que el botón correcto está activo
    document.querySelectorAll('.lang-switch a').forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('data-lang') === savedLang) {
            a.classList.add('active');
        }
    });
});
