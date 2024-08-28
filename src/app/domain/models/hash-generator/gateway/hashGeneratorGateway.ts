export abstract class HashGeneratorGateway {
    abstract hashHmacSHA256(message: string): string;
    abstract AESEncrypt(message: string): string;
    abstract AESDecrypt(message: string): string;
    abstract toBase64(message: string): string;
    abstract base64ToText(message: string): string;
} 