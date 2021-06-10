import "./App.css";
import Countdown from "./components/Countdown/Countdown";
import Hands from "./Images/hands.png";
import Audio from "./components/Audio/Audio";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { FaInstagram } from "react-icons/fa";
import Deck from "./components/Slider/Deck";

function App() {
  return (
    <div>
      <Router>
      <header className="header">
        <div className="header_left">
          <Link to="/easterEgg">
            <img src={Hands} alt="Hands" />
          </Link>
        </div>
        <div className="header_center">
          <h2>Save the date!</h2>
          <Countdown date="August 28, 2021 18:30:00 GMT+03:00" />
        </div>
      </header>
        <Switch>
          <Route exact path="/">
            <main className="Body">
              <Deck></Deck>
            </main>
          </Route>
          <Route exact path="/easterEgg">
            <div className="easterEgg">
              <h2>Nayla Christine Marcatti Pallú</h2>
              <p style={{ fontSize: "20px", marginLeft:'55px', marginRight: '55px' }} align="justify">
                Amor da minha vida, daqui até a eternidade!
                <br />
                Meu amor, eu lembro desde o primeiro dia que eu te vi, eu todo
                moleque, aba reta, Parati e ouvindo Charlie Brown Jr.
                <br />
                Lembro de como estava nervoso (tremendo todo haha) e de como as
                coisas fluíram com o tempo passando, quem me dera saber, na
                época, que você seria o amor da minha vida. Hoje, quase 6 anos
                depois, eu não consigo lembrar nem imaginar como é viver sem
                você ao meu lado, cada notícia, cada detalhe da minha vida é com
                você que eu quero compartilhar e é com você que eu quero estar.
                <br />
                Obrigado por ser essa pessoa incrível comigo, você foi quem mais
                me apoiou quando tive perrenges na vida, quando ninguém mais
                acreditava em mim, era você quem estava ao meu lado, me
                incentivando e sempre torcendo por mim. A faculdade onde estou,
                o emprego que eu tenho, meu speaking, minhas habilidades como
                programador e dono de casa (rsrs) são todas vindas de seu
                suporte e seu amor. Vejo nossos gatinhos (fiiiios) que me enchem
                tanto de alegria, ok, não são tão 'inhos' assim, e só consigo
                pensar em como nós seremos pais algum dia e como iremos educar a
                Lalinha ou o Goku haha.
                <br />
                Obrigado meu amor, minha vida, meu sol e estrelas, por me
                permitir participar de sua vida, por me incentivar tanto, por me
                deixar ser alguém melhor do que eu sempre fui, por me cobrar
                tanto, por me deixar trazer uma meia dúzia (quase) de gatos pra
                sua vida e assim sermos uma família feliz. Obrigado por me
                deixar ser o seu cabeludo barbudo. Com todas as minhas forças,
                amo você, polaca!
                <br />
                <br />
                Sei que é meio tarde pra te perguntar isso mas ... Aceita ser
                minha esposa, parceira, amiga e minha player2?
                <br />
                <br />
                obs: desculpa pelo texto, cê sabe que sou péssimo nisso, mas escrevo isso
                com os olhos em lágrimas enquanto você dorme no quarto ao lado.
                <br />
                Amo tu, tatu! ❤
              </p>
            </div>
          </Route>
        </Switch>
      </Router>
      <footer className="Footer">
        <div className="footer_2">
          <div className="Insta">
            <div style={{ marginRight: "5%" }}>
              <a href="https://www.instagram.com/naylapallu/" alt="n">
                <FaInstagram size={56}></FaInstagram>
                <div>Nayla</div>
              </a>
            </div>
            <div style={{ marginLeft: "15%" }}>
              <a href="https://www.instagram.com/wmontagnin/" alt="n">
                <FaInstagram size={56}></FaInstagram>
                <div>Wellington</div>
              </a>
            </div>
          </div>
          <div>
            <Audio></Audio>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
