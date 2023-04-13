module.exports = class CleanAfterEmitPlugin {
    constructor(options) {
      this.options = options;
    }
  
    apply(compiler) {
      compiler.hooks.afterEmit.tapAsync('CleanAfterEmitPlugin', (compilation, callback) => {
        const fs = require('fs');
        const path = require('path');
        const fileToDelete = path.join(compiler.options.output.path, this.options.file);
  
        fs.unlink(fileToDelete, (err) => {
          if (err) {
            console.error(`Error deleting file: ${fileToDelete}`);
          } else {
            console.log(`Deleted file: ${fileToDelete}`);
          }
          callback();
        });
      });
    }
  }