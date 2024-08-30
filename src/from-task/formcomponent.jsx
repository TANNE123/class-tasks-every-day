const Form = ({valueName,ValueRole,setName,setRole,handleSubmit}) => { 
    return (
        <>
            <div>
                <div>
                    <h2>Form Fill the Details</h2>
                    <form onSubmit={handleSubmit}>
                        <label>User Name:</label> 
                        <br />
                        <input type="text" value={valueName} onChange={(e)=>setName(e.target.value)} />
                        <br />
                        <br />
                        <label >Role:</label>
                        <br /> 
                        <input type="text" value={ValueRole}  onChange={(e)=>setRole(e.target.value)} />
                        <br />
                        <br />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Form;
