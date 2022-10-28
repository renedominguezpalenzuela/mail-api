module.exports = {
  customAction: async (ctx) => {

    const postParams = JSON.parse(ctx.request.body);
    const vto = postParams.to;
    const vfrom = postParams.from;
    const vsubject = postParams.subject;
    // const vtext = postParams.body;
    const vhtml = postParams.html;
    // `<h1>Welcome!</h1><p>This is a test HTML email.</p>`,

    
    try {
      const mensaje = {
        to: vto,
        from: vfrom, 
        replyTo: vfrom,
        subject: vsubject,
        // text: vtext,
        html: vhtml
      };

      await strapi.plugins["email"].services.email.send(mensaje);
      strapi.log.debug(`Email sent to ${vto}`);
      ctx.send({ message: "Email sent" });
    } catch (err) {
      strapi.log.error(`Error sending email to ${to}`, err);
      ctx.send({ error: "Error sending email" });
    }
        
  },
};
