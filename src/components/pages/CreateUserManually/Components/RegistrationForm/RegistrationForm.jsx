import CpfInput from "./CpfInput";

function RegistrationForm(){
    return(
        <div>
            <h3>
                Criar Usuário Manualmente
            </h3>
            <div>
                <CpfInput/>
            </div>
        </div>
    )
}

export default RegistrationForm;