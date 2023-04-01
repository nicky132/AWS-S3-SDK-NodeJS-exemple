import { useState } from "react"; // Estado
import axios from "axios"; // Cliente HTTP

function App() {

  // Creamos un estado para que almacene los datos del formulario (imagen)
  const [post, setPost] = useState({
    photo: null
  })

  // Enviar informacion al backend con axios
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Formdata (tambien existe base64)
    const formData = new FormData()
      // añadir datos (name, blob)
      formData.append('photo', post.photo)

    const response = await axios.post('http://localhost:5000/upload', formData, {
      headers: {
        "Content-Type": "multipart/form-data" // Para que el servidor entienda los archivos
      }
    });

    console.log(response);

  };

  // HTML
  return (
      <div className="submitInput">
        <form method="" action="" onSubmit={handleSubmit}>
          <input type="file" placeholder="photo"
            onChange={e => setPost({...post, photo: e.target.files[0]})}
          />
          <button>Subir</button>
        </form>
      </div>
  )
}

export default App