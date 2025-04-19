const prevDataSTR = () => {
    const bookData = localStorage.getItem('readbook');

    if(bookData) {
        const prevDataSTR = JSON.parse(bookData);
        return prevDataSTR;
    }
    else{
        return [];
    }
}


const addDataSTR = (bookId) => {
    const storageData = prevDataSTR ();

    if(storageData.includes(bookId)){
        alert("this data already exit");
    }
    else{
        storageData.push(bookId);
        const data = JSON.stringify(storageData);
        localStorage.setItem('readbook',data);
    }
}

export {addDataSTR, prevDataSTR};