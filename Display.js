class Display {
    constructor (displayBeforevalue, displayActualValue) {
        this.displayActualValue = displayActualValue;
        this.displayBeforeValue = displayBeforevalue;
        this.calculator = new Calculator();
        this.operatorType = undefined;
        this.actualValue = ``;
        this.beforeValue = ``;
        this.signs = {
            addition: `+`,
            subtraction: `-`,
            multiplication: `X`,
            division: `/`,
        }
    }

    deleteNum() {
        this.actualValue = this.actualValue.toString().slice(0,-1);
        this.printValue();
    }

    clearDisplay() {
        this.actualValue = ``;
        this.beforeValue = ``;
        this.operatorType = undefined;
        this.printValue();
    }//Función para limpiar la pantalla y eliminar el operador activo con la tecla "C"

    compute(type) {
        this.operatorType !== `iqual` && this.calculate();
        this.operatorType = type;
        this.beforeValue = this.actualValue || this.beforeValue;
        this.actualValue = ``;
        this.printValue();
    }
    
    addNum (number) { 
        if(number === `.` && this.actualValue.includes(`.`)) return //si el vLalor actual es igual a "." ya no incluyas "."
        this.actualValue = this.actualValue.toString() + number.toString();//Función para imprimir los numeros en la pantalla (mas de uno)
        this.printValue();
    }

    printValue() {
        this.displayActualValue.textContent = this.actualValue
        this.displayBeforeValue.textContent = `${this.beforeValue} ${this.signs[this.operatorType] || ``}`;
    }

    calculate() {
        const beforeValue = parseFloat(this.beforeValue);
        const actualValue = parseFloat(this.actualValue);

        if (isNaN(actualValue) || isNaN(beforeValue) ) return
        this.actualValue = this.calculator[this.operatorType](beforeValue, actualValue);
    }

}