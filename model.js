import {readFileSync} from 'fs';
export function dftrmahasiswa(parameter){
    const data = readFileSync('./data/mahasiswa.json');
    let hasil ="";
    if(parameter =="mhspagi"){
        hasil =JSON.parse(data).mhspagi;
    }
    else if (parameter == "mhsmalam"){
        hasil =JSON.parse(data).mhsmalam;
    }
    return hasil;
}