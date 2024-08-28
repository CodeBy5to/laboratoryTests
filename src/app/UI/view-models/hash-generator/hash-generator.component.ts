import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HashGeneratorUseCase } from '../../../domain/usecase/hashGeneratorUseCase';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hash-generator',
  standalone: true,
  imports: [
    CommonModule,FormsModule
  ],
  templateUrl: './hash-generator.component.html',
  styleUrl: './hash-generator.component.css',
})
export class HashGeneratorComponent { 

  cryptTypes = [
    {id: 1, name: 'Hash HmacSHA256', method: this.hashHmacSHA256},
    {id: 2, name: 'Encrypt AES', method: this.encryptAES},
    {id: 3, name: 'Decrypt AES', method: this.decryptAES},
    {id: 4, name: 'Text to base64', method: this.toBase64},
    {id: 5, name: 'base64 to text', method: this.base64ToString}

  ]

  cryptTypeSelected = this.cryptTypes[0];
  public text = '';
  result = '';

  constructor(private _hashGeneratorUseCase: HashGeneratorUseCase) {}


  selectCryptType = (cryptType: any) => this.cryptTypeSelected = cryptType; 


  hashHmacSHA256() {
    this.result = this._hashGeneratorUseCase.hashHmacSHA256(this.text);
  }

  encryptAES() {
    this.result = this._hashGeneratorUseCase.AESEncrypt(this.text);
  }

  decryptAES() {
    this.result = this._hashGeneratorUseCase.AESDecrypt(this.text);
  }

  toBase64() {
    this.result = this._hashGeneratorUseCase.toBase64(this.text);
  }

  base64ToString() {
    this.result = this._hashGeneratorUseCase.base64ToString(this.text);
  }

  
  generateHash() {
    this.cryptTypeSelected.method.call(this);
  }


}
