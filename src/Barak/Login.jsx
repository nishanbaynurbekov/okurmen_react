

function Login() {
  return (
     <div className="kattal"><h1>Электрондук китеп канaга катталуу</h1><hr/>
    <input placeholder="Атыңызды жазыңыз" required /> <br/>
    <input placeholder="Aтаңыздын аты (фамиляңыз)" required/><br/>
    <input type="date" placeholder="Жашыңыз канчада?" required/><br/>
    <input placeholder="электрондук почта" required/><br/>
    <input type="password" placeholder="сыр сөз коюңуз" required/><br/>
    <button id="atBtn">Катталуу</button><br/>
    <a id="ateg">акаунтка кирүү</a>
   
    </div>

  )
}

export default Login
