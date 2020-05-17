module.exports = (() => {

    const get = (system, req) => {
        return `
		<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="x-apple-disable-message-reformatting">
    <meta name="format-detection" content="telephone=no,address=no,email=no,date=no,url=no">
    <title>  Monitor de Sistemas - Falha!!!!</title>
    <style>
        /* What it does: Remove spaces around the email design added by some email clients. */
        /* Beware: It can remove the padding / margin and add a background color to the compose a reply window. */

        html,
        body {

          background: #0072ae !important;
            margin: 0 !important;
            padding: 0 !important;
            height: 100% !important;
            width: 100% !important;
        }
        /* What it does: Stops email clients resizing small text. */

        * {
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
        }
        /* What it does: Centers email on Android 4.4 */

        div[style*="margin: 16px 0"] {
            margin: 0 !important;
        }
        /* What it does: Stops Outlook from adding extra spacing to tables. */

        table,
        td {
            mso-table-lspace: 0pt !important;
            mso-table-rspace: 0pt !important;
        }
        /* What it does: Fixes webkit padding issue. */

        table {
            border-spacing: 0 !important;
            border-collapse: collapse !important;
            table-layout: fixed !important;
            margin: 0 auto !important;
        }
        /* What it does: Uses a better rendering method when resizing images in IE. */

        img {
            -ms-interpolation-mode: bicubic;
        }
        /* What it does: Prevents Windows 10 Mail from underlining links despite inline CSS. Styles for underlined links should be inline. */

        a {
            text-decoration: none;
        }
        /* What it does: A work-around for email clients meddling in triggered links. */

        a[x-apple-data-detectors],
        /* iOS */

        .unstyle-auto-detected-links a,
        .aBn {
            border-bottom: 0 !important;
            cursor: default !important;
            color: inherit !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
        }
        /* What it does: Prevents Gmail from displaying a download button on large, non-linked images. */

        .a6S {
            display: none !important;
            opacity: 0.01 !important;
        }
        /* What it does: Prevents Gmail from changing the text color in conversation threads. */

        .im {
            color: inherit !important;
        }
        /* If the above doesn't work, add a .g-img class to any image in question. */

        img.g-img + div {
            display: none !important;
        }
        /* What it does: Removes right gutter in Gmail iOS app: https://github.com/TedGoas/Cerberus/issues/89  */
        /* Create one of these media queries for each additional viewport size you'd like to fix */
        /* iPhone 4, 4S, 5, 5S, 5C, and 5SE */

        @media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
            u ~ div .email-container {
                min-width: 320px !important;
            }
        }
        /* iPhone 6, 6S, 7, 8, and X */

        @media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
            u ~ div .email-container {
                min-width: 375px !important;
            }
        }
        /* iPhone 6+, 7+, and 8+ */

        @media only screen and (min-device-width: 414px) {
            u ~ div .email-container {
                min-width: 414px !important;
            }
        }
    </style>
    <style>
        /* What it does: Hover styles for buttons */

        .button-td,
        .button-a {
            transition: all 100ms ease-in;
        }

        .button-td-primary:hover,
        .button-a-primary:hover {
            background: #76a3c9 !important;
            border-color: #76a3c9 !important;
        }
        /* Media Queries */

        @media screen and (max-width: 600px) {
            /* What it does: Adjust typography on small screens to improve readability */
            .email-container p {
                font-size: 17px !important;
            }
        }
    </style>
</head>

<body width="100%" style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly;
          background: #0072ae !important;">
    <center style="width: 100%;
          background: #0072ae !important; padding-top:40px">
        <div style="display: none; font-size: 1px; line-height: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; mso-hide: all; font-family: sans-serif;"></div>
        <div style="display: none; font-size: 1px; line-height: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; mso-hide: all; font-family: sans-serif;">
            &zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
        </div>
        <div style="max-width: 600px; margin: 0 auto;" class="email-container">
            <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: auto;">
                <tbody>
                    <tr>
                        <td style="background-color: #e9f2f8;">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                <tbody>
                                    <tr style="    color: #0172ae;    background-color: #e9f2f8;">
                                        <td style="padding:5px  20px;font-family: sans-serif;font-size: 15px;line-height: 20px;color: #0172ae;">
                                            <p>
                                               O sistema <strong>${system.name} </strong> apresentou erro na requisição da url <br> <em><small>${system.request_url}</small></em>.</p>
											<h4>Dados da requisição:</h4>
                                          <pre><code>${JSON.stringify(req)}</code></pre>
                                               <table>
                                                 
                                          </table>
                                        </td>
                                    </tr>
                                    <tr style="    background-color: #e9f2f8;">
                                        <td style="padding: 0;font-family: sans-serif;font-size: 14px;line-height: 20px;color: #0172ae;text-align:center; width: 100px; background:#e9f2f8">
										<img src="https://sistemas.com.br/imagens/logo.png" style="width: 80px"></td>
                                    </tr>
									
                                   
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td aria-hidden="true" height="40" style="font-size: 0px; line-height: 0px;">
                            &nbsp;
                        </td>
                    </tr>
                </tbody>
            </table>
            <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: auto;">
                <tbody>
                    <tr>
                        <td style="padding: 20px; font-family: sans-serif; font-size: 12px; line-height: 15px; text-align: center; color: #888888;">
                            <br>
                            <br><a style="    color: #0075b1;    text-decoration: none;;" href="https://sistemas.com.br/"> Sistemas e Consultoria</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </center>
</body>

</html>
		`;
    };

    return {
        get: get
    };
})();