class apiController {
    getUser = (req , res) => {
        let userData = [
            {
                name: "ABC",
                email: "abc@mail.com"
            },
            {
                name: "ABC1",
                email: "abc@mail.com"
            },
            {
                name: "ABC2",
                email: "abc@mail.com"
            },
            {
                name: "ABC3",
                email: "abc@mail.com"
            }
        ];
        res.send({
            data: userData,
            status: "Success"
        })
    };
    

}


module.exports = new apiController();