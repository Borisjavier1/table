
import './table.scss'
import React, { useState } from 'react';

// Datos ficticios de la tabla
//Hilary rica


var table = [
    { freestyler: 'Kamaño', pts: 18, ptb: 20 },
    { freestyler: 'Elian', pts: 15, ptb: 12 },
    { freestyler: 'Tao', pts: 8, ptb: 0 },
    { freestyler: 'Wolty', pts: 5, ptb: 0 },
    { freestyler: 'Mati', pts: 2, ptb: 0 },
    { freestyler: 'White', pts: 24, ptb: 34 },
    { freestyler: 'DGO', pts: 1, ptb: 0 },
    { freestyler: 'PST', pts: 33, ptb: 53 },
    { freestyler: 'Rincón', pts: 1, ptb: 0 },
    { freestyler: 'Eki', pts: 3, ptb: 0 },
    { freestyler: 'Skill', pts: 9, ptb: 0 },
    { freestyler: 'Patrick', pts: 3, ptb: 0 },
    { freestyler: 'JD', pts: 1, ptb: 0 },
    { freestyler: 'Arkitecto', pts: 3, ptb: 0 },
    { freestyler: 'Tatan', pts: 4, ptb: 0 },
    { freestyler: 'G', pts: 11, ptb: 2 },
    { freestyler: 'Pegs', pts:21, ptb: 28 },
    { freestyler: 'SK', pts: 1, ptb: 0 },
    { freestyler: 'Recom', pts: 15, ptb: 17 },
    { freestyler: 'Toño', pts: 14, ptb: 0 },
    { freestyler: 'KC', pts: 1, ptb: 0 },
    { freestyler: 'Sebastian', pts: 7, ptb: 12 },
    { freestyler: 'Ceka', pts: 2, ptb: 0 },
    { freestyler: 'C2', pts: 10, ptb: 0 },
    { freestyler: 'M00syx', pts: 12, ptb: 16 },
    { freestyler: 'Big Lion', pts: 1, ptb: 0 },
    { freestyler: 'ABC', pts: 22, ptb: 17 },
    { freestyler: 'Neo JRD', pts: 15, ptb: 20 },
    { freestyler: 'Onell', pts: 14, ptb: 2 },
    { freestyler: 'DRKy', pts: 4, ptb: 4 },
    { freestyler: 'KNL', pts: 1, ptb: 0 },
    { freestyler: 'Lozz', pts: 27, ptb: 57 },
    { freestyler: 'Nyke', pts: 1, ptb: 0 },
    { freestyler: 'Kore', pts: 9, ptb: 12 },
    { freestyler: 'Diescisies', pts: 19, ptb: 18 },
    { freestyler: 'Ofni', pts: 1, ptb: 0 },
    { freestyler: 'Bragi', pts: 17, ptb: 33 },
    { freestyler: 'Dakaro', pts: 1, ptb: 0 },
    { freestyler: 'Triple Six', pts: 1, ptb: 0 },
    { freestyler: 'Guido', pts: 21, ptb: 35 },
    { freestyler: 'Jose', pts: 2, ptb: 0 },
    { freestyler: 'Remz', pts: 2, ptb: 0 },
    { freestyler: 'Jaffet', pts: 1, ptb: 0 },
    { freestyler: 'Lil Ale', pts: 1, ptb: 0 },
    { freestyler: 'Ozzy', pts: 2, ptb: 0 },
    { freestyler: 'Gerald', pts: 9, ptb: 9 },
    { freestyler: 'Xanty', pts: 20, ptb: 36 },
    { freestyler: 'Richmond', pts: 9, ptb: 2 },
    { freestyler: 'Tolto', pts: 1, ptb: 0 },
    { freestyler: 'Deinsha', pts: 16, ptb: 16 },
    { freestyler: 'LL23', pts: 8, ptb: 4 },
    { freestyler: 'MCA', pts: 3, ptb: 4 },
    { freestyler: 'AT', pts: 2, ptb: 0 },
    { freestyler: 'Lotto', pts: 2, ptb: 0 },
    { freestyler: 'Chua23', pts: 3, ptb: 2 },
    { freestyler: 'Klandeztino', pts: 2, ptb: 0 },
    { freestyler: 'LTF', pts: 14, ptb: 24 },
    { freestyler: 'Zamu', pts: 1, ptb: 0 },
    { freestyler: 'Dastan', pts: 11, ptb: 8 },
    { freestyler: 'K.O', pts: 5, ptb: 4 },
    { freestyler: 'Rios', pts: 5, ptb: 4 },
    { freestyler: 'Shek', pts: 1, ptb: 0 },
    { freestyler: 'Kharma', pts: 1, ptb: 0 },
    { freestyler: 'Angels', pts: 1, ptb: 0 },
    { freestyler: 'Rincon', pts: 1, ptb: 0 },
    { freestyler: 'Kill-O', pts: 2, ptb: 0 },
    { freestyler: 'Azazel', pts: 8, ptb: 8 },
    { freestyler: 'Nilo', pts: 10, ptb: 12 },
    { freestyler: 'KC', pts: 1 , ptb: 0 },
    { freestyler: 'Benneth', pts: 1 , ptb: 0 },
    { freestyler: 'Maykel', pts: 5 , ptb: 2 },
    { freestyler: 'Kenyari', pts: 4 , ptb: 8 },
    { freestyler: 'Zadiyk', pts: 7 , ptb: 6 },
    { freestyler: 'Gallito', pts: 1 , ptb: 0 },
    { freestyler: 'Nedved', pts: 4 , ptb: 0 },
    { freestyler: 'James', pts: 3 , ptb: 0 },
    { freestyler: 'Mad Ty', pts: 3 , ptb: 4 },
    { freestyler: 'Gabo', pts: 4 , ptb: 8 },
    { freestyler: 'Low C', pts: 6 , ptb: 12 },
    { freestyler: 'Sebas', pts: 1 , ptb: 0 },
    { freestyler: 'Michael', pts: 3 , ptb: 0 },
    { freestyler: 'Ezra', pts: 3 , ptb: 0 },
    { freestyler: 'Arki', pts: 6 , ptb: 2 },
    { freestyler: 'Silwyll', pts: 3 , ptb: 2 },
    { freestyler: 'MC colirico', pts: 4 , ptb: 2 },
    { freestyler: 'A1', pts: 3 , ptb: 4 },
    { freestyler: 'KV', pts: 2 , ptb: 0 },
    { freestyler: 'DGO', pts: 2 , ptb: 0 },
    { freestyler: 'Zhorbe', pts: 2 , ptb: 0 },
    { freestyler: 'Eclipse', pts: 1 , ptb: 0 },
    { freestyler: 'Chow', pts: 1 , ptb: 0 },

  ];

