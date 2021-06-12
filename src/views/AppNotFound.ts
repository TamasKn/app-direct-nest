export const AppNotFound = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="">
  <title>AppDirect</title>
  <style>
      body {
          margin: 0;
      }

      div {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: rgb(2,0,36);
          background: linear-gradient(
                  180deg,
                  rgba(2,0,36,1) 0%,
                  rgba(9,9,121,0.7301121132046569) 35%,
                  rgba(0,212,255,1) 100%
          );
      }

      p {
          color: white;
          font-size: 2.5em;
      }
  </style>

</head>
<body>
<div>
  <p>Oops, it looks like this app is not found.</p>
</div>
</body>
</html>
`;
