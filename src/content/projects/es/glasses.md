---
key: glasses
name: "Gafas Sudonit"
verb: build
oneLine: "Un módulo que convierte las gafas que ya tienes en gafas inteligentes."
order: 3
status: in-progress
youtube: "https://youtube.com/@Sudo_0nigiri"
lead: "Sudonit es un pequeño módulo que se acopla a tus gafas normales y las hace inteligentes. No son unas gafas nuevas — es un módulo ligero: una cámara, un altavoz, Wi-Fi, un ordenador diminuto y un botón. Se sujeta a la patilla de las gafas que ya llevas.\n\n¿Quieres saber algo de lo que tienes delante? Pulsas el botón. La cámara ve lo que ves tú, y una voz en tu oído responde. Y la clave es esta: no tiras las gafas que te gustan para comprar las de otro. Solo añades inteligencia a las tuyas."
points:
  - { t: "Tus gafas siguen siendo tuyas", d: "Es un módulo, no una montura nueva. No hay gafas Sudonit propietarias — se acopla a las que ya llevas." }
  - { t: "Lo cambias entre gafas", d: "Gafas de sol por la mañana, de leer por la tarde. El módulo se mueve contigo en un par de segundos." }
  - { t: "Es tu hardware", d: "Lo compras una vez y es tuyo. Puedes abrirlo, repararlo, cambiar una pieza. No es una caja sellada." }
  - { t: "Tú eliges la IA", d: "Tu propia clave, un servicio cómodo o tu propio servidor. Sin atarte a una sola empresa." }
  - { t: "Sin suscripción obligatoria", d: "La idea es simple: compras el hardware y funciona. Los servicios de pago son solo para comodidad, y solo si quieres." }
  - { t: "Todo en la cabeza, nada en el bolsillo", d: "Cámara, ordenador, batería y altavoz van en el propio módulo. La batería se sitúa detrás de la oreja para equilibrar la cámara de delante, así no carga sobre la nariz. Sin cables, sin caja en el bolsillo." }
howSteps:
  - "Pulsas el botón del módulo."
  - "La cámara capta lo que tienes delante."
  - "La imagen va por Wi-Fi al teléfono, que la pasa a una IA."
  - "La IA entiende la imagen y responde."
  - "La respuesta suena en un pequeño altavoz en tu oído."
howNote: "Y sin teléfono cerca, el módulo sigue vivo: sabe la hora, recuerda sus ajustes y puede capturar. El teléfono lo hace más listo — no lo controla."
v1Included:
  - "Mira, pregunta — oye la respuesta (la idea principal)."
  - "Funciona solo, sin teléfono: reloj, ajustes, captura con un botón."
  - "Audio por el altavoz integrado."
  - "Conexión Wi-Fi con el teléfono y configuración sencilla."
  - "Control con un solo botón."
v1Excluded:
  - "Una pantalla ante el ojo — experimental por ahora; será real en la segunda versión."
  - "Un micrófono y orden por voz — para la primera versión basta el botón."
  - "Una carcasa pulida — de momento un montaje honesto sobre un soporte."
  - "Una app terminada — las primeras demos van por un portátil."
  - "IA dentro de las gafas y escucha continua — eso llega después."
v1Hardware: "Un microcontrolador ESP32-S3 (el ordenador diminuto), una cámara OV5640, un altavoz con amplificador MAX98357A, Wi-Fi, un botón y un soporte impreso en 3D sobre gafas normales. Barato a propósito: el teléfono hace la IA pesada, no chips caros dentro."
principles:
  - { t: "Propiedad", d: "Lo compras y es tuyo. Sigue funcionando tras la compra, sin pagos obligatorios." }
  - { t: "Reparabilidad", d: "Las piezas se cambian, no van pegadas. La batería es una pieza de servicio; el soporte se puede reimprimir." }
  - { t: "Modularidad", d: "Distintas baterías, micrófonos, audio y pantallas más adelante. Lo reemplazable gana a lo sellado." }
  - { t: "Autonomía", d: "Las gafas son un dispositivo independiente. El teléfono y la nube lo amplían — no lo definen." }
  - { t: "Privacidad a tu elección", d: "Tus datos son tuyos. Tú decides dónde viven tu IA y tus imágenes." }
  - { t: "Apertura", d: "Firmware y documentación abiertos, con sitio para accesorios de la comunidad y oficiales." }