// Ordenar los datos según puntosNormales y luego puntosBatalla
table = table.sort((a, b) => {
    // Ordenar por puntosNormales de mayor a menor
    if (b.pts !== a.pts) {
        return b.pts - a.pts;
    } else {
        // Si puntosNormales son iguales, ordenar por puntosBatalla de mayor a menor
        return b.ptb - a.ptb;
    }
});


// Componente de la tabla de posiciones
function Table() {

  const [isCopyDisabledPosition, setIsCopyDisabledPosition] = useState(false);
  const [isCopyDisabledFreestyler, setIsCopyDisabledFreestyler] = useState(false);
  const [isCopyDisabledPts, setIsCopyDisabledPts] = useState(false);
  const [isCopyDisabledPtb, setIsCopyDisabledPtb] = useState(false);


 return (
    <>
      <section className="wrapper">
        <main className="row title">
          <ul>
            <li>
              Posición
              <button onClick={() => setIsCopyDisabledPosition(!isCopyDisabledPosition)}>
                {isCopyDisabledPosition ? 'Habilitar' : 'Deshabilitar'} copia
              </button>
            </li>
            <li>
              Freestyler
              <button onClick={() => setIsCopyDisabledFreestyler(!isCopyDisabledFreestyler)}>
                {isCopyDisabledFreestyler ? 'Habilitar' : 'Deshabilitar'} copia
              </button>
            </li>
            <li>
              PTS
              <button onClick={() => setIsCopyDisabledPts(!isCopyDisabledPts)}>
                {isCopyDisabledPts ? 'Habilitar' : 'Deshabilitar'} copia
              </button>
            </li>
            <li>
              PTB
              <button onClick={() => setIsCopyDisabledPtb(!isCopyDisabledPtb)}>
                {isCopyDisabledPtb ? 'Habilitar' : 'Deshabilitar'} copia
              </button>
            </li>
          </ul>
        </main>

        {table.map((row, index) => (
          <section className="row-fadeIn-wrapper" key={index}>
            <article className="row fadeIn nfl">
              <ul>
                <li style={{ userSelect: isCopyDisabledPosition ? 'none' : 'auto' }}>
                  {index + 1}
                </li>
                <li style={{ userSelect: isCopyDisabledFreestyler ? 'none' : 'auto' }}>
                  {index + 1} - {row.freestyler}
                </li>
                <li style={{ userSelect: isCopyDisabledPts ? 'none' : 'auto' }}>
                  {row.pts}
                </li>
                <li style={{ userSelect: isCopyDisabledPtb ? 'none' : 'auto' }}>
                  {row.ptb}
                </li>
              </ul>
            </article>
          </section>
        ))}
      </section>
    </>
  );
}

export default Table;
