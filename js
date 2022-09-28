class calculadora {

    divisores() {
        let input                     = document.getElementById("valor") , num , digito;
        num                           = parseInt(input.value)
        let valor                     = [];
        if( num > 0 ){
            for (let i = 2; i < num; i++) {
                digito                = num % i;
                if (digito === 0) {
                    valor.push(i);
                    input.value           = valor
                }
            }
        }else{
            input.value = "por favor ingrese un numero(mayor a 0) y no un caracter"
        }
    }

    invertirnumero() {
        let num, digito, invertido    = ""
        let input                     = document.getElementById("valor")
        num                           = parseInt(input.value)
        if( num == 0 ){
            document.getElementById("valor").value = 0   
        }else{
            if(num >= 0 ){
                while (num > 0) {
                    digito                    = num % 10
                    num                       = Math.floor(num / 10)
                    invertido                 = invertido + digito.toString()
                }
                valor.value                   = invertido
            }else{
                document.getElementById("valor").value = "Por favor ingrese un numero(mayor a 0) y no un caracter"
            }
        }
    }


    esprimo() {
        let input                     = document.getElementById("valor"), numero
        numero                        = parseInt(input.value)
        if (numero > 0 ){
            if (numero < 2 || (numero % 2 == 0 && numero != 2)) {
                document.getElementById("valor").value = " EL NUMERO NO ES PRIMO."
            }
            else {
                document.getElementById("valor").value = "EL NUMERO ES PRIMO."
            }
        }else{
            document.getElementById("valor").value = "por favor ingrese un numero(mayor a 0) y no un caracter"
        }
    }


    esperfecto() {
        let num, digito , ac = 0 , i , r ; 
        let input                     = document.getElementById("valor")
        num                           = parseInt(input.value)
        i                             = num - 1;
        if( num > 0){
            while (i > 0) {
                r                         = num % i
                if (r == 0) {
                    ac                    = ac + i
                }
                i                         = i - 1;
            }
            if (num == ac) {
                document.getElementById("valor").value = "EL NUMERO  ES PERFECTO."
    
            } else {
                document.getElementById("valor").value = "EL NUMERO NO ES PERFECTO."
            }
        }else{
            document.getElementById("valor").value = "por favor ingrese un numero(mayor a 0) y no caracter"
        }
    }


    fibonacci(){
        let val                       = document.getElementById("valor")
        val = parseInt(val.value)
        let n1                        = 0 , n2 = 1 , n3=0;
        if (val > 0 ){
            document.getElementById("valor").value = ""
            for(let i = 0; i < val ; i++){
                document.getElementById("valor").value += n1 + ","
                n3                    = n1 + n2
                n1                    = n2
                n2                    = n3
            }
            
        }else{
            document.getElementById("valor").value= " Ingrese un numero(mayor a 0) y no un caracter"
        }
    }


    base10_16() {
        let digito, num, pos          = 0, numeros = [], base16 = ""
        let input                     = document.getElementById("valor")
        num                           = parseInt(input.value)
        while (num > 0) {
            digito                    = num % 16
            num                       = Math.floor(num / 16)
            numeros[pos]              = digito
            pos                       = pos + 1
        }
        for (let ind = pos - 1; ind >= 0; ind--) {
            base16                    = base16 + numeros[ind].toString()
        }
        input.value                   = base16
    }


    base10_8() {
        let digito, num, pos          = 0, numeros = [], base8 = ""
        let input                     = document.getElementById("valor")
        num                           = parseInt(input.value)
        while (num > 0) {
            digito                    = num % 8
            num                       = Math.floor(num / 8)
            numeros[pos]              = digito
            pos                       = pos + 1
        }
        for (let ind = pos - 1; ind >= 0; ind--) {
            base8                     = base8 + numeros[ind].toString()
        }
        input.value                   = base8
    }


    base10_2() {
        let digito, num, pos          = 0, numeros = [], base2 = ""
        let input                     = document.getElementById("valor")
        num                           = parseInt(input.value)
        while (num > 0) {
            digito                    = num % 2
            num                       = Math.floor(num / 2)
            numeros[pos]              = digito
            pos                       = pos + 1
        }
        for (let ind = pos - 1; ind >= 0; ind--) {
            base2                     = base2 + numeros[ind].toString()
        }
        input.value                   = base2
    }


    base2_10() {
        let num, digito, invertido    = ""
        let input                     = document.getElementById("valor")
        num                           = parseInt(input.value)
        let binarioEnDecimal          = parseInt(num, 2);
        input.value                   = binarioEnDecimal
    }


    base2_16(){
        let input                     = document.getElementById("valor").value
        let valor                     = parseInt(input, 2);
        let convertidohexadecimal     = valor.toString(16);
        //input.value                   = convertidohexadecimal
        document.getElementById("valor").value = convertidohexadecimal
    }


    contarpalabras() {
        let str                       = document.getElementById("valor").value;
        let c                         = str.split(' ').length;
        document.getElementById("valor").value = c;
    }


    palindroma() {
        const palabra                 = document.getElementById("valor").value;
        const reverseString           = str => str.split("").reverse().join("");
        let dom                       = reverseString(palabra);
        if (palabra == dom) {
            document.getElementById("valor").value = "ES PALINDROMO."
        }
        else {
            document.getElementById("valor").value = "NO ES PALINDROMO."
        }
    }


    invertirfrase() {
        const palabra                 = document.getElementById("valor").value;
        const reverseString           = str => str.split("").reverse().join("");
        let dom                       = reverseString(palabra);
        document.getElementById("valor").value = dom;
    }


    contarcaracteres(){
        document.getElementById("valor").value =  document.getElementById("valor").value.length;                 
    }

    buscar_cadena(){
        let string = document.getElementById("valor").value
        let mensaje = prompt("que palabra deseas buscar ?")
        string = string.replace(/ /g, "")
        document.getElementById("valor").value = string.search(mensaje) + 1

    }


    mayorarreglo() {
        let myArray                   = document.getElementById("valor").value;
        let arreglo = myArray.split(";")
        let m                         = Math.max(...arreglo);
        document.getElementById("valor").value = m3
    }


    promedioarreglo() {
        let arr                       = document.getElementById("valor").value;
        arr                           = arr.replace(/,/g, "");
        let sum                       = 0;
        for (var i = 0; i < arr.length; i++) {
            sum                       += parseFloat(arr[i], 10);
        }
        let avg                       = sum / arr.length;
        document.getElementById("valor").value = avg
    }


    buscararreglo() {
        const text                    = document.getElementById("valor").value;
        let arr                       = [...text];
        let n                         = 5;
        arr                           = arr.splice(arr.length - n);
        document.getElementById("valor").value = arr;
    }


    eliminararreglo() {
        const text                    = document.getElementById("valor").value;
        let arr                       = [...text];
        let n                         = 5;
        arr                           = arr.splice(n);
        document.getElementById("valor").value = arr;
    }


    insertararreglo(){
        let string                    = document.getElementById("respuesta").value
        let mensaje                   = prompt("que palabra deseas buscar ?")
        string                        = string.replace(/ /g, "")
        alert(string.search(mensaje) + 1)

    }

}

let cal                               = new calculadora()
