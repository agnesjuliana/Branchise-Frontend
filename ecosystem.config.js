
module.exports = {
    apps: [{
      script: 'index.js',
      watch: '.'
    }, {
      script: './service-worker/',
      watch: ['./service-worker']
    }],
  
    deploy: {
      production: {
        user: 'root',
        host: '139.180.138.129',
        ref: 'origin/main',
        repo: 'git@github.com:agnesjuliana/Branchise-Frontend.git',
        path: '/application/Branchise-Frontend/',
        'pre-deploy-local': '',
        'post-deploy': 'npm install && npm run build && pm2 reload static-page-server-8200',
        'pre-setup': ''
      }
    }
  };