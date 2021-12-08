import ENV from '../env';

export const reportPost = async function (subject, details, postId) {

    const token1 = JSON.parse(await AsyncStorage.getItem('token')).token;
    // const img = JSON.stringify(images);

    let data = {
        subject: subject,
        details: details
    }

    console.log(JSON.stringify(data))

    const response = await fetch(`${ENV.apiUrl}/create/${postId}`, {
        method: 'POST',
        headers: {
            'Content-Type': "application/json",
            Authorization: `Bearer ${token1}`

        },

        body: JSON.stringify(data)

    });
    console.log("created")

    const resData = await response.json();
    // console.log(resData)
    console.log("doneapi")
    if (resData.error) {
        throw new Error(resData.error);
    }

    return resData;

};