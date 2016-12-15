const primus = new Primus('http://localhost:4001/');

export function sendFormData() {
    primus.send("form_data", { message: 'from client' });

    primus.on('form_data_response', function (data) {
        console.log('@@@@ form_data_response data', data);
        return { type: "SEND_FORM_DATA", payload: data }
    });

}