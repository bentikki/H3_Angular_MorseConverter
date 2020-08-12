import { ITranslator } from './itranslator';

import {Md5} from 'ts-md5/dist/md5';

export class HashTranslator implements ITranslator{

    translateString(value: string): string {
        return Md5.hashStr(value).toString();
    }

}
