import mailer from "nodemailer";

export const sendEmailSubscription = async (email, nome) => {
  console.log("email ->>>", email);
  const smtp = mailer.createTransport({
    host: "smtp.titan.email",
    port: 465,
    secure: true, //SSL/TLS
    auth: {
      user: "ti@b9sistemas.com.br",
      pass: "k909s41*",
    },
  });

  const mail = {
    from: "ti@b9sistemas.com.br",
    to: email,
    subject: `Mensagem do Hackathon`,
    html: `<body style="margin:0px; padding:0px;" bgcolor="#ffffff">
    <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#ffffff">
      <!-- === BODY SECTION=== --> 
      <tr>
        <td align="center" valign="top"  bgcolor="#ffffff">
          <table width="600" cellpadding="0" cellspacing="0" border="0" align="center" class="em_main_table" style="table-layout:fixed;">
            <!-- === LOGO SECTION === -->
            <tr>
              <td height="40" class="em_height">&nbsp;</td>
            </tr>
          
            <tr>
              <td height="30" class="em_height">&nbsp;</td>
            </tr>
            <!-- === //LOGO SECTION === -->
            
            <!-- === IMG WITH TEXT AND COUPEN CODE SECTION === -->
            <tr>
              <td valign="top" class="em_aside">
                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                    <td height="36" class="em_height">&nbsp;</td>
                  </tr>
                  <tr>
                    <td valign="middle" align="center"><img src="https://www.sendwithus.com/assets/img/emailmonks/images/banner.jpg" width="333" height="303" alt="WELCOME" style="display:block; font-family:Arial, sans-serif; font-size:25px; line-height:303px; color:#c27cbb;max-width:333px;" class="em_full_img" border="0" /></td>
                  </tr>
                  <tr>
                    <td height="41" class="em_height">&nbsp;</td>
                  </tr>
                  <tr>
                    <td height="1" bgcolor="#d8e4f0" style="font-size:0px;line-height:0px;"><img src="https://www.sendwithus.com/assets/img/emailmonks/images/spacer.gif" width="1" height="1" alt="" style="display:block;" border="0" /></td>
                  </tr>
                  <tr>
                    <td height="35" class="em_height">&nbsp;</td>
                  </tr>
                  <tr>
                    <td align="center" style="font-family:'Open Sans', Arial, sans-serif; font-size:15px; font-weight:bold; line-height:18px; color:#30373b;">Sua inscrição está quase confirmada</td>
                  </tr>
                  <tr>
                    <td height="22" style="font-size:1px; line-height:1px;">&nbsp;</td>
                  </tr>
                  <tr>
                    <td align="center" style="font-family:'Open Sans', Arial, sans-serif; font-size:15px; line-height:22px; color:#999999;">
                      Para confirmar sua inscrição, será necessário efetuar o pagamento da taxa de inscrição de R$ 15,00. Esse valor é para ajudar
                      nos custos de realização do evento. Não se preocupe você irá receber um email com as informações para pagamentos.
                    </td>
                  </tr>
                  <tr>
                    <td height="31" class="em_height">&nbsp;</td>
                  </tr>
                </table>
              </td>
            </tr>
            <!-- === //IMG WITH TEXT AND COUPEN CODE SECTION === -->
          </table>
        </td>
      </tr>
      <!-- === //BODY SECTION=== -->
      <!-- === FOOTER SECTION === -->
      <tr>
        <td align="center" valign="top"  bgcolor="#30373b" class="em_aside">
          <table width="600" cellpadding="0" cellspacing="0" border="0" align="center" class="em_main_table" style="table-layout:fixed;">
          </table>
        </td>
      </tr>
      <!-- === //FOOTER SECTION === -->
    </table>
    <div style="display:none; white-space:nowrap; font:20px courier; color:#ffffff; background-color:#ffffff;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div>
  </body>`,
  };

  return new Promise((resolve, reject) => {
    smtp
      .sendMail(mail)
      .then((response) => {
        smtp.close();
        return resolve(response);
      })
      .catch((error) => {
        smtp.close();
        console.log(error);
        return reject(error);
      });
  });
};
