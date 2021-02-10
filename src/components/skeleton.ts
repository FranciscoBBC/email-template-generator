import mjml2html from 'mjml';

const htmlOutput = mjml2html(
  `
  <mjml version="3.3.3">
    <mj-body background-color="#F4F4F4" color="#55575d" font-family="Arial, sans-serif">
      <mj-section background-color="#C1272D" background-repeat="repeat" padding="20px 0" text-align="center" vertical-align="top">
        {{header}}
      </mj-section>
      <mj-section background-color="#ffffff" background-repeat="repeat" padding="20px 0" text-align="center" vertical-align="top">
        {{main}}
      </mj-section>
      <mj-section background-color="#C1272D" background-repeat="repeat" padding="20px 0" text-align="center" vertical-align="top">
        {{footer}}
      </mj-section>
      <mj-section background-repeat="repeat" background-size="auto" padding="20px 0px 20px 0px" text-align="center" vertical-align="top">
        {{obs}}
      </mj-section>
    </mj-body>
  </mjml>
`,
  {}
);

export default htmlOutput;
