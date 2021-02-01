import { useState } from "react";
import "./App.css";
import imageCompression from "browser-image-compression";
import icon from './assets/imagen.png';
import icon1 from './assets/logogithub.png';
function App() {

  const [origImage, setOrigImage] = useState("");
  const [origImageFile, setOrigImageFile] = useState("");
  const [compressedImage, setCompressedImage] = useState("");
  const [fileName, setFileName] = useState("");

  const handle = (e) => {
    const imageFile = e.target.files[0];
    setOrigImage(imageFile);
    setOrigImageFile(URL.createObjectURL(imageFile));
    setFileName(imageFile.name);
  };

  const handleCompressImage = (e) => {

    e.preventDefault();
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true,

    };
    if (options.maxSizeMB >= origImage / 1024) {
      alert("Image is too small, cant be compressed");
      return 0;
    }
    let output;
    imageCompression(origImage, options).then((x) => {
      output = x;
      const downloadLink = URL.createObjectURL(output);
      setCompressedImage(downloadLink);
    });
  };
  return (
    <>

      <nav className="navbar navbar-light bg-success sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="https://pedromanueljm.github.io/COMPRIMIR_IMAGEN/#/">
            <img src={icon} alt="" className="d-inline-block align-top" />
           . Compressor Image
        </a>
        </div>
      </nav>

      <div className="container">
        <br /><br /><br />
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card">
              {origImageFile ? (
                <img src={origImageFile} className="" />
              ) : (
                  <img src="http://navparivartan.in/wp-content/uploads/2018/11/placeholder.png" />
                )}
            </div>
            <div className="padding"></div>
            <div className="container">
              <input
                type="file"
                accept="image/*"
                className="mt-2 btn btn-dark w-100"
                onChange={(e) => handle(e)}
              />
            </div>
          </div>
          <div className="col">
            <div className="card-body">
              <div className="container text-center">
                {origImageFile && (
                  <button className="btn btn-info"
                    onClick={(e) => {
                      handleCompressImage(e);
                    }}
                  >
                    {" "}
                Comprimir Imagen
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              {compressedImage ? (
                <img src={compressedImage}></img>
              ) : (
                  <img src="http://navparivartan.in/wp-content/uploads/2018/11/placeholder.png"></img>

                )}
            </div>
            <div className="padding"></div>
            <div className="container text-center">
              {compressedImage && (
                <button className="btn btn-success">
                  <a href={compressedImage} download={fileName} className="text-white" >
                    {" "}
                  Descargar Imagen
                </a>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
     <div className="separar"></div>
      <footer id="footer" className="padded bg-success">
                    <div className="container">
                         <br></br>
                        <h6 className="text-center text-white"> 2021 - Todos los derechos reservados </h6>
                        <div className="col text-center">
                            <h4 id="name" className="text-center text-white" >
                                <span> P</span><span className="name_animation transparent">e</span><span className="name_animation transparent">d</span><span className="name_animation transparent">r</span><span className="name_animation transparent">o</span> 
                                <span> M</span><span className="name_animation transparent">a</span><span className="name_animation transparent">n</span><span className="name_animation transparent">u</span><span className="name_animation transparent">e</span><span className="name_animation transparent">l</span>
                                <span> A</span><span className="name_animation transparent">n</span><span className="name_animation transparent">t</span><span className="name_animation transparent">o</span><span className="name_animation transparent">n</span><span className="name_animation transparent">i</span><span className="name_animation transparent">o</span>
                                <span> J</span><span className="name_animation transparent">u</span><span className="name_animation transparent">r</span><span className="name_animation transparent">a</span><span className="name_animation transparent">d</span><span className="name_animation transparent">o</span>
                                <span> M</span><span className="name_animation transparent">o</span><span className="name_animation transparent">r</span><span className="name_animation transparent">e</span><span className="name_animation transparent">n</span><span className="name_animation transparent">o </span>
                                <a href="https://github.com/PedroManuelJM" target="_blank"><img id="logo-github" src={icon1} className="size:32px;"/></a>
                            </h4>    
                        </div>
                    </div>
                  <br></br>
      </footer>
      
    </>
  );

}

export default App;

