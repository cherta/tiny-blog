import db from "./index"

const seed = async () => {
  await db.post.deleteMany()
  await db.user.deleteMany()

  const jane = await db.user.create({
    data: { name: "Jane Doe", email: "jane-doe@ingsw.com" },
  })

  const joe = await db.user.create({
    data: { name: "John Doe", email: "john-doe@ingsw.com" },
  })

  await db.post.create({
    data: {
      user: { connect: { id: jane.id } },
      title: "Continuidad de los parques",
      body: "Había empezado a leer la novela unos días antes. La abandonó por negocios urgentes, volvió a abrirla cuando regresaba en tren a la finca; se dejaba interesar lentamente por la trama, por el dibujo de los personajes. Esa tarde, después de escribir una carta a su apoderado y discutir con el mayordomo una cuestión de aparcerías, volvió al libro en la tranquilidad del estudio que miraba hacia el parque de los robles. Arrellanado en su sillón favorito, de espaldas a la puerta que lo hubiera molestado como una irritante posibilidad de intrusiones, dejó que su mano izquierda acariciara una y otra vez el terciopelo verde y se puso a leer los últimos capítulos",
    },
  })
  await db.post.create({
    data: {
      user: { connect: { id: jane.id } },
      title: "Final del juego",
      body: "Con Leticia y Holanda íbamos a jugar a las vías del Central Argentino los días de calor, esperando que mamá y tía Ruth empezaran su siesta para escaparnos por la puerta blanca. Mamá y tía Ruth estaban siempre cansadas después de lavar la loza, sobre todo cuando Holanda y yo secábamos los platos porque entonces había discusiones, cucharitas por el suelo, frases que sólo nosotras entendíamos, y en general un ambiente en donde el olor a grasa, los maullidos de José y la oscuridad de la cocina acababan en una violentísima pelea y el consiguiente desparramo. Holanda se especializaba en armar esta clase de líos, por ejemplo dejando caer un vaso ya lavado en el tacho del agua sucia, o recordando como al pasar que en la casa de las de Loza había dos sirvientas para todo servicio.",
    },
  })

  await db.post.create({
    data: {
      user: { connect: { id: joe.id } },
      title: "Casa tomada",
      body: "Nos gustaba la casa porque aparte de espaciosa y antigua (hoy que las casas antiguas sucumben a la más ventajosa liquidación de sus materiales) guardaba los recuerdos de nuestros bisabuelos, el abuelo paterno, nuestros padres y toda la infancia.",
    },
  })
  await db.post.create({
    data: {
      user: { connect: { id: joe.id } },
      title: "Bestiario",
      body: "Entre la última cucharada de arroz con leche —poca canela, una lástima— y los besos antes de subir a acostarse, llamó la campanilla en la pieza del teléfono e Isabel se quedó remoloneando hasta que Inés vino de atender y dijo algo al oído de su madre. Se miraron entre ellas y después las dos a Isabel, que pensó en la jaula rota y las cuentas de dividir y un poco en la rabia de misia Lucera por tocarle el timbre a la vuelta de la escuela. No estaba tan inquieta, su madre e Inés miraban como más allá de ellas, casi tomándola como pretexto; pero la miraban.",
    },
  })
}

export default seed
