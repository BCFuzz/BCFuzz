function f0() {
    return f0;
}
class C1 extends f0 {
}
const v2 = [4.0,-5.63060622230094e+307,1.7976931348623157e+308,-67075.76621187909,0.8953950755541267,-1000.0];
Object.defineProperty(C1, 5, { enumerable: true, value: f0 });
v2.__proto__ = C1;
gc();
