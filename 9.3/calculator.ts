export class Calculator {
    s: number;
    constructor (public x:number) { this.s=x; }
    add(y:number) { return this.s+y; }
}  