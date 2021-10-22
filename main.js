const linksSocialMedia = {
  github: 'Lucas-Severo96',
  youtube: 'c/RocketSeat',
  facebook: 'lucas.severo.77',
  instagram: 'lucas.lls/',
  twitter: 'LUCASSEVERO1996'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userGitHub.textContent = data.login
    })
}

getGitHubProfileInfos()
