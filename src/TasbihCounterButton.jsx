
function CounterButton({handleIncrement}) {
    return (
        <button 
        className="btn"
        onClick={handleIncrement}
        >+</button>
    )
}

export default CounterButton