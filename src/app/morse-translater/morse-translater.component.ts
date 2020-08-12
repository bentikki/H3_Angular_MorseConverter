import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-morse-translater',
  templateUrl: './morse-translater.component.html',
  styleUrls: ['./morse-translater.component.css']
})
export class MorseTranslaterComponent implements OnInit {

  translatedText : string;
  translateTo : TranslateType;

  translateEnum = TranslateType;

  constructor() 
  { 
    this.translateTo = TranslateType.Morse;
  }

  ngOnInit(): void {
  }

  public translateString(searchVal : string){
    this.translatedText = searchVal;
  }

  public changeType(type : TranslateType){
    this.translateTo = type;
  }
  
}

enum TranslateType {
  Morse,
  MD5
}