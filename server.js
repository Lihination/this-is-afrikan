const express = require('express');

const app = express();

const path = require('path')
const stripe = require('stripe')('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');

// app.use('/static', express.static(path.join(__dirname, '../client/build//static')));
// app.get('*', function(req, res) {
//   res.sendFile('index.html', {root: path.join(__dirname, '../../client/build/')});
// });

var cors = require('cors')
app.use(cors());
const { createProxyMiddleware } = require('http-proxy-middleware');
app.use('/api', createProxyMiddleware({
    target: 'http://localhost:3000/', //original url
    changeOrigin: true,
    //secure: false, 
    onProxyRes: function (proxyRes, req, res) {
        proxyRes.headers['Access-Control-Allow-Origin'] = '*';
    }
}));

app.get('/secret', async (req, res) => {
    const intent = await stripe.paymentIntents.create({
        amount: 1,
        currency: 'usd',
        // Verify your integration in this guide by including this parameter
        metadata: { integration_check: 'accept_a_payment' },
    });
    //  intent = // ... Fetch or create the PaymentIntent
    res.json({ client_secret: intent.client_secret });
});

app.get('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
            {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: 'T-shirt',
                    },
                    unit_amount: 2000,
                },
                quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: "https://localhost:3000/defy",
        cancel_url: "https://localhost:3000/defy"
    });

    res.json({ id: session.id });
});



const root = require('path').join(__dirname, 'client', 'build')
app.use(express.static(root));
app.get("*", (req, res) => {
    res.sendFile('index.html', { root });
})

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Password generator listening on ${port}`);

