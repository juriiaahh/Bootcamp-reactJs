//inheritance = proses dmn class mewariskan class lain ke class

class people{ // mewariskan name dan age
    constructor(name,age){ //properti construktor
        this.name = name;
        this.age = age;
    }
}

class person extends people{ //sub class dari people
    constructor(name, age, job){
        super(name, age);
        this.job = job;
    }
}

const juju = new person('juju', 24, "karyawan");
console.log(juju.name);
console.log(juju.age);
console.log(juju.job);
