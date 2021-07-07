import { useState } from "react";
import { Spinner } from "../Spinner/Spinner";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import axios from "axios";
import "./Message.css";

export function Message() {
  const [text, setText] = useState("");
  const [loadingState, setLoadingState] = useState(false);
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState({message: '',
  severity: '',});

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const changeTextHandler = (event) => {
    setText(event.target.value);
  };

  const changeNameHandler = (event) => {
    setName(event.target.value);
  };

  const sendMessageHandler = () => {
    if(text.toString() !== ''){
      //Define o estado 'carregando' como verdadeiro.
      setLoadingState(true);
      axios
        .post(
          "https://save-the-date-51906-default-rtdb.firebaseio.com/messages.json",
          { name: name, value: text }
        )
        .then((response) => {
          setMessage({
            message: "Mensagem enviada com sucesso, agradecemos o seu carinho ♡",
            severity: "success",
          });
          setLoadingState(false);
          setOpen(true);
          setText("");
          setName("");
        })
        .catch((error) => {
          console.log(error.value);
        });
    }else{
      setMessage({
        message: "Ops, parece que você não digitou nenhuma mensagem ainda :(",
        severity: "error",
      });
      setOpen(true);
  
    }
  };

  return (
    <div className="main-content">
      {loadingState ? (
        <Spinner />
      ) : (
        <div className="div_message">
          <h2>Nome (opcional) </h2>
          <input
            className="input_text"
            type="text"
            value={name}
            onChange={changeNameHandler}
            placeholder="Seu nome aqui"
          />
          <h2>Deixe-nos uma mensagem.</h2>
          <textarea
            className="text_area"
            type="text"
            placeholder=""
            value={text}
            onChange={changeTextHandler}
          />
          <button className="button_form" onClick={sendMessageHandler}>
            ♡ Enviar ♡
          </button>
        </div>
      )}

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={message.severity}>
          {message.message}
        </Alert>
      </Snackbar>
    </div>
  );
}