aiLead: "Las gafas no pueden ejecutar una IA grande por sí solas — con honestidad, es demasiado para un dispositivo diminuto. Por eso el teléfono pasa la petición a la IA que tú elijas. Hay varias formas, sin atarte a nadie:"
aiOptions:
  - { t: "Tu propia clave", d: "Conectas tu cuenta de IA — la petición va directa al proveedor que elegiste. Máximo control." }
  - { t: "Hosting Sudonit", d: "Una opción cómoda para quien no quiere gestionar una clave. Previsto como servicio de pago opcional." }
  - { t: "Tu propio servidor", d: "Puedes apuntar las gafas a un modelo local o propio — para control total de tus datos." }
  - { t: "Sin atar a un proveedor", d: "Sudonit no depende de una empresa. Los proveedores se pueden cambiar." }
roadmap:
  - { ver: "V1", title: "El prototipo honesto — para mí", body: "Audio en vez de pantalla: mira, pregunta, oye. Hecho a mano, sin nada de más — para probar que la idea está viva." }
  - { ver: "V2", title: "Para entusiastas", body: "Lo mismo, pero montado con cuidado: sin cables sueltos, una carcasa de verdad, una batería que dura casi un día. Llegan una pantallita, un micrófono y una app." }
  - { ver: "V3", title: "Para gente normal", body: "Parece unas gafas normales. La pantalla \"desaparece\": brillante a la luz del día, invisible para los demás. Un asistente completo — siempre vía teléfono y respetando la privacidad." }
ecosystem:
  - "Distintas baterías — para distintas necesidades."
  - "Accesorios imprimibles de la comunidad."
  - "Piezas de repuesto: la batería, el soporte y otras piezas de desgaste."
  - "Soportes para distintos tipos de montura."
  - "Hardware hecho por la comunidad."
  - "Piezas y mejoras oficiales."
faq:
  - { q: "¿Son unas gafas?", a: "No. Es un módulo que se sujeta a tus gafas. No hay montura Sudonit que comprar — y es a propósito." }
  - { q: "¿Tengo que comprar una montura especial?", a: "No. Esa es la clave: conservas tus gafas y solo les añades el módulo." }
  - { q: "¿Puedo cambiarlo entre distintas gafas?", a: "Sí. Gafas de sol, de leer, tu montura favorita para la noche — un mismo módulo se mueve entre ellas." }
  - { q: "¿Tiene pantalla?", a: "En la primera versión no — todo es audio: oyes la respuesta. La pantalla es experimental por ahora y será real más adelante." }
  - { q: "¿Funciona sin el teléfono?", a: "Sus propias funciones sí: reloj, ajustes, captura con un botón. La IA necesita el teléfono, porque una IA pesada no cabe en las gafas." }
  - { q: "¿Graba todo el tiempo?", a: "No. Es un dispositivo de pulsar para preguntar, no una grabadora. La escucha continua se deja fuera de la primera versión a propósito." }
  - { q: "¿Puedo repararlo y cambiar la batería?", a: "Sí. El módulo está pensado para abrirse: la batería es una pieza de servicio, las piezas se cambian y el soporte se puede reimprimir." }
  - { q: "¿Habrá suscripción?", a: "Obligatoria no. Compras el hardware y funciona. Servicios de pago como el hosting de IA son solo comodidad, y solo si quieres." }
  - { q: "¿Cuánto cuesta y cuándo puedo comprarlo?", a: "Todavía no hay precio ni fecha de lanzamiento — es un proyecto temprano y abierto. Con honestidad: está en desarrollo." }
  - { q: "¿Por qué no comprar unas Ray-Ban Meta?", a: "No va de ser \"mejor\" de frente. Si quieres un gadget terminado y sellado, es una buena opción. Sudonit va de otra cosa: tus gafas, tu hardware, tu IA — apertura y propiedad." }
why: "Las gafas inteligentes están llegando — pero las que se venden hoy son cajas cerradas. Compras su montura, usas su nube, vives según sus reglas. Algo se rompe o la empresa sigue su camino, y te quedas con un aparato sellado que en realidad nunca fue tuyo.\n\nLas gafas son personales. La gente elige monturas que le gustan y las lleva cada día. Deberías poder hacer inteligentes tus propias gafas, conservar el dispositivo al cambiar de montura, abrirlo y arreglarlo, cambiar la batería y decidir tú mismo dónde funciona la IA.\n\nMi referencia es la ThinkPad, pero para gafas inteligentes: menos brillante el primer día, pero abierta, reparable, mejorable y de verdad tuya. Y con honestidad: es mi primer gran proyecto. Aprendo construyéndolo con mis propias manos."
now: "Ahora mismo estoy comprando los componentes para el primer prototipo. Lo siguiente: montarlo y comprobar que la idea está viva."
nextSteps:
  - "Comprar los componentes para el primer prototipo"
  - "Montar el primer prototipo funcional"
  - "Probarlo en gafas normales y mostrar el proceso en YouTube"
---
