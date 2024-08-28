import { Injectable } from '@angular/core';
import { HashGeneratorGateway } from '../models/hash-generator/gateway/hashGeneratorGateway';

@Injectable({
  providedIn: 'root'
})

export class HashGeneratorUseCase {
  constructor( private _hashGeneratorGateway: HashGeneratorGateway) {}  

  hashHmacSHA256(message: string) : string{
    return this._hashGeneratorGateway.hashHmacSHA256(message);
  }

  AESEncrypt(message: string): string {
    return this._hashGeneratorGateway.AESEncrypt(message);
  }

  AESDecrypt(message: string): string {
    return this._hashGeneratorGateway.AESDecrypt(message);
  }

  toBase64(message: string): string {
    return this._hashGeneratorGateway.toBase64(message);
  }

  base64ToString(message: string): string {
    return this._hashGeneratorGateway.base64ToText(message);
  }


}