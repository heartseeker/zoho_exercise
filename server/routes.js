const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const settings = require('./config/settings');

const querystring = require('querystring');

const axios = require('axios');

const Lead = require('./models/Lead');

const Token = require('./models/Token');

const zoho = require('./api/zoho');


// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ROUTES FOR OUR API
// =============================================================================
const router = express.Router(); 


router.get('/callback', (req, res) => {
    const params = {
        code: req.query.code,
        redirect_uri: settings.redirect_uri,
        client_id: settings.client_id,
        client_secret: settings.client_secret,
        grant_type: settings.grant_type
    }

    const searchParams = querystring.stringify(params)
    
    const uri = `${req.query['accounts-server']}/oauth/v2/token?${searchParams}`;

    axios.post(uri, {})
    .then( async (response) => {
        const token = new Token(response.data);
        try {
            await token.save();
            const accessToken = response.data.access_token;
            res.redirect('http://localhost:4200/callback');
        } catch(err) {
            res.send(err);
        }
        
    })
    .catch(function (error) {
        res.send(error);
    });

});

router.get('/leads', async (req, res) => {

   const leads = await Lead.find({});
   res.send(leads);
    
});

router.get('/saveleads', async (req, res) => {

    const token = await Token.find({});
    const latestToken = token[token.length - 1].access_token;

    var headers = {
        'Authorization': `Zoho-oauthtoken ${latestToken}` 
    }
    
    const response = await zoho.get('/Leads', {
        headers: headers
    });

    const leads = [];

    response.data.data.forEach(lead => {
        leads.push({
            id: lead.id,
            company: lead.Company,
            email: lead.Email,
            website: lead.Website,
            full_name: lead.Full_Name,
            city: lead.City,
            country: lead.Country,
            lead_source: lead.Lead_Source
        });
    });

    await Lead.collection.drop();

    Lead.insertMany(leads, (err, docs) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.send(docs);
        }
    });
});

module.exports = router;