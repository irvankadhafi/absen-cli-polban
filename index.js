var axios = require('axios');
var FormData = require('form-data');
var https = require('https');
var data = new FormData();
const prompt = require('prompt-sync')();

// Session akad_session akademik.polban.ac.id
const session = prompt('akad_session: ');
const ja = prompt('JA: ');
const jb = prompt('JB: ');
const mk = prompt('Kode Matkul: ');
const dsn = prompt('Kode Dosen: ');
const tp = prompt('T/P: ');
// const kls = prompt('Kelas: ');
data.append('ja', ja);
data.append('jb', jb);
data.append('mk', mk);
data.append('dsn', dsn);
data.append('tp', tp);
data.append('kls', '3A-JTK');
var config = {
    method: 'post',
    httpsAgent: new https.Agent({
        rejectUnauthorized: false
    }),
    url: 'https://akademik.polban.ac.id/ajar/absen/absensi_awal',
    headers: {
        Cookie: `akad_session=${session}`,
        ...data.getHeaders()
    },
    data: data
};

axios(config)
    .then(function (response) {
        console.log('sukses absen');
    })
    .catch(function (error) {
        console.log('gagal absen');
        console.log(error);
    });
