---
key: repair
name: "Ayuda informática"
verb: fix
oneLine: "Ordenadores, móviles, configuración — lo reparo, lo configuro, te lo explico."
order: 1
status: available
pricing: tiers
tiers:
  - group: "Ordenadores y portátiles"
    name: "El ordenador va lento — lo acelero"
    price: "desde 25€"
    when:
      - "Tarda más de 5 minutos en arrancar"
      - "Los programas se abren lentos"
      - "Han aparecido virus o publicidad"
    what:
      - "Quito lo innecesario del inicio"
      - "Limpio la basura del sistema"
      - "Elimino virus y adware"
    gives:
      - { t: "Arranque rápido", d: "Enciende en segundos" }
      - { t: "Funciona bien", d: "Sin cuelgues" }
      - { t: "Limpio", d: "Sin virus ni anuncios" }
  - group: "Ordenadores y portátiles"
    name: "Limpieza y configuración completa"
    price: "desde 35€"
    when:
      - "El ordenador es viejo y muy lento"
      - "Se ha acumulado de todo"
      - "Quieres dejarlo como nuevo"
    what:
      - "Diagnóstico completo"
      - "Quito todo lo innecesario"
      - "Lo ajusto para que vaya rápido"
      - "Te explico qué pasaba"
    gives:
      - { t: "Va rápido", d: "Notablemente más rápido" }
      - { t: "Orden", d: "Todo en su sitio" }
      - { t: "Claro", d: "Te cuento qué hice" }
  - group: "Ordenadores y portátiles"
    name: "Se ha colgado del todo — reinstalo"
    price: "desde 45€"
    when:
      - "El ordenador no arranca"
      - "Pantalla azul"
      - "Un virus rompió el sistema"
    what:
      - "Guardo tus archivos y fotos"
      - "Instalo un Windows limpio"
      - "Instalo los programas necesarios"
      - "Lo configuro desde cero"
    gives:
      - { t: "Como nuevo", d: "Va rápido" }
      - { t: "Archivos intactos", d: "No se pierde nada" }
      - { t: "Limpio", d: "Solo lo necesario" }
  - group: "Reparación y piezas"
    name: "Arranca lento — le pongo un disco rápido"
    price: "desde 30€"
    when:
      - "El ordenador tarda 10+ minutos en arrancar"
      - "Los archivos se abren lentos"
    what:
      - "Elijo el disco adecuado"
      - "Lo instalo con cuidado"
      - "Paso el sistema"
    gives:
      - { t: "Arranca en 15 segundos", d: "En vez de 10 minutos" }
      - { t: "Los archivos se abren al instante", d: "Sin esperas" }
  - group: "Reparación y piezas"
    name: "Pantalla de portátil rota — la cambio"
    price: "desde 45€"
    when:
      - "La pantalla está agrietada o rota"
      - "Líneas o manchas en la pantalla"
    what:
      - "Lo desmonto con cuidado"
      - "Pongo una pantalla nueva"
      - "Lo monto sin marcas"
    gives:
      - { t: "Pantalla como nueva", d: "Sin grietas" }
      - { t: "Cuidado", d: "Todo en su sitio" }
  - group: "Reparación y piezas"
    name: "Hace ruido y se calienta — lo limpio"
    price: "desde 30€"
    when:
      - "El ventilador suena muy fuerte"
      - "El portátil está muy caliente"
      - "Se apaga solo por el calor"
    what:
      - "Lo abro y limpio el polvo"
      - "Cambio la pasta térmica"
      - "Compruebo la temperatura"
    gives:
      - { t: "Silencioso", d: "Sin ruido constante" }
      - { t: "Fresco", d: "No se sobrecalienta" }
      - { t: "Dura más", d: "El calor mata los componentes" }
  - group: "Reparación y piezas"
    name: "No carga — arreglo el conector"
    price: "desde 40€"
    when:
      - "El cargador no entra bien"
      - "Solo funciona en cierto ángulo"
    what:
      - "Reviso el conector"
      - "Lo cambio si hace falta"
      - "Compruebo la carga"
    gives:
      - { t: "Carga de forma estable", d: "En cualquier posición" }
      - { t: "Fiable", d: "Sin sujetarlo en ángulo" }
  - group: "Reparación y piezas"
    name: "Necesitas un PC nuevo — lo monto"
    price: "desde 50€"
    when:
      - "Necesitas un ordenador nuevo"
      - "No sabes qué elegir"
      - "Lo quieres por un precio razonable"
    what:
      - "Veo para qué es y tu presupuesto"
      - "Elijo piezas fiables"
      - "Lo monto y lo configuro"
      - "Instalo Windows"
    gives:
      - { t: "Hecho para ti", d: "Sin gastos de más" }
      - { t: "Listo para usar", d: "Lo enciendes y funciona" }
  - group: "Reparación y piezas"
    name: "Conector o botón suelto — lo resueldo"
    price: "desde 25€"
    when:
      - "El conector de carga o auriculares baila"
      - "Un botón no se pulsa"
      - "Se ha soltado un cable por dentro"
    what:
      - "Lo abro y encuentro el fallo"
      - "Lo resueldo con cuidado"
      - "Lo pruebo con carga"
    gives:
      - { t: "Funciona como debe", d: "Estable y fiable" }
      - { t: "Cuidado", d: "Sin marcas de haberlo abierto" }
  - group: "Reparación y piezas"
    name: "La consola hace ruido o el stick se va — la arreglo"
    price: "desde 30€"
    when:
      - "Tu PS/Xbox ruge y se calienta"
      - "El stick se va solo (drift)"
      - "La consola se apaga por el calor"
    what:
      - "La abro y limpio el polvo"
      - "Cambio la pasta térmica"
      - "Arreglo o cambio el stick"
    gives:
      - { t: "Silenciosa y fresca", d: "Sin sobrecalentamiento" }
      - { t: "Control preciso", d: "Sin drift" }
  - group: "Móviles y tablets"
    name: "Móvil nuevo — paso tus datos"
    price: "desde 20€"
    when:
      - "Has comprado un móvil nuevo"
      - "Tienes miedo de perder fotos y contactos"
    what:
      - "Paso todos los contactos"
      - "Paso fotos y vídeos"
      - "Configuro las cuentas"
      - "Compruebo que está todo"
    gives:
      - { t: "No se pierde nada", d: "Todas las fotos, contactos, apps" }
      - { t: "Móvil nuevo configurado", d: "Listo para usar" }
  - group: "Móviles y tablets"
    name: "La batería se agota rápido — la cambio"
    price: "desde 40€"
    when:
      - "Tienes que cargarlo varias veces al día"
      - "Se apaga al 20–30%"
    what:
      - "Cambio la batería con cuidado"
      - "Lo compruebo después"
    gives:
      - { t: "Dura todo el día", d: "Como un móvil nuevo" }
      - { t: "Sin llevar el cargador", d: "Vuelve a lo normal" }
  - group: "Móviles y tablets"
    name: "El móvil va lento — lo acelero"
    price: "desde 15€"
    when:
      - "El móvil va más lento"
      - "Las apps tardan en cargar"
    what:
      - "Borro archivos innecesarios"
      - "Libero espacio"
      - "Ajusto el móvil"
    gives:
      - { t: "Va más rápido", d: "Las apps abren normal" }
      - { t: "Más espacio", d: "Para fotos y archivos" }
  - group: "Móviles y tablets"
    name: "Miedo a romperlo — pongo cristal templado"
    price: "desde 10€"
    when:
      - "No tienes cristal protector"
      - "Ya has roto una pantalla antes"
    what:
      - "Pongo cristal templado sin burbujas"
    gives:
      - { t: "Pantalla protegida", d: "El golpe se lo lleva el cristal, no la pantalla" }
      - { t: "Cuidado", d: "Sin burbujas" }
  - group: "Sistemas y datos"
    name: "Portátil viejo que va a rastras — lo revivo con Linux"
    price: "desde 30€"
    when:
      - "Un ordenador viejo apenas mueve Windows"
      - "Quieres Linux como segundo sistema"
      - "Necesitas un sistema ligero para estudiar o trabajar"
    what:
      - "Elijo un Linux adecuado"
      - "Lo instalo junto a Windows o en su lugar"
      - "Lo configuro para lo tuyo"
      - "Te enseño a usarlo"
    gives:
      - { t: "El PC viejo vuela otra vez", d: "Un sistema ligero" }
      - { t: "Dos sistemas a elegir", d: "Si quieres" }
  - group: "Sistemas y datos"
    name: "Fotos y archivos perdidos — intento recuperarlos"
    price: "desde 30€"
    when:
      - "Borraste algo importante sin querer"
      - "Un USB o disco no abre"
      - "El sistema murió con los datos dentro"
    what:
      - "Reviso el soporte"
      - "Intento recuperar los datos"
      - "Si no se puede — te lo digo con honestidad"
    gives:
      - { t: "Una oportunidad de recuperarlo", d: "Fotos, documentos, archivos" }
      - { t: "Honesto", d: "No cobro si no funciona" }
  - group: "Sistemas y datos"
    name: "Tu propio centro multimedia y almacenamiento — lo monto"
    price: "desde 40€"
    when:
      - "Quieres tu propio «Netflix» en casa (Plex/Jellyfin)"
      - "Necesitas almacenamiento compartido para archivos"
      - "Cansado de tener fotos repartidas por dispositivos"
    what:
      - "Lo monto con tu hardware o piezas que elijo"
      - "Configuro el servidor multimedia y el acceso"
      - "Te enseño a añadir películas y archivos"
    gives:
      - { t: "Tus pelis y tu música", d: "Desde cualquier dispositivo en casa" }
      - { t: "Todo en un sitio", d: "Archivos y copias de seguridad" }
  - group: "Sistemas y datos"
    name: "Privacidad y control parental — los configuro"
    price: "desde 20€"
    when:
      - "Quieres más privacidad en internet"
      - "Necesitas control parental para los niños"
      - "Demasiado rastreo y publicidad"
    what:
      - "Configuro una VPN en tus dispositivos"
      - "Añado bloqueo de rastreo y anuncios"
      - "Configuro el control parental"
    gives:
      - { t: "Menos rastreo", d: "Y anuncios molestos" }
      - { t: "Tranquilidad", d: "Internet más seguro para los niños" }
  - group: "Casa y dispositivos"
    name: "Hogar inteligente — lo configuro a tu medida"
    price: "desde 25€"
    when:
      - "Compraste bombillas, enchufes o altavoz inteligentes"
      - "No consigues que todo funcione junto"
      - "Quieres control por voz o por escenas"
    what:
      - "Conecto los dispositivos a Alexa o Google"
      - "Configuro escenas (luz, música, mañana)"
      - "Te enseño a controlarlo"
    gives:
      - { t: "Todo obedece a tu voz", d: "Luz, música, enchufes" }
      - { t: "Escenas cómodas", d: "Pensadas para tu día" }
  - group: "Casa y dispositivos"
    name: "La impresora no imprime — la conecto y configuro"
    price: "desde 15€"
    when:
      - "No consigues conectar la impresora"
      - "Imprime con errores o no imprime"
      - "Necesitas configurar el escáner"
    what:
      - "La conecto al ordenador y al Wi-Fi"
      - "Instalo los drivers"
      - "Compruebo impresión y escaneo"
    gives:
      - { t: "Imprime desde cualquier dispositivo", d: "PC y móvil" }
      - { t: "Sin errores", d: "Estable" }
  - group: "Casa y dispositivos"
    name: "Smart TV o reproductor — lo configuro"
    price: "desde 20€"
    when:
      - "Una tele o reproductor nuevos"
      - "Las apps y los canales no están configurados"
      - "Quieres un buen cine en casa"
    what:
      - "Lo conecto y actualizo"
      - "Configuro apps y cuentas"
      - "Te enseño a usarlo"
    gives:
      - { t: "Listo para ver", d: "Apps y canales" }
      - { t: "Claro", d: "Te explico los mandos" }
  - group: "Casa y dispositivos"
    name: "Cámaras de vigilancia — las instalo y configuro"
    price: "desde 30€"
    when:
      - "Quieres vigilar tu casa o el portal"
      - "Compraste cámaras pero no están configuradas"
      - "Necesitas acceso desde el móvil"
    what:
      - "Coloco y conecto las cámaras"
      - "Configuro la grabación y el acceso desde el móvil"
      - "Te enseño a verlas"
    gives:
      - { t: "Se ve desde el móvil", d: "Desde donde sea" }
      - { t: "Tranquilidad", d: "La casa, vigilada" }
  - group: "Cuentas y correo"
    name: "Olvidaste la contraseña — recupero el acceso"
    price: "desde 20€"
    when:
      - "No puedes entrar en el correo o una red social"
      - "La cuenta está bloqueada"
    what:
      - "Intento recuperar el acceso"
      - "Si no se puede — te lo digo con honestidad"
    gives:
      - { t: "Si es posible, lo recupero", d: "Hago todo lo que pueda" }
      - { t: "Honesto", d: "No cobro si no funciona" }
  - group: "Cuentas y correo"
    name: "El correo no funciona — lo configuro"
    price: "desde 15€"
    when:
      - "No llegan los correos"
      - "El correo no está configurado en el móvil"
    what:
      - "Lo configuro en móvil y ordenador"
      - "Compruebo que los correos llegan"
    gives:
      - { t: "Funciona en todo", d: "En móvil y ordenador" }
      - { t: "Fiable", d: "No se pierden correos" }
priceNote: "Son precios orientativos — el precio final depende del trabajo y se acuerda antes de empezar. El material se paga aparte."
problem: "Algo se ha roto, va lento o simplemente no sabes cómo configurarlo — un ordenador, un móvil, el correo, una impresora, el Wi-Fi. Suele ser el momento en que es más fácil rendirse o comprar nuevo. Yo prefiero mirar primero si tiene solución."
approach: "No descarto un aparato sin intentar arreglarlo, ni complico lo que se puede decir de forma sencilla. Averiguo qué falla y te lo digo con honestidad: se arregla, se configura — o te conviene más cambiarlo."
whatYouGet: "Un dispositivo que funciona y está configurado, y una explicación clara de qué pasaba. Antes de cualquier trabajo serio hago una copia de seguridad — tus datos están protegidos. Si no tiene solución, te lo digo enseguida y no te cobro. Solo pagas cuando todo funciona."
howItWorks: "Me cuentas qué ha pasado — te hago un par de preguntas y te doy un precio aproximado. Luego lo resuelvo en remoto (TeamViewer / AnyDesk) o en persona en Alicante. Revisamos el resultado juntos — y solo entonces pagas."
---
