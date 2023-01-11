module.exports = ({ env }) => ({
    // ...
    email: {
      config: {
        provider: 'sendgrid',
        providerOptions: {
          apiKey: env('SENDGRID_API_KEY'),
        },
        settings: {
          defaultFrom: 'apply@jesamconsulting.com',
          defaultReplyTo: 'apply@jesamconsulting.com',
          testAddress:'renedp1975@gmail.com' 
        },
      },
    },
    // ...
  });
