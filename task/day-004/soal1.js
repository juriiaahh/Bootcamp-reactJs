//membuat input random angka (generate by sistem)
function randomInt (min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

//terdapat 3 function
const saveCloud = () => {
    return new Promise((resolve, reject) => {
        const delay = randomInt(200, 1000);
        setTimeout(() => {
            resolve('save to cloud success in ' + delay + 'ms')            
        })
    },200);
};


const sendNotif = () => {
    return new Promise((resolve, reject) => {
        const delay = randomInt(200, 1000);
        setTimeout(() => {
            resolve('send notification success in ' + delay + 'ms')            
        })
    }, 500);
};

const fetchNews = () =>{
    return new Promise((resolve, reject) => {
        const delay = randomInt(200, 1000);
        setTimeout(() => {
            resolve('fetch news data success in ' + delay + 'ms')            
        })
    }, 1000);
};



const run = async function(min, max){
    await randomInt(min, max);
    const save = await saveCloud(min, max);
    const send = await sendNotif(save, 5);
    const fetch = await fetchNews(send, 4);
    
    return (`${save}\n${send}\n${fetch}`);
};


run(200, 1000)
.then((result) => {
    console.log(result);
}).catch((e) => {
    console.log(e);
})
