const path = require('path');

const buildEslintCommand = (filenames) => {
  const files = filenames
    .map((f) => path.relative(process.cwd(), f))
    .filter((f) => {
        const fileType = path.extname(f);
        return f.startsWith('src/') && ['.js', '.jsx', '.ts', '.tsx', '.json', '.cjs', '.mjs' ].includes(fileType);
    });
  if (!files.length) {
    return 'echo "No src files found to lint"';
  }
  return `next lint --max-warnings=0 --file ${files.join(' --file ')}`;
};

const buildPrettierCommand = (filenames) => {
  const files = filenames
    .map((f) => path.relative(process.cwd(), f))
    .filter((f) => f.startsWith('src/'));
  if (!files.length) {
    return 'echo "No src files found to format"';
  }
  return `prettier --write --ignore-unknown ${files.join(' ')}`;
};

module.exports = {
  '**/*': [buildPrettierCommand, buildEslintCommand],
};
