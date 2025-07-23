function f1() {
    return f1;
}
Object.defineProperty(String.prototype, 22255, { configurable: true, enumerable: true, value: f1 });
const v4 = [3.0,-2.0,-2.0,2.2250738585072014e-308,-5.0,-5.0,-5.0,149475.84628714388];
this.constructor.values(v4);
const v8 = [v4,v4,v4,v4];
const o9 = {
};
const v11 = new Proxy(v8, o9);
v11.pop(v4, f1);
gc();
