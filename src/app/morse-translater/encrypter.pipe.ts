import { Pipe, PipeTransform } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';
import { MorseTranslator } from './morse-translator';
import { HashTranslator } from './hash-translator';

@Pipe({
  name: 'encrypter'
})
export class EncrypterPipe implements PipeTransform {

  public transform(value: string, encryptType: string): string {

    if(encryptType == "morse"){
      return new MorseTranslator().translateString(value);
    }
    if(encryptType == "md5"){
      return new HashTranslator().translateString(value);
    }

  }

}
