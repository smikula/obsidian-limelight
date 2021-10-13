const fse = require('fs-extra');
const { deployDir } = require('../deployConfig.json');
fse.removeSync(deployDir);
