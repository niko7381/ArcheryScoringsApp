const fs = require('fs');
const path = require('path');

describe('README Quality Control', () => {
  test('README skal indeholde obligatorisk hilsen', () => {
    const readmePath = path.join(__dirname, 'README.md');
    const readmeContent = fs.readFileSync(readmePath, 'utf-8');
    
    expect(readmeContent.toLowerCase()).toContain('hej');
  });
});