import {useState} from 'react';

export function Message(){
    const [value, setValue] = useState("");


    return (
        <div className="main-content">
              <h2>Nos deixe uma mensagem.</h2>
              <form>
                  <textarea
                  type="text"
                  placeholder=""
                  draggable='false'
                  resizable='false'>
                    {value}
                      </textarea>
                  <button type="submit">
                      Enviar mensagem
                  </button>
              </form>
          </div>);
}