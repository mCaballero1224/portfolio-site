function Terminal() {
    return(
        <div className="container terminal_container">
            <div className="terminal sub-container">
                <div className="terminal_prompt">
                    <div className="terminal_prompt_label">
                        <span className="label">[guest@mcaballero.xyz ~] $</span>
                    </div>
                    <input className="terminal_prompt_input"
                        autofocus
                        type="text"
                    />
                </div>
            </div>
        </div>
    );
}

export default Terminal;
