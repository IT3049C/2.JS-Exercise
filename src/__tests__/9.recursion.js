const recursionAnswers = require(`../9.recursion`);

describe(`9. recursion`, function () {
  const fileData = {
    dir: `app`,
    files: [
      `index.html`,
      {
        dir: `js`,
        files: [
          `main.js`,
          `app.js`,
          `misc.js`,
          {
            dir: `vendor`,
            files: [ `jquery.js`, `underscore.js` ]
          }
        ]
      },
      {
        dir: `css`,
        files: [ `reset.css`, `main.css` ]
      }
    ]
  };

  it(`you should be able to return a list of files from the data`, function () {
    const result = recursionAnswers.listFiles(fileData);
    expect(result.length).toEqual(8);
    expect(result.indexOf(`index.html`) > -1).to.be.ok;
    expect(result.indexOf(`main.js`) > -1).to.be.ok;
    expect(result.indexOf(`underscore.js`) > -1).to.be.ok;
  });
});
