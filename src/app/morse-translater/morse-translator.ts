import { ITranslator } from './itranslator';

export class MorseTranslator implements ITranslator{
    
    public translateString(value: string): string {
        let charArray = value.split('');
        let morseArray = [];

        charArray.forEach(charValue => {
            morseArray.push(this.translateCharacter(charValue));
        });

        return morseArray.join(' ');
    }

    private translateCharacter(value: string): string {
        
        switch (value.toUpperCase()) {
            case "A":
                return ".-";
                
            case "B":
                return "-···";
                
            case "C":
                return "-.-.";
                
            case "D":
                return "-..";
                
            case "E":
                return ".";
                
            case "F":
                return "..-.";
                
            case "G":
                return "--.";
                
            case "H":
                return "....";
                
            case "I":
                return "..";
                
            case "J":
                return ".---";
                
            case "K":
                return "-.-";
                
            case "L":
                return ".-..";
                
            case "M":
                return "--";
                
            case "M":
                return "-.";
                
            case "O":
                return "---";
                
            case "P":
                return ".--.";
                
            case "Q":
                return "--.-";
                
            case "R":
                return ".-.";
                
            case "S":
                return "...";
                
            case "T":
                return "-";
                
            case "U":
                return "..-";
                
            case "V":
                return "...-";
                
            case "W":
                return ".--";
                
            case "X":
                return "-..-";
            case "Y":
                return "-.--";
            case "Z":
                return "--..";

            default:
                return "";
        }

    }
    
}
