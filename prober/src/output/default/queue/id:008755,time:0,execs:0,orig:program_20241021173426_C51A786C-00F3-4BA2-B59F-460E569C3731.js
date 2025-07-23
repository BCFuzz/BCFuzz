function f1() {
    return 22255;
}
Object.defineProperty(String.prototype, 22255, { configurable: true, enumerable: true, value: f1 });
new Uint16Array([[3.0,-2.0,-2.0,2.2250738585072014e-308,-5.0,-5.0,-5.0,149475.84628714388]]);
gc();
