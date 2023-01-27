const Joi = require ('joi');
const express = require ('express');
const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017'
const app = express();
mongoose.connect(url, {useNewUrlParser: true ,
    useUnifiedTopology: true})
const con = mongoose.connection
const Plate = require('./model/plate')
con.on('open', () => {
    console.log('connected...')
});

app.use(express.json());

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// const plates = [
//     {id:1, name:'Plate1'},
//     {id:2, name:'Plate2'},
//     {id:3, name:'Plate3'},
// ]
// Plate.remove(Plate.find())
app.get('/',(req,res)=>{
 res.send('Hello Dear User');
});

app.get('/api/plates/',async(req,res)=>{
    try {
        const Allplates = await Plate.find()
        res.json(Allplates)
    } catch (error) {
        res.send('Error'+error)
    }
    // res.send(plates);
}
);

app.get('/api/check',async(req,res)=>{
    let findplate = req.query.plate;
    console.log(findplate);
    
    try {
        const ditectplates = await Plate.find({plateNum:findplate})
        if (ditectplates.length==0) return res.status(404).send('The plate with the given ID was not found.');
        res.send(ditectplates);

    } catch (error) {
        res.send('Error'+error)
    }                        
}
);




app.get('/api/checker',async(req,res)=>{
    console.log("teeeeeeeeeeeeeeeest");
    // res.send(req.params.id);
    console.log(req.params.id);
    const plate = plates.find(c => c.id === parseInt(req.params.id));
    if (!plate) return res.status(404).send('The plate with the given ID was not found.');
    res.send(plate);
    // res.send(req.query);
    }
);


app.post('/api/plates/',async(req,res)=>{
    // var parsed = JSON.parse(req.body);
    console.log(req.body)   
    console.log(req.body.name)
    const plate = new Plate({
        name: req.body.name,
        car: req.body.car,
        color: req.body.color,
        plateNum: req.body.plateNum,
        plateType: req.body.plateType,
    })
    try {
        const a1 = await plate.save()
        res.json(a1)
    }
    catch (err) {
        res.send('Error')
    }
    
});


// PORT
const port = process.env.PORT || 4500;
app.listen(port,()=>{
 console.log(`Server is running on port ${port}`);
});

