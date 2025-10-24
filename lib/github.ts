export async function getGitHubRepos(username: string) {
  try {
    const res = await fetch(`https://api.github.com/users/${username}/repos`)
    const data = await res.json()

    if (!Array.isArray(data)) {
      console.error("GitHub API did not return an array. Response:", data)
      return []
    }
    
    if (data.length === 0) {
      return []
    }

    const reposWithLogo = await Promise.all(
      data.map(async (repo: any) => {
        let logo = "/404NotFound.png"
        
        try {
          const logoRes = await fetch(`https://raw.githubusercontent.com/${username}/${repo.name}/main/logo.png`)
          if (logoRes.ok) {
            logo = `https://raw.githubusercontent.com/${username}/${repo.name}/main/logo.png`
          }
        } catch (err) {
        }
        
        return {
          ...repo,
          logo,
        }
      })
    )
    
    return reposWithLogo

  } catch (error) {
    console.error("Failed to fetch GitHub repos:", error)
    return []
  }
}