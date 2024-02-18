import logoImage from "../assets/quiz-logo.png"
export default function Header(){
    return (
        <header className="header">
        <img src={logoImage} alt="Logo Image"/>
        <h1>React Quiz</h1>
        </header>
    )
}