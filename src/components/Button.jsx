import "./Button.css";


function Button({description, buttonAction, disableButton}) {

    return (

        <button className="/"
                type="button"
                onClick={() => console.log(buttonAction)}
                disabled={disableButton}
        >
            {description}
        </button>
    );
}

export default Button;