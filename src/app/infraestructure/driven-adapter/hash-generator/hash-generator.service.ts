import * as CryptoJS from 'crypto-js';
import { HashGeneratorGateway } from '../../../domain/models/hash-generator/gateway/hashGeneratorGateway';


export class HashGeneratorService extends HashGeneratorGateway{

    secretKey: string = 'laboratorio';

    override hashHmacSHA256(message: string): string {
        return CryptoJS.HmacSHA256(message.trim(), this.secretKey.trim()).toString(CryptoJS.enc.Hex);
    }

    override AESEncrypt(message: string): string {
        return CryptoJS.AES.encrypt(message.trim(), this.secretKey.trim()).toString();
    }
    override AESDecrypt(message: string): string {
        const bytes = CryptoJS.AES.decrypt(message.trim(), this.secretKey.trim());
        return bytes.toString(CryptoJS.enc.Utf8);
    }

    override toBase64(message: string): string {
        const utf8Text = new TextEncoder().encode(message);
        return btoa(String.fromCharCode(...new Uint8Array(utf8Text)));
    }

    override base64ToText(message: string): string {
        // Decode Base64 to binary string
        const binaryString = atob(message);
        // Convert binary string to UTF-8 text
        const bytes = new Uint8Array(binaryString.length);
        for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
        }
        // Convert bytes to string
        return new TextDecoder().decode(bytes);
    }

  }