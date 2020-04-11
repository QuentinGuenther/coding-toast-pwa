const ghpages = require('gh-pages')

ghpages.publish(
  'public',
  {
    branch: 'gh-pages',
    repo: 'https://' + process.env.GIT_AUTH_TOKEN + '@github.com/QuentinGuenther/coding-toast-pwa.git',
    user: {
      name: 'Quentin Guenther',
      email: 'qguenther@outlook.com'
    }
  },
  error => {
    if (error) {
      console.log('Deployment Failed: \n' + error)
      throw error
    } else {
      console.log('Deployment Success!')
    }
  }
)
