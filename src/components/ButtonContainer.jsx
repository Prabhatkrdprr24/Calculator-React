import styles from './ButtonContainer.module.css';

const ButtonContainer = ({handleOnClick}) => {

    const buttonNames =  ['c', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.'];

    return (
        <div className= {styles.buttonsContainer}>

            {buttonNames.map((buttonName, index) => {
                return <button 
                key = {index} 
                className = {styles.button}
                onClick = {() => handleOnClick(buttonName)}
                >
                {buttonName}
                </button>

            })}

        </div>
    );
};

export default ButtonContainer;