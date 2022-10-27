module.exports = ({ env }) => ({
    // ...
    email: {
      config: {
        provider: 'sendgrid',
        providerOptions: {
          apiKey: env('SENDGRID_API_KEY'),
        },
        settings: {
          defaultFrom: 'renedsoft@gmail.com',
          defaultReplyTo: 'renedsoft@gmail.com',
          testAddress:'renedp1975@gmail.com' 
        },
      },
    },
    // ...
  });
