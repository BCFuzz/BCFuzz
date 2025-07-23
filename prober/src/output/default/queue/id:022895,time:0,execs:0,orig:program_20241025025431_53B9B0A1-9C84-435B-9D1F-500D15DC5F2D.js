function f1() {
    return "undefined";
}
JSON.parse(JSON.stringify("undefined"), f1);
gc();
