const fs = require('fs');
const path = require('path');

const isDir = (filePath) => {
  const stat = fs.lstatSync(filePath);
  return stat.isDirectory();
};

const buildLongestPath = (root) => {
  console.log('Testing', root);
  if (!fs.existsSync(root)) {
    return '';
  }

  if (!isDir(root)) {
    return root;
  }

  const files = fs.readdirSync(root);
  let longestPath = root;
  for (const file of files) {
    const localLongestPath = buildLongestPath(path.join(root, file));
    if (localLongestPath.length > longestPath.length) {
      longestPath = localLongestPath;
    }
  }
  return longestPath;
};

console.log(buildLongestPath('F:/'));