function f1() {
    return JSON;
}
JSON[Symbol.toPrimitive] = f1;
JSON.stringify(JSON);
gc();
