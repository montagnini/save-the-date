import { useState } from "react";
import { Spinner } from "../Spinner/Spinner";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import axios from "axios";
import "./Message.css";

export function Message() {
  const [value, setValue] = useState("");
  const [loadingState, setLoadingState] = useState(false);
  const [open, setOpen] = useState(false);

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const changeTextHandler = (event) => {
    setValue(event.target.value);
  };

  const sendMessageHandler = () => {
    //Define o estado 'carregando' como verdadeiro.
    setLoadingState(true);
    console.log(value);

    axios
      .post(
        "https://save-the-date-51906-default-rtdb.firebaseio.com/messages.json",
        { value: value }
      )
      .then((response) => {
        setLoadingState(false);
        setOpen(true);
        setValue("");
      })
      .catch((error) => {
        console.log(error.value);
      });
  };

  return (
    <div className="main-content">
      {loadingState ? (
        <Spinner />
      ) : (
        <div>
          <h2>Deixe-nos uma mensagem.</h2>
          <textarea
            className="text_area"
            type="text"
            placeholder=""
            value={value}
            onChange={changeTextHandler}
          />
          <button className="button_form" onClick={sendMessageHandler}>
            ♡ Enviar ♡
          </button>
        </div>
      )}

        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Mensagem enviada com sucesso, agradecemos o seu carinho ♡
        </Alert>
      </Snackbar>
    </div>
  );
}
