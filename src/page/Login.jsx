import "../styles/Login.css"

function Login() {
  return (
     <form className="form"><h1>Электрондук китеп канaга катталуу</h1><hr/>
    <input placeholder="Атыңызды жазыңыз" required /> <br/>
    <input placeholder="Aтаңыздын аты (фамиляңыз)" required/><br/>
    <input type="date" placeholder="Жашыңыз канчада?" required/><br/>
    <input placeholder="электрондук почта" required/><br/>
    <input type="password" placeholder="сыр сөз коюңуз" required/><br/>
    <button  id="form__btn">Катталуу</button><br/>
    <a id="form__login">акаунтка кирүү</a>
   
    </form>

  )
}

export default Login
