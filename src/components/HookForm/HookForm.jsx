import useInputState from "../../hooks/useinputState";


const HookForm = () => {
    // const [name, handleNameChange] = useInputState('Rumi')
    const emailState = useInputState('rumi@aktar.go')

    const handleSubmit = e => {
        console.log('form data', emailState.value)
        e.preventDefault();
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handleNameChange} type='text' name="name"/> */}
                <br/>
                <input {...emailState} type="email" name="email" />
                <br/>
                <input type="text" name="phone"/>
                <br />
                <input type="password" value="password" />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default HookForm;