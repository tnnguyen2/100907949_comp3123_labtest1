const resolvedPromise =()=>{
    setTimeout(()=>{
        let success = {'message' : 'delayed success!'}
        console.log(success);
    },500)
}
const rejectedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                throw new Error('delayed exception!');
            } catch (e) {
                reject({ error: e.message });
            }
        }, 500);
    });
}

resolvedPromise()
rejectedPromise()
    .then(resolve => console.log(resolve))
    .catch(reject => console.error(reject));