// The function to generate Html for Team

// foor-loop over data.length
// style with bootstrap
// mail.to
// concate cards from variables created
function generateHtml(data) {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>My Team</title>
    </head>
    <body>
      <h1>My Team</h1>
      <main>
          ${generateTeam(data)}
      </main>
    </body>
  </html>
  `;
}
function generateTeam(data) {}

module.exports = generateHtml;
