export interface Post {
  id: number;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  read: string;
  featured: boolean;
  body: string;
}

export const catColor: Record<string, string> = {
  "Identificación y ADN":       "#1a5fa8",
  "Preguntas Frecuentes":       "#E2064A",
  "Ciencia y Trabajo Forense":  "#b45309",
  "Memoria, Verdad y Justicia": "#166534",
};

export const posts: Post[] = [
  {
    id: 1,
    category: "Identificación y ADN",
    title: "El ADN como testigo: cómo la ciencia devuelve identidades después de décadas",
    excerpt: "Cuando los restos óseos ya no tienen nombre, el ADN habla por ellos. Te explicamos, paso a paso y en palabras simples, cómo el análisis genético puede identificar a una persona desaparecida décadas después.",
    author: "Equipo Científico EAAF",
    date: "12 jun. 2026",
    read: "9 min",
    featured: true,
    body: `<p>Si alguna vez te preguntaste cómo es posible que una muestra de sangre pueda conectarse con huesos que llevan décadas bajo tierra, no estás sola. Es una pregunta completamente lógica, y tiene una respuesta científica concreta. El ADN —el material genético que está en cada una de nuestras células— no desaparece con el tiempo de la manera en que lo hacen los tejidos blandos. En condiciones adecuadas, puede persistir en los huesos por décadas, e incluso siglos. Y esa persistencia es la que hace posible el trabajo del EAAF.</p>
<p>En este artículo te explicamos, paso a paso y sin tecnicismos innecesarios, cómo funciona el proceso de identificación genética. Porque entender la ciencia que está detrás es también una forma de confiar en ella.</p>
<h3>¿Qué es el ADN y por qué es único?</h3>
<p>El ADN (ácido desoxirribonucleico) es la molécula que contiene las instrucciones genéticas de cada ser vivo. Está presente en casi todas las células del cuerpo: en la sangre, en los huesos, en los dientes. Lo que lo hace tan poderoso como herramienta de identificación es que, salvo en los gemelos idénticos, nadie en el mundo tiene exactamente el mismo ADN. Es una huella que nadie puede falsificar y que no cambia con el tiempo.</p>
<p>Parte de ese ADN se hereda directamente de los padres. Eso significa que el ADN de una persona desaparecida comparte características específicas y medibles con el de sus hijos, hermanos, padres o nietos. Y es exactamente esa herencia lo que permite la identificación.</p>
<h3>Cómo se extrae ADN de restos con décadas de antigüedad</h3>
<p>Los restos óseos recuperados de fosas comunes o sitios de entierro clandestino ya no tienen tejido blando. Pero el hueso en sí —especialmente el tejido duro del interior, llamado hueso cortical— puede conservar ADN en cantidades suficientes para el análisis. Los dientes, por su estructura cerrada, son especialmente buenos conservadores del material genético.</p>
<p>En el <strong>Laboratorio de Genética Forense del EAAF</strong>, ubicado en la ciudad de Córdoba, los científicos realizan un proceso cuidadoso:</p>
<ul>
  <li>Se selecciona el fragmento óseo o dental con mejores condiciones de preservación.</li>
  <li>Se descontamina y pulveriza una pequeña porción del hueso.</li>
  <li>Se extrae el ADN de ese polvo óseo usando reactivos especializados.</li>
  <li>Se amplifica el ADN obtenido para poder analizarlo.</li>
  <li>Se genera un perfil genético único, comparable con otros perfiles en la base de datos.</li>
</ul>
<blockquote><p>"No es magia. Es química, biología molecular y décadas de experiencia acumulada. Pero el resultado —cuando hay coincidencia— es irrefutable."</p></blockquote>
<h3>La base de datos genética: dónde entra tu muestra</h3>
<p>Cuando un familiar de una persona desaparecida se acerca al EAAF y aporta una muestra de sangre, esa muestra es procesada y su perfil genético ingresa a una base de datos. Esa base de datos es la que permite el cotejo: cuando los científicos obtienen un perfil genético de unos restos recuperados, lo comparan con todos los perfiles de familiares registrados.</p>
<p>Si hay una coincidencia estadísticamente significativa entre el perfil de los restos y el perfil de uno o varios familiares, se inicia el proceso de confirmación. El nivel de certeza requerido para declarar una identificación positiva es de <strong>99,9% o superior</strong>. No se notifica a una familia basándose en una probabilidad baja. Cuando el EAAF llama, es porque la ciencia lo respalda.</p>
<h3>Por qué cada muestra familiar importa, sin importar el tiempo</h3>
<p>Muchas familias piensan que ya es demasiado tarde para dar una muestra, o que si no lo hicieron antes ya no tiene sentido. No es así. El EAAF recupera e identifica restos de manera continua. Cada nueva excavación, cada nueva fosa localizada, genera restos que se comparan contra la base de datos existente. Si tu perfil genético todavía no está registrado, esos restos no van a poder compararse con el de tu familiar.</p>
<p>Además, la base de datos no tiene fecha de vencimiento. Una muestra que se ingresa hoy puede coincidir con restos que todavía no fueron recuperados, o con restos que se recuperaron hace años pero que permanecen sin identificar por falta de una muestra familiar con quien compararlos.</p>
<h3>¿Qué significa recibir una identificación positiva?</h3>
<p>Cuando hay una coincidencia confirmada, el EAAF se contacta directamente con la familia para notificarla de manera personal y acompañada. No es una notificación fría ni burocrática. El equipo sabe que ese llamado llega después de años —muchas veces décadas— de incertidumbre.</p>
<p>Una identificación positiva significa, en términos concretos:</p>
<ul>
  <li>Saber con certeza científica dónde estuvo y qué le pasó a la persona buscada.</li>
  <li>Recibir los restos de tu ser querido y poder darle sepultura.</li>
  <li>Contar con una prueba material admisible en los juicios de lesa humanidad.</li>
  <li>Cerrar el duelo que durante años no tuvo lugar ni fecha.</li>
  <li>Recuperar para la historia el nombre de alguien que el terrorismo de Estado quiso borrar.</li>
</ul>
<blockquote><p>"Buscamos e identificamos a personas desaparecidas." No es solo una descripción de lo que hacemos: es un compromiso con cada familia que confió en nosotros.</p></blockquote>
<h3>El primer paso está en tus manos</h3>
<p>Si todavía no aportaste tu muestra de sangre al EAAF, o si conocés a un familiar que tampoco lo hizo, ese es el paso más concreto que existe hoy. No requiere trámites complicados, no tiene costo, y tu información genética permanece bajo estricta confidencialidad: nunca es compartida con el Estado ni con organismos judiciales sin tu consentimiento expreso.</p>
<p>Podés comunicarte al <strong>0800 345 3236</strong> (gratuito desde todo el país) o escribir a <strong>iniciativa@eaaf.org</strong>. El equipo te va a explicar cómo proceder, dónde acercarte o, si no podés trasladarte, cómo hacerlo por correo postal.</p>
<p>La ciencia tiene las herramientas. La base de datos necesita tu perfil. La búsqueda no termina hasta que cada nombre sea restituido.</p>`,
  },
  {
    id: 2,
    category: "Identificación y ADN",
    title: "Tu muestra de sangre puede ser la clave: por qué el EAAF la necesita",
    excerpt: "Dar una muestra de sangre es el acto más concreto que un familiar puede hacer para avanzar en la búsqueda. Entendé cómo funciona, qué pasa con tus datos y por qué cada muestra importa.",
    author: "Equipo Científico EAAF",
    date: "5 jun. 2026",
    read: "6 min",
    featured: false,
    body: `<p>A veces la búsqueda parece abstracta: expedientes, declaraciones, trámites. Pero hay un paso muy concreto que cualquier familiar puede dar hoy mismo, desde cualquier punto del país o del mundo: aportar una muestra de sangre al EAAF. No requiere preparación previa, no tiene costo, y puede ser la pieza que faltaba para identificar a tu ser querido.</p>
<p>En este artículo respondemos las dudas más frecuentes sobre ese proceso.</p>
<h3>¿Qué información contiene tu sangre?</h3>
<p>La sangre contiene glóbulos blancos, y dentro de ellos, el ADN completo de esa persona. Ese ADN incluye marcadores genéticos heredados de los padres biológicos, que son únicos y comparables con el ADN extraído de restos óseos. No se analiza todo el genoma —solo las regiones específicas que permiten establecer o descartar un parentesco biológico con alta certeza estadística.</p>
<p>Es importante entender que el EAAF no usa tu muestra para ningún otro fin. No determina enfermedades genéticas, no se comparte con empresas ni con organismos estatales. El único propósito es la búsqueda e identificación de personas desaparecidas.</p>
<h3>¿Cómo se usa tu muestra para buscar coincidencias?</h3>
<p>Una vez procesada tu muestra, el perfil genético resultante ingresa a la base de datos del EAAF. Ese perfil se compara automáticamente con todos los perfiles obtenidos de restos óseos recuperados —tanto los que ya están en la base como los que se incorporarán en el futuro.</p>
<p>Si en algún momento existe una coincidencia estadísticamente significativa entre tu perfil y el de unos restos, los científicos del EAAF lo verifican con análisis adicionales antes de emitir cualquier conclusión. Solo cuando la certeza supera el 99,9% se inicia el proceso de notificación a la familia.</p>
<blockquote><p>"Tu muestra no caduca. Queda en la base y se compara con cada nuevo hallazgo. El tiempo no juega en contra: juega a favor."</p></blockquote>
<h3>Privacidad: quiénes tienen acceso a tus datos</h3>
<p>El EAAF opera bajo un estricto protocolo de confidencialidad. Los datos genéticos de los familiares nunca son compartidos con el Estado, con organismos judiciales ni con terceros, salvo que la propia familia lo solicite expresamente y por escrito para un procedimiento legal específico.</p>
<p>El perfil genético que se almacena no permite identificarte a vos como persona a partir de ese dato aislado: solo tiene valor al compararlo con otro perfil de referencia en el contexto de una búsqueda de parentesco. El EAAF tiene décadas de práctica institucional protegiendo esta información.</p>
<h3>¿Qué pasa si el familiar más cercano ya falleció?</h3>
<p>Esta es una de las preguntas más frecuentes y la respuesta es alentadora: <strong>otros parientes también pueden aportar información genética valiosa</strong>. El vínculo genético se transmite por líneas biológicas, por lo que nietos, sobrinos, primos, o incluso hermanos del desaparecido que viven en distintos países pueden contribuir con sus muestras.</p>
<p>Además, en algunos casos se puede extraer ADN de objetos o restos biológicos que pertenecieron al familiar fallecido —pelo en un cepillo, dientes conservados, entre otros— aunque esto requiere evaluación caso por caso con el equipo del EAAF.</p>
<h3>Cómo y dónde dar la muestra</h3>
<p>Hay dos modalidades:</p>
<ul>
  <li><strong>Presencial:</strong> podés acercarte a las oficinas del EAAF en Buenos Aires o Córdoba, o a una de las jornadas de toma de muestras que el equipo realiza periódicamente en distintas provincias.</li>
  <li><strong>Por correo postal:</strong> el EAAF envía un kit de recolección a domicilio, que permite obtener la muestra mediante un hisopo bucal o tarjeta de sangre seca. Las instrucciones son simples y el kit se devuelve por correo sin costo.</li>
</ul>
<p>Para iniciar el proceso, podés comunicarte al <strong>0800 345 3236</strong> (llamada gratuita desde todo el país) o escribir a <strong>iniciativa@eaaf.org</strong>. También podés contactar a organizaciones de derechos humanos locales que trabajan en articulación con el EAAF y pueden orientarte.</p>
<p>Dar ese paso no obliga a nada más. Pero puede ser el comienzo del final de una espera muy larga.</p>`,
  },
  {
    id: 3,
    category: "Preguntas Frecuentes",
    title: "¿Quién puede aportar una muestra de ADN? Todo lo que necesitás saber",
    excerpt: "¿Sos hijo, nieto, hermano o sobrino de una persona desaparecida? Cada vínculo genético tiene un valor distinto en el proceso de identificación. Te explicamos quién puede participar y por qué.",
    author: "Redacción EAAF",
    date: "28 may. 2026",
    read: "5 min",
    featured: false,
    body: `<p>Una de las preguntas que más llega al EAAF es: "¿Puedo dar una muestra si soy el nieto, el sobrino, o el primo?" La respuesta corta es: sí, en la mayoría de los casos. La respuesta larga explica por qué cada vínculo aporta algo distinto, y por qué la suma de varios familiares hace el proceso más robusto.</p>
<h3>Familiares de primera línea: el vínculo más directo</h3>
<p>Los familiares que comparten más material genético con la persona desaparecida son los de primer grado de consanguinidad biológica:</p>
<ul>
  <li><strong>Hijos biológicos:</strong> heredan el 50% del ADN de cada progenitor. Son el vínculo más informativo para la identificación.</li>
  <li><strong>Padres biológicos:</strong> cada uno aportó el 50% del ADN de la persona desaparecida. Si alguno vive, su muestra es fundamental.</li>
  <li><strong>Hermanos biológicos:</strong> comparten en promedio el 50% del ADN. Pueden ser especialmente útiles cuando no hay hijos ni padres vivos.</li>
</ul>
<h3>Familiares de segunda y tercera línea: también aportan</h3>
<p>Cuando los familiares más directos ya no están, el EAAF trabaja con parientes más lejanos. La probabilidad estadística de una identificación se reduce, pero no desaparece:</p>
<ul>
  <li><strong>Nietos:</strong> comparten aproximadamente el 25% del ADN con cada abuelo. Cuantos más nietos aporten muestra, mayor es la certeza.</li>
  <li><strong>Sobrinos y tíos:</strong> comparten alrededor del 25% del ADN con el tío o la tía desaparecida.</li>
  <li><strong>Primos hermanos:</strong> comparten alrededor del 12,5%. Aportan menos información por sí solos, pero suman en combinación con otros.</li>
</ul>
<blockquote><p>"No existe 'parentesco demasiado lejano' para intentarlo. Lo que importa es que el perfil genético esté en la base de datos."</p></blockquote>
<h3>Por qué más muestras = mayor certeza</h3>
<p>La genética forense trabaja con probabilidades estadísticas. Cuantos más familiares biológicos aporten su muestra, más información tiene el algoritmo de cotejo para calcular la probabilidad de parentesco. Un análisis basado en cuatro muestras de familiares distintos puede alcanzar un 99,9% de certeza incluso cuando ninguna de esas muestras por sí sola sería suficiente.</p>
<p>Por eso el EAAF alienta a que varios miembros de una misma familia se registren, incluso si ya lo hizo alguno.</p>
<h3>El caso especial del ADN mitocondrial y el cromosoma Y</h3>
<p>Algunos vínculos genéticos específicos permiten análisis adicionales:</p>
<ul>
  <li>El <strong>ADN mitocondrial</strong> se hereda solo por vía materna, sin modificaciones. Esto significa que todos los descendientes por línea materna de una misma mujer comparten exactamente el mismo ADN mitocondrial. Este análisis es especialmente útil cuando los restos están muy degradados.</li>
  <li>El <strong>cromosoma Y</strong> se hereda solo por vía paterna. Todos los varones de una misma línea paterna lo comparten. Esto permite identificaciones en líneas directas de padre a hijo aunque los restos estén fragmentados.</li>
</ul>
<h3>Cómo registrarse desde el exterior</h3>
<p>Muchos familiares de personas desaparecidas viven en el exterior —Uruguay, México, España, Israel, Francia, entre otros países. El EAAF tiene protocolos para recibir muestras desde el extranjero:</p>
<ul>
  <li>Se puede coordinar el envío de un kit de recolección por correo internacional.</li>
  <li>En algunos países, el EAAF trabaja con organismos locales de derechos humanos que pueden asistir en el proceso.</li>
  <li>Para familiares de Argentina que se encuentren temporalmente en el exterior, basta con contactarse a <strong>iniciativa@eaaf.org</strong> para recibir instrucciones.</li>
</ul>
<p>La distancia no es un obstáculo. Si tenés dudas sobre si tu vínculo es suficiente, el equipo del EAAF puede orientarte sin compromiso.</p>`,
  },
  {
    id: 4,
    category: "Preguntas Frecuentes",
    title: "¿Cuánto tiempo lleva una identificación? La respuesta honesta",
    excerpt: "No hay una respuesta única. Depende de la complejidad del caso, el estado de los restos y la información disponible. Te explicamos qué factores influyen y qué podés hacer para avanzar.",
    author: "Redacción EAAF",
    date: "20 may. 2026",
    read: "7 min",
    featured: false,
    body: `<p>Esta es la pregunta que más duele hacer, y a la que el EAAF siempre responde con honestidad: no existe un plazo estándar. Una identificación puede ocurrir en meses o llevar décadas. No porque el equipo no trabaje, sino porque el proceso depende de variables que van mucho más allá de la voluntad de las personas involucradas.</p>
<p>Entender esas variables ayuda a transitar la espera con más información y menos incertidumbre.</p>
<h3>Variables que aceleran una identificación</h3>
<ul>
  <li><strong>La existencia de información previa detallada:</strong> testimonios de sobrevivientes, registros hospitalarios, fichas dentales, radiografías, o cualquier documento que describa características físicas de la persona desaparecida reducen significativamente el tiempo de análisis.</li>
  <li><strong>El buen estado de conservación de los restos:</strong> huesos bien preservados permiten extraer ADN de mayor calidad y en menor tiempo.</li>
  <li><strong>Contar con muestras genéticas de varios familiares:</strong> cuantos más perfiles familiares hay en la base de datos, mayor es la probabilidad de una coincidencia y más rápido puede cerrarse el proceso.</li>
  <li><strong>Información sobre el lugar de entierro:</strong> testimonios que orientan las excavaciones hacia sitios específicos aceleran el trabajo de campo.</li>
</ul>
<h3>Variables que demoran el proceso</h3>
<ul>
  <li><strong>Restos fragmentados o muy degradados:</strong> condiciones extremas de humedad, acidez del suelo, o el paso del tiempo pueden dificultar la extracción de ADN. En esos casos, los análisis deben repetirse o combinarse con métodos alternativos.</li>
  <li><strong>Ausencia de muestras familiares:</strong> si nadie de la familia biológica ha aportado su ADN, es imposible hacer un cotejo, aunque los restos ya hayan sido recuperados.</li>
  <li><strong>Falta de información ante-mortem:</strong> sin datos previos que permitan orientar los análisis, el proceso se extiende.</li>
  <li><strong>Sitios de entierro desconocidos o destruidos:</strong> muchos lugares donde se enterraron víctimas fueron urbanizados, inundados, o intervenidos. Localizarlos requiere investigación histórica extensa.</li>
</ul>
<blockquote><p>"La espera no es pasividad. Hay casos en los que la coincidencia genética apareció 20 años después de ingresar la muestra a la base de datos, porque recién entonces se recuperaron los restos."</p></blockquote>
<h3>Qué pasa cuando hay restos pero no hay coincidencia</h3>
<p>El EAAF puede tener restos recuperados y analizados que aún no tienen nombre asignado. Esto sucede cuando no hay muestras familiares con qué comparar. Esos restos permanecen en la base de datos indefinidamente, disponibles para ser cotejados en el momento en que aparezca una muestra compatible.</p>
<p>Es decir: dar una muestra de sangre hoy puede generar una coincidencia con restos que fueron recuperados hace diez años. Por eso nunca es tarde.</p>
<h3>Cómo mantener el expediente actualizado</h3>
<p>Si ya tenés un expediente abierto en el EAAF, hay algunas cosas que podés hacer para que el proceso avance:</p>
<ul>
  <li>Comunicar cualquier nueva información que obtengas: testimonios de sobrevivientes, documentos encontrados, datos sobre el lugar de detención.</li>
  <li>Notificar cambios en tus datos de contacto.</li>
  <li>Alentar a otros familiares biológicos a que aporten su muestra si aún no lo hicieron.</li>
  <li>Consultar periódicamente el estado del expediente llamando al <strong>0800 345 3236</strong>.</li>
</ul>
<h3>Qué hacer si pasaron muchos años sin novedades</h3>
<p>Si tu familiar desapareció hace décadas y no recibiste noticias, eso no significa que el caso esté cerrado ni olvidado. El EAAF trabaja activamente en múltiples frentes. Pero sí puede significar que falta información —ya sea del lugar donde descansan los restos o de los perfiles genéticos familiares en la base de datos.</p>
<p>El primer paso siempre es contactar al equipo, actualizar el expediente, y confirmar que todos los familiares biológicos disponibles han dado su muestra. A veces, un solo pariente que no se había registrado es la pieza que faltaba.</p>`,
  },
  {
    id: 5,
    category: "Ciencia y Trabajo Forense",
    title: "De la fosa al nombre: el proceso completo del trabajo forense del EAAF",
    excerpt: "Desde la investigación histórica hasta la restitución de restos a la familia, el trabajo del EAAF sigue un protocolo científico riguroso. Conocé cada etapa y quiénes participan.",
    author: "Equipo Científico EAAF",
    date: "10 may. 2026",
    read: "10 min",
    featured: false,
    body: `<p>Muchas familias tienen un expediente abierto en el EAAF pero no saben exactamente qué está ocurriendo detrás de ese número de caso. El proceso forense es largo, meticuloso y multidisciplinario: involucra historiadores, arqueólogos, antropólogos físicos, genetistas, psicólogos y expertos en derechos humanos. Conocer cada etapa ayuda a entender por qué el trabajo lleva tiempo, y por qué cada paso importa.</p>
<h3>Etapa 1: Investigación histórica y documental</h3>
<p>Antes de cavar un centímetro de tierra, el EAAF investiga. Esta fase incluye:</p>
<ul>
  <li>Revisión de archivos judiciales, policiales y militares desclasificados.</li>
  <li>Entrevistas con sobrevivientes de centros de detención clandestina.</li>
  <li>Recopilación de testimonios de familiares y vecinos.</li>
  <li>Análisis de registros hospitalarios, cementerios y mapas históricos.</li>
</ul>
<p>El objetivo de esta etapa es obtener información que permita determinar qué personas estuvieron en un lugar determinado y, cuando es posible, dónde podrían haber sido enterradas.</p>
<h3>Etapa 2: Búsqueda y localización de sitios de entierro</h3>
<p>Con la información documental en mano, el equipo realiza prospecciones en los sitios identificados como probables lugares de inhumación. Se utilizan técnicas no invasivas como:</p>
<ul>
  <li>Análisis de fotografías aéreas históricas.</li>
  <li>Prospección geofísica (georradar, resistividad eléctrica).</li>
  <li>Reconocimiento del terreno con búsquedas superficiales.</li>
</ul>
<p>Esta fase puede tomar meses o años, especialmente en terrenos que fueron modificados por construcciones o inundaciones.</p>
<h3>Etapa 3: Excavación arqueológica y recuperación de restos</h3>
<p>Cuando se localiza un posible sitio de entierro, comienza la excavación. Este trabajo se realiza con metodología arqueológica estricta:</p>
<ul>
  <li>Se delimita y cuadricula el área de trabajo.</li>
  <li>Se excava por niveles, documentando cada hallazgo con fotografías, videos y dibujos de campo.</li>
  <li>Cada fragmento óseo se recupera, etiqueta y embala de forma individual para preservar su integridad.</li>
  <li>Se recolectan objetos asociados (ropa, calzado, documentos, objetos personales) que pueden aportar datos de identidad.</li>
</ul>
<blockquote><p>"La excavación forense no es como las excavaciones de películas. Cada centímetro se trabaja con paciencia, porque en esos centímetros puede haber evidencia irreemplazable."</p></blockquote>
<h3>Etapa 4: Análisis en laboratorio</h3>
<p>Los restos recuperados se llevan al laboratorio donde trabajan dos especialidades de manera paralela:</p>
<ul>
  <li><strong>Antropología física:</strong> determina edad, sexo, estatura y posibles lesiones perimortem (al momento de la muerte) a partir de los huesos. También analiza marcadores patológicos como fracturas previas o intervenciones quirúrgicas que pueden coincidir con registros médicos de la persona buscada.</li>
  <li><strong>Genética forense:</strong> extrae ADN de los huesos o dientes para generar un perfil genético que se compara con la base de datos de familias registradas. Este proceso puede tomar semanas o meses dependiendo del estado de conservación del material.</li>
</ul>
<h3>Etapa 5: Proceso de identificación y confirmación</h3>
<p>Cuando hay una coincidencia entre el perfil genético de los restos y el de un familiar registrado, el proceso de identificación no termina ahí. El EAAF realiza:</p>
<ul>
  <li>Análisis de confirmación con marcadores adicionales para alcanzar el umbral de certeza requerido (99,9% o superior).</li>
  <li>Confrontación con toda la información ante-mortem disponible para verificar coherencia (edad, sexo, lesiones, objetos personales).</li>
  <li>Revisión por el equipo completo antes de emitir el informe de identificación.</li>
</ul>
<h3>Etapa 6: Restitución y acompañamiento a la familia</h3>
<p>La última etapa es, en muchos sentidos, la más delicada. El EAAF notifica a la familia de manera personal, explicando el proceso y los resultados. Los restos son entregados junto con documentación completa del análisis. Un equipo de psicólogos y trabajadores sociales acompaña a la familia antes, durante y después de la restitución.</p>
<p>Esta etapa no tiene fecha de vencimiento: el acompañamiento continúa el tiempo que la familia lo necesite.</p>`,
  },
  {
    id: 6,
    category: "Ciencia y Trabajo Forense",
    title: "Cuando encontramos a tu ser querido: qué pasa después de la identificación",
    excerpt: "Una identificación positiva no es el final del proceso, es el comienzo de otro. El EAAF acompaña a cada familia en la restitución de los restos, con respeto y cuidado.",
    author: "Equipo Científico EAAF",
    date: "2 may. 2026",
    read: "8 min",
    featured: false,
    body: `<p>Muchas familias le temen a ese momento. El llamado del EAAF que cambia todo. No saben bien qué esperar, qué les van a decir, qué les van a pedir, cómo van a reaccionar. Es completamente comprensible. Por eso creemos que hablar de ese momento antes de que ocurra ayuda a transitarlo con menos angustia.</p>
<p>Lo que sigue no es una secuencia fría de pasos burocráticos. Es una descripción humana de cómo el EAAF acompaña a una familia desde que hay una identificación positiva hasta mucho tiempo después.</p>
<h3>Cómo y cuándo se notifica a la familia</h3>
<p>Cuando el equipo científico confirma una identificación con el nivel de certeza requerido, el primer paso es localizar a la familia. Ese contacto lo realiza siempre una persona del equipo que ya conoce el caso —no es una llamada automática ni un formulario—. Se coordina un encuentro, en persona siempre que sea posible, donde se comunica el resultado.</p>
<p>En ese primer encuentro no se entrega nada todavía. Solo se da la información, se da espacio para las preguntas, y se ofrece acompañamiento profesional para los días siguientes. El EAAF sabe que esa noticia necesita tiempo para ser procesada.</p>
<h3>Qué información recibe la familia</h3>
<p>En los días siguientes a la notificación, la familia recibe un informe completo que incluye:</p>
<ul>
  <li>El resultado del análisis genético y el porcentaje de certeza de la identificación.</li>
  <li>Los datos antropológicos: edad estimada al momento de la muerte, sexo, estatura, y cualquier lesión registrada en los huesos que pueda ser relevante.</li>
  <li>Información sobre las circunstancias de la muerte, en la medida en que los restos y el contexto del hallazgo permitan determinarlo.</li>
  <li>Objetos personales recuperados junto con los restos, cuando los hay.</li>
</ul>
<p>Toda esa información es de la familia. El EAAF no toma decisiones por ella: le brinda los datos y la acompaña en el proceso de asimilarlos.</p>
<h3>La restitución de los restos</h3>
<p>Una vez que la familia ha procesado la información y está lista para recibir los restos, se coordina la entrega. Los restos son devueltos en condiciones dignas, junto con la documentación completa del análisis. La familia decide libremente qué hace con ellos: sepultura en un cementerio, ceremonias religiosas o laicas, inhumación en un lugar significativo.</p>
<blockquote><p>"Por primera vez en décadas, hay un lugar concreto. Un cajón, una lápida, un árbol, una playa. Algo donde llevar flores. Algo que no sea solo ausencia."</p></blockquote>
<h3>Acompañamiento psicológico</h3>
<p>El EAAF cuenta con un equipo de psicólogos especializados en duelo por desaparición forzada —una experiencia que no tiene equivalente en la pérdida convencional, porque durante décadas no hubo certeza, no hubo cuerpo, no hubo posibilidad de despedirse.</p>
<p>El acompañamiento psicológico comienza desde la primera notificación y está disponible para todos los miembros de la familia que lo necesiten, sin costo y sin límite de tiempo. También se puede derivar a redes locales de apoyo para quienes estén fuera de Buenos Aires o Córdoba.</p>
<h3>El rol de la identificación como prueba judicial</h3>
<p>En muchos casos, los restos identificados son también evidencia en causas de lesa humanidad que se tramitan en la justicia argentina. La identificación confirma quién era la víctima, cuándo y cómo murió, y puede vincular los hechos con un centro clandestino o con personas responsables ya imputadas.</p>
<p>El EAAF brinda testimonio pericial en estas causas cuando es necesario. La familia tiene derecho a ser parte del proceso judicial y el equipo la orienta sobre cómo ejercer ese derecho si así lo desea.</p>
<h3>Lo que cambia después</h3>
<p>Muchas familias describen la restitución como un quiebre. No porque el dolor desaparezca —no desaparece—, sino porque por primera vez el dolor tiene una forma concreta. Tiene nombre, tiene fecha, tiene lugar. Y eso, después de décadas de incertidumbre, transforma todo.</p>
<p>Como dijo una vez una hija después de recibir los restos de su madre: "Ahora sé dónde buscarla cuando la necesito."</p>`,
  },
  {
    id: 7,
    category: "Memoria, Verdad y Justicia",
    title: "Recuperar un nombre: por qué la identidad es un derecho que no prescribe",
    excerpt: "El nombre de una persona desaparecida no es solo un dato. Es su historia, su familia, su lugar en el mundo. Recuperarlo es un acto de justicia con efectos legales, históricos y profundamente humanos.",
    author: "Área de Comunicación EAAF",
    date: "24 abr. 2026",
    read: "7 min",
    featured: false,
    body: `<p>Durante la dictadura cívico-militar argentina, el terrorismo de Estado no solo mató. También borró. Borró nombres, borró registros, borró historias. La desaparición forzada fue diseñada para que no quedara rastro: ni cuerpo, ni tumba, ni certeza. Solo el vacío.</p>
<p>Trabajar para revertir ese borrado es, en sí mismo, un acto político y ético. Y es exactamente lo que hace el EAAF con cada identificación.</p>
<h3>El derecho a la identidad en el derecho internacional</h3>
<p>El derecho a la identidad está reconocido en múltiples instrumentos del derecho internacional de los derechos humanos, incluyendo la Convención sobre los Derechos del Niño y la Declaración sobre la Protección de Todas las Personas contra las Desapariciones Forzadas de la ONU. Implica el derecho de cada persona a ser reconocida como tal, a tener nombre, nacionalidad, y vínculos familiares legalmente reconocidos.</p>
<p>La desaparición forzada viola ese derecho de manera radical: borra la existencia legal de la persona, niega a la familia la posibilidad de saber qué pasó, y suspende indefinidamente el duelo.</p>
<h3>Qué cambia jurídicamente con una identificación</h3>
<p>Cuando el EAAF emite un informe de identificación positiva, se produce una serie de consecuencias jurídicas concretas:</p>
<ul>
  <li>Se puede declarar oficialmente el fallecimiento de la persona, poniendo fin a la situación de "ausencia por desaparición forzada" que muchas familias mantienen durante décadas por razones legales.</li>
  <li>La familia puede acceder a derechos sucesorios y pensiones que estaban en suspenso.</li>
  <li>El nombre de la persona puede ser reincorporado a los registros civiles como víctima identificada, no como "NN".</li>
  <li>Se puede actualizar la causa judicial correspondiente con la identidad confirmada de la víctima.</li>
</ul>
<h3>Los restos como prueba material en los juicios de lesa humanidad</h3>
<p>Los huesos hablan. En los juicios por crímenes de lesa humanidad que se tramitan en Argentina, la pericia forense del EAAF es considerada prueba material directa. Los restos identificados permiten:</p>
<ul>
  <li>Confirmar que una persona estuvo en un centro de detención determinado.</li>
  <li>Establecer la causa de muerte y si hubo signos de tortura o ejecución.</li>
  <li>Vincular los hechos con los imputados que operaban en ese lugar en esa fecha.</li>
</ul>
<blockquote><p>"Los restos de las víctimas son evidencia irrefutable. No hay declaración que los contradiga. El hueso dice la verdad."</p></blockquote>
<h3>El duelo postergado: por qué un nombre y una tumba cambian todo</h3>
<p>La psicología del duelo describe un proceso con etapas reconocibles: negación, ira, negociación, depresión, aceptación. Pero ese proceso presupone que hay un hecho frente al cual elaborar el duelo. La desaparición forzada lo impide: no hay certeza, no hay cuerpo, no hay fecha, no hay lugar. El duelo queda suspendido durante décadas.</p>
<p>Una identificación no resuelve ese duelo de manera inmediata ni automática. Pero le da las condiciones mínimas para comenzar: un nombre confirmado, una fecha de muerte, un lugar donde llevar flores. Para muchas familias, eso es lo que necesitaban para, por primera vez, empezar a despedirse.</p>
<h3>La identidad recuperada como legado</h3>
<p>Las identificaciones no solo importan para quienes vivieron la búsqueda. Importan también para las generaciones que siguen. Los nietos y bisnietos de personas desaparecidas crecen sabiendo que su historia familiar tiene un agujero. Cuando ese agujero se completa con un nombre, con una foto, con una historia, la identidad familiar se restaura.</p>
<p>Recuperar un nombre es decirle a la historia: esta persona existió, importó, y no va a ser olvidada. Y eso, en un país que todavía procesa los crímenes de su pasado reciente, es un acto de justicia que trasciende el expediente.</p>`,
  },
  {
    id: 8,
    category: "Memoria, Verdad y Justicia",
    title: "Historias de restitución: cuando la espera de décadas terminó",
    excerpt: "Son relatos de familias reales que, después de años de búsqueda, recibieron la llamada que cambió sus vidas. Historias de verdad, de ciencia y de un dolor que finalmente encontró nombre.",
    author: "Redacción EAAF",
    date: "16 abr. 2026",
    read: "6 min",
    featured: false,
    body: `<p>Los números pueden sonar fríos: más de 1.000 identificaciones realizadas desde 1984, en Argentina y en más de 50 países. Pero detrás de cada número hay una familia específica, una historia específica, y un momento —el de la llamada— que lo cambió todo.</p>
<p>Estas son tres de esas historias. Los nombres han sido modificados para proteger la privacidad de las familias, pero los hechos son reales.</p>
<h3>La madre que esperó cuarenta años</h3>
<p>Nora tenía 34 años cuando su hijo Miguel desapareció en 1976. Durante cuatro décadas mantuvo el expediente abierto, renovó los datos de contacto cada vez que el EAAF se lo pedía, y convenció a sus nietos —los hijos de Miguel— de que también dieran su muestra de sangre cuando llegaron a la mayoría de edad.</p>
<p>En 2016, a sus 74 años, recibió la llamada. Los restos de Miguel habían sido recuperados en una fosa común de la provincia de Buenos Aires años antes, pero no tenían con quién comparar el perfil genético hasta que uno de sus nietos aportó su muestra.</p>
<p>"No lloré cuando me llamaron. Me quedé en silencio un rato largo. Después le dije a la señorita: 'Gracias. Ahora puedo morir tranquila.' Porque ya sé dónde está."</p>
<h3>El nieto que descubrió su historia</h3>
<p>Ezequiel creció sabiendo que algo en su historia familiar no cerraba. Sus padres adoptivos lo habían criado con amor, pero ciertos silencios, ciertas fechas que no coincidían, lo llevaron de adulto a contactar al EAAF. El cotejo genético con la base de datos de la organización de Abuelas de Plaza de Mayo —que trabaja en coordinación con el EAAF— confirmó lo que sospechaba: era hijo de dos personas desaparecidas. Sus abuelas biológicas, ya ancianas, lo estaban buscando desde hacía más de 30 años.</p>
<p>"No sé cómo explicar lo que es saber de dónde venís. Es como que de repente el piso está firme bajo los pies."</p>
<blockquote><p>"Cada identificación es única. Pero todas tienen algo en común: le devuelven a alguien la posibilidad de saber."</p></blockquote>
<h3>La identificación que cerró un juicio</h3>
<p>En el juicio oral y público contra los responsables del centro de detención clandestina "El Vesubio", la pericia del EAAF sobre los restos identificados como Carlos R. fue determinante. La causa de muerte —un disparo en la nuca, registrado en el hueso occipital— contradecía la versión oficial de que la víctima había muerto "en un enfrentamiento armado". El informe forense fue incorporado como prueba y contribuyó a la condena de cuatro ex militares.</p>
<p>La hija de Carlos, que tenía tres años cuando su padre fue detenido, declaró en el juicio. "Lo único que quería era decir en voz alta: mi papá se llamaba Carlos, tenía 29 años, y lo mataron. Eso es lo que pude hacer gracias al EAAF."</p>
<h3>El momento de la llamada</h3>
<p>Quienes han recibido esa llamada describen el momento de maneras muy distintas. Algunos lloraron de inmediato. Otros se quedaron en silencio. Algunos no podían creerlo. Todos coinciden en una cosa: el tiempo, en ese momento, se detiene.</p>
<p>El EAAF lo sabe. Por eso el primer contacto no es una notificación formal: es una conversación. Hay tiempo para preguntas, para silencios, para lo que la familia necesite. Y lo que sigue —la entrega de los restos, los análisis, los documentos, el acompañamiento— se construye al ritmo de cada familia.</p>
<h3>Qué hicieron después</h3>
<p>Cada familia decide qué hacer con los restos restituidos. Hay quienes eligieron sepulturas en cementerios municipales, con lápidas que por primera vez llevan el nombre completo de la persona desaparecida. Hay quienes realizaron ceremonias laicas en lugares significativos —plazas, ríos, jardines—. Hay quienes guardaron las cenizas en casa y las acompañan de fotos y objetos.</p>
<p>Y hay quienes, después de décadas sin poder explicarles a los nietos qué había pasado con su abuelo o abuela, finalmente pudieron sentarse a contar la historia completa. Con nombre, con fecha, con lugar, y con la certeza que la ciencia les devolvió.</p>`,
  },
  {
    id: 9,
    category: "Identificación y ADN",
    title: "Laboratorio de Genética Forense: dónde ocurre la ciencia que devuelve nombres",
    excerpt: "En Córdoba funciona el laboratorio donde el EAAF procesa muestras de ADN de familias y restos óseos. Te mostramos cómo trabaja, qué tecnologías usa y por qué su rigor científico es la base de cada identificación.",
    author: "Equipo Científico EAAF",
    date: "30 abr. 2026",
    read: "7 min",
    featured: false,
    body: `<p>Detrás de cada identificación hay un laboratorio. Un lugar donde batas blancas, microscopios y secuenciadores de última generación transforman fragmentos de hueso en certezas. El Laboratorio de Genética Forense del EAAF, ubicado en la ciudad de Córdoba, es uno de los más especializados de América Latina en análisis de ADN en restos con décadas de antigüedad.</p>
<p>Conocer cómo trabaja ese laboratorio no es solo información técnica: es entender por qué las identificaciones del EAAF son irrefutables.</p>
<h3>¿Por qué Córdoba?</h3>
<p>El laboratorio se estableció en Córdoba por razones prácticas e históricas. La ciudad concentra una alta densidad de casos de la dictadura en el noroeste del país, y su ubicación permite una logística eficiente para el trabajo de campo en varias provincias. Además, el EAAF desarrolló alianzas con la Universidad Nacional de Córdoba y otros centros científicos locales que fortalecen la capacidad analítica del equipo.</p>
<h3>Qué tecnologías se usan</h3>
<p>El laboratorio trabaja con tecnologías de genética forense de última generación:</p>
<ul>
  <li><strong>Secuenciación de ADN de nueva generación (NGS):</strong> permite analizar muestras muy degradadas que antes eran inviables, obteniendo perfiles genéticos a partir de fragmentos mínimos de material genético.</li>
  <li><strong>Análisis de STRs (Short Tandem Repeats):</strong> los marcadores genéticos estándar en genética forense, que permiten calcular con precisión la probabilidad de parentesco biológico.</li>
  <li><strong>ADN mitocondrial:</strong> especialmente útil cuando el ADN nuclear está muy degradado. Se hereda exclusivamente por vía materna y permite rastrear líneas maternas a lo largo de generaciones.</li>
  <li><strong>Cromosoma Y:</strong> para análisis de líneas paternas directas entre varones de una misma familia.</li>
</ul>
<blockquote><p>"Trabajamos con tecnología que hace diez años no existía. Eso significa que casos que eran imposibles de resolver antes, hoy tienen solución."</p></blockquote>
<h3>El proceso desde que llega una muestra</h3>
<p>Cuando una muestra de sangre familiar o un fragmento óseo llega al laboratorio, sigue un protocolo estricto:</p>
<ul>
  <li>Registro e identificación con código único —nunca con el nombre de la persona, para proteger la confidencialidad.</li>
  <li>Descontaminación del material para evitar resultados falsos por contaminación externa.</li>
  <li>Extracción del ADN en área de acceso restringido.</li>
  <li>Amplificación y secuenciación del perfil genético.</li>
  <li>Cotejo automatizado contra todos los perfiles en la base de datos.</li>
  <li>Revisión humana de cada posible coincidencia antes de emitir cualquier resultado.</li>
</ul>
<h3>Cuántas muestras se procesan</h3>
<p>El laboratorio procesa miles de muestras por año, provenientes tanto de Argentina como de los países donde el EAAF tiene operaciones activas: México, El Salvador, Bosnia, Sri Lanka, entre otros. La base de datos de perfiles genéticos de familias crece continuamente, lo que aumenta la probabilidad de nuevas coincidencias con restos ya recuperados.</p>
<h3>Por qué la ciencia del EAAF es admisible en juicio</h3>
<p>Los resultados del laboratorio no solo sirven para notificar a las familias: son prueba pericial admisible en juicios penales. Para eso, el laboratorio mantiene protocolos de cadena de custodia estrictos, donde cada movimiento de una muestra queda registrado. Los peritos del EAAF declaran en causas de lesa humanidad en Argentina y en tribunales internacionales, con un historial de credibilidad científica que ninguna defensa ha logrado cuestionar.</p>
<p>La ciencia que ocurre en ese laboratorio no es abstracta. Es lo que permite que una familia reciba una llamada, un nombre, y la posibilidad —por fin— de despedirse.</p>`,
  },
  {
    id: 10,
    category: "Preguntas Frecuentes",
    title: "¿Qué pasa con los restos si no hay familia que los reclame?",
    excerpt: "No todas las personas identificadas tienen familiares vivos para recibirlas. El EAAF tiene protocolos específicos para garantizar que cada persona recuperada reciba un trato digno, independientemente de su situación familiar.",
    author: "Redacción EAAF",
    date: "8 abr. 2026",
    read: "5 min",
    featured: false,
    body: `<p>Es una pregunta que pocas personas hacen en voz alta, pero que muchos se formulan: ¿qué pasa con los restos de una persona identificada si no queda nadie para recibirlos? ¿Si los familiares directos también murieron, o si no se encontró a ningún pariente vivo?</p>
<p>La respuesta del EAAF combina rigor institucional y profundo respeto por la dignidad de cada persona recuperada.</p>
<h3>La búsqueda de familiares no se detiene fácilmente</h3>
<p>Antes de considerar que no hay familia, el EAAF realiza un proceso exhaustivo de búsqueda. Eso incluye:</p>
<ul>
  <li>Revisión de registros civiles, documentos judiciales y archivos históricos.</li>
  <li>Contacto con organizaciones de derechos humanos locales que puedan tener datos de familiares.</li>
  <li>Publicación en redes y comunicados para que personas que podrían ser parientes tomen conocimiento del caso.</li>
  <li>Coordinación con organismos internacionales cuando la familia podría estar en el exterior.</li>
</ul>
<p>En muchos casos, esta búsqueda recupera vínculos familiares que la propia familia desconocía: primos lejanos, descendientes de hermanos emigrados, personas que no sabían que buscaban a alguien.</p>
<h3>Qué ocurre cuando no se encuentra nadie</h3>
<p>Cuando, después de agotar los recursos disponibles, no se localiza a ningún familiar o referente, el EAAF no procede a la destrucción ni al almacenamiento indefinido en condiciones precarias. Los restos son inhumados en un lugar digno, con la identidad ya confirmada consignada en los registros correspondientes.</p>
<blockquote><p>"Toda persona tiene derecho a un lugar en el mundo, incluso después de la muerte. La identificación garantiza que ese lugar sea conocido y reconocido."</p></blockquote>
<h3>La identidad queda en el registro, para siempre</h3>
<p>Lo más importante es que la identificación —el nombre, la fecha, el vínculo con un caso judicial— queda registrada de manera permanente. Eso tiene varias consecuencias:</p>
<ul>
  <li>Si en el futuro aparece un familiar que no estaba registrado, puede acceder a esa información y eventualmente a los restos.</li>
  <li>La identificación puede usarse como prueba en causas judiciales de lesa humanidad, aun sin familia presente.</li>
  <li>El nombre de la persona deja de figurar como "NN" en cualquier registro: recupera su identidad legalmente.</li>
</ul>
<h3>El rol de las organizaciones de memoria</h3>
<p>En algunos casos, cuando no hay familia biológica disponible, organismos de derechos humanos como Madres de Plaza de Mayo, Abuelas, H.I.J.O.S. o COFAVI asumen un rol de acompañamiento institucional. No reemplazan a la familia, pero garantizan que la persona no sea restituida en soledad absoluta y que su historia sea preservada en los espacios de memoria colectiva.</p>
<h3>¿Puedo registrarme como referente si no soy familiar directo?</h3>
<p>Si conocés a alguien que fue detenido-desaparecido y creés que podría no tener familia que lo busque activamente, podés contactar al EAAF para brindar información. Cada dato —un nombre, una fecha, un lugar de detención— puede ser la pieza que falta para completar una identificación o para encontrar a un familiar que no sabe que está buscando.</p>
<p>La búsqueda es colectiva. La memoria también.</p>`,
  },
];
