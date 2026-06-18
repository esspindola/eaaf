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
  "Identificación y ADN":              "#1a5fa8",
  "Preguntas Frecuentes para Familias": "#E2064A",
  "Ciencia y Trabajo Forense":          "#b45309",
  "Memoria, Verdad y Justicia":         "#166534",
};

export const posts: Post[] = [
  {
    id: 1,
    category: "Identificación y ADN",
    title: "¿Qué es el ADN y cómo ayuda a identificar personas desaparecidas?",
    excerpt: "Cuando los restos óseos ya no tienen nombre, el ADN habla por ellos. Te explicamos, paso a paso y en palabras simples, cómo el análisis genético puede identificar a una persona desaparecida décadas después.",
    author: "Equipo Científico EAAF",
    date: "12 jun. 2026",
    read: "9 min",
    featured: true,
    body: `<p>Si alguna vez te preguntaste cómo es posible que una muestra de sangre pueda conectarse con huesos que llevan décadas bajo tierra, no estás sola. Es una pregunta completamente lógica, y tiene una respuesta científica concreta. El ADN —el material genético que está en cada una de nuestras células— no desaparece con el tiempo de la manera en que lo hacen los tejidos blandos. En condiciones adecuadas, puede persistir en los huesos por décadas, e incluso siglos. Y esa persistencia es la que hace posible el trabajo del EAAF.</p>
<h3>¿Qué es el ADN?</h3>
<p>El ADN (ácido desoxirribonucleico) es la molécula que contiene las instrucciones genéticas de cada ser vivo. Está presente en casi todas las células del cuerpo: en la sangre, en los huesos, en los dientes. Lo que lo hace tan poderoso como herramienta de identificación es que, salvo en los gemelos idénticos, nadie en el mundo tiene exactamente el mismo ADN.</p>
<p>Parte de ese ADN se hereda directamente de los padres. Eso significa que el ADN de una persona desaparecida comparte características específicas y medibles con el de sus hijos, hermanos, padres o nietos. Y es exactamente esa herencia lo que permite la identificación.</p>
<h3>¿Por qué el ADN persiste en los huesos?</h3>
<p>Los restos óseos recuperados de fosas comunes o sitios de entierro clandestino ya no tienen tejido blando. Pero el hueso en sí —especialmente el tejido duro del interior, llamado hueso cortical— puede conservar ADN en cantidades suficientes para el análisis. Los dientes, por su estructura cerrada, son especialmente buenos conservadores del material genético.</p>
<h3>Cómo se obtiene y analiza el ADN forense</h3>
<p>En el Laboratorio de Genética Forense del EAAF, los científicos realizan un proceso cuidadoso:</p>
<ul>
  <li>Se selecciona el fragmento óseo o dental con mejores condiciones de preservación.</li>
  <li>Se descontamina y pulveriza una pequeña porción del hueso.</li>
  <li>Se extrae el ADN de ese polvo óseo usando reactivos especializados.</li>
  <li>Se amplifica el ADN obtenido para poder analizarlo.</li>
  <li>Se genera un perfil genético único, comparable con otros perfiles en la base de datos.</li>
</ul>
<blockquote><p>"No es magia. Es química, biología molecular y décadas de experiencia acumulada. Pero el resultado —cuando hay coincidencia— es irrefutable."</p></blockquote>
<h3>La base de datos: donde ocurre la comparación</h3>
<p>Cuando un familiar aporta una muestra de sangre, su perfil genético ingresa a una base de datos. Esa base se compara continuamente con los perfiles obtenidos de restos recuperados. Si hay una coincidencia estadísticamente significativa, se inicia el proceso de confirmación. El nivel de certeza requerido para declarar una identificación positiva es de <strong>99,9% o superior</strong>.</p>
<h3>¿Por qué cada muestra importa, sin importar el tiempo?</h3>
<p>Muchas familias piensan que ya es demasiado tarde para dar una muestra. No es así. El EAAF recupera e identifica restos de manera continua. Cada nueva excavación genera restos que se comparan contra la base de datos existente. Una muestra que se ingresa hoy puede coincidir con restos recuperados hace años, o con hallazgos futuros.</p>
<p>La base de datos no tiene fecha de vencimiento. La búsqueda tampoco.</p>`,
  },
  {
    id: 2,
    category: "Identificación y ADN",
    title: "¿Por qué es importante donar una muestra de sangre?",
    excerpt: "Dar una muestra de sangre es el acto más concreto que un familiar puede hacer para avanzar en la búsqueda. Entendé cómo funciona, qué pasa con tus datos y por qué cada muestra importa.",
    author: "Equipo Científico EAAF",
    date: "5 jun. 2026",
    read: "6 min",
    featured: false,
    body: `<p>A veces la búsqueda parece abstracta: expedientes, declaraciones, trámites. Pero hay un paso muy concreto que cualquier familiar puede dar hoy mismo, desde cualquier punto del país o del mundo: aportar una muestra de sangre al EAAF. No requiere preparación previa, no tiene costo, y puede ser la pieza que faltaba para identificar a tu ser querido.</p>
<h3>¿Qué información contiene tu muestra?</h3>
<p>La sangre contiene glóbulos blancos, y dentro de ellos, el ADN completo de esa persona. Ese ADN incluye marcadores genéticos heredados de los padres biológicos, únicos y comparables con el ADN extraído de restos óseos. No se analiza todo el genoma: solo las regiones específicas que permiten establecer o descartar un parentesco biológico con alta certeza estadística.</p>
<p>El EAAF no usa tu muestra para ningún otro fin. No determina enfermedades genéticas, no se comparte con empresas ni con organismos estatales. El único propósito es la búsqueda e identificación de personas desaparecidas.</p>
<h3>¿Cómo contribuye tu muestra a futuras identificaciones?</h3>
<p>Una vez procesada tu muestra, el perfil genético resultante ingresa a la base de datos del EAAF. Ese perfil se compara automáticamente con todos los perfiles obtenidos de restos óseos recuperados —tanto los que ya están en la base como los que se incorporarán en el futuro.</p>
<blockquote><p>"Tu muestra no caduca. Queda en la base y se compara con cada nuevo hallazgo. El tiempo no juega en contra: juega a favor."</p></blockquote>
<h3>Privacidad: quiénes tienen acceso a tus datos</h3>
<p>El EAAF opera bajo un estricto protocolo de confidencialidad. Los datos genéticos de los familiares nunca son compartidos con el Estado, con organismos judiciales ni con terceros, salvo que la propia familia lo solicite expresamente y por escrito para un procedimiento legal específico.</p>
<h3>¿Qué pasa si el familiar más cercano ya falleció?</h3>
<p>La respuesta es alentadora: <strong>otros parientes también pueden aportar información genética valiosa</strong>. El vínculo genético se transmite por líneas biológicas, por lo que nietos, sobrinos, primos, o incluso hermanos del desaparecido que viven en distintos países pueden contribuir con sus muestras.</p>
<h3>Cómo y dónde dar la muestra</h3>
<ul>
  <li><strong>Presencial:</strong> podés acercarte a las oficinas del EAAF en Buenos Aires o Córdoba, o a una de las jornadas de toma de muestras en distintas provincias.</li>
  <li><strong>Por correo postal:</strong> el EAAF envía un kit de recolección a domicilio con instrucciones simples.</li>
</ul>
<p>Para iniciar el proceso: <strong>0800 345 3236</strong> (llamada gratuita) o <strong>iniciativa@eaaf.org</strong>.</p>`,
  },
  {
    id: 3,
    category: "Preguntas Frecuentes para Familias",
    title: "¿Quiénes pueden donar muestras y cuántos familiares se necesitan?",
    excerpt: "¿Sos hijo, nieto, hermano o sobrino de una persona desaparecida? Cada vínculo genético tiene un valor distinto en el proceso de identificación. Te explicamos quién puede participar y por qué.",
    author: "Redacción EAAF",
    date: "28 may. 2026",
    read: "5 min",
    featured: false,
    body: `<p>Una de las preguntas que más llega al EAAF es: "¿Puedo dar una muestra si soy el nieto, el sobrino, o el primo?" La respuesta corta es: sí, en la mayoría de los casos. La respuesta larga explica por qué cada vínculo aporta algo distinto, y por qué la suma de varios familiares hace el proceso más robusto.</p>
<h3>Familiares de primera línea: el vínculo más directo</h3>
<ul>
  <li><strong>Hijos biológicos:</strong> heredan el 50% del ADN de cada progenitor. Son el vínculo más informativo.</li>
  <li><strong>Padres biológicos:</strong> cada uno aportó el 50% del ADN de la persona desaparecida.</li>
  <li><strong>Hermanos biológicos:</strong> comparten en promedio el 50% del ADN.</li>
</ul>
<h3>Familiares de segunda y tercera línea: también aportan</h3>
<ul>
  <li><strong>Nietos:</strong> comparten aproximadamente el 25% del ADN con cada abuelo. Cuantos más nietos aporten muestra, mayor es la certeza.</li>
  <li><strong>Sobrinos y tíos:</strong> comparten alrededor del 25% del ADN.</li>
  <li><strong>Primos hermanos:</strong> comparten alrededor del 12,5%. Aportan menos información por sí solos, pero suman en combinación con otros.</li>
</ul>
<blockquote><p>"No existe 'parentesco demasiado lejano' para intentarlo. Lo que importa es que el perfil genético esté en la base de datos."</p></blockquote>
<h3>¿Cuántos familiares se necesitan?</h3>
<p>La genética forense trabaja con probabilidades estadísticas. Cuantos más familiares biológicos aporten su muestra, más información tiene el algoritmo de cotejo para calcular la probabilidad de parentesco. Un análisis basado en cuatro muestras de familiares distintos puede alcanzar el 99,9% de certeza incluso cuando ninguna muestra por sí sola sería suficiente.</p>
<p>Por eso el EAAF alienta a que varios miembros de una misma familia se registren, incluso si ya lo hizo alguno.</p>
<h3>¿Cómo funcionan las comparaciones genéticas?</h3>
<p>El laboratorio analiza marcadores específicos del ADN de los restos recuperados y los compara con los perfiles de familiares registrados. El sistema calcula automáticamente la probabilidad de que exista un parentesco biológico. Si esa probabilidad supera el 99,9%, se inicia el proceso de confirmación y posterior notificación.</p>
<p>Algunos vínculos genéticos específicos permiten análisis adicionales: el <strong>ADN mitocondrial</strong> (herencia materna) y el <strong>cromosoma Y</strong> (herencia paterna) son especialmente útiles cuando los restos están muy degradados.</p>`,
  },
  {
    id: 4,
    category: "Preguntas Frecuentes para Familias",
    title: "¿Cuánto tiempo tarda una identificación?",
    excerpt: "No hay una respuesta única. Depende de la complejidad del caso, el estado de los restos y la información disponible. Te explicamos qué etapas atraviesa el proceso y por qué puede extenderse durante años.",
    author: "Redacción EAAF",
    date: "20 may. 2026",
    read: "7 min",
    featured: false,
    body: `<p>Esta es la pregunta que más duele hacer, y a la que el EAAF siempre responde con honestidad: no existe un plazo estándar. Una identificación puede ocurrir en meses o llevar décadas. No porque el equipo no trabaje, sino porque el proceso depende de variables que van mucho más allá de la voluntad de las personas involucradas.</p>
<h3>Las etapas del proceso de identificación</h3>
<p>Desde la primera denuncia hasta la restitución de los restos, el proceso atraviesa varias fases:</p>
<ul>
  <li><strong>Investigación histórica:</strong> búsqueda de información sobre la persona desaparecida, lugar de detención y posible sitio de enterramiento.</li>
  <li><strong>Localización y excavación:</strong> trabajo de campo para recuperar los restos.</li>
  <li><strong>Análisis de laboratorio:</strong> estudio antropológico y genético de los restos recuperados.</li>
  <li><strong>Cotejo con la base de datos:</strong> comparación del perfil genético con las muestras familiares registradas.</li>
  <li><strong>Confirmación y notificación:</strong> verificación con certeza del 99,9% y contacto con la familia.</li>
</ul>
<h3>¿Por qué puede extenderse durante años?</h3>
<ul>
  <li><strong>Restos fragmentados o muy degradados:</strong> condiciones extremas de humedad o acidez del suelo dificultan la extracción de ADN.</li>
  <li><strong>Ausencia de muestras familiares:</strong> si nadie de la familia biológica aportó su ADN, es imposible hacer un cotejo, aunque los restos ya hayan sido recuperados.</li>
  <li><strong>Falta de información ante-mortem:</strong> sin datos previos que orienten los análisis, el proceso se extiende.</li>
  <li><strong>Sitios de entierro desconocidos o destruidos:</strong> muchos lugares fueron urbanizados o intervenidos, y localizarlos requiere investigación histórica extensa.</li>
</ul>
<blockquote><p>"La espera no es pasividad. Hay casos en los que la coincidencia genética apareció 20 años después de ingresar la muestra a la base de datos, porque recién entonces se recuperaron los restos."</p></blockquote>
<h3>¿Qué puedo hacer para colaborar?</h3>
<ul>
  <li>Comunicar cualquier nueva información: testimonios de sobrevivientes, documentos encontrados, datos sobre el lugar de detención.</li>
  <li>Notificar cambios en tus datos de contacto.</li>
  <li>Alentar a otros familiares biológicos a que aporten su muestra.</li>
  <li>Consultar periódicamente el estado del expediente llamando al <strong>0800 345 3236</strong>.</li>
</ul>
<p>Si tu familiar desapareció hace décadas y no recibiste noticias, eso no significa que el caso esté cerrado. El primer paso es contactar al equipo y confirmar que todos los familiares biológicos disponibles han dado su muestra. A veces, un solo pariente que no se había registrado es la pieza que faltaba.</p>`,
  },
  {
    id: 5,
    category: "Ciencia y Trabajo Forense",
    title: "¿Cómo trabaja el Equipo Argentino de Antropología Forense?",
    excerpt: "Desde la investigación histórica hasta la restitución de los restos, el EAAF sigue un protocolo científico riguroso. Conocé cada etapa del proceso: búsqueda, exhumación e identificación.",
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
<p>El objetivo es obtener información que permita determinar qué personas estuvieron en un lugar determinado y, cuando es posible, dónde podrían haber sido enterradas.</p>
<h3>Etapa 2: Búsqueda y localización de sitios de enterramiento</h3>
<p>Con la información documental en mano, el equipo realiza prospecciones en los sitios identificados. Se utilizan técnicas no invasivas como análisis de fotografías aéreas históricas, prospección geofísica (georradar) y reconocimiento del terreno. Esta fase puede tomar meses o años, especialmente en terrenos modificados por construcciones o inundaciones.</p>
<h3>Etapa 3: Exhumación con metodología arqueológica</h3>
<p>Cuando se localiza un posible sitio de entierro, comienza la excavación:</p>
<ul>
  <li>Se delimita y cuadricula el área de trabajo.</li>
  <li>Se excava por niveles, documentando cada hallazgo con fotografías, videos y dibujos de campo.</li>
  <li>Cada fragmento óseo se recupera, etiqueta y embala de forma individual.</li>
  <li>Se recolectan objetos asociados (ropa, calzado, documentos, objetos personales) que pueden aportar datos de identidad.</li>
</ul>
<blockquote><p>"La excavación forense no es como las excavaciones de películas. Cada centímetro se trabaja con paciencia, porque en esos centímetros puede haber evidencia irreemplazable."</p></blockquote>
<h3>Etapa 4: Análisis en laboratorio</h3>
<p>Los restos recuperados se analizan en dos especialidades paralelas:</p>
<ul>
  <li><strong>Antropología física:</strong> determina edad, sexo, estatura y posibles lesiones al momento de la muerte a partir de los huesos.</li>
  <li><strong>Genética forense:</strong> extrae ADN de los huesos o dientes para generar un perfil genético que se compara con la base de datos de familias registradas.</li>
</ul>
<h3>Etapa 5: Identificación, confirmación y restitución</h3>
<p>Cuando hay una coincidencia confirmada (99,9% o superior), el EAAF notifica a la familia de manera personal. Los restos se entregan junto con documentación completa del análisis. Un equipo de psicólogos acompaña a la familia antes, durante y después de la restitución, el tiempo que sea necesario.</p>`,
  },
  {
    id: 6,
    category: "Ciencia y Trabajo Forense",
    title: "¿Qué sucede después de una identificación positiva?",
    excerpt: "Una identificación positiva no es el final del proceso: es el comienzo de otro. Te explicamos el procedimiento legal, científico y humano que continúa después de confirmar una identidad.",
    author: "Equipo Científico EAAF",
    date: "2 may. 2026",
    read: "8 min",
    featured: false,
    body: `<p>Muchas familias le temen a ese momento. El llamado del EAAF que cambia todo. No saben bien qué esperar, qué les van a decir, cómo van a reaccionar. Es completamente comprensible. Por eso creemos que hablar de ese momento antes de que ocurra ayuda a transitarlo con menos angustia.</p>
<h3>El procedimiento científico de confirmación</h3>
<p>Cuando el equipo detecta una posible coincidencia genética, no se notifica de inmediato a la familia. Primero se realizan análisis de confirmación con marcadores adicionales para alcanzar el umbral de certeza requerido. Luego se confronta con toda la información ante-mortem disponible: edad, sexo, lesiones, objetos personales. Solo cuando el equipo completo revisa y valida los resultados se emite el informe oficial de identificación.</p>
<h3>Cómo y cuándo se notifica a la familia</h3>
<p>Ese contacto lo realiza siempre una persona del equipo que ya conoce el caso. Se coordina un encuentro, en persona siempre que sea posible, donde se comunica el resultado. En ese primer encuentro no se entrega nada todavía. Solo se da la información, se da espacio para las preguntas, y se ofrece acompañamiento profesional para los días siguientes.</p>
<h3>Las consecuencias jurídicas de una identificación</h3>
<p>Una identificación positiva tiene efectos legales concretos:</p>
<ul>
  <li>Se puede declarar oficialmente el fallecimiento, poniendo fin a la situación de "ausencia por desaparición forzada".</li>
  <li>La familia puede acceder a derechos sucesorios y pensiones que estaban en suspenso.</li>
  <li>El nombre de la persona puede ser reincorporado a los registros civiles como víctima identificada.</li>
  <li>Se puede actualizar la causa judicial correspondiente con la identidad confirmada.</li>
</ul>
<blockquote><p>"Por primera vez en décadas, hay un lugar concreto. Un cajón, una lápida, un árbol. Algo donde llevar flores. Algo que no sea solo ausencia."</p></blockquote>
<h3>La restitución de los restos</h3>
<p>Una vez que la familia ha procesado la información y está lista para recibir los restos, se coordina la entrega. Los restos son devueltos en condiciones dignas, junto con la documentación completa del análisis. La familia decide libremente qué hace con ellos: sepultura en cementerio, ceremonias religiosas o laicas, inhumación en un lugar significativo.</p>
<h3>Acompañamiento psicológico y rol en los juicios</h3>
<p>El EAAF cuenta con un equipo de psicólogos especializados en duelo por desaparición forzada. El acompañamiento comienza desde la primera notificación y está disponible sin costo y sin límite de tiempo.</p>
<p>En muchos casos, los restos identificados son también evidencia en causas de lesa humanidad. El EAAF brinda testimonio pericial cuando es necesario, y orienta a la familia sobre cómo participar del proceso judicial si así lo desea.</p>`,
  },
  {
    id: 7,
    category: "Memoria, Verdad y Justicia",
    title: "La importancia de recuperar identidades",
    excerpt: "El nombre de una persona desaparecida no es solo un dato. Es su historia, su familia, su lugar en el mundo. Recuperarlo tiene un impacto social, histórico y familiar que trasciende el expediente.",
    author: "Área de Comunicación EAAF",
    date: "24 abr. 2026",
    read: "7 min",
    featured: false,
    body: `<p>Durante la dictadura cívico-militar argentina, el terrorismo de Estado no solo mató. También borró. Borró nombres, borró registros, borró historias. La desaparición forzada fue diseñada para que no quedara rastro: ni cuerpo, ni tumba, ni certeza. Solo el vacío.</p>
<p>Trabajar para revertir ese borrado es, en sí mismo, un acto político y ético. Y es exactamente lo que hace el EAAF con cada identificación.</p>
<h3>El impacto familiar: el duelo que no pudo comenzar</h3>
<p>La psicología del duelo describe un proceso con etapas reconocibles. Pero ese proceso presupone que hay un hecho frente al cual elaborar el duelo. La desaparición forzada lo impide: no hay certeza, no hay cuerpo, no hay fecha, no hay lugar. El duelo queda suspendido durante décadas.</p>
<p>Una identificación no resuelve ese duelo de manera inmediata ni automática. Pero le da las condiciones mínimas para comenzar: un nombre confirmado, una fecha de muerte, un lugar donde llevar flores. Para muchas familias, eso es lo que necesitaban para, por primera vez, empezar a despedirse.</p>
<h3>El impacto histórico: reescribir lo que fue borrado</h3>
<p>Las identificaciones no solo importan para quienes vivieron la búsqueda. Importan también para las generaciones que siguen. Los nietos y bisnietos de personas desaparecidas crecen sabiendo que su historia familiar tiene un agujero. Cuando ese agujero se completa con un nombre, con una foto, con una historia, la identidad familiar se restaura.</p>
<blockquote><p>"Recuperar un nombre es decirle a la historia: esta persona existió, importó, y no va a ser olvidada."</p></blockquote>
<h3>El impacto social: la memoria como derecho colectivo</h3>
<p>Cada identificación es un hecho público que le recuerda a la sociedad lo que ocurrió y quiénes fueron las víctimas. No como estadísticas: como personas reales, con nombre, con familia, con historia. Eso tiene un efecto sobre la memoria colectiva que ningún archivo o monumento puede reemplazar por completo.</p>
<p>El derecho a la identidad está reconocido en múltiples instrumentos del derecho internacional de los derechos humanos. La desaparición forzada lo viola de manera radical. Recuperar ese derecho —persona por persona, nombre por nombre— es parte del proceso de justicia que Argentina sigue construyendo décadas después.</p>
<h3>El impacto judicial: prueba material que no prescribe</h3>
<p>Los restos identificados son evidencia admisible en los juicios por crímenes de lesa humanidad. La pericia del EAAF permite confirmar quién era la víctima, cuándo y cómo murió, y vincular los hechos con centros clandestinos e imputados. Los huesos dicen la verdad que ninguna declaración puede contradecir.</p>`,
  },
  {
    id: 8,
    category: "Memoria, Verdad y Justicia",
    title: "Historias que encontraron respuestas",
    excerpt: "Son relatos de familias reales que, después de años de búsqueda, recibieron la llamada que cambió sus vidas. Casos donde la ciencia del EAAF devolvió certezas después de décadas de incertidumbre.",
    author: "Redacción EAAF",
    date: "16 abr. 2026",
    read: "6 min",
    featured: false,
    body: `<p>Los números pueden sonar fríos: más de 1.000 identificaciones realizadas desde 1984, en Argentina y en más de 50 países. Pero detrás de cada número hay una familia específica, una historia específica, y un momento —el de la llamada— que lo cambió todo.</p>
<p>Estas son tres de esas historias. Los nombres han sido modificados para proteger la privacidad de las familias, pero los hechos son reales.</p>
<h3>La madre que esperó cuarenta años</h3>
<p>Nora tenía 34 años cuando su hijo Miguel desapareció en 1976. Durante cuatro décadas mantuvo el expediente abierto, renovó los datos de contacto cada vez que el EAAF se lo pedía, y convenció a sus nietos de que también dieran su muestra de sangre cuando llegaron a la mayoría de edad.</p>
<p>En 2016, a sus 74 años, recibió la llamada. Los restos de Miguel habían sido recuperados en una fosa común años antes, pero no tenían con quién comparar el perfil genético hasta que uno de sus nietos aportó su muestra.</p>
<p>"No lloré cuando me llamaron. Me quedé en silencio un rato largo. Después le dije a la señorita: 'Gracias. Ahora puedo morir tranquila.' Porque ya sé dónde está."</p>
<h3>El nieto que descubrió su historia</h3>
<p>Ezequiel creció sabiendo que algo en su historia familiar no cerraba. Sus padres adoptivos lo habían criado con amor, pero ciertos silencios, ciertas fechas que no coincidían, lo llevaron de adulto a contactar al EAAF. El cotejo genético confirmó lo que sospechaba: era hijo de dos personas desaparecidas. Sus abuelas biológicas, ya ancianas, lo estaban buscando desde hacía más de 30 años.</p>
<p>"No sé cómo explicar lo que es saber de dónde venís. Es como que de repente el piso está firme bajo los pies."</p>
<blockquote><p>"Cada identificación es única. Pero todas tienen algo en común: le devuelven a alguien la posibilidad de saber."</p></blockquote>
<h3>La identificación que cerró un juicio</h3>
<p>En el juicio oral contra los responsables de un centro de detención clandestina, la pericia del EAAF sobre los restos identificados como Carlos R. fue determinante. La causa de muerte —un disparo en la nuca, registrado en el hueso occipital— contradecía la versión oficial de que la víctima había muerto "en un enfrentamiento armado". El informe forense fue incorporado como prueba y contribuyó a la condena de cuatro ex militares.</p>
<p>La hija de Carlos, que tenía tres años cuando su padre fue detenido, declaró en el juicio. "Lo único que quería era decir en voz alta: mi papá se llamaba Carlos, tenía 29 años, y lo mataron. Eso es lo que pude hacer gracias al EAAF."</p>
<h3>Lo que cambia después</h3>
<p>Cada familia decide qué hacer con los restos restituidos. Hay quienes eligieron sepulturas en cementerios con lápidas que por primera vez llevan el nombre completo. Hay quienes realizaron ceremonias en lugares significativos. Y hay quienes, después de décadas sin poder explicarles a los nietos qué había pasado, finalmente pudieron sentarse a contar la historia completa. Con nombre, con fecha, con lugar, y con la certeza que la ciencia les devolvió.</p>`,
  },
];
