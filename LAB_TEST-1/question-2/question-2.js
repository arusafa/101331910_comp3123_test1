const resolvedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        let success = { message: 'delayed success!' };
        console.log(success);
        }, 500);
    });
}

const rejectedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try{
                let error = new Error('error: delayed exception!');
                console.log(error);
            }
            catch(err){
                console.log(err);
            }
        }, 500);
    });
}
resolvedPromise();
rejectedPromise();