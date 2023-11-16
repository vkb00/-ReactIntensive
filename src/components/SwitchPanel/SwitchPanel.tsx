import "./SwitchPanel.scss"
interface SwitchPanelProps {
    signIn: boolean;
    setSignIn: (value: boolean) => void;
}
export const SwitchPanel = ({ signIn, setSignIn }: SwitchPanelProps) => {

    const signInClasses = `accessBtn ${signIn ? "accessBtnActive" : ""}`;
    const signUpClasses = `accessBtn ${!signIn ? "accessBtnActive" : ""}`;

    return (
        <div className="switchPanel">
            <button id="signIn" onClick={() => setSignIn(true)} className={signInClasses} type="button">SIGN IN</button>
            <button id="signUp" onClick={() => setSignIn(false)} className={signUpClasses} type="button">SIGN UP</button>
        </div>
    )
}

export default SwitchPanel