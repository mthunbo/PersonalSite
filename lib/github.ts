export async function getGitHubRepos(username: string) {
    const res = await fetch(`https://api.github.com/users/${username}/repos`);
    const data = await res.json();
  
    const reposWithLogo = await Promise.all(
      data.map(async (repo: any) => {
        let logo = "/defaultLogo.png";
  
        try {
          const logoRes = await fetch(`https://raw.githubusercontent.com/${username}/${repo.name}/main/logo.png`);
          if (logoRes.ok) {
            logo = `https://raw.githubusercontent.com/${username}/${repo.name}/main/logo.png`;
          }
        } catch (err) {

        }
  
        return {
          ...repo,
          logo,
        };
      })
    );
  
    return reposWithLogo;
  }
  