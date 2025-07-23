const v1 = [Date,Date,Date,Date,Date];
v1.toJSON = Date;
JSON.parse(JSON.stringify(v1));
gc();
