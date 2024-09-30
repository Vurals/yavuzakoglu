import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img className='headerImage' src="images/yavuzakoglu.jpg" alt="Yavuz Akoglu"/>
      <div>
        <h1>Yavuz Akoğlu</h1>
        <h2>Gayrimenkul Danışmanı </h2>
        <p>Hayalinizdeki ev bir arama uzağınızda..</p>
      </div>
      </header>
      
      {/* Section: Featured Properties */}
      <section className="properties">
        <h2>Portföylerim</h2>
        <div className="property-list">
        <a className="property" href="https://www.sahibinden.com/ilan/emlak-konut-satilik-goldekent-sitesi-yapili-masrafsiz-peyzaj-ile-butunlesik-havuzlu-1175387394/detay" target="_blank" rel="noopener noreferrer">
            <img src="https://i0.shbdn.com/photos/38/73/94/x5_11753873946z5.jpg" alt="Property 1" />
            <h3>Göldekent Sitesi 4+1 Daire</h3>
            <p>Fiyat: 5.950.000 TL</p>
            <p>Konum: Eryaman, Ankara</p>
          </a>
          <a className="property" href="https://www.sahibinden.com/ilan/emlak-konut-satilik-viole-yasamkent-1196419917/detay" target="_blank" rel="noopener noreferrer">
          <img src="https://i0.shbdn.com/photos/41/99/17/x5_1196419917d8i.jpg" alt="Property 2" />
            <h3>Viole Yaşamkent 1+1 Daire</h3>
            <p>Fiyat: 4.100.000 TL</p>
            <p>Konum: Yaşamkent, Ankara</p>
          </a>
          <a className="property" href="https://www.sahibinden.com/ilan/emlak-arsa-satilik-kozalan-da-bir-evin-olsun-1196386609/detay" target="_blank" rel="noopener noreferrer">
          <img src="https://i0.shbdn.com/photos/38/66/09/x5_119638660957a.jpg" alt="Property 3" />
            <h3>760 metrekare Arsa</h3>
            <p>Fiyat: 850.000 TL</p>
            <p>Konum: Kozalan, Beypazarı</p>
          </a>
        </div>
      </section>
      
      {/* Section: Contact Form */}
      <section className="contact">
        <h3>İletişim</h3>
        <p>Telefon: (+90) 532 781 45 56</p>
        <p>Mail: yavuzakoglu@gmail.com</p>

      </section>

      <footer className="footer">
      </footer>
    </div>
  );
}

export default App;
