export function IconSwitch(props) {
    const {icon, onSwitch} = props;
    
    return (
        <span onClick={onSwitch} className="material-icons">{icon}</span>
    )
}