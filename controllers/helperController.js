

const showFormDataPage =(req,res)=>{
    const {name} = req.body;
    res.status(200).send(`${name}`)
};

module.exports= {showFormDataPage}