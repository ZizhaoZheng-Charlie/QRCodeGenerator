import {useState} from 'react'
import QRCode from 'qrcode'


function App() {
  const [url, setUrl] = useState('')
  const [qrCode, setQrCode] = useState('')

  const generateQrCode = async () => {
    QRCode.toDataURL(url, {
      width: 800,
      margin: 2,
      color: {
        dark: '#335383ff',
        light: '000000ff'
      }


    },(err,url)=>{
      if(err) console.error(err)
      console.log(url)
      setQrCode(url)
    })

  }

  return (
    <div className="App">
      <h1>QR code generator</h1>
      <input
        type="text"
        placeholder="E.g https://www.google.com"
        value = {url}
        onChange={(e) => setUrl(e.target.value)}
        />
      <button onClick={generateQrCode}>Generate</button>
      {qrCode &&
        <div>
          <img src={qrCode} alt="QR code" />
          <a href={qrCode} download = 'qrCode.png'>Download</a>
        </div>
      }
      
    </div>
  )
}

export default App
